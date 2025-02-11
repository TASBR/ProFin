import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOptionRippleComponent } from './no-option-ripple.component';

describe('NoOptionRippleComponent', () => {
  let component: NoOptionRippleComponent;
  let fixture: ComponentFixture<NoOptionRippleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoOptionRippleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoOptionRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
