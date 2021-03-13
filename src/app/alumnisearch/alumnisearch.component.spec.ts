import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnisearchComponent } from './alumnisearch.component';

describe('AlumnisearchComponent', () => {
  let component: AlumnisearchComponent;
  let fixture: ComponentFixture<AlumnisearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnisearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnisearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
