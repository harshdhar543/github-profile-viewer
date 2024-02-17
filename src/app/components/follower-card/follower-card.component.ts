import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-follower-card',
  templateUrl: './follower-card.component.html',
  styleUrls: ['./follower-card.component.css'],
})
export class FollowerCardComponent {
  @Input() avatar!: string;
  @Input() username!: string;

  openProfile(username: string) {
    window.open(`https://github.com/${username}`, '_blank');
  }
}
