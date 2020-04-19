import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('');

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group( {
      email: [null, Validators.compose([Validators.required])],
      password: password,
      confirmPassword: confirmPassword
    } );
  }

  onSubmit(): void {
    this.router.navigate( ['/dasboards'] );
  }
}
