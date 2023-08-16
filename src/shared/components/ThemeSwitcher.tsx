import { Flex, Icon, useColorMode } from '@chakra-ui/react';
import { BsMoon, BsSun } from 'react-icons/bs';

interface Props {
  layout?: 'vertical' | 'horizontal';
}

function ThemeSwitcher({ layout = 'horizontal' }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignItems="center" gap={2} flexDirection={layout === 'vertical' ? 'column' : 'row'}>
      <Icon
        as={BsSun}
        color={colorMode === 'dark' ? 'whiteAlpha.300' : 'blackAlpha.800'}
        cursor="pointer"
        onClick={toggleColorMode}
      />
      <Icon
        as={BsMoon}
        color={colorMode === 'light' ? 'blackAlpha.300' : 'whiteAlpha.800'}
        cursor="pointer"
        onClick={toggleColorMode}
      />
    </Flex>
  );
}

export default ThemeSwitcher;
