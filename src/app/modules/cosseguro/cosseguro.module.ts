import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { CosseguroComponent } from './components/cosseguro.component';
import { CardCosseguroComponent } from './components/card-cosseguro/card-cosseguro.component';
import { CardCosseguradoraComponent } from './components/card-cosseguradora/card-cosseguradora.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CosseguroComponent,
    CardCosseguroComponent,
    CardCosseguradoraComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatStepperModule,
    MatPaginatorModule,
  ],
  exports: [
    CosseguroComponent,
    CardCosseguroComponent,
    CardCosseguradoraComponent
  ]
})
export class CosseguroModule { }
