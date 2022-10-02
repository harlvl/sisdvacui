import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'sortGradesPipe'})
export class SortGradesPipe implements PipeTransform {
    gradeOrder = new Map<string, number>();
    transform(value: any[]): any[]  {
      //Sotr Grades from Pre-K to 12
      this.gradeOrder.set('Pre-K', 1);
      this.gradeOrder.set('K', 2);
      this.gradeOrder.set('1', 3);
      this.gradeOrder.set('2', 4);
      this.gradeOrder.set('3', 5);
      this.gradeOrder.set('4', 6);
      this.gradeOrder.set('5', 7);
      this.gradeOrder.set('6', 8);
      this.gradeOrder.set('7', 9);
      this.gradeOrder.set('8', 10);
      this.gradeOrder.set('9', 11);
      this.gradeOrder.set('10', 12);
      this.gradeOrder.set('11', 13);
      this.gradeOrder.set('12', 14);
      
      let sortGradeFn = (grade1:string , grade2:string) => { return this.gradeOrder.get(grade1)  - this.gradeOrder.get(grade2); }
      const sortedArray:{key:number}[] = value.sort(sortGradeFn);
      const arraySet = new Set(sortedArray) 
      return [...arraySet];
    }
}