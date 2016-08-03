import { Component, OnInit } from '@angular/core';

import { ModelChild3Component } from '../model-child3';
import { ModelChild2Component} from '../model-child2';
import { ModelObject } from '../shared/model-object';

@Component({
  moduleId: module.id,
  selector: 'app-model-parent',
  templateUrl: 'model-parent.component.html',
  styleUrls: ['model-parent.component.css'],
  directives: [ModelChild2Component, ModelChild3Component]
})
export class ModelParentComponent implements OnInit {

  constructor() { }

  model: ModelObject = new ModelObject(3, 4);

  ngOnInit() {

  }

  submit() {
    if (this.model.num1 != this.model.num2) {
      console.log('Passed Validation and was Submitted');
    } else {
      console.log('Failed Validation');
    }
  }

}
