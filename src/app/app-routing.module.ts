import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaComponent } from './nova/nova.component';

const routes: Routes = [
  {path: 'nova', component: NovaComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
