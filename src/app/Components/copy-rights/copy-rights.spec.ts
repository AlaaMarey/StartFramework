import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyRights } from './copy-rights';

describe('CopyRights', () => {
  let component: CopyRights;
  let fixture: ComponentFixture<CopyRights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyRights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyRights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
