import { NgModule ,ModuleWithProviders } from '@angular/core';
import { CleanHTMLPipe } from './pipes/clean-html.pipe';
import { SortGradesPipe } from './pipes/sort-grades.pipe';


@NgModule({
  declarations: [
    CleanHTMLPipe,
    SortGradesPipe,
  ],
  exports:[
    CleanHTMLPipe,
    SortGradesPipe,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
 }
