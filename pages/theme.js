const breakpoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
};

const theme = {
  breakpoints,
  fonts: {
    colors: {
      primary: "#5016F4",
      secondary: "#01FF6C",
      border: "#E9E9E9",
      subHeaderBkg: "#000000",
      subHeaderSecondaryBkg: "#545454",
      subHeaderText: "#ffffff",
      subHeaderSpacer: "#403F3F",
      white: "#ffffff",
      black: "#000000",
      gray: "#999696",
      light: "#666666",
      secondaryText: "#6E6E6E",
      buttonBorder: "#F2F4F8",
      spacerColor: "#D6D8D1",
      darkBlue: "#280787",
      lightBlue: "#5E73FF",
      lightGrey: "#dfe1e5",
    },
    primary: "GalanoGrotesque, sans-serif",
    sizes: {
      xs: {
        fontSize: 0.625, //rem
        fontWeight: 400,
        letterSpacing: 0.017,
        lineHeight: 1.2,
      },

      sm: {
        fontSize: 0.75, //rem
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: 1.17,
      },

      ms: {
        fontSize: 0.875, //rem
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: 1.17,
      },

      md: {
        fontSize: 1, //rem
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: 1.4,
      },

      lg: {
        fontSize: 1.125, //rem
        fontWeight: 400,
        letterSpacing: 0.017,
        lineHeight: 1.23,
      },

      lgx: {
        fontSize: 1.5, //rem
        fontWeight: 700,
        letterSpacing: 0.017,
        lineHeight: 1.21,
      },

      xl: {
        fontSize: 2, //rem
        fontWeight: 400,
        letterSpacing: 0.014,
        lineHeight: 1.19,
      },

      xxl: {
        fontSize: 2.375, //rem
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: 1.21,
      },

      xxxl: {
        fontSize: 3.125, //rem
        fontWeight: 400,
        letterSpacing: 0.023,
        lineHeight: 1.2,
      },

      x4l: {
        fontSize: 4.125, //rem
        fontWeight: 600,
        letterSpacing: 0.023,
        lineHeight: 1,
      },
    },
  },
  sizes: {
    subHeaderHeight: 32, //px
    headerHeight: 66, //px
  },
  radius: {
    normal: 5,
    large: 20,
  },
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: "only screen",
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: breakpoints.sm / 16, // em
      md: breakpoints.md / 16, // em
      lg: breakpoints.lg / 16, // em
    },
  },
};

export default theme;
