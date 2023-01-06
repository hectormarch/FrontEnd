import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-Login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mail:['', [Validators.required, Validators.email]]
    })
   }

  ngOnInit(): void {
  }

  onEnviar(envent: Event){
    event?.preventDefault;
    if (this.form.valid){

    }else {
      this.form.markAllAsTouched();
    }
  }

}
