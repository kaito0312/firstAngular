import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-tpl',
  templateUrl: './form-tpl.component.html',
  styleUrls: ['./form-tpl.component.scss']
})
export class FormTplComponent implements OnInit {

  name: string;
  constructor() {
    this.name = '123';
  }

  ngOnInit(): void {
  }
  onSubmit(value) {
    console.log(value);
  }
}
