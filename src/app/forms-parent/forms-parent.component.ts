import { Component, OnInit } from '@angular/core';
import { FormsChild1Component } from '../forms-child1';
import { FormsChild2Component } from '../forms-child2';
import { ModelObject } from '../shared/model-object';

@Component({
  moduleId: module.id,
  selector: 'app-forms-parent',
  templateUrl: 'forms-parent.component.html',
  styleUrls: ['forms-parent.component.css'],
  directives: [FormsChild1Component, FormsChild2Component]
})
export class FormsParentComponent implements OnInit {

  model: ModelObject = new ModelObject(3, 4);

  constructor() { }

  ngOnInit() {
    //this.modelObject = new ModelObject(1, 2);
  }

}
