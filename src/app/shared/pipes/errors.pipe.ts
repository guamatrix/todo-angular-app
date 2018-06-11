import { Pipe, PipeTransform } from '@angular/core';

import memo from 'memo-decorator';

@Pipe({
  name: 'errors',
  pure: true
})
export class ErrorsPipe implements PipeTransform {
  @memo()
  transform(errors: any ): string {
    if ('required' in errors) {
      return 'Required';
    } else if ('email' in errors) {
      return 'Invalid email';
    }
    return 'Password min size 6';
  }

}
