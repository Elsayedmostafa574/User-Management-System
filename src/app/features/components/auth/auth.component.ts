import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  constructor( private FB:FormBuilder , private _authService:AuthService , private _router:Router, private snackBar: MatSnackBar){}

  loginForm!:FormGroup;
  hide = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('' , Validators.required)
    })
  
  }

  onSubmit() :void{
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      this.callLoginApi();
    }
  }
  callLoginApi():void{
    this._authService.login(this.loginForm.value).subscribe({
      next : (res:any) =>{
       
        localStorage.setItem('userPayload' , JSON.stringify(res));
        this.openSnackBar('Login successful!', 'Close');
        
        setTimeout(() => {
          this._router.navigate(['sidebar/users']);
        }, 1000);
        
      },
      error:(error:any)=>{
        debugger
        this.openSnackBar('Invalid username or password.', 'Close');
      }
    })

  }
  openSnackBar(message: string, action: string) {  
    this.snackBar.open(message, action, {  
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000, // Duration in milliseconds  
    });  
  }  
}
