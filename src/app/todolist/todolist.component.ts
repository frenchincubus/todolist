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

  // ajoute une tâche au tableau
  submit = () => {
    if(this.todo !== '') {
      this.todolist.push(
        { todo: this.todo, done: false, edit: false}
      );
      this.todo = '';
    }
  }

  // switch l'état de la tâche choisie done true/false
  done = (i: number) => {
    this.todolist[i].done = !this.todolist[i].done;
  }

  // supprime la tâche choisie
  delete = (i: number) => {
    this.todolist.splice(i, 1);
  }

  // ouvre le mode édition d'une tâche
  goToEdit = (i: number) => {
    this.todolist[i].edit = true;
  }

  // valide la modification d'une tâche
  editTodo = (event, i: number,) => {
    if(event.keyCode === 13) {
      this.todolist[i].edit = false;
    
      console.log(this.todolist);
    }
  }

  // trie le tableau
  sortTodolist = (champ: string) => {
    // tri sur le champ todo
    this.todolist.sort((a, b) => {
      if (champ === 'todo'){
        let x = a.todo.toLowerCase();
        let y = b.todo.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      } // else tri sur le champ done
      else if(champ === 'done')
        return (a.done - b.done);
    });
  }

  // inverse le tri 
  reverseSortTodolist = (champ: string) => {
    this.sortTodolist(champ);
    this.todolist.reverse();
  }
}
