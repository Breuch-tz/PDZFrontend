import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}
  public onEmailCreate(emailForm: {
    eName: String;
    eEmail: String;
    eMessage: String;
    emailTo: String;
    company: String;
  }): Observable<IEmailModel> {
    emailForm.emailTo = 'breuch.tizian@gmail.com';
    emailForm.company = 'Company';

    return this.http.post<any>('http://localhost:3000', emailForm).pipe(
      tap((response: any) => {
        console.log('server response: ', response);
      })
    );
  }
}

export interface IEmailModel {
  eName: String;
  eEmail: String;
  eMessage: String;
  emailTo: String;
}
