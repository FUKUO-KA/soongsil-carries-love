export type TypoType =
  | 'Header1'
  | 'Header2'
  | 'Header3'
  | 'Header4'
  | 'Header5'
  | 'Body1'
  | 'Body2'
  | 'Caption1'
  | 'Caption2'
  | 'Caption3'
  | 'Caption1_B'
  | 'Caption2_B'
  | 'Caption3_B';

interface Font {
  fontSize: string;
  fontWeight: number;
}

export type Typo = Record<TypoType, Font>;

const typo: Typo = {
  Header1: { fontSize: '32px', fontWeight: 700 },
  Header2: { fontSize: '28px', fontWeight: 700 },
  Header3: { fontSize: '24px', fontWeight: 700 },
  Header4: { fontSize: '20px', fontWeight: 700 },
  Header5: { fontSize: '16px', fontWeight: 700 },
  Body1: { fontSize: '20px', fontWeight: 400 },
  Body2: { fontSize: '16px', fontWeight: 400 },
  Caption1: { fontSize: '16px', fontWeight: 400 },
  Caption2: { fontSize: '12px', fontWeight: 400 },
  Caption3: { fontSize: '8px', fontWeight: 400 },
  Caption1_B: { fontSize: '16px', fontWeight: 700 },
  Caption2_B: { fontSize: '12px', fontWeight: 700 },
  Caption3_B: { fontSize: '8px', fontWeight: 700 },
};

export const getFontStyle = (type: TypoType) => {
  const { fontSize, fontWeight } = typo[type];
  return `
    font-size: ${fontSize};
    font-weight: ${fontWeight};
  `;
};

export default typo;
