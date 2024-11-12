import Styled from './Profile.style';
import AvatarIcon from '@/assets/images/avatar.svg';

const Profile = ({ name = '알 수 없음' }) => (  
  <Styled.ProfileWrapper>
    <Styled.UserAvatar>
      <img src={AvatarIcon} alt="avatar" />
    </Styled.UserAvatar>
    <Styled.UserInfoWrapper>
      <Styled.NameWrapper>
        <Styled.UserName>{name}</Styled.UserName>
      </Styled.NameWrapper>
    </Styled.UserInfoWrapper>
  </Styled.ProfileWrapper>
);

export default Profile; 

