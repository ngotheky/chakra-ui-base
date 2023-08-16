import ReactDatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker';
import { addTime, startOfTime } from 'utils/format';
import 'react-datepicker/dist/react-datepicker.css';
import ja from 'date-fns/locale/ja';

registerLocale('ja', ja);

function DatePicker<CustomModifierNames extends string = never, WithRange extends boolean | undefined = undefined>({
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

  return <ReactDatePicker locale={'ja'} excludeDateIntervals={excludeDateIntervals} {...props} />;
}

export default DatePicker;
