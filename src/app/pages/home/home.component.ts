import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: GithubService
  ) {
    this.searchForm = this.formBuilder.group({
      username: new FormControl(null),
    });
  }

  searchResult: any = [];

  viewResult: boolean = false;
  searchForm!: FormGroup;

  ngOnInit() {}

  search() {
    const username = this.searchForm.value?.username;
    if (username) {
      this.service.searchUsers(username).subscribe((response) => {
        if (response) {
          this.searchResult = response?.items;
          this.viewResult = true;
        }
      });
    }
  }
}
