import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string){
    let item = value
    
    if(item.length > 100){
      item = item.slice(0,100)
      return item + "..."
    }else{
      return value
    }
    
  }

}
