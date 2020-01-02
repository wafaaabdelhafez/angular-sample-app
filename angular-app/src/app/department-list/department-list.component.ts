import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3> Deaprment List</h3>
    <ul class = "items">
    <li (click) = "onSelect(dep)" [class.selected]="isSelected(dep)" *ngFor = "let dep of departments">
      <span class = "badge"> {{dep.id}}</span> {{dep.name}}
    </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'))  
   });
  }

  onSelect(department) {
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(dep) {
    return this.selectedId === dep.id;
  }

}
