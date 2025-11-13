import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLiner } from './one-liner';

describe('OneLiner', () => {
  let component: OneLiner;
  let fixture: ComponentFixture<OneLiner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneLiner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneLiner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
