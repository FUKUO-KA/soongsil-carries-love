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
import { useQuery } from '@tanstack/react-query';
import { highSchoolRanking } from '@/api/endpoints/highschool/highschool-ranking';
import { useEffect } from 'react';
import { SchoolData } from '@/api/types/response';
import { RankedSchoolData } from '@/types';



const addRankToSchoolData = (data: SchoolData[] | undefined): RankedSchoolData[] => {
  if (!data) return [];
  return data
    .sort((a, b) => b.userCount - a.userCount)
    .map((school, index) => ({
      ...school,
      rank: index + 1
    }));
};

const HomeSection = ({rankedSchoolData}: {rankedSchoolData: RankedSchoolData[]}) => {
  return (
    <>
      <Spacing size={28} direction="vertical" />
      <LogoComponent />
      <Spacing size={28} direction="vertical" />
      <DashBoard schoolData={rankedSchoolData}/>
    </>
  );
};

const GraphSection = () => {
  return (
    <>
      <Spacing size={28} direction="vertical" />
      <FieChart />
      <Spacing size={28} direction="vertical" />
      <BarChart />
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
  home: (props: {rankedSchoolData: RankedSchoolData[]}) => <HomeSection rankedSchoolData={props.rankedSchoolData}/>,
  graph: GraphSection,
  message: MessageSection,
};

export const Home = () => {
  const { selectedNavItem } = useNavigationStore();
  const Section = NAV_SECTIONS[selectedNavItem];
  
  const { data: highSchoolRankingData, isLoading } = useQuery({
    queryKey: ['highSchoolRanking'],
    queryFn: highSchoolRanking,
    staleTime: 1000 * 60,
  });

  const rankedSchoolData = highSchoolRankingData ? addRankToSchoolData(highSchoolRankingData) : [];
  
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
      <Header right={<Profile name="OO 고등학교" />} left={<Navigation />} />
      {Section && <Section rankedSchoolData={rankedSchoolData}/>}
    </HomeWrapper>
  );
};
