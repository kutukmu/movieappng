import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const arr = value.split("@")
    return arr[0]
  }

}
