const tokens = {
  black: {
    c50: "#000000",
    c75: "#030303",
    c80: "#080808",
    c100: "#0d0d0d",
    c125: "#141414",
    c150: "#1a1a1a",
    c200: "#262626",
    c250: "#333333"
  },
  white: "#FFFFFF", // General white color
  semantic: {
    red: {
      c100: "#F46E6E", // Error text
      c200: "#E44F4F", // Video player scraping error
      c300: "#D74747", // Danger button
      c400: "#B43434", // Not currently used
    },
    green: {
      c100: "#60D26A", // Success text
      c200: "#40B44B", // Video player scraping success
      c300: "#31A33C", // Not currently used
      c400: "#237A2B", // Not currently used
    },
    silver: {
      c100: "#DEDEDE", // Primary button hover
      c200: "#B6CAD7", // Not currently used
      c300: "#8EA3B0", // Secondary button text
      c400: "#617A8A", // Main text in video player context
    },
    yellow: {
      c100: "#FFF599", // Best onboarding highlight
      c200: "#FCEC61", // Dropdown highlight hover
      c300: "#D8C947", // Not currently used
      c400: "#AFA349", // Dropdown highlight
    },
    rose: {
      c100: "#DB3D61", // Authentication error text
      c200: "#8A293B", // Danger button hover
      c300: "#812435", // Danger button
      c400: "#701B2B", // Not currently used
    },
  },
  blue: {
    c50: "#E3E8FF",
    c100: "#C7D2FE",
    c200: "#A5B4FC",
    c300: "#818CF8",
    c400: "#6366F1",
    c500: "#4F46E5",
    c600: "#4338CA",
    c700: "#3730A3",
    c800: "#312E81",
    c900: "#1E1B4B"
  },
  purple: {
    c50: "#F3E8FF",
    c100: "#E9D5FF",
    c200: "#D8B4FE",
    c300: "#C084FC",
    c400: "#A855F7",
    c500: "#9333EA",
    c600: "#7C3AED",
    c700: "#6D28D9",
    c800: "#5B21B6",
    c900: "#4C1D95"
  },
  ash: {
    c50: "#F9FAFB",
    c100: "#F3F4F6",
    c200: "#E5E7EB",
    c300: "#D1D5DB",
    c400: "#9CA3AF",
    c500: "#6B7280",
    c600: "#4B5563",
    c700: "#374151",
    c800: "#1F2937",
    c900: "#111827"
  },
  shade: {
    c25: "#F8FAFC",
    c50: "#F1F5F9",
    c100: "#E2E8F0",
    c200: "#CBD5E1",
    c300: "#94A3B8",
    c400: "#64748B",
    c500: "#475569",
    c600: "#334155",
    c700: "#1E293B",
    c800: "#0F172A",
    c900: "#020617"
  },
};

export const defaultTheme = {
  extend: {
    colors: {
      themePreview: {
        primary: tokens.black.c80,
        secondary: tokens.black.c100,
        ghost: tokens.white,
      },

      // Branding
      pill: {
        background: tokens.black.c100,
        backgroundHover: tokens.black.c125,
        highlight: tokens.purple.c400,
        activeBackground: tokens.purple.c700,
      },

      // meta data for the theme itself
      global: {
        accentA: tokens.purple.c500,
        accentB: tokens.blue.c500,
      },

      // light bar
      lightBar: {
        light: tokens.purple.c600,
      },

      // Buttons
      buttons: {
        toggle: tokens.purple.c500,
        toggleDisabled: tokens.black.c200,
        danger: tokens.semantic.rose.c300,
        dangerHover: tokens.semantic.rose.c200,

        secondary: tokens.shade.c700,
        secondaryText: tokens.shade.c100,
        secondaryHover: tokens.shade.c600,
        primary: tokens.purple.c500,
        primaryText: tokens.white,
        primaryHover: tokens.purple.c600,
        purple: tokens.purple.c600,
        purpleHover: tokens.purple.c500,
        cancel: tokens.shade.c700,
        cancelHover: tokens.shade.c600
      },

      // only used for body colors/textures
      background: {
        main: tokens.black.c75,
        secondary: tokens.black.c75,
        secondaryHover: tokens.black.c75,
        accentA: tokens.purple.c600,
        accentB: tokens.black.c100
      },

      // Modals
      modal: {
        background: tokens.shade.c800,
      },

      // typography
      type: {
        logo: tokens.purple.c400,
        emphasis: tokens.white,
        text: tokens.shade.c100,
        dimmed: tokens.shade.c300,
        divider: tokens.shade.c700,
        secondary: tokens.shade.c400,
        danger: tokens.semantic.red.c100,
        success: tokens.semantic.green.c100,
        link: tokens.purple.c400,
        linkHover: tokens.purple.c300
      },

      // search bar
      search: {
        background: tokens.shade.c800,
        hoverBackground: tokens.shade.c700,
        focused: tokens.shade.c700,
        placeholder: tokens.shade.c400,
        icon: tokens.shade.c400,
        text: tokens.white,
      },

      // media cards
      mediaCard: {
        hoverBackground: tokens.shade.c800,
        hoverAccent: tokens.purple.c500,
        hoverShadow: tokens.purple.c900,
        shadow: tokens.black.c100,
        barColor: tokens.shade.c600,
        barFillColor: tokens.purple.c500,
        badge: tokens.shade.c700,
        badgeText: tokens.shade.c200
      },

      // Large card
      largeCard: {
        background: tokens.shade.c800,
        icon: tokens.purple.c500,
      },

      // Dropdown
      dropdown: {
        background: tokens.shade.c800,
        altBackground: tokens.shade.c900,
        hoverBackground: tokens.shade.c700,
        highlight: tokens.purple.c500,
        highlightHover: tokens.purple.c400,
        text: tokens.shade.c100,
        secondary: tokens.shade.c300,
        border: tokens.shade.c700,
        contentBackground: tokens.shade.c900
      },

      // Passphrase
      authentication: {
        border: tokens.shade.c600,
        inputBg: tokens.shade.c800,
        inputBgHover: tokens.shade.c700,
        wordBackground: tokens.shade.c700,
        copyText: tokens.shade.c200,
        copyTextHover: tokens.shade.c100,
        errorText: tokens.semantic.rose.c100,
      },

      // Settings page
      settings: {
        sidebar: {
          activeLink: tokens.shade.c800,
          badge: tokens.shade.c700,

          type: {
            secondary: tokens.shade.c400,
            inactive: tokens.shade.c400,
            icon: tokens.shade.c500,
            iconActivated: tokens.purple.c500,
            activated: tokens.purple.c400
          },
        },

        card: {
          border: tokens.shade.c700,
          background: tokens.shade.c800,
          altBackground: tokens.shade.c800
        },

        saveBar: {
          background: tokens.shade.c900
        },
      },

      // Utilities
      utils: {
        divider: tokens.shade.c700
      },

      // Onboarding
      onboarding: {
        bar: tokens.shade.c700,
        barFilled: tokens.purple.c500,
        divider: tokens.shade.c600,
        card: tokens.shade.c800,
        cardHover: tokens.shade.c700,
        border: tokens.shade.c700,
        good: tokens.purple.c400,
        best: tokens.purple.c500,
        link: tokens.purple.c400,
      },

      // Error page
      errors: {
        card: tokens.shade.c900,
        border: tokens.shade.c700,

        type: {
          secondary: tokens.shade.c300,
        },
      },

      // About page
      about: {
        circle: tokens.shade.c800,
        circleText: tokens.shade.c200
      },

      // About page
      editBadge: {
        bg: tokens.shade.c700,
        bgHover: tokens.shade.c600,
        text: tokens.shade.c100
      },

      progress: {
        background: tokens.shade.c700,
        preloaded: tokens.shade.c600,
        filled: tokens.purple.c500,
      },

      // video player
      video: {
        buttonBackground: tokens.shade.c700,

        autoPlay: {
          background: tokens.shade.c800,
          hover: tokens.shade.c700,
        },

        scraping: {
          card: tokens.shade.c900,
          error: tokens.semantic.red.c200,
          success: tokens.semantic.green.c200,
          loading: tokens.purple.c500,
          noresult: tokens.shade.c700
        },

        audio: {
          set: tokens.purple.c500,
        },

        context: {
          background: tokens.shade.c900,
          light: tokens.shade.c100,
          border: tokens.shade.c700,
          hoverColor: tokens.shade.c700,
          buttonFocus: tokens.shade.c600,
          flagBg: tokens.shade.c700,
          inputBg: tokens.shade.c800,
          buttonOverInputHover: tokens.shade.c600,
          inputPlaceholder: tokens.shade.c400,
          cardBorder: tokens.shade.c700,
          slider: tokens.shade.c700,
          sliderFilled: tokens.purple.c500,
          error: tokens.semantic.red.c200,

          buttons: {
            list: tokens.shade.c700,
            active: tokens.shade.c600,
          },

          closeHover: tokens.shade.c700,

          type: {
            main: tokens.shade.c100,
            secondary: tokens.shade.c400,
            accent: tokens.purple.c400,
          },
        },
      },
    },
  },
};
