import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errors'
})
export class ErrorsPipe implements PipeTransform {

  transform(errors: any ): string {
    if ('required' in errors) {
      return 'Required';
    } else if ('email' in errors) {
      return 'Invalid email';
    }
    return 'Password min size 6';
  }

}
