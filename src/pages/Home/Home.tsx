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

const HomeSection = () => {
    return (
        <>
            <Spacing size={28} direction='vertical'/>
            <LogoComponent/>
            <Spacing size={28} direction='vertical'/>
            <DashBoard/>
        </>
    )
}

const GraphSection = () => {
    return (
        <>
            <Spacing size={28} direction='vertical'/>
            <FieChart/>
            <Spacing size={28} direction='vertical'/>
            <BarChart/>
        </>
    );
}

const MessageSection = () => {
    return (
        <>
            <Spacing size={28} direction='vertical'/>
            <h1>메시지</h1>
        </>
    )
}

const NAV_SECTIONS: Record<string, () => JSX.Element> = {
    home: HomeSection,
    graph: GraphSection,
    message: MessageSection,
  };

export const Home = () => {
    const { selectedNavItem } = useNavigationStore();
    const Section = NAV_SECTIONS[selectedNavItem];
    return (
        <HomeWrapper>
            <Header 
                right={<Profile name="OO 고등학교" />}
                left = {<Navigation/>} />
            {Section && <Section/>}
        </HomeWrapper>
    )
}