import { ReactDatePickerProps } from 'react-datepicker';
import DatePicker from './DatePicker';
import { addTime, startOfTime } from 'utils/format';

function DateRangePicker<
  CustomModifierNames extends string = never,
  WithRange extends boolean | undefined = undefined,
>({
  disableDateFromTomorrow = false,
  ...props
}: ReactDatePickerProps<CustomModifierNames, WithRange> & { disableDateFromTomorrow?: boolean }) {
  const excludeDateIntervals = disableDateFromTomorrow
    ? [
        {
          start: startOfTime(addTime(new Date(), 1)),
          end: addTime(new Date(), 1000, 'years'), // 1000 years
        },
      ]
    : undefined;
  return <DatePicker selectsRange monthsShown={2} excludeDateIntervals={excludeDateIntervals} {...props} />;
}

export default DateRangePicker;
