import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RssFeedSectionComponent } from './rss-feed-section.component';

describe('RssFeedSectionComponent', () => {
  let component: RssFeedSectionComponent;
  let fixture: ComponentFixture<RssFeedSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RssFeedSectionComponent]
    });
    fixture = TestBed.createComponent(RssFeedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
