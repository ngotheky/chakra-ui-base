import { Checkbox, CheckboxGroup, CheckboxGroupProps, Stack } from '@chakra-ui/react';

interface CheckboxData {
  value: string;
  name: string;
}

interface Props extends CheckboxGroupProps {
  data: CheckboxData[];
}

const CheckboxList = (props: Props) => {
  return (
    <CheckboxGroup {...props}>
      <Stack spacing={[1, 5]} direction={['column', 'row']}>
        {props.data?.map((item) => (
          <Checkbox key={item.value} value={item.value} alignSelf="flex-start">
            {item.name}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
};

export default CheckboxList;
