import { Header } from '@/components/Header/Header';
import { Profile } from '@/components/Profile/Profile';
import { Navigation } from '@/components/Navigation/Navigation';
import { DashBoard } from '@/components/DashBoard/DashBoard';
import { LogoComponent } from '@/components/Logo/Logo';
import { Spacing } from '@/components/Spacing/Spacing';
import { useNavigationStore } from '@/stores';
import { FieChart } from '@/components/FieChart/FieChart';
import { BarChart } from '@/components/BarChart/BarChart';
import { HomeWrapper } from './Home.style';
import { ChatScreen } from '@/components/ChatScreen/ChatScreen';
import { genderRatio } from '@/api/endpoints/hightschool/gender-ratio';
import { useQuery } from '@tanstack/react-query';
import { userCount } from '@/api/endpoints/hightschool/user-count';
import { studentCount } from '@/api/endpoints/hightschool/student-count';
import { highSchoolRanking } from '@/api/endpoints/highschool/highschool-ranking';
import { SchoolData } from '@/api/types/response';
import { RankedSchoolData } from '@/types';

const addRankToSchoolData = (data: SchoolData[] | undefined): RankedSchoolData[] => {
  if (!data) return [];
  return data
    .sort((a, b) => b.userCount - a.userCount)
    .map((school, index) => ({
      ...school,
      rank: index + 1,
    }));
};

export const useRankedSchoolData = () => {
  const { data: highSchoolRankingData, isLoading } = useQuery({
    queryKey: ['highSchoolRanking'],
    queryFn: highSchoolRanking,
    staleTime: 1000 * 60,
  });

  const rankedSchoolData = addRankToSchoolData(highSchoolRankingData);

  return { rankedSchoolData, isLoading };
};

const HomeSection = ({ rankedSchoolData }: { rankedSchoolData: RankedSchoolData[] }) => {
  return (
    <>
      <Spacing size={28} direction="vertical" />
      <LogoComponent />
      <Spacing size={28} direction="vertical" />
      <DashBoard schoolData={rankedSchoolData} />
    </>
  );
};

const GraphSection = () => {
  const { data: genderRatioData, isLoading: isLoadingGender } = useQuery({
    queryKey: ['genderRatio'],
    queryFn: () => genderRatio("7010059")
  });

  const { data: userCountData, isLoading: isLoadingUser } = useQuery({
    queryKey: ['userCount'],
    queryFn: () => userCount("7010059")
  });

  const { data: studentCountData, isLoading: isLoadingStudent } = useQuery({
    queryKey: ['studentCount'],
    queryFn: () => studentCount("7010059")
  });

  const isLoading = isLoadingGender || isLoadingUser || isLoadingStudent;

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100%' 
      }}>
        로딩 중...
      </div>
    );
  }

  if (!genderRatioData || !userCountData || !studentCountData) {
    return <div>데이터를 불러오는데 실패했습니다.</div>;
  }

  return (
    <>
      <Spacing size={28} direction="vertical" />
      <FieChart 
        genderRatio={genderRatioData} 
        userCount={userCountData} 
      />
      <Spacing size={28} direction="vertical" />
      <BarChart studentCount={studentCountData} />
    </>
  );
};

const MessageSection = () => {
  return (
    <>
      <Spacing size={28} direction="vertical" />
      <ChatScreen />
    </>
  );
};

const NAV_SECTIONS: Record<string, (props: any) => JSX.Element> = {
  home: (props: { rankedSchoolData: RankedSchoolData[] }) => (
    <HomeSection rankedSchoolData={props.rankedSchoolData} />
  ),
  graph: GraphSection,
  message: MessageSection,
};

export const Home = () => {
  const { selectedNavItem } = useNavigationStore();
  const { rankedSchoolData, isLoading } = useRankedSchoolData();
  const Section = NAV_SECTIONS[selectedNavItem];

  const userStorage = localStorage.getItem('user');
  const highSchoolName = userStorage ? JSON.parse(userStorage).highSchoolName : '00 고등학교';

  if (isLoading) {
    return (
      <HomeWrapper>
        <Header right={<Profile name="OO 고등학교" />} left={<Navigation />} />
        <div>로딩 중...</div>
      </HomeWrapper>
    );
  }

  return (
    <HomeWrapper>
      <Header right={<Profile name={highSchoolName} />} left={<Navigation />} />
      {Section && <Section rankedSchoolData={rankedSchoolData} />}
    </HomeWrapper>
  );
};
