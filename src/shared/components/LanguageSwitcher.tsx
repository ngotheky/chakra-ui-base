import { Flex, Image } from '@chakra-ui/react';
import { supportedLanguage } from 'configs/language';
import dayjs from 'dayjs';
import i18next from 'i18next';
import numeral from 'numeral';
import { useCallback } from 'react';
import { constants } from 'utils/constants';

interface Props {
  layout?: 'vertical' | 'horizontal';
}

function LanguageSwitcher({ layout = 'horizontal' }: Props) {
  const changeLanguageTo = useCallback((lng: string) => {
    i18next.changeLanguage(lng);
    dayjs.locale(lng);
    numeral.locale(lng);
    console.log(lng);
    localStorage.setItem(constants.LANGUAGE_STORAGE_KEY, lng);
  }, []);
  return (
    <Flex gap={2} flexDirection={layout === 'vertical' ? 'column' : 'row'}>
      {supportedLanguage.map((item) => (
        <Image
          key={item.lng}
          src={item.flag}
          alt={item.name}
          w={4}
          h={4}
          cursor="pointer"
          onClick={() => changeLanguageTo(item.lng)}
        />
      ))}
    </Flex>
  );
}

export default LanguageSwitcher;
