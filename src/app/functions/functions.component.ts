import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  goOrg() {
    this.router.navigate(['functions/org']);
  }
  goMember() {
    this.router.navigate(['functions/member/1']);
  }
  Back() {
    this.location.back();
  }
}
