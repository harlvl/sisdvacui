import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Util } from '../../helpers/util';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})

export class PageNotFoundComponent implements OnInit {
  public url: string;
  public errorCode = '403';
  public message: string;

  constructor(private route: ActivatedRoute, private util: Util) {
    this.url = environment.homeURI;
  }

  public ngOnInit(): void {

    this.message = this.util.errorMessage;
    if (this.message === undefined || this.message === null) {
      this.message = 'Unknown';
    }

    if (this.route.snapshot.queryParamMap.get('code')) {
      this.errorCode = this.route.snapshot.queryParamMap.get('code');
    }
  }

  public redirect() {
    window.location.href = this.url;
  }

}
