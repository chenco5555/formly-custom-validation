import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {labelUniquenessValidation} from './formly-custom-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options: FormlyFormOptions = {};
  public form = new FormGroup({});
  public model = {
    repeat1: [
      {label: 'label1',
        visible: true},
    ],
    repeat2: [
      {label: 'label2',
        visible: true},
    ],
  };
  public fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      key: 'repeat1',
      type: 'repeat',
      templateOptions: {
        addText: 'Add another repeater-1',
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'input',
            key: 'label',
            templateOptions: {
              label: 'Label',
              required: true,
            },
          },
          {
            type: 'checkbox',
            key: 'visible',
            templateOptions: {
              type: 'checkbox',
              label: 'Visible',
            },
            validators: {
              validation: [{name: 'labelUniquenessValidation', options: {model: this.model}}],
            },
          },
        ],
      },
    },
    {
      fieldGroupClassName: 'row',
      key: 'repeat2',
      type: 'repeat',
      templateOptions: {
        addText: 'Add another repeater-2',
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'input',
            key: 'label',
            templateOptions: {
              label: 'Label',
              required: true,
            },
            validators: {
              validation: [{name: 'labelUniquenessValidation', options: {model: this.model}}],
            },
          },
          {
            type: 'checkbox',
            key: 'visible',
            templateOptions: {
              type: 'checkbox',
              label: 'Visible',
            },
          },
        ],
      },
    },
  ];

  public onSubmit(model: any) {
    console.log(model);
  }
}
