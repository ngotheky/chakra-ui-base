import { Box, Button, Flex, Heading, useToast } from '@chakra-ui/react';
import * as yup from 'yup';
import yupValidate from 'utils/yupValidation';
import { useTranslation } from 'react-i18next';
import { PASSWORD_MAX_LENGTH } from 'utils/validation';
import { FormikProvider, useFormik } from 'formik';
import { AiOutlineCheck } from 'react-icons/ai';
import FormInput from 'shared/components/FormInput';
import { ISignInForm } from 'utils/interface';
import { useNavigate } from 'react-router-dom';
import { login } from 'apis/authentication';
import paths from 'configs/paths';
import Cookies from 'js-cookie';

const DEFAULT_FORM = {
  email: 'kyngodev@gmail.com',
  password: '123456',
};

const SignInPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (formData: ISignInForm) => {
    try {
      const { data } = await login(formData);
      const { token, refreshToken } = data;
      Cookies.set('token', token, {
        expires: 999999,
      });
      Cookies.set('refreshToken', refreshToken, {
        expires: 999999,
      });
      navigate(paths.HOME.ROOT, { replace: true });
    } catch (error: any) {
      toast({
        title: error?.message,
        position: 'top',
        isClosable: true,
        status: 'error',
      });
    }
  };
  const yupSchema = yup.object().shape({
    email: yupValidate.email(),
    password: yupValidate.password(),
  });
  const formik = useFormik<ISignInForm>({
    initialValues: DEFAULT_FORM,
    validationSchema: yupSchema,
    validateOnMount: true,
    onSubmit: handleSubmit,
  });

  return (
    <Flex justifyContent="center">
      <Box w={['90%', '90%', '75%', '75%', '50%']}>
        <Heading size="lg" my={2}>
          {t('signIn.title')}
        </Heading>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <FormInput
              label="signIn.email"
              isRequired
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
            />
            <FormInput
              label="signIn.password"
              isRequired
              type="password"
              maxLength={PASSWORD_MAX_LENGTH}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
            />
            <Button
              isDisabled={!formik.isValid}
              mt={4}
              alignSelf="center"
              colorScheme="green"
              type="submit"
              leftIcon={<AiOutlineCheck />}
            >
              {t('signIn.submit')}
            </Button>
          </form>
        </FormikProvider>
      </Box>
    </Flex>
  );
};

export default SignInPage;
