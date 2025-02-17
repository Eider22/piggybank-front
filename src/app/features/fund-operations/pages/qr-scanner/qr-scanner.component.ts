import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-scanner',
  standalone: false,

  templateUrl: './qr-scanner.component.html',
  styleUrl: './qr-scanner.component.css',
})
export class QrScannerComponent {
  constructor(private router: Router) {}

  scanCode(result: string): void {
    const code = result.split('code=')[1];
    this.router.navigate(['/funds/do-to-up'], { queryParams: { code: code } });
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
