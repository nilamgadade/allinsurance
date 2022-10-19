import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
  checkFlag:boolean= true;

  constructor(private router: Router){

  }


  navigatetoStud(){

    if(this.checkFlag== true){
      // this.router.navigate(['stud']);
      this.router.navigateByUrl('stud');
    }
    // else{
    //   this.router.navigate(['error']);
    // }
  }
}
