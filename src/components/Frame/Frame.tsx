import { ReactNode } from 'react';
import { FrameContainer, GlobalStyles} from './Frame.style';

interface FrameProps {
    children: ReactNode;
}

const Frame = ({ children }: FrameProps) => {

    return (
        <>
            <GlobalStyles/>
            <FrameContainer>{children}</FrameContainer>
        </>
    );
};

export default Frame;
