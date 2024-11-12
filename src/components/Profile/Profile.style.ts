import styled from 'styled-components';

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ProfileImageContainer = styled.div`
    position: relative;
    left: 2rem;
    /* TODO: 컬러 CONSTANT 작업 필요 */
    background-color: #FCF3CC;

    width: 45px;
    height: 45px;
    border-radius: 50%;
`;

const ProfileNameWrapper = styled.div`
    /* TODO: 컬러 CONSTANT 작업 필요 */
    background-color: #FCF3CC;

    padding: 0.3rem 0.7rem 0.3rem 3rem;
    border-radius: 20px;

`

const ProfileNameContainer = styled.div`
    /* TODO: 컬러 CONSTANT 작업 필요 */
    background-color: #F7CC65;

    font-size: 12px;

    padding: 0.2rem 1rem;
    border-radius: 20px;
    font-size: 1rem;
`;

export default {
    ProfileContainer,
    ProfileImageContainer,
    ProfileNameWrapper,
    ProfileNameContainer,
};
