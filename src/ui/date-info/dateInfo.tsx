import { format } from 'date-fns';

interface DateInfoProps {
  date: Date,
}

const dateFormat = 'd/M/yyyy';

function DateInfo({ date }: DateInfoProps) {
  return (
    <span className="small ms-2 me-2">
      {format(date, dateFormat)}
    </span>
  );
}
export default DateInfo;
