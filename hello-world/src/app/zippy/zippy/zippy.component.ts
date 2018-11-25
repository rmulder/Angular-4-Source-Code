import { Component, Input } from '@angular/core';
import { trigger, query, transition, stagger, state, style, animate, useAnimation, animateChild, group} from '@angular/animations';
@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class ZippyComponent {

   @Input('title') title: string;
   isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
