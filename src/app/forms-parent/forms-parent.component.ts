import { Component, OnInit } from '@angular/core';
import { FormsChild1Component } from '../forms-child1';
import { FormsChild2Component } from '../forms-child2';

@Component({
  moduleId: module.id,
  selector: 'app-forms-parent',
  templateUrl: 'forms-parent.component.html',
  styleUrls: ['forms-parent.component.css'],
  directives: [FormsChild1Component, FormsChild2Component]
})
export class FormsParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
