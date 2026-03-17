import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: false,
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.scss',
})
export class Lifecycle {
  constructor(){
    // not specific to angular
    // Always the first one to run
    // dependency injection happens
  }
  ngOnChanges(){
    // happens the first
    // triggered everytime there is a change to @Input
  }
  ngOnInit(){
    // @Input values initialized here
    // Subscription to Observable happens
  }
  ngDoCheck(){
    // change detection cycle: sync the UI with the component data
    //  Angular will check component tree from top to bottom
    // can used docheck to manually trigger the cd
  }
  ngAfterContentInit(){
    // Content projection <ng-content></ng-content>
    // after the projected content
  }
  ngAfterContentChecked(){}
  ngAfterViewInit(){
    // called after the component's view and children views intialized
    // Get element from the DOM
  }
  ngAfterViewChecked(){}

  ngOnDestroy(){
    // Before the component is destroyed
    // Cleanup logic
  }

  // Parent & Child
 /**
  * 1. Angular creates the Parent (constructor)
  * 2. render the Parent tempalte (child selector)
  * 3. Create the Child (constructor)
  * 4. Pass Input to Child (Child OnChanges)
  * 4. Initialize the child (Child OnInit)
  * 5. Intilialize the Prent (Parent OnInit)
  * 6. Projected content (Child AfterContentInit)
  */

//  ExpressionChangeAfterItHasBeenCheckedError


}
