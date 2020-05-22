import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  constructor(
    private math: MathService
  ) { }
  ngOnInit(): void {
    console.log(this.math.sub(5, 3));
    console.log(this.math.pi);
  }

}
