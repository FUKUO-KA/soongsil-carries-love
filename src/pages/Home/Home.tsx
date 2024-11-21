import { Header } from '@/components/Header/Header';
import { Profile } from '@/components/Profile/Profile';
import { Navigation } from '@/components/Navigation/Navigation';
import { DashBoard } from '@/components/DashBoard/DashBoard';
import { LogoComponent } from '@/components/Logo/Logo';
import { Spacing } from '@/components/Spacing/Spacing';
import { useNavigationStore } from '@/stores';

export const Home = () => {
    const { selectedNavItem } = useNavigationStore();
    return (
        <>
            <Header 
                right={<Profile name="OO 고등학교" />}
                left = {<Navigation/>} />
            {selectedNavItem === 'home' && (
                <>
                    <Spacing size={28} direction='vertical'/>
                    <LogoComponent/>
                    <Spacing size={28} direction='vertical'/>
                    <DashBoard/>
                </>
            )}
            {selectedNavItem === 'graph' && (
                <></>
            )}
            {selectedNavItem === 'message' && (
                <></>
            )}
        </>
    )

}