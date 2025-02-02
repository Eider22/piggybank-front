import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RequestService } from '../../services/request/request.service';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { ResponseDto } from '../../../../shared/models/dtos/response.dto';
import { FormField } from './form-field.model';
import { lastValueFrom } from 'rxjs';
import { BadRequest } from '../../../../shared/errors/bad-request.error';
import { ErrorHandlerService } from '../../../../shared/services/handlers/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-see-funds-form',
  standalone: false,

  templateUrl: './see-funds-form.component.html',
  styleUrl: './see-funds-form.component.css',
})
export class SeeFundsFormComponent {
  formGroupRecarga: FormGroup;
  phoneField: FormField = {
    id: 'phone',
    name: 'phoneControl',
    type: 'tel',
    label: 'Ingrese el Número de celular*',
    placeholder: 'Ej. 3141234567',
    required: true,
  };

  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private alertService: AlertService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) {
    this.formGroupRecarga = this.formBuilder.group({
      phoneControl: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  /**
   *
   * @returns retorna el control phoneControl
   */
  getPhoneControl(): AbstractControl | null {
    return this.formGroupRecarga.get('phoneControl');
  }

  /**
   *
   * @returns retorna el valor del campo phoneControl
   */
  getPhoneControlValue(): string {
    return this.formGroupRecarga.get('phoneControl')?.value || '';
  }

  /**
   * Método que se ejecuta al enviar el formulario
   */
  async onSubmit() {
    try {
      const funds = await lastValueFrom(
        this.requestService.getFunds(this.getPhoneControlValue())
      );

      this.alertService.success(`Tus fondos actuales son: ${funds} satoshis`);
    } catch (error) {
      this.errorHandler.handleError(error as Error);
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
