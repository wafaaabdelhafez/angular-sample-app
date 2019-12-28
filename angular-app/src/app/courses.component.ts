import { CoursesService } from './courses.service';
import {Component, Input, Output,EventEmitter} from '@angular/core';


@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <h2>{{ title | lowercase}}</h2>
        <h2>{{ title | uppercase}}</h2>
        <h2>{{ title | titlecase}}</h2>
        <h2>{{ title | slice:3:9}}</h2>

        <h2>{{ person | json}}</h2>

        <h2>{{ 5.678 | number: '1.2-3'}}</h2>
        <h2>{{ 5.678 | number: '3.4-5'}}</h2>
        <h2>{{ 5.678 | number: '3.1-2'}}</h2>

        <h2>{{ 0.25 | percent}}</h2>
        <h2>{{ 0.25 | currency: 'GBP'}}</h2>

        <h2>{{ date }}</h2>
        <h2>{{ date | date:'short'}}</h2>
        <h2>{{ date | date:'shortDate'}}</h2>
        <h2>{{ date | date:'shortTime'}}</h2>

        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
                <button (click) = "onClick(course)">Click here</button>
            </li>
        </ul>

        <ul>
            <input #myInput type="text">
            <button (click) = "logInput(myInput.value)"> Log </button>
         </ul>
        
        <input [(ngModel)] = "msg" type="text">
        {{msg}}

        <ul>
            <h2 *ngIf = "display; else elseBlock"> 
              NICE
            </h2>

            <ng-template #elseBlock>
                <h2>
                    NICE is hidden 
                </h2>
            </ng-template>
        </ul>

        <ul>
            <div *ngIf = "display; then thenBlock; else elseBlock"></div>

            <ng-template #thenBlock>
                <h2>
                    NICE is Shown 
                </h2>
            </ng-template>

            <ng-template #elseBlock>
                <h2>
                    NICE is hidden 
                </h2>
            </ng-template>
        </ul>

        <div [ngSwitch] = "color">
            <div *ngSwitchCase="'red'"> you picked {{color}} </div> 
            <div *ngSwitchCase="'blue'"> you picked {{color}} </div>
            <div *ngSwitchCase="'green'"> you picked {{color}} </div>
            <div *ngSwitchDefault> Pick a gain </div>
        </div>

        <h2>{{"Hello " + ParentData}}</h2>

        <button (click) = "fireEvent()"> Send event</button>
    `
})

export class CoursesComponent {
    title = "List of courses";
    msg = "";
    courses;
    display = true;
    color = "green";
    @Input('ParentData') ParentData;

    @Output() childEvent = new EventEmitter();

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onClick(name){
        console.log("Hello: "+ name);
    }

    logInput(value){
        console.log(value);
    }

    fireEvent(){
        this.childEvent.emit('Hey Angular');
    }

    public person = {
        "firstName": "Wafaa",
        "lastName": "Ahmed"
    }

    public date = new Date();
}