import { Component, OnInit } from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormControl, FormGroup} from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'app-forms-child1',
  templateUrl: 'forms-child1.component.html',
  styleUrls: ['forms-child1.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class FormsChild1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
