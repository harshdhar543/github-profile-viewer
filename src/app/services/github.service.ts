import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  searchUsers(searchString: string): Observable<any>{
    return this.http.get(`https://api.github.com/search/users?q=${searchString}&per_page=100`)
  }

  getUserDetails(username: string) {
    return this.http.get(`https://api.github.com/users/${username}`);
  }

  getRepos(repoUrl: string) {
    return this.http.get(repoUrl);
  }
}
