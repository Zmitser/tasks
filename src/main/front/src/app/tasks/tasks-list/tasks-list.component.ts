import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
