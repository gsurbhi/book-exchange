import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPostComponent } from './admin-edit-post.component';

describe('AdminEditPostComponent', () => {
  let component: AdminEditPostComponent;
  let fixture: ComponentFixture<AdminEditPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
