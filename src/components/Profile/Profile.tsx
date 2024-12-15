import { useState } from 'react';
import {
  ProfileWrapper,
  UserAvatar,
  UserInfoWrapper,
  NameWrapper,
  UserName,
} from './Profile.style';
import AvatarIcon from '@/assets/icons/avatar.svg';
import { Modal } from '@/components/Modal/Modal';
import { StyledModalContent, StyledModalTitle } from '@/components/Modal/Modal.style';
import { Spacing } from '@/components/Spacing/Spacing';
import { Button } from '@/components/Button/Button';
import { useNavigate } from 'react-router-dom';

export type ProfileProps = {
  name?: string;
  userName?: string;
  setUserStorage: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Profile: React.FC<ProfileProps> = ({
  name = '알 수 없음',
  userName = '',
  setUserStorage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUserStorage(null);
    navigate('/');
    handleCloseModal();
  };

  return (
    <>
      <ProfileWrapper onClick={handleOpenModal}>
        <UserAvatar>
          <img src={AvatarIcon} alt="avatar" />
        </UserAvatar>
        <UserInfoWrapper>
          <NameWrapper>
            <UserName>{name}</UserName>
          </NameWrapper>
        </UserInfoWrapper>
      </ProfileWrapper>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <StyledModalTitle>내 정보</StyledModalTitle>
        <Spacing size={16} direction="vertical" />
        <StyledModalContent>{userName}</StyledModalContent>
        <Spacing size={8} direction="vertical" />
        <StyledModalContent>{name}</StyledModalContent>
        <Spacing size={20} direction="vertical" />
        <Button size="BIG" text="로그아웃" onClick={handleLogout} />
        <Spacing size={10} direction="vertical" />
        <Button size="BIG" text="닫기" onClick={handleCloseModal} />
        <Spacing size={8} direction="vertical" />
      </Modal>
    </>
  );
};
