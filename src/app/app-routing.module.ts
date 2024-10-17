import { NgModule } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { CvComponent } from './cv/cv.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';

const routes: Routes = [
  {path : '' , component : HomeComponent },
  {path : 'cv' , component : CvComponent },
  {path : 'servers' , component : ManageServersComponent },
 { path : 'ms-word' , component : MsWordComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
