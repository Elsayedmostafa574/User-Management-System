import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
     MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,

  ],
  exports: [
    ReactiveFormsModule,
    MatFormFieldModule, 
   MatInputModule, 
   MatIconModule,
  ]
})
export class SharedModule { }
