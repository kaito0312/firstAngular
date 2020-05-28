import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-recative',
  templateUrl: './form-recative.component.html',
  styleUrls: ['./form-recative.component.scss']
})
export class FormRecativeComponent implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl(''),
    realname: new FormControl(''),
    address: new FormArray([
      new FormControl('高雄市'),
      new FormControl('苓雅區'),
      new FormControl('大順三路')
    ])

  });
  constructor() { }

  ngOnInit(): void {
    this.profileForm.patchValue({
      username: 'xbx'
    });
  }
  onSubmit() {
    console.log(this.profileForm.value);
  }
}
