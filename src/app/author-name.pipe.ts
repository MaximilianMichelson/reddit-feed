import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorName'
})
export class AuthorNamePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/-/g,'');
  }

}
