import { Component, OnInit } from '@angular/core';
import {StudyUser} from '../../models/studyUser';
import {User} from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public currentUser: StudyUser;
  constructor() {
    this.currentUser = new StudyUser();
    this.currentUser.name = 'Jose Alfonso';
    this.currentUser.lastname = 'Ochoa Perez';
    this.currentUser.role = 'Doctor Investigador Principal';
    this.currentUser.researchEntity = 'Vacunas OSAL';
    this.currentUser.status = 'Activo';
  }

  public ngOnInit() {
  }

}
