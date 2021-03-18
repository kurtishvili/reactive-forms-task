import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  locations: string[] = ["Tbilisi", "London", "Berlin"]
  volunteerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.volunteerForm = this.fb.group({
      name: 'Name here',
      phoneNumber: '',
      prefferedLocation: '',
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false,
      }),
      references: this.fb.array([this.fb.control('')])
    });
  }

  removeEmail(index: number) {
    this.references.removeAt(index)
  }

  addEmail() {
    this.references.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.volunteerForm)
  }

  selectLocation(event) {
    this.volunteerForm.patchValue({
      prefferedLocation: event.target.value
    })
  }

  get references(): FormArray {

    return this.volunteerForm.get('references') as FormArray;
  }


}
