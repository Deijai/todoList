import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskType } from '../../types/TaskType';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskType> = JSON.parse(localStorage.getItem('list') || '[]');

  constructor() { }

  ngDoCheck(): void {
      this.setLocalStorage();
  }


  public deleteTask(task: number): void {
    this.taskList.splice(task, 1);
  }

  public deleteTaskAll(): void {
    const confirm = window.confirm("Voce deseja realmente excluir tudo?");

    if(confirm){
      this.taskList = [];
    }
  }

  public setEmmitTaskList(event: string): void {
    this.taskList.push({task: event, checked: false});
  }

  public validationInput(event: string, index: number): void {
      if(!event.length){
        const confirm = window.confirm("a Task esta vazia, Voce deseja deletar?");

        if(confirm){
          this.deleteTask(index);
        }
      }
  }

  public setLocalStorage(): void {
    if(this.taskList){
      this.taskList.sort( (first, last) =>  Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }

}
