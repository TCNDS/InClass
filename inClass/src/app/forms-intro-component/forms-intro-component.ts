import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { email, ValidationError } from '@angular/forms/signals';

@Component({
  selector: 'app-forms-intro-component',
  standalone: false,
  templateUrl: './forms-intro-component.html',
  styleUrl: './forms-intro-component.scss',
})
export class FormsIntroComponent implements OnInit{
  // ways to create forms
  // <form>
  // Template-driven (ngModel, ngSubmit) VS 
  // Reactive (FormControl, FormGroup, FormArray)
  username = new FormControl('', [this.myRequiredFn, Validators.minLength(3)]);
  
  registerForm = new FormGroup({
    user: new FormControl('', this.myRequiredFn), 
    email: new FormControl('',[Validators.email]), 
  }, [Validators.required])

  constructor(private fb: FormBuilder){
    this.fb.group({
      user: ['', Validators.required], 
      email: ['', Validators.email]
    })
  }
  
  ngOnInit(): void {
    console.log(this.username);
    console.log(this.registerForm);
  }

  // Custom Validator (sync)
  myRequiredFn(control: AbstractControl): ValidationErrors | null{
    if (!control.value) return { myRequired: 'This is required' }
    return null;
  }

  // Todo: Async Validators
}
