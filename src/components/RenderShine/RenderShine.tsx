import { SHINE_CONFIGS } from '@/constants/shine.constant';
import { StyledShine, StyledShineContainer } from './RenderShine.style';
import Shine from '@/assets/shine.svg';

export const RenderShines = () => (
  <StyledShineContainer>
    {SHINE_CONFIGS.map((config, index) => (
      <StyledShine
        key={index}
        src={Shine}
        $width={config.width}
        $top={config.top}
        $right={config.right}
      />
    ))}
  </StyledShineContainer>
);
