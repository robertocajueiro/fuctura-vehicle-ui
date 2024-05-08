import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleRegisterComponent } from './components/vehicle-register/vehicle-register.component';
import { authenticatorGuard } from '../shared/guards/authenticator.guard';

const routes: Routes = [
  { path: '', component: VehicleListComponent, pathMatch: 'full',
    canActivate: [authenticatorGuard]
   },
   { path: ':id', component: VehicleListComponent,
    canActivate: [authenticatorGuard]
    },
  { path: 'cadastrar', component: VehicleRegisterComponent,
    canActivate: [authenticatorGuard]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleRoutingModule {}
