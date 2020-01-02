import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <p>
      you selected a department with id = {{depId}} 
    </p>

    <p>
      <button (click)="showOverview()" >Overview</button>
      <button (click)="showContact()" >Contact</button>
    </p>

    <router-outlet></router-outlet>

    <p>
      <button (click) = "onPrevious()">Previous</button>
      <button (click) = "onNext()">Next</button>
    </p>
    <div>
      <button (click) = "back()">Back</button>
    </div>

  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  public depId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
       this.depId = parseInt(params.get('id'))  
    });
  }

  onPrevious() {
    let prevId = this.depId - 1;
    this.router.navigate(['/departments', prevId]);
  }

  onNext() {
    let nextId = this.depId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  back() {
    let selectedId = this.depId ? this.depId : null;
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}
