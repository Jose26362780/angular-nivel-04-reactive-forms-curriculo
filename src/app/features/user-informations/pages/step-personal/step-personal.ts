import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurriculumFormStore } from '../../../../core/services/curriculum-form-store';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-personal',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './step-personal.html',
})
export class StepPersonal {
  readonly _curriculumFormStore = inject(CurriculumFormStore);

  ngOnInit() {
    console.log('PersonalGroup', this._curriculumFormStore.personalFormGroup);
  }

  logPersonal() {
    console.log('Personal Value: ', this._curriculumFormStore.personalFormGroup.value);
  }
}
