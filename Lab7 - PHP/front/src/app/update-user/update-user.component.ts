import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  username: string = '';
  password: string = '';
  updateResponse: string = '';

  constructor(private http: HttpClient) {}

  updateUser() {
    const formData = new FormData();
    formData.append('username', this.username);
    formData.append('password', this.password);

    this.http.post('update_user.php', formData).subscribe((response) => {
      this.updateResponse = response.toString();
    });
  }
}
