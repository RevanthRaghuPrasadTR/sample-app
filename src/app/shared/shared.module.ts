import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { NonNeumericDirective } from './non-neumeric.directive';



@NgModule({
  declarations: [
    AvatarComponent,
    NonNeumericDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
