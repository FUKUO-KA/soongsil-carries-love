export type ColorKeys =
  | 'white'
  | 'text'
  | 'secondary_text'
  | 'line'
  | 'logo_color_2'
  | 'background'
  | 'box_border'
  | 'sub_1'
  | 'sub_2'
  | 'profile_background'
  | 'profile_text_background'
  | 'profile_text'
  | 'orange'
  | 'brown';

export type Colors = Record<ColorKeys, string>;

const colors: Colors = {
  white: '#FFFFFF',
  text: '#1F1F1F',
  secondary_text: '#767676',
  line: '#EFF2F5',
  logo_color_2:
    'linear-gradient(0deg, rgba(255, 255, 255, 0.18) 77.63%, rgba(255, 255, 255, 0.60) 100%), linear-gradient(0deg, #FCD62C 0%, #FF9244 100%)',
  background: 'linear-gradient(to bottom, #93E9FF 0%, #FFEAA7 100%)',
  box_border: '#CFD6E4',
  sub_1: '#FF6868',
  sub_2: '#688BFF',
  profile_background: '#FCF3CC',
  profile_text_background: '#F7CC65',
  profile_text: '#877C5C',
  orange: '#FEA155',
  brown: '#A9916B',
};

export default colors;
