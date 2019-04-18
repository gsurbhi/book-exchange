import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListNewComponent } from './wish-list-new.component';

describe('WishListNewComponent', () => {
  let component: WishListNewComponent;
  let fixture: ComponentFixture<WishListNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
