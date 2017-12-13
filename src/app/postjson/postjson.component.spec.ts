import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostjsonComponent } from './postjson.component';

describe('PostjsonComponent', () => {
  let component: PostjsonComponent;
  let fixture: ComponentFixture<PostjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
