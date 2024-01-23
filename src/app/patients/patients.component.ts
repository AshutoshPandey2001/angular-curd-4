import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patientsForm:FormGroup;
  term='';
 patbutton=false;
  patientsList:any=[];

  selectedIndex:any;
  selectedObject:any;

  editop=false;

  constructor(private FormBuilder: FormBuilder) {
    this.patientsForm=this.FormBuilder.group({
      patientsName:['',[Validators.required, Validators.minLength(6)]],
      patientsAdd:['',[Validators.required]]
    })
    let data= localStorage.getItem("Patients_LIST");
    if(data){
      this.patientsList= JSON.parse(data)
    }
   }

  ngOnInit(): void {
  }
  addPat(){

    this.patbutton=true;
    if(this.patientsForm.valid){
      this.patientsList.push(this.patientsForm.value);
        localStorage.setItem("Patients_LIST", JSON.stringify(this.patientsList) );
    console.log('Patients Details', this.patientsList );
    alert("Details Added Successfully")
    this.clear();
    }else{
      alert("Please Enter Valid Details")
    }
    
    
    

  }
  updatePat(){
    this.patbutton=true;
    if(this.patientsForm.valid){
    this.editop=false;
    console.log('selectedindex',this.selectedIndex );
    console.log('selectedobject',this.selectedObject );
    this.patientsList[this.selectedIndex].patientsName=this.patientsForm.value.patientsName;
    this.patientsList[this.selectedIndex].patientsAdd=this.patientsForm.value.patientsAdd;
    localStorage.setItem("Patients_LIST", JSON.stringify(this.patientsList) );
    alert("Details Updated Successfully")
    this.clear()
  }else{
    alert("Please Enter Valid Details")
  }
  }


  patEdit(index:any , obj:any){
    this.editop=true;
    this.selectedIndex=index;
    this.selectedObject=obj;
    this.patientsForm.patchValue({
      patientsName:obj.patientsName,
      patientsAdd:obj.patientsAdd
    })
   
  }

  patDelete(index:any){

    console.log('Deleted List',index )
    this.patientsList.splice(index,1)
    localStorage.setItem("Patients_LIST", JSON.stringify(this.patientsList) );

  }
 get f(){
   return this.patientsForm.controls
 }
 clear(){
   this.patientsForm.reset()
 }
}
