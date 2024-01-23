import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.scss']
})
export class DoctoresComponent implements OnInit {
drForm:FormGroup;
term='';
 draddbutton=false;
  drList:any=[];
  selectedIndex:any;
  selectedObject:any;
  editoperation=false;

  constructor(private FormBuilder :FormBuilder) { 
this.drForm=this.FormBuilder.group({
  drName:['',[Validators.required, Validators.minLength(6)]],
  drTimeing:['',[Validators.required]]
})
  let data= localStorage.getItem("DR_LIST");
  if(data){
    this.drList=JSON.parse(data)
  }
      }

  ngOnInit(): void {
  }
 addDr(){
   this.draddbutton=true; 
   if(this.drForm.valid){
    this.drList.push(this.drForm.value)

    localStorage.setItem("DR_LIST", JSON.stringify(this.drList) );
        console.log('Doctors Details',this.drList )
        alert("Details Added Successfully")
        this.clear();
   }else{
     alert("Please Enter Correct Details")
   }
      }

  updateDr(){
    this.draddbutton=true; 
    if(this.drForm.valid){
    this.editoperation=false;
    console.log('selectedindex',this.selectedIndex );
    console.log('selectedobject',this.selectedObject );
this.drList[this.selectedIndex].drName= this.drForm.value.drName;
this.drList[this.selectedIndex].drTimeing= this.drForm.value.drTimeing;
localStorage.setItem("DR_LIST", JSON.stringify(this.drList) );
alert("Details Updted Successfully")
this.clear();
}else{
  alert("Please Enter Correct Details")
}
  }
  
  
  
  

  drEdit(index:any, obj:any){
    this.editoperation=true;
    this.selectedIndex=index;
    this.selectedObject=obj;
    this.drForm.patchValue({
      drName: obj.drName,
      drTimeing: obj.drTimeing
    })
    
  }
  drDelete(index:any){

    console.log('Deleted List', index)
    this.drList.splice(index,1)
    localStorage.setItem("DR_LIST", JSON.stringify(this.drList) );

  }
get f(){
  return this.drForm.controls
}
clear(){
  this.drForm.reset()
}
}
