import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  constructor(private router: Router) {}

  @Input() username!: string;
  @Input() name!: string;
  @Input() avatar!: string;
  @Input() type!: string;

  ngOnInit() {}

  goToProfile(userId: string): void {
    this.router.navigate(['profile', userId]);
  }
}
