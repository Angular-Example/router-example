import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { skip, map } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-a-a',
  templateUrl: './a-a.component.html',
  styleUrls: ['./a-a.component.css']
})
export class AAComponent implements OnInit {

  id_oldway: string;
  id_newway: string;
  type_oldway: string;
  type_newway: string;
  name_oldway: string;
  name_newway: string;

  name_newway$: Observable<string>;
  private sub: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getParams();
    this.getQueryParams();
  }

  getParams(): void {
    // id specified in app-routing.module.ts
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id_oldway = params['id'];
      this.type_oldway = params['type'];
    });
    this.activatedRoute.paramMap.subscribe(params => {
      this.id_newway = params.get('id');
      this.type_newway = params.get('type');
    })
//     this.name_newway$ = this.activatedRoute.paramMap.pipe(switchMap(
//       (params: ParamMap) => {
//         this.name2 = params.get('name');
//         return of(this.name);
//       }
//     ));
  }

  getQueryParams(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.name_oldway = params['name'];
    });
//     this.activatedRoute.queryParamMap.pipe(skip(1)).subscribe(params => {
//        console.log(params);
//       this.name_newway = params['name'];
//     });
    this.activatedRoute.queryParamMap.pipe(
      map((paramMap: ParamMap) => {
        this.name_newway = paramMap.get('name');
      }),
      distinctUntilChanged()
    ).subscribe(val => {
      console.log(val);
//       this.param = val;
      // having changedetection.onPush activated you would need to call the
      // cdR.markAsChecked() here
    });
  }
}
