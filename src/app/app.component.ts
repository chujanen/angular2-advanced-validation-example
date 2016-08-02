import { Component } from '@angular/core';
import { ModelParentComponent } from './model-parent';
import { FormsParentComponent } from './forms-parent';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ModelParentComponent, FormsParentComponent]
})
export class AppComponent {
}
