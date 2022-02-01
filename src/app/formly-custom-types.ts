import {ConfigOption, FormlyFieldConfig} from '@ngx-formly/core';
import {FormlyRepeatSectionComponent} from '../formly-repeat-section/formly-repeat-section.component';
import {AbstractControl, ValidationErrors} from '@angular/forms';

export const labelUniquenessValidation = (control: AbstractControl, field: FormlyFieldConfig, parameters: any): ValidationErrors | null => {
  console.log(parameters.model);
  return null;
};

export const FORMLY_CUSTOM_TYPES: ConfigOption = {
  extras: {
    lazyRender: true,
    resetFieldOnHide: true,
  },
  types: [
    {
      name: 'repeat',
      component: FormlyRepeatSectionComponent,
    }
  ],

  validators: [
    {
      name: 'labelUniquenessValidation',
      validation: labelUniquenessValidation,
      options: {
        model: null,
      },
    },
  ],
};



