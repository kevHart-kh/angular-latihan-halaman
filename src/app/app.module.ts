import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

import{Routes,RouterModule} from '@angular/router';

const ROUTES: Routes =[
  {path: 'add',component:AddComponent},
  {path: 'edit',component:EditComponent},
  {path: 'list',component:ListComponent},
]


@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(ROUTES)  ],
  declarations: [ AppComponent, HelloComponent, AddComponent, EditComponent, ListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
