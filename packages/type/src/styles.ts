/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { breakpoint, breakpoints, px, rem } from '@carbon/layout';
import { fluid } from './fluid';
import { fontFamilies } from './fontFamily';
import { fontWeights } from './fontWeight';
import { scale } from './scale';

export const caption01 = {
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[0]),
  fontWeight: fontWeights.regular,
  lineHeight: rem(16),
  letterSpacing: px(0.32),
};

export const label01 = {
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[0]),
  fontWeight: fontWeights.regular,
  lineHeight: rem(16),
  letterSpacing: px(0.32),
};

export const helperText01 = {
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[0]),
  fontStyle: 'italic',
  lineHeight: rem(16),
  letterSpacing: px(0.32),
};

export const bodyShort01 = {
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[1]),
  fontWeight: fontWeights.regular,
  lineHeight: rem(18),
  letterSpacing: px(0.16),
};

export const bodyLong01 = {
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[1]),
  fontWeight: fontWeights.regular,
  lineHeight: rem(20),
  letterSpacing: px(0.16),
};

export const bodyShort02 = {
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[2]),
  fontWeight: fontWeights.regular,
  lineHeight: rem(22),
  letterSpacing: 0,
};

export const bodyLong02 = {
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[2]),
  fontWeight: fontWeights.regular,
  lineHeight: rem(24),
  letterSpacing: 0,
};

export const code01 = {
  fontFamily: fontFamilies.mono,
  fontSize: rem(scale[0]),
  fontWeight: fontWeights.regular,
  lineHeight: rem(16),
  letterSpacing: px(0.32),
};

export const code02 = {
  fontFamily: fontFamilies.mono,
  fontSize: rem(scale[1]),
  fontWeight: fontWeights.regular,
  lineHeight: rem(20),
  letterSpacing: px(0.32),
};

export const heading01 = {
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[1]),
  fontWeight: fontWeights.semibold,
  lineHeight: rem(18),
  letterSpacing: px(0.16),
};

export const heading02 = {
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[2]),
  fontWeight: fontWeights.semibold,
  lineHeight: rem(22),
  letterSpacing: 0,
};

export const heading03 = {
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[4]),
  fontWeight: fontWeights.regular,
  lineHeight: rem(26),
  letterSpacing: 0,
};

export const productiveHeading04 = {
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[6]),
  fontWeight: fontWeights.regular,
  lineHeight: rem(36),
  letterSpacing: 0,
};

export const productiveHeading05 = {
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[7]),
  fontWeight: fontWeights.regular,
  lineHeight: rem(40),
  letterSpacing: 0,
};

export const expressiveHeading04 = fluid({
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[6]),
  fontWeight: fontWeights.regular,
  lineHeight: '129%',
  letterSpacing: 0,
  breakpoints: {
    xlg: {
      fontSize: rem(scale[6]),
      lineHeight: '125%',
    },
    max: {
      fontSize: rem(scale[7]),
    },
  },
});

export const expressiveHeading05 = fluid({
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[7]),
  fontWeight: fontWeights.regular,
  lineHeight: '125%',
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(scale[8]),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: '122%',
      letterSpacing: 0,
    },
    lg: {
      fontSize: rem(scale[9]),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: '119%',
      letterSpacing: 0,
    },
    xlg: {
      fontSize: rem(scale[10]),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: '117%',
      letterSpacing: 0,
    },
    max: {
      fontSize: rem(scale[12]),
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.light,
      lineHeight: rem(70),
      letterSpacing: 0,
    },
  },
});

export const expressiveParagraph01 = fluid({
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[5]),
  fontWeight: fontWeights.light,
  lineHeight: '125%',
  letterSpacing: 0,
  lg: {
    fontSize: rem(scale[6]),
    lineHeight: '129%',
  },
  max: {
    fontSize: rem(scale[7]),
    lineHeight: '125%',
  },
});

export const quotation01 = fluid({
  fontFamily: fontFamilies.serif,
  fontSize: rem(scale[4]),
  fontWeight: fontWeights.regular,
  lineHeight: '130%',
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(scale[4]),
      fontFamily: fontFamilies.serif,
      fontWeight: fontWeights.regular,
      letterSpacing: 0,
    },
    lg: {
      fontSize: rem(scale[5]),
      fontFamily: fontFamilies.serif,
      fontWeight: fontWeights.regular,
      lineHeight: '125%',
      letterSpacing: 0,
    },
    xlg: {
      fontSize: rem(scale[6]),
      fontFamily: fontFamilies.serif,
      fontWeight: fontWeights.regular,
      lineHeight: '129%',
      letterSpacing: 0,
    },
    max: {
      fontSize: rem(scale[7]),
      fontFamily: fontFamilies.serif,
      fontWeight: fontWeights.regular,
      lineHeight: '125%',
      letterSpacing: 0,
    },
  },
});

export const quotation02 = fluid({
  fontFamily: fontFamilies.serif,
  fontSize: rem(scale[7]),
  fontWeight: fontWeights.light,
  lineHeight: '125%',
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(scale[8]),
      lineHeight: '122%',
    },
    lg: {
      fontSize: rem(scale[9]),
      lineHeight: '119%',
    },
    xlg: {
      fontSize: rem(scale[10]),
      lineHeight: '117%',
    },
    max: {
      fontSize: rem(scale[12]),
    },
  },
});

export const display01 = fluid({
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[9]),
  fontWeight: fontWeights.light,
  lineHeight: '119%',
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(scale[9]),
    },
    lg: {
      fontSize: rem(scale[11]),
    },
    xlg: {
      fontSize: rem(scale[12]),
      lineHeight: '117%',
    },
    max: {
      fontSize: rem(scale[14]),
      lineHeight: '113%',
    },
  },
});

export const display02 = fluid({
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[9]),
  fontWeight: fontWeights.semibold,
  lineHeight: '119%',
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(scale[9]),
    },
    lg: {
      fontSize: rem(scale[11]),
    },
    xlg: {
      fontSize: rem(scale[12]),
      lineHeight: '116%',
    },
    max: {
      fontSize: rem(scale[14]),
      lineHeight: '113%',
    },
  },
});

export const display03 = fluid({
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[9]),
  fontWeight: fontWeights.light,
  lineHeight: '119%',
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(scale[13]),
      lineHeight: '115%',
    },
    lg: {
      fontSize: rem(scale[16]),
      lineHeight: '111%',
      letterSpacing: px(-0.64),
    },
    xlg: {
      fontSize: rem(scale[19]),
      lineHeight: '107%',
    },
    max: {
      fontSize: rem(scale[22]),
      lineHeight: '105%',
      letterSpacing: px(-0.96),
    },
  },
});

export const display04 = fluid({
  fontFamily: fontFamilies.sans,
  fontSize: rem(scale[9]),
  fontWeight: fontWeights.semibold,
  lineHeight: '119%',
  letterSpacing: 0,
  breakpoints: {
    md: {
      fontSize: rem(scale[13]),
      lineHeight: '115%',
    },
    lg: {
      fontSize: rem(scale[16]),
      lineHeight: '111%',
      letterSpacing: px(-0.64),
    },
    xlg: {
      fontSize: rem(scale[19]),
      lineHeight: '107%',
      letterSpacing: px(-0.64),
    },
    max: {
      fontSize: rem(scale[22]),
      lineHeight: '105%',
      letterSpacing: px(-0.96),
    },
  },
});
