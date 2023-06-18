import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-lookup',
  templateUrl: './user-lookup.component.html',
  styleUrls: ['./user-lookup.component.css'],
})
export class UserLookupComponent {
  name: string = '';
  user: any = null;

  constructor(private http: HttpClient) {}

  lookupUser() {
    this.http
      .get<any>('lookup_user.php?name=' + this.name)
      .subscribe((user) => {
        this.user = user;
      });
  }
}
