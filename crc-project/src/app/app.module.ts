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
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'list', component: ListComponent,
    children: [{ path: 'addItem', component: AddItemComponent }]
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent,
    AddItemComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemListService, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
