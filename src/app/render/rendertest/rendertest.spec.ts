import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderTest } from './rendertest';

describe('RenderTest', () => {
  let component: RenderTest;
  let fixture: ComponentFixture<RenderTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
