import { Component, OnInit } from '@angular/core';

import { ModelChild3Component } from '../model-child3';
import { ModelChild2Component} from '../model-child2';
import { ModelObject } from '../shared/model-object';
import { ErrorObject2 } from '../shared/error-object';

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
  errorList: ErrorObject2[] = [];

  ngOnInit() {
  }

  KeyUpDetection(){
    console.log("Detected Change");
  }

  Validate(){
    if (this.model.num1 != this.model.num2) {
      console.log('Passed Validation and was Submitted');
      this.errorList = [];
    } else {
      let error = new ErrorObject2()
      error.id = 1;
      error.message = 'Values Are Matching';
      this.errorList.push(error);
      console.log('Failed Validation');
    }
  }


  submit() {
   this.Validate();
  }

}
