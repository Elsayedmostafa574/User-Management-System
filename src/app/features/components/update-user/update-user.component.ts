import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile, UpdateProfilePayload } from '../../interface/profile';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit{
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  userId = '';
  userDetails!:Partial<Profile>
  updateForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    age : new FormControl(0),
    phone : new FormControl(''),
    birthDate : new FormControl('')
  });
  constructor(private _activatedRoute : ActivatedRoute , private _profileService:ProfileService, private snackBar: MatSnackBar){}
ngOnInit(): void {
 this.setUserId();
}
setUserId(){
  this._activatedRoute.params.subscribe((param)=>{
    this.userId = param['id'];
    this.getProfileData();
  })
}
getProfileData(){
  this._profileService.getUserById(this.userId).subscribe({
    next: (res)=>{
      this.userDetails = {
        firstName : res.firstName,
        lastName : res.lastName,
        email : res.email,
        age : res.age,
        phone : res.phone,
        birthDate : res.birthDate
      }
      this.updateForm.patchValue(this.userDetails)
    }
  })
}
onSubmit():void{
  if(this.updateForm.value){
    const formValue = this.updateForm.value;
    const updateValue :UpdateProfilePayload = {
      firstName : formValue.firstName || '',
      lastName : formValue.lastName || '',
      email : formValue.email || '',
      age : formValue.age || 0,
      phone : formValue.phone || '',
      birthDate : formValue.birthDate || '',
      id : this.userId
    }
    this._profileService.UpdateUser(updateValue).subscribe({
      next: (res)=>{
        console.log(res);
        
        this.openSnackBar('Updated Successfully ', 'Close');
      }
    })
  }
}
openSnackBar(message: string, action: string) {  
  this.snackBar.open(message, action, {  
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: 5000, // Duration in milliseconds  
  });  
}  
}
