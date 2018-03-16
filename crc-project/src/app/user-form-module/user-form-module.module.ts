import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    UserFormComponent
  ],
  declarations: [UserFormComponent]
})
export class UserFormModuleModule { }
