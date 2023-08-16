import { Box, ChakraProps, useColorModeValue } from '@chakra-ui/react';
import { themeConstants } from 'configs/theme';
import { PropsWithChildren } from 'react';

function Card({ children, ...props }: PropsWithChildren<ChakraProps & { as?: any }>) {
  const bg = useColorModeValue(themeConstants.cardBgLight, themeConstants.cardBgDark);
  return (
    <Box bg={bg} p={2} {...props}>
      {children}
    </Box>
  );
}

export default Card;
