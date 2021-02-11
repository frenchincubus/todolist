import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  nom: string = "Personne";

  users = [
    {name: "Paul", age: 45},
    {name: "Jacques", age: 60},
    {name: "Yasmine", age: 34}
  ];

  message: string = 'gfdgfdgfd';

  img = "https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg";

  nombre: number = 3.14927556;
  nombre2: number = 0.25;

  date: any = Date.now();

  user = { nom: "mabille", age: 12};

  constructor() { }

  ngOnInit(): void {
  }

  hello = (param?: string) => {
    alert('Hello World' + (param ? param : ''));
  }

}
