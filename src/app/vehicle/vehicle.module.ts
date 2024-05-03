import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleRegisterComponent } from './components/vehicle-register/vehicle-register.component';



@NgModule({
  declarations: [
    VehicleRegisterComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
