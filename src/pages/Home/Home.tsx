import { Header } from '@/components/Header/Header';
import { Profile } from '@/components/Profile/Profile';
import { Navigation } from '@/components/Navigation/Navigation';
import { DashBoard } from '@/components/DashBoard/DashBoard';
import { LogoComponent } from '@/components/Logo/Logo';
import { Spacing } from '@/components/Spacing/Spacing';

export const Home = () => {
    return (
        <>
            <Header 
                right={<Profile name="OO 고등학교" />}
                left = {<Navigation/>} />
            <Spacing size={28} direction='vertical'/>
            <LogoComponent/>
            <Spacing size={28} direction='vertical'/>
            <DashBoard/>
        </>
    )
}