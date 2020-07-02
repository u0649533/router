import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private router: Router) { }

    submit(){
      this.router.navigate(['/followers'],{queryParams: {page:1,order:'newest'}})
    }
  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
     let id = +params.get('id');
     console.log(id)
    })
  }

}
