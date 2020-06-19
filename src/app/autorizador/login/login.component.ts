import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // obtiene el valor anterior del router, o por defecto a '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // obtención de los datos del formulario
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // evita que se proceda si el formulario es inválido
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    alert("Aca va la lógica del formulario.")

    this.router.navigate([this.returnUrl]);
  }

}
