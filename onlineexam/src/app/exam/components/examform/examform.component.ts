import { Quesmodel } from './../../../models/question/quesmodel';
import { QuestionService } from './../../../services/question/question.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-examform',
  templateUrl: './examform.component.html',
  styleUrls: ['./examform.component.css']
})
export class ExamformComponent implements OnInit {
 Questions: Quesmodel[];
  questionform!: FormGroup;

  constructor( public form:FormBuilder,private questionservice:QuestionService) {
    this.questionform=new FormGroup({});
      
   }

  ngOnInit(): void {

    this.getQuestion();
  

  }

  getQuestion(){
    this.questionservice.getQuestion().subscribe(
      (que)=>
      {this.Questions=que;
        console.log(this.Questions);
        this.Questions.forEach(q=>{
          if(this.questionform!=undefined){
            console.log(q.question);
            this.questionform.addControl(q.question.toString(),new FormControl(""));
          }})},
      (err)=>console.log(err),
      ()=>console.log("Done")
    );
  }
  submit(){
    console.log(this.questionform.value);
  }

}
