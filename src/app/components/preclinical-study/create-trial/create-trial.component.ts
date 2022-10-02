import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-create-trial',
  templateUrl: './create-trial.component.html',
  styleUrls: ['./create-trial.component.scss'],
})
@Injectable({ providedIn: 'root' })
export class CreateTrialComponent implements OnInit {
  public createTrialForm: FormGroup;
  public trialCreated: boolean;

  constructor(
      private SpinnerService: NgxSpinnerService,
      private formBuilder: FormBuilder) { }

  public ngOnInit() {
    this.trialCreated = false;
    this.createTrialShowForm();
  }

  public onSubmit() {
    this.SpinnerService.show();
    console.log('submitted');
    this.trialCreated = true;
    this.cancelCreateTrial();
    this.SpinnerService.hide();
  }

  public createTrialShowForm() {
    this.createTrialForm = this.formBuilder.group({
      insNumber: ['', { validators: [Validators.required], updateOn: 'blur'}],
      trialTitle: ['', { validators: [Validators.required], updateOn: 'blur'}],
      location: ['', { validators: [Validators.required], updateOn: 'blur'}],
      origin: ['', { validators: [Validators.required], updateOn: 'blur'}],
    });
  }

  get form() {
    return this.createTrialForm.controls;
  }

  public cancelCreateTrial() {
    document.getElementById('createTrialModal').click();
    this.createTrialForm.reset();
  }

}
