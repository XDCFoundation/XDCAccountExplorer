interface DateInfoProps {
  date: Date,
  dateFormat?: Intl.DateTimeFormatOptions,
}

function DateInfo({ date, dateFormat }: DateInfoProps) {
  const format = dateFormat ?? { day: 'numeric', month: 'numeric', year: 'numeric' };

  return (
    <span className="small ms-2 me-2">
      {date.toLocaleString(undefined, format)}
    </span>
  );
}
export default DateInfo;
