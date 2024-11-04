export type ColorKeys =
  | 'white'
  | 'text'
  | 'secondary_text'
  | 'line'
  | 'logo_color_2'
  | 'background'
  | 'box_border'
  | 'sub_1'
  | 'sub_2';

export type Colors = Record<ColorKeys, string>;

const colors: Colors = {
  white: '#FFFFFF',
  text: '#1F1F1F',
  secondary_text: '#767676',
  line: '#EFF2F5',
  logo_color_2:
    'linear-gradient(to bottom, rgba(255, 255, 255, 1) 1%, rgba(255, 200, 100, 1) 15%, rgba(255, 200, 100, 1) 45%, rgba(255, 220, 110, 1) 90%)',
  background: 'linear-gradient(to bottom, #93E9FF 0%, #FFEAA7 100%)',
  box_border: '#CFD6E4',
  sub_1: '#FF6868',
  sub_2: '#688BFF',
};

export default colors;
