import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.scss']
})
export class OrgComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url = 'https://wmpro51.sun.net.net.tw/xmlapi/index.php?action=login';
    this.http.get(url).subscribe((res) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }

}
