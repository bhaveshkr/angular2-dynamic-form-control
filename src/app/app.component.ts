import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myForm: FormGroup;
  objArray:selectorObject[] = [{name: 'Question1', value: "Question1"}, {name: 'Question2', value: "Question2"}];

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      translations: this._fb.array([
        this.initTranslations()
      ])
    });
  }

  initTranslations() {
    return this._fb.group({
      language: ['', Validators.required],
      value: ['']
    });
  }

  removeTranslation(i: number) {
    const control = <FormArray>this.myForm.controls['translations'];
    control.removeAt(i);
  }

   addTranslation() {
        const control = <FormArray>this.myForm.controls['translations'];
        control.push(this.initTranslations());
    }

  save(model: Category) {
    console.log(model);
  }
}

export interface Category {
  name: string;
  translations: Translation[];
}

export interface Translation {
  language: string;
  value: string;
}

interface selectorObject {
  name:string;
  value:string;
}
