import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleRegisterComponent } from './components/vehicle-register/vehicle-register.component';

const routes: Routes = [
  { path: '', component: VehicleListComponent, pathMatch: 'full' },
  { path: 'cadastrar', component: VehicleRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleRoutingModule {}
