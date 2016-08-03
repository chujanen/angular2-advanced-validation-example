import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ModelObject } from '../shared/model-object';

@Component({
  moduleId: module.id,
  selector: 'app-forms-simple',
  templateUrl: 'forms-simple.component.html',
  styleUrls: ['forms-simple.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class FormsSimpleComponent implements OnInit {

  model: ModelObject = new ModelObject(3, 4);
  possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  simpleForm: FormGroup;

  isSubmitted: boolean = false;
  num1Invalid: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.simpleForm = this.formBuilder.group({
      num1: [],
      num2: []
    });

    this.simpleForm.valueChanges.subscribe(data => this.formChanged(data));
  }

  onSubmit() {
    this.isSubmitted = true;
    // console.log(JSON.stringify(this.simpleForm, null, 2));
  }

  formChanged(data) {
    if (this.isSubmitted) {
      if (this.model.num1 === null) {
        this.num1Invalid = true;
      } else {
        this.num1Invalid = false;
      }
      console.log(data);
    }
  }
}
