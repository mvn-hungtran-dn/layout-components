export const THEME = {
  space: {
    none: 'none',
    small: '6px',
    medium: '12px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '64px'
  } as const,
  breakPoint: {
    mobile: 0,
    tablet: '740px',
    desktop: '992px',
    wide: '1200px'
  },
  responsiveContainer: {
    tablet: {
      maxWidth: '700px'
    },
    desktop: {
      maxWidth: '900px'
    }
  },
  colors: {
    light: {

    },
    dark: {
  
    }
  },
  responsiveDirection: 'mobile-first'
} as const
