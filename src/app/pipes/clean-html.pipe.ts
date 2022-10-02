import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'cleanHTMLPipe'})
export class CleanHTMLPipe implements PipeTransform {
    transform(value: string): string {
      if(value){
        return value.replace(/<[^>]*>/g, '');
      } else {
        return value;
      }
    }
}