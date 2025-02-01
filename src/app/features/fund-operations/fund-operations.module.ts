import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundOperationsRoutingModule } from './fund-operations-routing.module';
import { SeeFundsComponent } from './pages/see-funds/see-funds.component';
import { SeeFundsFormComponent } from './components/see-funds-form/see-funds-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SeeFundsComponent,
    SeeFundsFormComponent
  ],
  imports: [
    CommonModule,
    FundOperationsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SeeFundsComponent
  ]
})
export class FundOperationsModule { }
