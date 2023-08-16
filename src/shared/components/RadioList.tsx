import { Radio, RadioGroup, RadioGroupProps, Stack } from '@chakra-ui/react';

interface RadioData {
  value: string;
  name: string;
}

interface Props extends Omit<RadioGroupProps, 'children'> {
  data: RadioData[];
}

const RadioList = ({ data, ...rest }: Props) => {
  return (
    <RadioGroup {...rest}>
      <Stack spacing={[1, 5]} direction={['column', 'row']}>
        {data?.map((item) => (
          <Radio key={item.value} value={item.value} alignSelf="flex-start">
            {item.name}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default RadioList;
