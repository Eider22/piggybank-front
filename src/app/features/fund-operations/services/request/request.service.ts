import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { ResponseDto } from '../../../../shared/models/dtos/response.dto';
import { environment } from '../../../../environments/environment.local';
import { BadRequest } from '../../../../shared/errors/bad-request.error';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private apiUrl = `${environment.apiUrl}funds/`;

  constructor(private http: HttpClient) {}

  getFunds(phone: string): Observable<number> {
    return this.http
      .get<ResponseDto<number>>(
        `${this.apiUrl}get-account-funds?phone=${phone}`
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
