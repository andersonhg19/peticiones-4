import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin.component";
import { AdministratorComponent } from './administrator/administrator.component';
import { SistemasComponent } from './sistemas/sistemas.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,

  ],
  declarations: [
    AdministratorComponent, 
    SistemasComponent,
     HomeComponent,
     AdminComponent]
})
export class AdminModule {}
