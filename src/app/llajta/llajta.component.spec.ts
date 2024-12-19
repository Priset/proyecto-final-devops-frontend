import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlajtaComponent } from './llajta.component';

describe('LlajtaComponent', () => {
  let component: LlajtaComponent;
  let fixture: ComponentFixture<LlajtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlajtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlajtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
