import { format } from 'date-fns';

interface DateInfoProps {
  date: Date,
}

function DateInfo(props: DateInfoProps) {
  const { date } = props;
  const dateFormat = 'd/M/yyyy';

  return (
    <span className="small ml-2 mr-2">
      {format(date, dateFormat)}
    </span>
  );
}
export default DateInfo;
