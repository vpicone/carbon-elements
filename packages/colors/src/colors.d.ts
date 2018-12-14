interface Color {
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  100: string;
}

export interface PresetColors {
  black: {
    100: string;
  };
  white: {
    0: string;
  };
  yellow: {
    20: string;
  };
  orange: {
    40: string;
  };
}

declare const presetColors: PresetColors;

export interface FullColors {
  red: Color;
  magenta: Color;
  purple: Color;
  blue: Color;
  cyan: Color;
  teal: Color;
  green: Color;
  gray: Color;
  warmGray: Color;
  coolGray: Color;
}

declare const fullColors: FullColors;
