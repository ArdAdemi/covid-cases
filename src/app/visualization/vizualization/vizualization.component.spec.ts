import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualizationComponent } from './vizualization.component';

describe('VizualizationComponent', () => {
  let component: VizualizationComponent;
  let fixture: ComponentFixture<VizualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
