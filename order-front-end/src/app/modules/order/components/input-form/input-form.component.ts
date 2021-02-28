import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    this.router.navigate(['/orders', this.profileForm.value.email]);

    console.warn(this.profileForm.value);
  }

}
