import { Component, Input, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dropdown-validator',
  template: '',
})
export class DropdownValidatorComponent {

  static readonly VALID_CLASS = 'validField';
  static readonly INVALID_CLASS = 'invalidField';

  canBeInvalid :boolean;
  currentDropdownClass: string;
  searchForm: FormGroup;
  isDropDownSelected: boolean = false;

  initDropdownData(searchForm: FormGroup){
    this.canBeInvalid = false ;
    this.currentDropdownClass =  DropdownValidatorComponent.VALID_CLASS ;
    this.searchForm = searchForm;
    this.isDropDownSelected = false;
    this.searchForm.get('subject').enable();
  }

  getDropdownClass(){
    if (this.canBeInvalid) {
      this.canBeInvalid = false;
      this.setClass();
    }
    if( this.currentDropdownClass === DropdownValidatorComponent.INVALID_CLASS ){
      this.setClass();
    }
    return this.currentDropdownClass;
  }

  setClass() {
    if(!this.searchForm.get('subject').touched){
      this.currentDropdownClass = DropdownValidatorComponent.VALID_CLASS;
    }else{
      if (this.searchForm.get('subject').value.length > 0) {
        this.currentDropdownClass = DropdownValidatorComponent.VALID_CLASS;
      }
      else {
        this.currentDropdownClass = DropdownValidatorComponent.INVALID_CLASS;
      }
    }
  }

  setSubjectTouched(){
    this.searchForm.get('subject').markAsUntouched();
    this.setDropdownSelected();
  }

  setDropdownSelected(){
    this.isDropDownSelected = true;
    this.canBeInvalid = false;
  }

  onDropDownClose() {
    if ( this.isDropDownSelected ){
      this.markDropdownAsTouched();
    }
  }

  markDropdownAsTouched(){
    this.canBeInvalid = true;
    this.searchForm.get('subject').markAsTouched();
    this.isDropDownSelected = false;
  }

  setSubjectUnTouched(){
    this.searchForm.get('subject').markAsUntouched();
    this.isDropDownSelected = false;
    this.canBeInvalid = true;
  }

  disabled() {
    return this.searchForm.get('subject').disabled;
  }
}
