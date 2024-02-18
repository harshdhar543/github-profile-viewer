import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private route: ActivatedRoute, private service: GithubService) {}

  username: string | null = null;
  isDataLoaded: boolean = false
  hasRepoDataLoaded: boolean = false
  
  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('userid');
    console.log(this.username);

    this.getUserData();
  }

  userData: any = {};
  getUserData() {
    if (this.username) {
      this.service.getUserDetails(this.username).subscribe((response) => {
        if (response) {
          this.userData['user'] = response;
          this.isDataLoaded = true
          this.getRepoData();
          this.getFollowingsData();
          this.getFollowersData();
        }
      });
    }
  }

  getRepoData() {
    this.service.getRepositories(this.username).subscribe((response) => {
      if (response) {
        this.userData['repoData'] = response;
        this.hasRepoDataLoaded = true
      }
    });
  }

  getFollowingsData() {
    this.service.getFollowings(this.username).subscribe((response) => {
      if (response) {
        this.userData['followingsData'] = response;
      }
    });
  }

  getFollowersData() {
    this.service.getFollowers(this.username).subscribe((response) => {
      if (response) {
        this.userData['followersData'] = response;
      }
    });
  }
}
