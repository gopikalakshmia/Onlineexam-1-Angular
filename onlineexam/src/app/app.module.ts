import { ExamformComponent } from './exam/components/examform/examform.component';
import { ScoreComponent } from './score/components/score/score.component';
import { RouterModule } from '@angular/router';
import { ScoreModule } from './score/score.module';
import { ExamModule } from './exam/exam.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
const routes=[
  {path:'',component:ExamformComponent},
  {path:'score',component:ScoreComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ExamModule,
    HttpClientModule,
    ScoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
