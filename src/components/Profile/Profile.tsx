import {
  ProfileWrapper,
  UserAvatar,
  UserInfoWrapper,
  NameWrapper,
  UserName
} from './Profile.style';
import AvatarIcon from '@/assets/images/avatar.svg';

export const Profile = ({ name = '알 수 없음' }) => (  
  <ProfileWrapper>
    <UserAvatar>
      <img src={AvatarIcon} alt="avatar" />
    </UserAvatar>
    <UserInfoWrapper>
       <NameWrapper>
        <UserName>{name}</UserName>
      </NameWrapper>
    </UserInfoWrapper>
  </ProfileWrapper>
);


