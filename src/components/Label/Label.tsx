import {
    LabelWrapper,
    LabelText
} from './Label.style.ts';

interface LabelProps {
    labelText: string;
    size?: 'small' | 'medium' | 'large';
}

export const Label = ({ labelText, size = 'medium' }: LabelProps) => {
    return (
        <LabelWrapper size={size}>
            <LabelText>{labelText}</LabelText>
        </LabelWrapper>
    );
}