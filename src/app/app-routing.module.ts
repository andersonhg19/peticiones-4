import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
  import { from } from 'rxjs';
  import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
          { 
          path: "", 
          component: LoginComponent 
        },
        { 
          path: "login", 
          component: LoginComponent 
        },
        { 
          path: "admin", 
          loadChildren: "./admin/admin.module#AdminModule" 
        }
]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
