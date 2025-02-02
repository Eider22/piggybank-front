import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { FormField } from '../see-funds-form/form-field.model';
import { RequestService } from '../../services/request/request.service';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { ErrorHandlerService } from '../../../../shared/services/handlers/error-handler.service';
import { Router } from '@angular/router';
import { DoTopUpDto } from '../../models/dtos/do-to-up.dto';

@Component({
  selector: 'app-do-to-up-form',
  standalone: false,

  templateUrl: './do-to-up-form.component.html',
  styleUrl: './do-to-up-form.component.css',
})
export class DoToUpFormComponent {
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

  getPhoneControl(): AbstractControl | null {
    return this.formGroupRecarga.get('phoneControl');
  }
  getcodeControl(): AbstractControl | null {
    return this.formGroupRecarga.get('codeControl'); // Retorna el valor o una cadena vacía
  }
  getPhoneControlValue(): string {
    return this.formGroupRecarga.get('phoneControl')?.value || '';
  }
  getcodeControlValue(): string {
    return this.formGroupRecarga.get('codeControl')?.value || ''; // Retorna el valor o una cadena vacía
  }

  /**
   * Método que se ejecuta al enviar el formulario
   */
  async onSubmit() {
    const confirm = await this.alertService.confirm(
      '¿Estás seguro de realizar la recarga?'
    );
    if (!confirm) {
      return;
    }

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

  goHome() {
    this.router.navigate(['/']);
  }
}
