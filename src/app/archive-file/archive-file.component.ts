import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-archive-file',
  templateUrl: './archive-file.component.html',
  styleUrls: ['./archive-file.component.css']
})
export class ArchiveFileComponent implements OnInit {
 //year:number;
  month:string;
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute, private router: Router) { }

  viewAll(){
    this.router.navigate(['/archive'])
  }
  ngOnInit() {
    this.paramsSubscription = this.route.paramMap
    .subscribe(params => {
      console.log( this.month = params.get('month'));
     })
   }
   

   ngOnDestroy(){
    this.paramsSubscription.unsubscribe();

   }
  }

