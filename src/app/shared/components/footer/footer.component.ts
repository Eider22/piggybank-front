import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  isImageExpanded = false;
  footerData = {
    members: [
      { name: 'Nilson Islen Catrillón', img: 'images/representante.png' },
      { name: 'John Eider Cardona', img: 'images/representante2.png' },
    ],
    company: {
      name: 'BismetisB',
      contact: {
        phone: '+57 300 123 4567',
        email: 'contacto@empresa.com',
      },
    },
    companyDescription:
      '¿Tienes alguna duda o necesitas más información? ¡Contáctanos! Nuestro equipo está siempre atento para brindarte la mejor atención y resolver todas tus inquietudes. Tu satisfacción es nuestra prioridad.',
  };

  expandImage() {
    this.isImageExpanded = !this.isImageExpanded;
  }
}
