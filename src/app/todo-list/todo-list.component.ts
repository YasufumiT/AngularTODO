import { Component, OnInit } from '@angular/core';
import { NEVER } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  constructor() { }

  items=[""];
  date = new Date();

  addTodo(todo:string):void{
    this.items.push(todo);
  }

  Delete(key:number):void{
    this.items.splice(key, 1);
  }

  GetDate():string{
    var year = this.date.getFullYear();
    var month = this.date.getMonth()+1;
    var day = this.date.getDate();
    return year+"年"+month+"月"+day+"日";
  }



  ngOnInit(): void {
    if(this.items=[""]){
      this.items=[];
      console.log("test");
    }
  }
}
