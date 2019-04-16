import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostingEditComponent } from './my-posting-edit.component';

describe('MyPostingEditComponent', () => {
  let component: MyPostingEditComponent;
  let fixture: ComponentFixture<MyPostingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPostingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
