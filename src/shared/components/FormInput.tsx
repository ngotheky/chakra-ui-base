import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import ErrorField from './ErrorField';
import { I18Key } from 'utils/i18next';

interface Props extends InputProps {
  label: I18Key;
  isRequired?: boolean;
}

const FormInput = (props: Props) => {
  const { t } = useTranslation();

  return (
    <FormControl isRequired={props?.isRequired} mb="4">
      <FormLabel>{t(props.label)}</FormLabel>
      <Input {...props} />
      <ErrorField name={String(props?.name)} />
    </FormControl>
  );
};

export default FormInput;
