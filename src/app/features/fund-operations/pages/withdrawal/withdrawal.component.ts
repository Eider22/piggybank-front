import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdrawal',
  standalone: false,

  templateUrl: './withdrawal.component.html',
  styleUrl: './withdrawal.component.css',
})
export class WithdrawalComponent implements OnInit {
  constructor(private alertService: AlertService, private route: Router) {}

  async ngOnInit(): Promise<void> {
    const confirmation: boolean = await this.alertService.confirm(
      '¿Está seguro que desea retirar los fondos?'
    );

    this.route.navigate(['/']);

    if (confirmation) {
      this.sendWhatsappMessage();
    }
  }

  sendWhatsappMessage() {
    const phoneNumber = '573008188284';
    const message = 'Hola!\nDeseo retirar mis fondos de bismetisb.';
    const codifiedMessage = encodeURIComponent(message);
    const urlWhatsapp = `https://wa.me/${phoneNumber}/?text=${codifiedMessage}`;
    window.open(urlWhatsapp, '_blank');
  }
}
