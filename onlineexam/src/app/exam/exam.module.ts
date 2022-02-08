import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamformComponent } from './components/examform/examform.component';



@NgModule({
  declarations: [
    ExamformComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[ExamformComponent]
})
export class ExamModule { }
