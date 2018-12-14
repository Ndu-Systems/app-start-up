import { HomePcNavComponent } from './home-pc-nav/home-pc-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,RouterModule 
  ],
  exports:[HomePcNavComponent ,SideNavComponent],
  declarations: [SharedComponent,HomePcNavComponent,SideNavComponent]
})
export class SharedModule { }
