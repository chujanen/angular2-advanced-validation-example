/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ModelChild1Component } from './model-child1.component';

describe('Component: ModelChild1', () => {
  it('should create an instance', () => {
    let component = new ModelChild1Component();
    expect(component).toBeTruthy();
  });
});
