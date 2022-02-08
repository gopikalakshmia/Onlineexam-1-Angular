import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-examform',
  templateUrl: './examform.component.html',
  styleUrls: ['./examform.component.css']
})
export class ExamformComponent implements OnInit {
 Questions=[
  {
    "id": 1,
    "question": "How to delete a directory in Linux?",
    "description": "delete folder",
    "answers": {
      "answer_a": "ls",
      "answer_b": "delete",
      "answer_c": "remove",
      "answer_d": "rmdir",
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "false",
      "answer_b_correct": "false",
      "answer_c_correct": "false",
      "answer_d_correct": "true",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "explanation": "rmdir deletes an empty directory",
    "tip": null,
    "tags": [],
    "category": "linux",
    "difficulty": "Easy"
  }
]
  questionform!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.questionform=new FormGroup({
      answers:new FormControl('')
      
    })
  }
  submit(){
    console.log(this.questionform.value);
  }

}
