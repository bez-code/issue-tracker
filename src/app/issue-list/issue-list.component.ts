import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issues } from '../issues';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issues[] = []
  showReportIssue = false;

  constructor(private issueService: IssuesService) { }

  ngOnInit(): void {
    this.getIssue();
  }
  
  getIssue() {
    this.issues = this.issueService.getPendingIssue();
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssue();
  }

}
