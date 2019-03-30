import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { AdminComponent } from "./admin.component";
import { HomeComponent } from "./home/home.component";
import { AdministratorComponent } from "./administrator/administrator.component";
import { NabvarComponent } from './nabvar/nabvar.component';


export const routes: Routes = [
    {
        path: "",
        component: AdminComponent,
        children: [
          {
            path: "",
            component: HomeComponent,
          },
             {
                path: "home",
                component: HomeComponent,
              },
              {
                path: "administrator",
                component: AdministratorComponent,
              },
              {
                path: "nabvar",
                component: NabvarComponent,
              }

        ]        
        }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
