import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  name = "";
  email = "";
  DoB = "";
  restName(){
    this.name = "";
  }
  restEmail(){
    this.email = "";
  }
  restDob(){
    this.DoB = "";
  }
  restSave(){
    this.saveCount = 0;
  }
  saveName() {
    console.log("Saved name:", this.name);
  }

  saveEmail() {
    console.log("Saved email:", this.email);
  }

  saveDob() {
    console.log("Saved DOB:", this.DoB);
  }
  saveCount = 0;
  saveProfile() {
    console.log("Profile Saved:");
    console.log("Name:", this.name);
    console.log("Email:", this.email);
    console.log("DateOfBirth:", this.DoB);

    this.saveCount++;
  }

}
