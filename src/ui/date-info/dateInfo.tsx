import { format } from 'date-fns';

interface DateInfoProps {
  date: Date,
}

const dateFormat = 'd/M/yyyy';

function DateInfo({ date }: DateInfoProps) {
  return (
    <span className="small ml-2 mr-2">
      {format(date, dateFormat)}
    </span>
  );
}
export default DateInfo;
