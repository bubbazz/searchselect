import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchselectComponent } from './searchselect.component';

describe('SearchselectComponent', () => {
  let component: SearchselectComponent;
  let fixture: ComponentFixture<SearchselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchselectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
