import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecordsComponent } from './user-records.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecordsService } from '../services/records.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserRecordsComponent', () => {
  let component: UserRecordsComponent;
  let fixture: ComponentFixture<UserRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule], 
      providers: [RecordsService],
      declarations: [ UserRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
