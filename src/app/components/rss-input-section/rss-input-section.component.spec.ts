import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RssInputSectionComponent } from './rss-input-section.component';

describe('RssInputSectionComponent', () => {
  let component: RssInputSectionComponent;
  let fixture: ComponentFixture<RssInputSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RssInputSectionComponent],
    });
    fixture = TestBed.createComponent(RssInputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
