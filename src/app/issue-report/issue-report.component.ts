import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { IssuesService } from '../issues.service';
import { Issues } from '../issues';

interface IssueForm {
  title: FormControl<string>;
  description: FormControl<string>;
  priority: FormControl<string>;
  type: FormControl<string>;
}

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})

@Output() formClose = new EventEmitter();


export class IssueReportComponent {

constructor(private issuesService: IssuesService) {

  }

  issueForm = new FormGroup<IssueForm>({
    title: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
    priority: new FormControl('', { nonNullable: true }),
    type: new FormControl('', { nonNullable: true })
  });

  addIssue() {
    this.issuesService.createIssue(this.issueForm.getRawValue() as Issues);
    this.formClose.emit();
  }

}
