import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AdminRoutingModule } from "./admin-routing.module";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AdminComponent } from "./admin.component";
import { AdministratorComponent } from './administrator/administrator.component';
import { SistemasComponent } from './sistemas/sistemas.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HomeComponent,
    NavbarComponent,
    AdminComponent
  ],
  declarations: [AdministratorComponent, SistemasComponent]
})
export class AdminModule {}
