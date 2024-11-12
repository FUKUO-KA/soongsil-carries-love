import Styled from './Profile.style';

interface ProfileProps {
  name: string;
}

const Profile = ({ name }: ProfileProps) => {
  return (
    <Styled.ProfileContainer>
      <Styled.ProfileImageContainer />
      <Styled.ProfileNameWrapper>
        <Styled.ProfileNameContainer>{name}</Styled.ProfileNameContainer>
      </Styled.ProfileNameWrapper>
    </Styled.ProfileContainer>
  );
};

export default Profile;
