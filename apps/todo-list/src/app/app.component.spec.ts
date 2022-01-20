import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

class Todo {
  id?: string;
  text?: string;
  isCompeted?: boolean;
}

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have 'todos' property as Array of type Todo`, () => {
    const expectedArray: Todo[] = [];
    expect(app.todos).toEqual(expectedArray);
  });

  it(`should init 'todos' property as an empty Array`, () => {
    expect(app.todos.length).toBe(0);
  });

  describe('template', () => {

    let compiled: any;

    const getDomElementWithinAppComponent  = (customHtmlTag: string): any => {
      return compiled.querySelector(customHtmlTag);
    }

    beforeEach(() => {
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    });

    it('should have a <my-projects-header></my-projects-header>', () => {
      const header = getDomElementWithinAppComponent('my-projects-header');
      expect(header).toBeTruthy();
    });

    it('should have a <my-projects-header></my-projects-header>', () => {
      const todoContainer = getDomElementWithinAppComponent('my-projects-todo-container');
      expect(todoContainer).toBeTruthy();
    });

    it('should have a <my-projects-header></my-projects-header>', () => {
      const footer = getDomElementWithinAppComponent('my-projects-footer');
      expect(footer).toBeTruthy();
    });

  });

});
