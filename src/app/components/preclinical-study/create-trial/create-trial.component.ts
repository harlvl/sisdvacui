import {DatePipe} from '@angular/common';
import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {NgxSpinnerService} from 'ngx-spinner';
import {map} from 'rxjs/operators';
import {originList} from '../../../models/infectionOrigin';
import {Trial} from '../../../models/trial';
import {TrialService} from '../../../services/trial.service';

@Component({
  providers: [DatePipe],
  selector: 'app-create-trial',
  styleUrls: ['./create-trial.component.scss'],
  templateUrl: './create-trial.component.html',
})
@Injectable({ providedIn: 'root' })
export class CreateTrialComponent implements OnInit {
  public createTrialForm: FormGroup;
  public isTrialCreated: boolean;
  public trialCreated: Trial;
  public originInfectionsList: any[] = originList;
  public datePickerConfig: Partial<BsDatepickerConfig>;
  public today = new Date();
  public myDate: string;

  constructor(
      private trialService: TrialService,
      private SpinnerService: NgxSpinnerService,
      private formBuilder: FormBuilder,
      private datePipe: DatePipe) {
    this.datePickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue'});
    this.dateFormat(this.today);
  }

  public ngOnInit() {
    this.isTrialCreated = false;
    this.createTrialShowForm();
  }

  public createTrialShowForm() {
    this.createTrialForm = this.formBuilder.group({
      insNumber: ['', { validators: [Validators.required], updateOn: 'blur'}],
      location: ['', { validators: [Validators.required], updateOn: 'blur'}],
      origin: ['', { validators: [Validators.required], updateOn: 'blur'}],
      title: ['', { validators: [Validators.required], updateOn: 'blur'}],
      startDate: ['', { validators: [Validators.required], updateOn: 'blur'}],
      phase: ['P', { validators: [Validators.required], updateOn: 'blur'}],
    });
  }

  public onSubmit() {
    this.SpinnerService.show();
    this.trialService.saveTrial(this.createTrialForm.getRawValue()).pipe(map((res) => {
      return res;
    })).subscribe((response) => {
      if (response) {
        console.log('Hay response: ');
        console.log(response);
        this.isTrialCreated = true;
      } else {
        console.log('No hay response');
      }
      this.cancelCreateTrial();
      this.SpinnerService.hide();
    });
  }

  public onValueChange(newDate: Date) {
    console.log('date changed: ' + newDate);
    this.dateFormat(newDate);
  }

  public dateFormat(selectedDate: Date) {
    this.myDate = this.datePipe.transform(selectedDate, 'yyyy-MM-dd');
  }

  get form() {
    return this.createTrialForm.controls;
  }

  public cancelCreateTrial() {
    document.getElementById('createTrialModal').click();
    this.createTrialForm.reset();
  }

}
