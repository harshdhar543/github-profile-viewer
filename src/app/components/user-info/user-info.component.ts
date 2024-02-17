import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  constructor() {}

  @Input() userData: any = {};
  @Input() followers: any = [];
  @Input() followings: any = [];

  openProfile(username: string) {
    window.open(`https://github.com/${username}`, '_blank');
  }
}
