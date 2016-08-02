import { Component, OnInit } from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-forms-child2',
  templateUrl: 'forms-child2.component.html',
  styleUrls: ['forms-child2.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class FormsChild2Component implements OnInit {

  possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit() {
  }


  // possibleNumbers
}
