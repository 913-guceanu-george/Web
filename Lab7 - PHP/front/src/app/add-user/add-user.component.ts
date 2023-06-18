import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  name: string = '';
  username: string = '';
  password: string = '';
  addResponse: string = '';

  constructor(private http: HttpClient) {}

  addUser() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('username', this.username);
    formData.append('password', this.password);

    this.http.post('add_user.php', formData).subscribe((response) => {
      this.addResponse = response.toString();
    });
  }
}
