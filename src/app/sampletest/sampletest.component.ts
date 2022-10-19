import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampletest',
  templateUrl: './sampletest.component.html',
  styleUrls: ['./sampletest.component.css']
})
export class SampletestComponent implements OnInit {

  constructor() { }
  demostring:any = "Hello Angular";

  checkflag:boolean=true;
  ngOnInit(): void {
  }

}
