import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-qr-scanner',
  standalone: false,

  templateUrl: './qr-scanner.component.html',
  styleUrl: './qr-scanner.component.css',
})
export class QrScannerComponent {
  @Output() onCodeResult = new EventEmitter<string | null>();

  scanCode(result: string): void {
    result = result.split('code=')[1];
    this.onCodeResult.emit(result);
  }
}
