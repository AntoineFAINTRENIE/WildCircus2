import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClownArticleComponent } from './clown-article.component';

describe('ClownArticleComponent', () => {
  let component: ClownArticleComponent;
  let fixture: ComponentFixture<ClownArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClownArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClownArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
