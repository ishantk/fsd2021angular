import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCodePipeComponent } from './promo-code-pipe.component';

describe('PromoCodePipeComponent', () => {
  let component: PromoCodePipeComponent;
  let fixture: ComponentFixture<PromoCodePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoCodePipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCodePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
