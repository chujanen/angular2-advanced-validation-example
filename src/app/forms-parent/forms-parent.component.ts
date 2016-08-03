import { Component, OnInit, ViewChild } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FormsChild1Component } from '../forms-child1';
import { FormsChild2Component } from '../forms-child2';
import { ModelObject } from '../shared/model-object';

@Component({
  moduleId: module.id,
  selector: 'app-forms-parent',
  templateUrl: 'forms-parent.component.html',
  styleUrls: ['forms-parent.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, FormsChild1Component, FormsChild2Component]
})
export class FormsParentComponent implements OnInit {

  model: ModelObject = new ModelObject(3, 4);
  parentForm: FormGroup;

  @ViewChild(FormsChild1Component)
  private child1: FormsChild1Component;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.parentForm = this.formBuilder.group({
      child1Form: this.child1.getControls(this.formBuilder)
    });

    this.model.num1 = 47;

    // console.log(this.child1);
  }
}