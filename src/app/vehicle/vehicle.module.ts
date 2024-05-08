import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleRegisterComponent } from './components/vehicle-register/vehicle-register.component';
import { VehicleItemComponent } from './components/vehicle-item/vehicle-item.component';



@NgModule({
  declarations: [
    VehicleRegisterComponent,
    VehicleItemComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
