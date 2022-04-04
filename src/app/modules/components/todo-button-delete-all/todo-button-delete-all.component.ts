import { Component, Input, OnInit } from '@angular/core';
import { TaskType } from '../../types/TaskType';

@Component({
  selector: 'app-todo-button-delete-all',
  templateUrl: './todo-button-delete-all.component.html',
  styleUrls: ['./todo-button-delete-all.component.css']
})
export class TodoButtonDeleteAllComponent implements OnInit {


  @Input()
  public taskList: Array<TaskType> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
