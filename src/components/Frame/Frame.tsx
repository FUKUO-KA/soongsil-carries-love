import { ReactNode } from 'react';
import { FrameContainer, GlobalStyles} from './Frame.style';

interface FrameProps {
    children: ReactNode;
}

const Frame = ({ children }: FrameProps) => {

    return (
        <>
            <GlobalStyles/>
            <FrameContainer>{children}<h1>1</h1></FrameContainer>
        </>
    );
};

export default Frame;
