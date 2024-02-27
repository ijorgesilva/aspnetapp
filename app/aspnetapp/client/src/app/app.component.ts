import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'client' as string;
  users$: any; // todo: create a type/interface for users

  constructor(private http: HttpClient){}

  ngOnInit(): void {
      // todo: move to service folder using rxjs
      this.http.get('https://localhost:5000/api/users').subscribe({
        next: r => {
          this.users$ = r;
          console.log(r);
        },
        error: e => console.error('Whoa there cowboy ',e),
        complete: () => {},
      });
  }

}
