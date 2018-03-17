import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    UserFormComponent
  ],
  declarations: [UserFormComponent]
})
export class UserFormModuleModule { }
