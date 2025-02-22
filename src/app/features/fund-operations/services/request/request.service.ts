import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { ResponseDto } from '../../../../shared/models/dtos/response.dto';
import { environment } from '../../../../environments/environment.local';
import { BadRequest } from '../../../../shared/errors/bad-request.error';
import { DoTopUpDto } from '../../models/dtos/do-to-up.dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private apiTopUpUrl = `${environment.apiUrl}top-up/`;
  private apiAccountsUrl = `${environment.apiUrl}accounts/`;

  constructor(private http: HttpClient, private router: Router) {}

  getFunds(phone: string): Observable<number> {
    return this.http
      .get<ResponseDto<number>>(
        `${this.apiAccountsUrl}get-account-funds?phone=${phone}`
      )
      .pipe(
        map((response) => {
          if (response.statusCode === 200) {
            return response.data;
          }
          if (response.statusCode === 400) {
            throw new BadRequest(response.message);
          }
          throw new Error('Error desconocido');
        }),
        catchError((error) => {
          throw error;
        })
      );
  }

  getSatoshis(code: string): Observable<number> {
    return this.http
      .get<ResponseDto<number>>(
        `${this.apiTopUpUrl}get-code-sts?code=${code}`
      )
      .pipe(
        map((response) => {
          if (response.statusCode === 200) {
            return response.data;
          }
          if (response.statusCode === 400) {
            throw new BadRequest(response.message);
          }
          throw new Error('Error desconocido');
        }),
        catchError((error) => {
          throw error;
        })
      );
  }

  doTopUp(topUpData: DoTopUpDto): Observable<number> {
    return this.http
      .post<ResponseDto<number>>(
        `${this.apiTopUpUrl}do-top-up`,
        topUpData
      )
      .pipe(
        map((response) => {
          if (response.statusCode === 200) {
            return response.data;
          }
          if (response.statusCode === 400) {
            throw new BadRequest(response.message);
          }
          throw new Error('Error desconocido');
        }),
        catchError((error) => {
          throw error;
        })
      );
  }
}
