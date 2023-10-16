import { Pipe, PipeTransform } from '@angular/core';
import { RecordView } from '../models/RecordView';

@Pipe({
  name: 'record'
})
export class RecordPipe implements PipeTransform {

  transform(values: RecordView[], filter: string): RecordView[] {
    if (!filter || filter.length === 0) {
      return values;
    }

    if (values.length === 0) {
      return values;
    } 

    return values.filter((value: RecordView) => {
      const operationTypeFound =
        value.operationType.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

      if (operationTypeFound) {
        return value;
      }
    });
  }
}
