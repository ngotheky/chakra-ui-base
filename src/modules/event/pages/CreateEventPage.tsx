import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const CreateEvent = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Text>{t('event.createEvent')}</Text>
    </Box>
  );
};

export default CreateEvent;
