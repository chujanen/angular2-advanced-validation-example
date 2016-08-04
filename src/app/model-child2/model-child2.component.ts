import { Component, OnInit, forwardRef, Input, OnChanges } from '@angular/core';
import {NgClass} from '@angular/common';
import { ModelObject } from '../shared/model-object';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ModelChild2Component),
  multi: true
};


@Component({
  moduleId: module.id,
  selector: 'app-model-child2',
  directives: [NgClass],
  templateUrl: 'model-child2.component.html',
  styleUrls: ['model-child2.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class ModelChild2Component implements ControlValueAccessor, OnInit, OnChanges {

  constructor() { }

  @Input() isValid: boolean;


  _isValid = true;

  ngOnChanges(changes) {
    console.log(this.isValid);
    if (this.isValid !== undefined) {
      this._isValid = this.isValid;
    }

    // console.log(this.isValid);
    // if (this.isValid === false) {

    // } else {

    // }
  }

  ngOnInit() {
  }

  // The internal data model.
  private innerValue: any = '';

  // Placeholders for the callbacks which are later providesd
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  // get accessor
  get value(): any {
    return this.innerValue
  };

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  // Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
