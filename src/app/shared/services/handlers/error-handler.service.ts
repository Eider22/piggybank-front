import { Injectable } from '@angular/core';
import { BadRequest } from '../../errors/bad-request.error';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private alertService: AlertService) {

  }

  handleError(error: Error): void {
    if (error instanceof BadRequest) {
      this.alertService.warning(error.message);
      return;
    }
    this.alertService.unknownError();
  }
}
