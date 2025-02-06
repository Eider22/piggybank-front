import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  async success(message: string, title: string = 'Éxito'): Promise<SweetAlertResult<void>> {
    return Swal.fire({
      title,
      text: message,
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#b3831d',
    });
  }

  async unknownError(): Promise<SweetAlertResult<void>> {
    return Swal.fire({
      title: 'Error',
      text: 'Error desconocido, por favor contacte al administrador',
      icon: 'error',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#b3831d',
    });
  }

  async warning(message: string):  Promise<SweetAlertResult<void>> {
    return Swal.fire({
      title: 'Atención',
      text: message,
      icon: 'warning',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#b3831d',
    });
  }

  info(message: string, title: string = 'Información') {
    Swal.fire(title, message, 'info');
  }

  confirm(message: string, title: string = 'Confirmar'): Promise<boolean> {
    return Swal.fire({
      title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => result.isConfirmed);
  }
}
