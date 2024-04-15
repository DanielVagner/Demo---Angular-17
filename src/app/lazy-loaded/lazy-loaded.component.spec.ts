import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadedComponent } from './lazy-loaded.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('LazyLoadedComponent', () => {
  let component: LazyLoadedComponent;
  let fixture: ComponentFixture<LazyLoadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyLoadedComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'lazy-loaded' }),
          },
        },
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyLoadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
