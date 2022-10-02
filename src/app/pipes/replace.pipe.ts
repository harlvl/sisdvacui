import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'replacePipe'})
export class ReplacePipe implements PipeTransform {
    transform(value: string, strToReplace: string): string {
      
      if(strToReplace){
        let subjects = value.split(strToReplace);
        let updatedSubjectValue = '';
        for (let i = 0; i < subjects.length; i++) {
          updatedSubjectValue+= subjects[i].trim() + '\n';
        }
        return updatedSubjectValue; 
      } else {
        return value;
      }
  
    }
}