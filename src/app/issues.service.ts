import { Injectable } from '@angular/core';
import { Issues } from './issues'
@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private issue: Issues[] = [];

  constructor() { }

  getPendingIssue(): Issues[] {
    return this.issue.filter(Issues => !Issues.completed)
  }

  createIssue(issue: Issues) {
    issue.issueNo = this.issue.length + 1;
    this.issue.push(issue);
    
    }
}
