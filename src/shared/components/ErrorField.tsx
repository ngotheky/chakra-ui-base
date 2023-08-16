import { ErrorMessage, ErrorMessageProps } from 'formik';
import { Text } from '@chakra-ui/react';

interface Props extends ErrorMessageProps {
  name: string;
}

function ErrorField(props: Props) {
  return (
    <ErrorMessage
      render={(message: string) => (
        <Text color="red.400" fontSize="14">
          {message}
        </Text>
      )}
      {...props}
    />
  );
}

export default ErrorField;
