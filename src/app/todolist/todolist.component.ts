import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todo: string = '';

  todolist = []

  constructor() { }

  ngOnInit(): void {
  }

  submit = () => {
    if(this.todo !== '') {
      this.todolist.push(
        { todo: this.todo, done: false, edit: false}
      );
      this.todo = '';
    }
  }

  done = (i: number) => {
    this.todolist[i].done = !this.todolist[i].done;
  }

  delete = (i: number) => {
    this.todolist.splice(i, 1);
  }

  goToEdit = (i: number) => {
    this.todolist[i].edit = true;
  }

  editTodo = (event, i: number,) => {
    if(event.keyCode === 13) {
      this.todolist[i].edit = false;
    
      console.log(this.todolist);
    }
  }

  sortTodolist = (champ: string) => {

    this.todolist.sort((a, b) => {
      if (champ === 'todo'){
        let x = a.todo.toLowerCase();
        let y = b.todo.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      }
      else if(champ === 'done')
        return (a.done - b.done);
    });
  }

  reverseSortTodolist = (champ: string) => {
    this.sortTodolist(champ);
    this.todolist.reverse();
  }
}
