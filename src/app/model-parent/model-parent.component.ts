import { Component, OnInit } from '@angular/core';

import { ModelChild3Component } from '../model-child3';
import { ModelChild2Component} from '../model-child2';
import { ModelObject } from '../shared/model-object';
import { ErrorObject } from '../shared/error-object';

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
  errorList: ErrorObject[] = [];
  submitClicked: boolean;



  ngOnInit() {
  }

  KeyUpDetection(event) {
    console.log('Detected Change');
    if (this.submitClicked === true) {
      this.Validate();
    }
  }


  // Main Validation Method.
  Validate() {

    // Start off with a cleared error list.
    this.errorList = [];

    // If both values match, they're invalid.
    if (this.model.num1 !== this.model.num2) {
      console.log('Passed Validation and was Submitted');
      this.errorList = [];
      this.submitClicked = false;
    } else {
      this.submitClicked = true;
      let error = new ErrorObject();
      error.id = 1;
      error.message = 'Values Are Matching';
      this.errorList.push(error);
      console.log('Failed Validation');
    }

    // Check to see values are added to both inputs because they're both required.
    if (this.model.num1.toLocaleString() === '' || this.model.num2.toLocaleString() === '') {
      this.submitClicked = true;
      let error = new ErrorObject();
      error.id = 1;
      error.message = 'Values Are Missing';
      this.errorList.push(error);
      console.log('Failed Validation');

      if (this.model.num1.toLocaleString() === '') {
      }

      if (this.model.num1.toLocaleString() === '') {
      }
    }
  }


  submit() {
    this.Validate();
  }

}
