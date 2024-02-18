import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  errors: any = {
    100: 'Continue',
    101: 'Switching Protocol',
    102: 'Processing (WebDAV)',
    103: 'Early Hints',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status (WebDAV)',
    208: 'Already Reported (WebDAV)',
    226: 'IM Used (HTTP Delta encoding)',
    300: 'Multiple Choice',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    306: 'Unused',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: "I'm a teapot",
    421: 'Misdirected Request',
    425: 'Too Early',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    451: 'Unavailable For Legal Reasons',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage (WebDAV)',
    508: 'Loop Detected (WebDAV)',
    510: 'Not Extended',
    511: ' Network Authentication Required',
  };
  searchUsers(searchString: string): Observable<any> {
    return this.http.get(
      `https://api.github.com/search/users?q=${searchString}&per_page=100`
    ).pipe(
      catchError((err: HttpErrorResponse) => {
        this.toastr.error(err.message, `Error: ${this.errors[err.status]}`);
        return of();
      })
    );
  }

  getUserDetails(username: string) {
    return this.http.get(`https://api.github.com/users/${username}`).pipe(
      catchError((err: HttpErrorResponse) => {
        this.toastr.error(err.message, `Error: ${this.errors[err.status]}`);
        return of();
      })
    );
  }

  getRepositories(username: string | null) {
    return this.http.get(`https://api.github.com/users/${username}/repos`).pipe(
      catchError((err: HttpErrorResponse) => {
        this.toastr.error(err.message, `Error: ${this.errors[err.status]}`);
        return of();
      })
    );
  }

  getFollowings(username: string | null): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}/following`).pipe(
      catchError((err: HttpErrorResponse) => {
        this.toastr.error(err.message, `Error: ${this.errors[err.status]}`);
        return of();
      })
    );
  }
  getFollowers(username: string | null): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}/followers`).pipe(
      catchError((err: HttpErrorResponse) => {
        this.toastr.error(err.message, `Error: ${this.errors[err.status]}`);
        return of();
      })
    );
  }
}
