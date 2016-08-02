import { Component } from '@angular/core';
import { ModelParentComponent } from './model-parent';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ModelParentComponent]
})
export class AppComponent {
  title = 'app works!';
}
