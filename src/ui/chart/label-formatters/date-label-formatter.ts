import { format } from 'date-fns';
import LabelFormatter from './label-formatter';

class DateLabelFormatter extends LabelFormatter {
  private dateFormat;

  constructor(dateFormat?: string) {
    super();
    this.dateFormat = dateFormat ?? 'M/d';
  }

  format(label: string) {
    if (Date.parse(label)) {
      const d = new Date(label);
      return format(d, this.dateFormat);
    }

    return label;
  }
}

export default DateLabelFormatter;
