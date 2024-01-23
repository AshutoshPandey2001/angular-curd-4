import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staffForm:FormGroup;
stffButton=false;
term='';
  staffList:any=[];
  selectedIndex:any;
  selectedObject:any;
  editoper=false;

  constructor(private FormBuilder: FormBuilder) { 
    this.staffForm=this.FormBuilder.group({
      staffName:['',[Validators.required, Validators.minLength(4)]],
      staffSalary:['',[Validators.required]]
    })
    let data = localStorage.getItem("STAFF_LIST");
    if(data){
      this.staffList=JSON.parse(data)
    }
  }

  ngOnInit(): void {
  }
  addStaff(){
    this.stffButton=true;
    if(this.staffForm.valid){
      this.staffList.push(this.staffForm.value);
      localStorage.setItem("STAFF_LIST" , JSON.stringify(this.staffList) );
          console.log('Staff Details',this.staffList );
          alert("Details Added Scuuessfully")
      this.clear();
        }else{
      alert("Please Enter Valid Details")
    }
     }


  UpdateStaff(){
    this.stffButton=true;
    if(this.staffForm.valid){
    this.editoper=false;
    this.staffList[this.selectedIndex].staffName=this.staffForm.value.staffName;
    this.staffList[this.selectedIndex].staffSalary=this.staffForm.value.staffSalary;
    localStorage.setItem("STAFF_LIST" , JSON.stringify(this.staffList) );
    alert("Details Updated Successfully")
    this.clear();
  }else{
    alert("Please Enter Valid Details")
  }
  }

  stafEdit(index:any, obj:any){
    this.editoper=true;
    this.selectedIndex=index;
    this.staffForm.patchValue({
      staffName:obj.staffName,
      staffSalary:obj.staffSalary 
    })
     }
  stafDelete(index:any){

    console.log('Deleted List', index )
    this.staffList.splice(index,1)
    localStorage.setItem("STAFF_LIST" , JSON.stringify(this.staffList) );

  }
get f(){
  return this.staffForm.controls
}
clear(){
  this.staffForm.reset()
}
}
