import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private route: Router, private alertService: AlertService) {}

  onRecargar(): void {
    this.route.navigate(['/funds/scann-code']);
    // this.route.navigate(['/funds/do-to-up']);
  }
  onVerFondos(): void {
    this.route.navigate(['/funds/see-funds']);
  }

  async onRetirar(): Promise<void> {
    const confirmation: boolean = await this.alertService.confirm(
      '¿Está seguro que desea retirar los fondos?'
    );

    this.route.navigate(['/']);

    if (confirmation) {
      this.sendWhatsappMessage();
    }
    // this.route.navigate(['/funds/do-withdrawal']);
  }

  sendWhatsappMessage() {
    const phoneNumber = '573008188284';
    const message = 'Hola!\nDeseo retirar mis fondos de bismetisb.';
    const codifiedMessage = encodeURIComponent(message);
    const urlWhatsapp = `https://wa.me/${phoneNumber}/?text=${codifiedMessage}`;
    window.open(urlWhatsapp, '_blank');
  }
}
