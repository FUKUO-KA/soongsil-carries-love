import Header from '@/components/Header';
import Profile from '@/components/Profile';
const Landing = () => {
  return (
    <div>
      <Header right={<Profile name="OO 고등학교" />} />
    </div>
  );
};

export default Landing;
