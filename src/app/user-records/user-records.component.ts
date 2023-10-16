import { Component, OnChanges, OnInit, PipeTransform } from '@angular/core';
import { RecordsService } from '../services/records.service';
import { RecordView } from '../models/RecordView';
import { Record } from '../models/Record';
import { RecordPipe } from '../pipes/record.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-records',
  templateUrl: './user-records.component.html',
  styleUrls: ['./user-records.component.css']
})
export class UserRecordsComponent implements OnInit {

  records!: RecordView[];
  page!: number;
  pageSize!: number;
  filter!: string;

  constructor(private recordService: RecordsService, private pipe: RecordPipe, private router: Router) { }

  ngOnInit(): void {
    this.recordService.getRecords().subscribe(data => {
      this.records = data;
    })

    this.page = 1;
    this.pageSize = 10; 
  }

  onDelete(recordId: number) {
    this.recordService.deleteRecord(recordId).subscribe(() => {
      this.recordService.getRecords().subscribe(data => {
        this.records = data;
      })
    })
  }
  
  onLogout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  navigateToCalculator() {
    this.router.navigate(['/new-operation']);
  }
}
