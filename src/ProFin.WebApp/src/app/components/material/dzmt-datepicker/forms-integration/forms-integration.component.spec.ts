import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsIntegrationComponent } from './forms-integration.component';

describe('FormsIntegrationComponent', () => {
  let component: FormsIntegrationComponent;
  let fixture: ComponentFixture<FormsIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsIntegrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
