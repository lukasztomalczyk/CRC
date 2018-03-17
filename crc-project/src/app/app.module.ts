import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/list/item/item.component';
import { ItemListService } from './components/list/list.service';
import { AddItemComponent } from './components/list/add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { RequestService } from './components/services/request.service';
import { HttpClientModule } from '@angular/common/http';
import { UserFormModuleModule } from './user-form-module/user-form-module.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { UserFormComponent } from './user-form-module/user-form/user-form.component';
import { UserActionModuleModule } from './user-action-module/user-action-module.module';
import { UserPermissionsComponent } from './user-action-module/user-permissions/user-permissions.component';
import { UserRequestsComponent } from './user-action-module/user-requests/user-requests.component';
import { WrapperRequestService } from './wrapper.request.service';
import { Http, RequestOptions, XHRBackend } from '@angular/http';
import { httpFactory } from './http-factory';
import { ApproverActionModuleModule } from './approver-action-module/approver-action-module.module';
import { RequestsComponent } from './approver-action-module/requests/requests.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'userForm/:userId', component: UserFormComponent,
    children: [
      { path: 'userRequestes', component: UserRequestsComponent },
      { path: 'userPermissions', component: UserPermissionsComponent },
      { path: 'requests', component: RequestsComponent }]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent,
    AddItemComponent,
    LoginComponent,

  ],
  imports: [
    RouterModule.forRoot(
      routes,{ useHash: true}
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UserFormModuleModule,
    UserActionModuleModule,
    ApproverActionModuleModule
  ],
  exports: [RouterModule],
  providers: [ItemListService, RequestService, LoginService, WrapperRequestService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
