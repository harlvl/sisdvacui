import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AddApplyButtonDirective } from '../directives/add-apply-button.directive';
import { ReplacePipe } from '../pipes/replace.pipe';
import { DropdownValidatorComponent } from './components/dropdown-validator/dropdown-validator.component';
@NgModule({
  declarations: [
    DropdownValidatorComponent,
    AddApplyButtonDirective,
    ReplacePipe,
  ],
  imports: [CommonModule,
    CommonModule,
    NgxSpinnerModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot()],
  exports: [AddApplyButtonDirective],
})
export class SharedModule { }
