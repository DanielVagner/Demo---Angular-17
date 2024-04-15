import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalService } from '../../shared/services/signal.service';
import { ReceiveComponent } from './recive';
import { signal } from '@angular/core';

class MockSignalService {
  count = signal<number>(0);

  updateCount() {
    this.count.update((val: number) => val + 1);
  }
}

describe('ReceiveComponent', () => {
  let component: ReceiveComponent;
  let fixture: ComponentFixture<ReceiveComponent>;
  let mockSignalService = new MockSignalService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiveComponent],
      providers: [{ provide: SignalService, useValue: mockSignalService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update inputText', () => {
    fixture.componentRef.setInput('inputText', 'test');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.wrap-text').textContent).toContain('test');
  });

  it('should update transfer.count', () => {
    fixture.detectChanges();
    mockSignalService.updateCount();
    expect(component.transfer.count()).toEqual(1);
  });
});
