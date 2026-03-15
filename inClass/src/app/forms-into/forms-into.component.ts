import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms-into',
  standalone: false,
  templateUrl: './forms-into.component.html',
  styleUrl: './forms-into.component.scss',
})
export class FormsIntoComponent implements OnInit {
  registerForm = new FormGroup(
    {
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl(''),
    preferredContactMethod: new FormControl('Email')},
    [this.contactMethodValidator, this.passwordMatchValidator]
  );

  ngOnInit(): void {
    this.registerForm
      .get('preferredContactMethod')
      ?.valueChanges.subscribe((value) => {
        const phoneControl = this.registerForm.get('phoneNumber');
        const emailControl = this.registerForm.get('email');

        if (value === 'Phone') {
          phoneControl?.setValidators([Validators.required]);
          emailControl?.setValidators([Validators.email]);
        } else {
          emailControl?.setValidators([Validators.required, Validators.email]);
          phoneControl?.clearValidators();
        }

        phoneControl?.updateValueAndValidity();
        emailControl?.updateValueAndValidity();
      });
  }
  //ways to create forms
  //<form>
  //Template-driven(ngModel, ngSubmit) VS
  //Reactive From(FormControl, FormGroup, FormArray)
  //   username = new FormControl('Hello', [Validators.required, Validators.maxLength(10)]);
  //   registerForm = new FormGroup({
  //     user: new FormControl('', this.myRequiredFn),
  //     email: new FormControl('', [Validators.email])
  //   }, [Validators.required])
  // password: any;

  // constructor(private fb: FormBuilder){
  //   this.fb.group({
  //     user : ['', Validators.required],
  //     email : ['', Validators.email]

  //   })
  // }

  // myRequiredFn(constrol: AbstractControl) : ValidationErrors | null{
  //   if (!constrol.value) return {myRequired:'This is required!'};
  //   return null;
  // }
  // constructor(private fb: FormBuilder) {}
  
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }

    return null;
  }

  contactMethodValidator(control: AbstractControl): ValidationErrors | null {
    const preferredContactMethod = control.get('preferredContactMethod')?.value;
    const email = control.get('email')?.value?.trim();
    const phoneNumber = control.get('phoneNumber')?.value?.trim();

    if (preferredContactMethod === 'Email' && !email) {
      return { contactRequired: true };
    }

    if (preferredContactMethod === 'Phone' && !phoneNumber) {
      return { contactRequired: true };
    }

    return null;
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }

  get preferredContactMethod() {
    return this.registerForm.get('preferredContactMethod');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  submit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    console.log(this.registerForm.value);

    this.registerForm.reset({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      preferredContactMethod: 'Email',
    });
  }
}
