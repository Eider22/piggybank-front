import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private route: Router) {}

  onRecargar(): void {
    this.route.navigate(['/funds/do-to-up']);
  }
  onVerFondos(): void {
    this.route.navigate(['/funds/see-funds']);
  }
  onRetirar(): void {
    this.route.navigate(['/funds/do-withdrawal']);
  }
}
