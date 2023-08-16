import { Box, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import CheckboxList from 'shared/components/CheckboxList';
import DatePicker from 'shared/components/DatePicker';
import DateRangePicker from 'shared/components/DateRangePicker';
import RadioList from 'shared/components/RadioList';
import useAlertModal from 'shared/hooks/useAlertModal';
import { formatTime } from 'utils/format';

const HomePage = () => {
  const { onOpen } = useAlertModal();
  const [date, setDate] = useState<Date | null>(new Date());
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const fakeData = [
    { value: '1', name: '1' },
    { value: '2', name: '2' },
    { value: '3', name: '3' },
  ];
  const handleUpdate = (update: Date | null | [Date | null, Date | null]) => {
    if (Array.isArray(update)) {
      setDateRange(update);
    }
  };

  return (
    <Box>
      <Text>Home</Text>
      <CheckboxList data={fakeData} />
      <RadioList data={fakeData} />
      <Button
        onClick={() =>
          onOpen({
            title: 'title1',
            message: 'message1',
            close: () => console.log('close'),
            confirm: () => console.log('confirm'),
          })
        }
      >
        Show alert modal
      </Button>
      <DatePicker
        selected={date}
        onChange={(value) => setDate(value)}
        customInput={<Button>{formatTime(date || new Date())}</Button>}
      />
      <DateRangePicker
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        dateFormat="dd/MM/yyyy"
        onChange={handleUpdate}
        customInput={<Button>{`${formatTime(startDate || new Date())} - ${formatTime(endDate || new Date())}`}</Button>}
        monthsShown={1}
      />
    </Box>
  );
};

export default HomePage;
