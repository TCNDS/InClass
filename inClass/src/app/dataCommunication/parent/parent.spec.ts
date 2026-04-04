import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Parent } from './parent';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Child } from '../child/child';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TransferData } from '../transfer-data';

// Fake a child component
@Component({
  selector: 'app-child',
  standalone: false,
  template: '',
})
class FakeChildComponent implements Partial<Child> {
  @Input()
  public fromParent = '';

  @Output()
  public toParent = new EventEmitter<string>();
}

describe('Parent', () => {
  let component: Parent;
  let fixture: ComponentFixture<Parent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Parent, FakeChildComponent],
      imports: [FormsModule],
      providers: [TransferData],
    }).compileComponents();

    fixture = TestBed.createComponent(Parent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the child instance',()=>{
    // select child DOM
    const childFixture = fixture.debugElement.query(
      // By.css('app-child')
      By.directive(FakeChildComponent)
    );
    const childInstance = childFixture.componentInstance;
    expect(childInstance).toBeTruthy();
  });


  it('should recieve data from Parent',()=>{
     const childFixture = fixture.debugElement.query(
      // By.css('app-child')
      By.directive(FakeChildComponent)
    );
    const childInstance = childFixture.componentInstance;
    expect(childInstance.fromParent).toEqual('Hello From Parent');
  });

  it('should recieve output from child', () => {
    const childFixture = fixture.debugElement.query(
      By.directive(FakeChildComponent)
    );
    const childInstance = childFixture.componentInstance;
    spyOn(component, 'fromChild').and.callThrough();
    childInstance.toParent.emit('Hello from Unit test');
    
    expect(component.fromChild).toHaveBeenCalled();
    fixture.detectChanges();
    expect(component.msgFromChild).toBe('Hello from Unit test');
  });

});
