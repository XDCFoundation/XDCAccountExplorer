import LabelFormatter from './label-formatter';

class DateLabelFormatter extends LabelFormatter {
  private dateTimeFormatOptions: Intl.DateTimeFormatOptions;

  constructor(dateFormat?: Intl.DateTimeFormatOptions) {
    super();
    this.dateTimeFormatOptions = dateFormat ?? { day: 'numeric', month: 'numeric', year: 'numeric' };
  }

  format(label: string) {
    if (Date.parse(label)) {
      const d = new Date(label);
      return d.toLocaleString(undefined, this.dateTimeFormatOptions);
    }

    return label;
  }
}

export default DateLabelFormatter;
