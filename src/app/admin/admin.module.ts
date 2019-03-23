import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin.component";
import { AdministratorComponent } from './administrator/administrator.component';
import { SistemasComponent } from './sistemas/sistemas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule

  ],
  declarations: [
    AdministratorComponent, 
    SistemasComponent,
    HomeComponent,
    AdminComponent]
})
export class AdminModule {}
