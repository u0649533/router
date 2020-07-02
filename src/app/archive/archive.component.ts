import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {MyGuardGuard} from 'app/my-guard.guard';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  pw:string;

  
    constructor(private guardService: MyGuardGuard, private route:ActivatedRoute, private router:Router) {}
    onKey(event: any) { // without type info
      this.pw = event.target.value ;
     
    }
    sendValueIntoService(){
        
      this.guardService.setTest(this.pw);
      //console.log(this.pw);
    }
  
    flag = true;
  show(){
    if(this.flag){
    this.router.navigate(['archiveDetail'],{relativeTo: this.route});
  }else{
    this.router.navigate(['posts']);}
    this.flag = !this.flag;
  }

  ngOnInit() {
  }

}
