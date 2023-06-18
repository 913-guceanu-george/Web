import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-browsing',
  templateUrl: './user-browsing.component.html',
  styleUrls: ['./user-browsing.component.css'],
})
export class UserBrowsingComponent implements OnInit {
  selectedRole: string = '';
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http
      .get<any[]>('fetch_users.php?roleFilter=' + this.selectedRole)
      .subscribe((users) => {
        this.users = users;
      });
  }
}
