import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZipComponent } from './zip/zip.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [{
  path: 'zip',
  component: ZipComponent
}, {
  path: 'address',
  component: AddressComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
