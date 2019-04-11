import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostingNewComponent } from './my-posting-new.component';

describe('MyPostingNewComponent', () => {
  let component: MyPostingNewComponent;
  let fixture: ComponentFixture<MyPostingNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPostingNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
