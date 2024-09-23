import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruesComponent } from './recrues.component';

describe('RecruesComponent', () => {
  let component: RecruesComponent;
  let fixture: ComponentFixture<RecruesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruesComponent]
    });
    fixture = TestBed.createComponent(RecruesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
