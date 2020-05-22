import { Component, OnInit } from '@angular/core';
interface Man {
  hand: number;
  feet: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  man: Man;
  data: string;
  constructor() {
    this.data = '123';
    this.man = {
      hand: 2,
      feet: 2
    };
  }

  ngOnInit(): void {
  }
  add(e): void {
    console.log('add', e);
  }
}
