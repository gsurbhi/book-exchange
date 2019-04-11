import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostingListComponent } from './my-posting-list.component';

describe('MyPostingListComponent', () => {
  let component: MyPostingListComponent;
  let fixture: ComponentFixture<MyPostingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPostingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
