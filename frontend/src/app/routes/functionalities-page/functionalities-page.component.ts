import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-functionalities-page',
  templateUrl: './functionalities-page.component.html',
  styleUrls: ['./functionalities-page.component.css'],
})
export class FunctionalitiesPageComponent {
  constructor(private http: HttpClient) {}

  functionalities = this.http.get<any>('http://localhost:3000/functionalities');
}
