import {Component, OnInit, ViewChild} from '@angular/core';
import { CronOptions } from 'ngx-cron-editor';
import { CronGenComponent } from 'ngx-cron-editor';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cronExpression = '0 15 10 L-2 * ? *';
  public isCronDisabled = false;
  public cronOptions: CronOptions = {
    formInputClass: 'form-control cron-editor-input',
    formSelectClass: 'form-control cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',

    defaultTime: '00:00:00',

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: false,
    hideOneTimeTab: false,
    hideSpecificWeekDayTab: false,
    hideSpecificMonthWeekTab: false,

    use24HourTime: true,
    hideSeconds: false,

    cronFlavor: 'quartz',
    autoScrollHeader: true
  };

  @ViewChild('cronEditorDemo', { static: false })
  cronEditorDemo: CronGenComponent;

  cronForm: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.cronForm = new FormControl(this.cronExpression);
  }

  cronFlavorChange() {
    this.cronEditorDemo.options = this.cronOptions;
  }
}
