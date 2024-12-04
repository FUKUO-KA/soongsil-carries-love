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

const HomeSection = () => {
  return (
    <>
      <Spacing size={28} direction="vertical" />
      <LogoComponent />
      <Spacing size={28} direction="vertical" />
      <DashBoard />
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
  home: HomeSection,
  graph: GraphSection,
  message: MessageSection,
};

export const Home = () => {
  const { selectedNavItem } = useNavigationStore();
  const Section = NAV_SECTIONS[selectedNavItem];

  return (
    <HomeWrapper>
      <Header right={<Profile name="OO 고등학교" />} left={<Navigation />} />
      {Section && <Section/>}
    </HomeWrapper>
  );
};
