import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
  
 loginop=false;

  constructor(private FormBuilder: FormBuilder){ 
    this.loginForm=this.FormBuilder.group({
      email:['' ,[Validators.required, Validators.minLength(6)]],
      password:['',[Validators.required]]
      
    })
  }

  ngOnInit(): void {
  }
  login(){

   this.loginop=true;
    if(this.loginForm.valid){
    alert(" Entred Vlaue is Correct ! LoginSuccessfully")
    console.log('Login Details', this.loginForm.value);
    this.loginForm.reset();


   }else{
     alert("Pleasr Enter Corect Values ")
   }
  }
get f (){
  return this.loginForm.controls
}
}
