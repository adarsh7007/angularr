import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  noteForm: FormGroup;
  NoteArr: any = [];

  ngOnInit() {
    this.addUser();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public userService: UserService
  ){ }

  addUser() {
    this.noteForm = this.fb.group({
      name: [''],
        });
  }

  submitForm() {
    this.userService.CreateUser(this.noteForm.value).subscribe(res => {
      console.log('name added!');
      alert('name added!');

      this.ngZone.run(() => this.router.navigateByUrl('/'));
    });
  }
}
