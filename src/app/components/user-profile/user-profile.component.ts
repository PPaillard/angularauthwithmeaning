import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent implements OnInit {
  currentUser: any = {};

  constructor(
    public authService: AuthService,
  ) {
    this.authService.getUserProfile().subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnInit() {}
}
