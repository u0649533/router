import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveFileChildComponent } from './archive-file-child.component';

describe('ArchiveFileChildComponent', () => {
  let component: ArchiveFileChildComponent;
  let fixture: ComponentFixture<ArchiveFileChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveFileChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveFileChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
