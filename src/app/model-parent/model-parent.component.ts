import { Component, OnInit, Input} from '@angular/core';

import { ModelChild3Component } from '../model-child3';
import { ModelChild2Component} from '../model-child2';
import { ModelObject } from '../shared/model-object';
import { ErrorObject } from '../shared/error-object';
import { ValidityObject } from '../shared/validity-object';

@Component({
  moduleId: module.id,
  selector: 'app-model-parent',
  templateUrl: 'model-parent.component.html',
  styleUrls: ['model-parent.component.css'],
  directives: [ModelChild2Component, ModelChild3Component]
})


export class ModelParentComponent implements OnInit {

  constructor() { this.everythingValid }

  // Model Contains All form data.
  model: ModelObject = new ModelObject(3, 4);

  // Error list to display on top of page.
  errorList: ErrorObject[] = [];

  // validity Object.
  validity: ValidityObject = new ValidityObject();

  // Everything is Valid at the start.
  everythingValid() {
    this.validity.num1IsValid = true;
    this.validity.num2IsValid = true;
  }


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
    if (this.model.num1.toLocaleString() !== this.model.num2.toLocaleString()) {
      console.log('Passed Validation and was Submitted');
      this.errorList = [];
      this.submitClicked = false;
      this.validity.num1IsValid = true;
      this.validity.num2IsValid = true;
    } else {
      this.submitClicked = true;
      let error = new ErrorObject();
      error.id = 1;
      error.message = 'Values Are Matching';
      this.errorList.push(error);
      console.log('Failed Validation');
      this.validity.num1IsValid = false;
      this.validity.num2IsValid = false;
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
        this.validity.num1IsValid = false;
      }

      if (this.model.num2.toLocaleString() === '') {
        this.validity.num2IsValid = false;
      }
    }
  }


  submit() {
    this.Validate();
  }
}
