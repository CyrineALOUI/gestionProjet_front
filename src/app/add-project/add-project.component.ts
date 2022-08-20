import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor(private http : HttpClient) { }

  projectForm : FormGroup;
  URL = "http://localhost:8082/api/projets";


  ngOnInit(): void {

this.projectForm = new FormGroup({

  nom:new FormControl(null,Validators.required),
  entite:new FormControl(null),
  description:new FormControl,
  date_debut:new FormControl,
  date_fin:new FormControl,
  budget:new FormControl

})

}


  submit(){

  if(this.projectForm.valid){ 

    // call WS

  


let dateDebut = this.projectForm.controls['date_debut'].value;
let dateFin = this.projectForm.controls['date_fin'].value;

    console.log(this.projectForm.controls['date_debut'].value);

    this.projectForm.controls['date_debut'].setValue(dateDebut.replaceAll('-','/'))
    this.projectForm.controls['date_fin'].setValue(dateFin.replaceAll('-','/')) 

    console.log(this.projectForm.value);
    

 this.http.post(this.URL,this.projectForm.value).subscribe(res=>{
      console.log(res);
      
    })
    

}else{

   // display error

  }

      
  }
  
  

}
