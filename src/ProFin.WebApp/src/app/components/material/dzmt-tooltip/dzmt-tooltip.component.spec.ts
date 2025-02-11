import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtTooltipComponent } from './dzmt-tooltip.component';

describe('DzmtTooltipComponent', () => {
  let component: DzmtTooltipComponent;
  let fixture: ComponentFixture<DzmtTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtTooltipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
