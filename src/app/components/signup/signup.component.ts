import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  passMatchError: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl<string | null>('ahloubser12@gmail.com', [
        Validators.email,
        Validators.required,
      ]),
      firstName: new FormControl<string | null>('Andre', Validators.required),
      lastName: new FormControl<string | null>('Loubser', Validators.required),
      password: new FormControl<string | null>('kwagga12', [
        Validators.minLength(8),
        Validators.required,
      ]),
      password2: new FormControl<string | null>('kwagga12', [
        Validators.minLength(8),
        Validators.required,
      ]),
    });
  }

  signupUser(): void {
    if (!this.form.valid) {
      return;
    }

    if (this.form.value.password == this.form.value.password2) {
      this.passMatchError = false;
      // console.log('Equal');
      // console.log(this.form.value);

      const newUser: User = {
        id: -1,
        email: this.form.value.email,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        password: this.form.value.password,
      };
      console.log('Creating Account');

      this.userService.createAccount(newUser).subscribe((result) => {
        // console.log('result - ' + result);
        this.userService._token = result;
      });
    } else {
      this.passMatchError = true;
      console.log('Passwords Do not Match');
    }
  }
}
