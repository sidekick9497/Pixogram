import { Component, OnInit } from '@angular/core';
declare function animateBg() ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    animateBg();
  }
  title = 'base-app';
}
