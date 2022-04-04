import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//externs modules
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

//components
import { HeaderComponent } from '../components/header/header.component';
import { TodoButtonDeleteAllComponent } from '../components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from '../components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';

//pages
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent,
  ],
  exports:[
    HeaderComponent,
    TodoButtonDeleteAllComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
