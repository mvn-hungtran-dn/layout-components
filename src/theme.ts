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
    wide: '1200px',
    desktop: '992px',
    tablet: '740px',
    mobile: 0
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
  responsiveDirection: 'desktop-first'
} as const
