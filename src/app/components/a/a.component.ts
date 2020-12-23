import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  name: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  // http://localhost:4200/a-component?name=hello%20world
  // should set this.name = "hello world"
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

  goToAA() {
    // before: activatedRoute = '/a-component'
    const id: string = 'hello world';
    const type: string = 'something';
    this.router.navigate(['a-component/a-a-component', id, type], {
      queryParams: { name: 'jesus' }
    });
  }

  goToAB() {
    // before: activatedRoute = '/a-component'
    this.router.navigate(['a-b-component'], {
      relativeTo: this.activatedRoute // requires NavigationExtras imported
    });
    // after: activatedRoute = '/a-component/a-b-component'
  }
}
