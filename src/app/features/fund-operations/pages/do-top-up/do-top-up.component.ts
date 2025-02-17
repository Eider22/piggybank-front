import { Component } from '@angular/core';

@Component({
  selector: 'app-do-top-up',
  standalone: false,

  templateUrl: './do-top-up.component.html',
  styleUrl: './do-top-up.component.css',
})
export class DoTopUpComponent {
  code: string | null = null;

  onCodeResult(result: string | null): void {
    this.code = result;  }
}
