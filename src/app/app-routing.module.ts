import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { ParentComponent } from './parent/parent.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'Home', component: ParentComponent},
  {path: 'About Us', component: DummyComponent},
  {path: '', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
