import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component'
import {TabMenuModule} from 'primeng/tabmenu';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    TabMenuModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
