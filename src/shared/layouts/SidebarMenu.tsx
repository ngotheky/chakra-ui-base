import { Box, Divider, Flex, Icon, Spacer } from '@chakra-ui/react';
import { themeConstants } from 'configs/theme';
import { AiFillSetting, AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { memo } from 'react';
import Card from 'shared/components/Card';
import LanguageSwitcher from 'shared/components/LanguageSwitcher';
import ThemeSwitcher from 'shared/components/ThemeSwitcher';
import paths from 'configs/paths';
import i18next from 'i18next';
import { BiCalendarEvent } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { LuCalendarPlus } from 'react-icons/lu';
import { TbCalendarTime } from 'react-icons/tb';
import SideBarMenuItem from 'shared/components/SideBarMenuItem';
import useSidebar from 'shared/hooks/useSidebar';

export const sidebarMenuData = [
  {
    name: i18next.t('home.title'),
    path: paths.HOME.ROOT,
    icon: MdHome,
  },
  {
    name: i18next.t('event.title'),
    path: paths.EVENT.ROOT,
    icon: BiCalendarEvent,
    children: [
      {
        name: i18next.t('event.title'),
        path: paths.EVENT.ROOT,
        icon: BiCalendarEvent,
      },
      {
        name: i18next.t('event.createEvent'),
        path: paths.EVENT.CREATE,
        icon: LuCalendarPlus,
      },
      {
        name: i18next.t('event.eventHistory'),
        path: paths.EVENT.HISTORY,
        icon: TbCalendarTime,
      },
    ],
  },
  {
    name: i18next.t('member.title'),
    path: paths.MEMBER.ROOT,
    icon: FaUsers,
  },
  {
    name: i18next.t('setting.title'),
    path: paths.SETTINGS.ROOT,
    icon: AiFillSetting,
  },
];

function SidebarMenu() {
  const { collapsed, toggle } = useSidebar();

  return (
    <Box display={['none', 'none', 'block', 'block', 'block', 'block']}>
      <Card
        as="nav"
        minH={`calc(100vh - ${themeConstants.headerHeight}px)`}
        maxH={`calc(100vh - ${themeConstants.headerHeight}px)`}
        position="sticky"
        top={`calc(${themeConstants.headerHeight}px + 0.5rem)`}
        w={collapsed ? `${themeConstants.sidebarCollapsedWidth}px` : `${themeConstants.sidebarMaxWidth}px`}
        zIndex={themeConstants.sidebarZIndex}
        display="flex"
        flexDirection="column"
        transition="width 250ms ease-in-out"
        willChange="width"
        p={0}
      >
        <Flex p={2}>
          <Spacer />
          <Icon
            as={collapsed ? AiOutlineMenuUnfold : AiOutlineMenuFold}
            cursor="pointer"
            fontSize={20}
            onClick={toggle}
            mx={2}
          />
        </Flex>
        <Box mt={2} overflow="hidden">
          {sidebarMenuData.map((menu) => (
            <SideBarMenuItem key={menu?.path} isOpen={!collapsed} {...menu} />
          ))}
        </Box>
        <Spacer />
        <Box p={2}>
          <Flex flexDirection={collapsed ? 'column' : 'row'} alignItems="center">
            <LanguageSwitcher layout={collapsed ? 'vertical' : 'horizontal'} />
            <Spacer />
            {collapsed ? <Divider my={2} /> : null}
            <ThemeSwitcher layout={collapsed ? 'vertical' : 'horizontal'} />
          </Flex>
        </Box>
      </Card>
    </Box>
  );
}

export default memo(SidebarMenu);
