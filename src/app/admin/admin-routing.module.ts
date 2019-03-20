import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { AdminComponent } from "./admin.component";
import { HomeComponent } from "./home/home.component";


export const routes: Routes = [
    {
        path: "",
        component: AdminComponent,
        children: [
            {
                path: "home",
                component: HomeComponent,
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
