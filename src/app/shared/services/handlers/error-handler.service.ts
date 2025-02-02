import { Injectable } from '@angular/core';
import { BadRequest } from '../../errors/bad-request.error';
import { AlertService } from '../alert/alert.service';
import { SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private alertService: AlertService) {

  }

  async handleError(error: Error): Promise<void> {
    if (error instanceof BadRequest) {
      await this.alertService.warning(error.message);
      return;
    }
    await this.alertService.unknownError();
  }
}
