import { Component, Input, OnInit } from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from '@angular/forms';
import { ModelObject } from '../shared/model-object';

@Component({
  moduleId: module.id,
  selector: 'app-forms-child1',
  templateUrl: 'forms-child1.component.html',
  styleUrls: ['forms-child1.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class FormsChild1Component implements OnInit {

  @Input()
  model: ModelObject;

  constructor() { }

  ngOnInit() {
  }

}
