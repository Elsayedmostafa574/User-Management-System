import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from '../../interface/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  constructor(private _profileService:ProfileService , private _activatedRoute:ActivatedRoute){}
  userId = '';
  userDetails!:Partial<Profile>;
  ngOnInit(): void {
    this.setUserId();
   
  }
  setUserId() : void{
    this._activatedRoute.params.subscribe(param =>{
      this.userId = param['id'];
      this.getProfileData();

    })
  }
  profileForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    age : new FormControl(0),
    phone : new FormControl(''),
    birthDate : new FormControl('')
  })

  getProfileData() : void{
    this._profileService.getUserById(this.userId).subscribe({
      next : (res) =>{
        this.userDetails = {
          firstName : res.firstName,
          lastName : res.lastName,
          email : res.email,
          age : res.age,
          phone : res.phone,
          birthDate : res.birthDate
        }
        this.profileForm.patchValue({...this.userDetails})
      }
    })
  }

}
