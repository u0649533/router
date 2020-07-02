import { Component, OnInit, ViewChild } from '@angular/core';
import { MyGuardGuard } from 'app/my-guard.guard';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pw:string;

  onKey(event: any) { // without type info
    this.pw = event.target.value ;
   
  }


    constructor(private guardService: MyGuardGuard) {}

    sendValueIntoService(){
        
      this.guardService.setTest(this.pw);
      //console.log(this.pw);
    }
  

  ngOnInit() {
  }

}
