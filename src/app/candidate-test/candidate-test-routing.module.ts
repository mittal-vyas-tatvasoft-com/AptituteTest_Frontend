import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { RoleGuard } from '../core/guards/role/role.guard';
import { Navigation } from '../shared/common/enums';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [RoleGuard],
        data: { allowedRoles: [Navigation.RoleUser] },
        children: [
            {
                path: ``,
                component: DashboardComponent
            },

        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CandidateTestRoutingModule { }