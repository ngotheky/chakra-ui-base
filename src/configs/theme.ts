import { ColorMode, extendTheme } from '@chakra-ui/react';

export const themeConstants = {
  cardBgLight: 'white',
  cardBgDark: '#1A1C20',
  headerHeight: 56,
  sidebarMaxWidth: 200,
  sidebarCollapsedWidth: 48,
  headerZIndex: 999,
  sidebarZIndex: 998,
  childMenuHeight: '40px',
  textPriceUp: 'green.400',
  textPriceDown: 'red.400',
  hideScrollBar: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  },
  rowHoverLight: '#f5f5f4',
  rowHoverDark: '#17191c',
  inputBgLight: 'transparent',
  inputBgDark: 'transparent',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: { colorMode: ColorMode }) => ({
      'html, body': {
        color: props.colorMode === 'dark' ? 'whiteAlpha.800' : 'black',
        background: props.colorMode === 'dark' ? '#25282e' : '#f4f4f4',
        touchAction: 'auto',
      },
      '*::placeholder': {
        color: props.colorMode === 'dark' ? 'whiteAlpha.400' : 'gray.400',
      },
      '*, *::before, &::after': {
        borderColor: props.colorMode === 'dark' ? 'whiteAlpha.100' : 'gray.200',
        wordWrap: 'break-word',
      },

      '::-webkit-scrollbar': {
        width: '8px',
        height: '8px',
      },

      /* Track */
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },

      /* Handle */
      '::-webkit-scrollbar-thumb': {
        background: props.colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.200',
        borderRadius: '3px',
      },

      /* Handle on hover */
      '::-webkit-scrollbar-thumb:hover': {
        background: props.colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.300',
      },
    }),
  },
});

export default theme;
