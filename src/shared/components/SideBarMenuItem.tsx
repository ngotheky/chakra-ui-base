import { Box, Flex, Icon, Link, Text, useColorModeValue } from '@chakra-ui/react';
import paths from 'configs/paths';
import { themeConstants } from 'configs/theme';

import { memo, useMemo } from 'react';
import { IconType } from 'react-icons';
import { useLocation, Link as ReactLink } from 'react-router-dom';

interface Props {
  name: string;
  path: string;
  icon: IconType;
  children?: Props[];
  isOpen?: boolean;
}

const SideBarMenuItem = ({ name, path, icon, children, isOpen: isExtend }: Props) => {
  const bgHover = useColorModeValue('blackAlpha.50', 'blackAlpha.500');
  const bgHoverChildren = useColorModeValue('blackAlpha.50', 'blackAlpha.500');
  const location = useLocation();
  const isFocused = useMemo(() => {
    return path === location.pathname || children?.find((item) => item?.path === location.pathname);
  }, [location, path, children]);

  return (
    <Box>
      <Link
        as={ReactLink}
        to={path}
        cursor="pointer"
        borderTopWidth={path === paths.HOME.ROOT ? 1 : 0}
        borderBottomWidth={1}
        bgColor={isFocused ? bgHover : undefined}
        _hover={{
          bg: bgHover,
          textDecoration: 'none',
        }}
      >
        <Flex
          alignItems="center"
          py={4}
          px={2}
          bgColor={isFocused ? bgHover : undefined}
          _hover={{
            bg: bgHover,
          }}
        >
          <Icon color={isFocused ? 'pink.400' : 'white.400'} as={icon} w={8} h={8} mr={2} />
          <Text color={isFocused ? 'pink.400' : 'white.400'} display={isExtend ? 'block' : 'none'}>
            {name}
          </Text>
        </Flex>
      </Link>
      <Box
        h={isFocused && children && isExtend ? `calc(${children?.length} * ${themeConstants.childMenuHeight})` : 0}
        overflow={'hidden'}
        transition="height 250ms ease-in-out"
        willChange="height"
      >
        {children?.map((item) => (
          <Link
            key={item?.path}
            as={ReactLink}
            display={'flex'}
            alignItems="center"
            cursor="pointer"
            to={item?.path}
            py={2}
            pl={6}
            bgColor={item?.path === location.pathname ? bgHoverChildren : undefined}
            _hover={{
              bgColor: bgHoverChildren,
              textDecoration: 'none',
            }}
            minW={184}
            overflow={'hidden'}
          >
            <Icon
              color={item?.path === location.pathname ? 'pink.400' : 'white.400'}
              as={item?.icon}
              w={6}
              h={6}
              mr={2}
            />
            <Text
              color={item?.path === location.pathname ? 'pink.400' : 'white.400'}
              display={isExtend ? 'block' : 'none'}
            >
              {item?.name}
            </Text>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default memo(SideBarMenuItem);
