import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-functionality-details-page',
  templateUrl: './functionality-details-page.component.html',
  styleUrls: ['./functionality-details-page.component.css'],
})
export class FunctionalityDetailsPageComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  functionality = this.http.get<any>(
    `http://localhost:3000/functionalities/${this.route.snapshot.params['id']}`
  );
}
