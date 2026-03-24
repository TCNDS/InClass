import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { App } from './app';
// test suite
describe('App', () => {
  let fixture: ComponentFixture<App>;
  // common setup
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        App
      ],
    }).compileComponents();

   fixture = TestBed.createComponent(App);
   fixture.detectChanges();
  });
  // test case / spec
  it('should create the app', () => {
    
    const app = fixture.componentInstance;
    // do acutal checks
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    // const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, inClass');
  });
});
