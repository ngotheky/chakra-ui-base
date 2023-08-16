import { Avatar, Box, Flex, Icon, Spacer, useColorModeValue, Text, Button, Tooltip } from '@chakra-ui/react';
import { themeConstants } from 'configs/theme';
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from 'shared/components/Logo';
import HeaderDrawerMenu from './HeaderDrawerMenu';
import useProfile from 'shared/hooks/useProfile';
import { FiLogOut } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { logout } from 'configs/axios';
import useDrawerMenu from 'shared/hooks/useDrawerMenu';

function PageHeader() {
  const bg = useColorModeValue(themeConstants.cardBgLight, themeConstants.cardBgDark);
  const { onOpen } = useDrawerMenu();
  const { data: profile } = useProfile();
  const { t } = useTranslation();

  return (
    <Box position="sticky" top={0} zIndex={themeConstants.headerZIndex} maxH={`${themeConstants.headerHeight}px`}>
      <Flex px={2} py={2} alignItems="center" gap={6} bg={bg}>
        <Logo />
        <Spacer />
        <Flex alignItems="center" minW={200} display={['none', 'none', 'flex']}>
          <Avatar w={10} h={10} name={profile?.avatar} src={profile?.avatar} />
          <Text mx={2} fontSize={22}>
            {profile?.name}
          </Text>
          <Spacer />
          <Tooltip label={t('common.logOut')} placement="bottom-start">
            <Button onClick={logout} rightIcon={<FiLogOut width={6} height={6} />} variant="ghost" />
          </Tooltip>
        </Flex>
        <Icon as={AiOutlineMenu} fontSize={24} display={['block', 'block', 'none']} onClick={onOpen} />
        <HeaderDrawerMenu />
      </Flex>
    </Box>
  );
}

export default PageHeader;
