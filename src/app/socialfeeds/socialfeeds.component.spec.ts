import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialfeedsComponent } from './socialfeeds.component';

describe('SocialfeedsComponent', () => {
  let component: SocialfeedsComponent;
  let fixture: ComponentFixture<SocialfeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialfeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialfeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
