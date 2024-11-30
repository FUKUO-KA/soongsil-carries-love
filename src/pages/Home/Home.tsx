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
import { useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { userCount } from '@/api/endpoints/hightschool/user-count';
import { studentCount } from '@/api/endpoints/hightschool/student-count';
import { UserCountResponse } from '@/api/types/response';
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

const GraphSection = ({ userCount }: { userCount: UserCountResponse }) => {
  return (
    <>
      <Spacing size={28} direction="vertical" />
      <FieChart userCount={userCount} />
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
  home: HomeSection,
  graph: (props: { userCount: UserCountResponse }) => <GraphSection userCount={props.userCount} />,
  message: MessageSection,
};

export const Home = () => {
  const { selectedNavItem } = useNavigationStore();
  const Section = NAV_SECTIONS[selectedNavItem];

  const { data: genderRatioData, mutate: genderRatioMutate } = useMutation({
    mutationFn: genderRatio,
  });

  const { data: userCountData, mutate: userCountMutate } = useMutation({
    mutationFn: userCount,
  });

  const { data: studentCountData } = useQuery({
    queryKey: ['studentCount'],
    queryFn: () => studentCount("7010059"),
  });

  useEffect(() => {
    userCountMutate("7010059");
    genderRatioMutate("7010059");
    console.log(userCountData);
  }, []);
  return (
    <HomeWrapper>
      <Header right={<Profile name="OO 고등학교" />} left={<Navigation />} />
      {Section && <Section userCount={userCountData} />}
    </HomeWrapper>
  );
};
