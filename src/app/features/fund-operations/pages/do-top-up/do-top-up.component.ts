import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { RequestService } from '../../services/request/request.service';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { ErrorHandlerService } from '../../../../shared/services/handlers/error-handler.service';
import { FormField } from '../../components/see-funds-form/form-field.model';
import { DoTopUpDto } from '../../models/dtos/do-to-up.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-do-top-up',
  standalone: false,

  templateUrl: './do-top-up.component.html',
  styleUrl: './do-top-up.component.css',
})
export class DoTopUpComponent {
  code: string | null = '';
  amount: number = 0;
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
      codeControl: [
        this.code,
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_+=-]*$/),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.getSatoshisByCode();
    this.loadCode();
    this.updateNewFormGroup();
  }

  updateNewFormGroup() {
    this.formGroupRecarga = this.formBuilder.group({
      phoneControl: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Validación de 10 dígitos
      codeControl: [
        this.code,
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_+=-]*$/),
        ],
      ],
    });
  }

  loadCode() {
    const urlParams = new URLSearchParams(window.location.search);
    this.code = urlParams.get('code');
    this.getSatoshisByCode();
  }

  /**
   * @returns retorna el control codeControl
   */
  getcodeControl(): AbstractControl | null {
    return this.formGroupRecarga.get('codeControl'); // Retorna el valor o una cadena vacía
  }

  /**
   *
   * @returns retorna el valor del campo codeControl
   */
  getcodeControlValue(): string {
    return this.formGroupRecarga.get('codeControl')?.value || ''; // Retorna el valor o una cadena vacía
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
    const doTopUpData: DoTopUpDto = {
      phone: this.getPhoneControlValue(),
      code: this.getcodeControlValue(),
    } as DoTopUpDto;
    try {
      const funds = await lastValueFrom(
        this.requestService.doTopUp(doTopUpData)
      );

      this.alertService.success(`Tus fondos actuales son: ${funds} satoshis`);
    } catch (error) {
      this.errorHandler.handleError(error as Error);
      this.router.navigate(['']);
    }
  }

  /**
   * Método que obtiene los satoshis por código
   */
  async getSatoshisByCode() {
    if (!this.code) {
      console.error('No se encontró el código en la URL');
      return;
    }

    try {
      this.amount = await lastValueFrom(
        this.requestService.getSatoshis(this.code)
      );
    } catch (error) {
      await this.errorHandler.handleError(error as Error);
      this.router.navigate(['']);
    }
  }
}
