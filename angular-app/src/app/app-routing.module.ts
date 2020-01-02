import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    { path : '', redirectTo: '/departments', pathMatch: 'full'},
    { path: 'departments', component : DepartmentListComponent},
    { 
        path: 'departments/:id', 
        component: DepartmentDetailsComponent,
        children: [
            { path: 'overview', component: DepartmentOverviewComponent},
            { path: 'contact', component: DepartmentContactComponent}
        ]
    },
    { path: 'employees', component: EmployeeComponent},
    { path: "**", component: PageNotFoundComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [EmployeeComponent, 
    DepartmentListComponent, PageNotFoundComponent, 
    DepartmentDetailsComponent, DepartmentOverviewComponent, DepartmentContactComponent]