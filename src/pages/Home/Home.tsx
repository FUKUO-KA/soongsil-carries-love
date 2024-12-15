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
import { Button } from '@/components/Button/Button';
import { homeSectionProps } from '@/types/homeSection.type';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

const HomeSection = ({ rankedSchoolData, isUser }: homeSectionProps) => {
  const navigate = useNavigate();
  const handleGoSign = () => {
    navigate('/sign');
  };

  return (
    <>
      <Spacing size={28} direction="vertical" />
      <LogoComponent />
      <Spacing size={28} direction="vertical" />
      {!isUser && (
        <>
          <Button size="MEDIUM" text="로그인" onClick={handleGoSign} />
          <Spacing size={28} direction="vertical" />
        </>
      )}
      <DashBoard schoolData={rankedSchoolData} />
    </>
  );
};

const GraphSection = () => {
  const userStorage = sessionStorage.getItem('user');
  const highSchoolCode = userStorage ? JSON.parse(userStorage).highSchoolCode : '7010059';

  const { data: genderRatioData, isLoading: isLoadingGender } = useQuery({
    queryKey: ['genderRatio'],
    queryFn: () => genderRatio(highSchoolCode),
  });

  const { data: userCountData, isLoading: isLoadingUser } = useQuery({
    queryKey: ['userCount'],
    queryFn: () => userCount(highSchoolCode),
  });

  const { data: studentCountData, isLoading: isLoadingStudent } = useQuery({
    queryKey: ['studentCount'],
    queryFn: () => studentCount(highSchoolCode),
  });

  const isLoading = isLoadingGender || isLoadingUser || isLoadingStudent;

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
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
      <FieChart genderRatio={genderRatioData} userCount={userCountData} />
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
  home: (props: homeSectionProps) => (
    <HomeSection isUser={props.isUser} rankedSchoolData={props.rankedSchoolData} />
  ),
  graph: GraphSection,
  message: MessageSection,
};

export const Home = () => {
  const { selectedNavItem, setSelectedNavItem } = useNavigationStore();
  const { rankedSchoolData, isLoading } = useRankedSchoolData();
  const Section = NAV_SECTIONS[selectedNavItem];

  const [userStorage, setUserStorage] = useState(() => sessionStorage.getItem('user'));
  const highSchoolName = userStorage ? JSON.parse(userStorage).highSchoolName : '00 고등학교';
  const userName = userStorage ? JSON.parse(userStorage).nickname : '';

  const isUser = Boolean(userStorage);

  useEffect(() => {
    if (!userStorage) {
      setSelectedNavItem('home');
    }
  }, [userStorage, setSelectedNavItem]);

  useEffect(() => {
    const handleStorageChange = () => {
      setUserStorage(sessionStorage.getItem('user'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (isLoading) {
    return (
      <HomeWrapper>
        <Header
          right={
            <Profile name={highSchoolName} userName={userName} setUserStorage={setUserStorage} />
          }
          left={<Navigation />}
        />
        <div>로딩 중...</div>
      </HomeWrapper>
    );
  }

  return (
    <HomeWrapper>
      {userStorage && (
        <Header
          right={
            <Profile name={highSchoolName} userName={userName} setUserStorage={setUserStorage} />
          }
          left={<Navigation />}
        />
      )}
      {Section && (
        <Section
          isUser={isUser}
          rankedSchoolData={rankedSchoolData}
          setUserStorage={setUserStorage}
        />
      )}
    </HomeWrapper>
  );
};
