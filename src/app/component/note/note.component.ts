import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, } from '@angular/forms';

import { NoteService } from 'src/app/service/note.service';
import { Note } from '../../model/note';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note: Note;
  new: boolean;

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    // we want find out if we are creating a new note or editing an existing one
    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if (params.id) {
        this.noteService.get(params.id).subscribe((note: Note) => {
          this.note = note;
        });
        this.new = false;
      } else {
        this.new = true;
      }
    });
  }

  onSubmit(form: NgForm) {
    if (this.new) {
      // we should save the note
      this.noteService.add(form.value).subscribe((newNote) => {
        this.router.navigateByUrl('/');
      });
    } else {
      this.note.tittle = form.value.title;
      this.note.description = form.value.description;

      this.noteService.update(this.note).subscribe(() => {
        // this code will run once the note has been updated
        this.router.navigateByUrl('/');
      });
    }
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

}
  // noteForm: FormGroup;
  // NoteArr: any = [];

  // ngOnInit() {
  //   this.addNote();
  // }

//   constructor(
//     public fb: FormBuilder,
//     private ngZone: NgZone,
//     private router: Router,
//     public noteService: NoteService
//   ){ }

//   addNote() {
//     this.noteForm = this.fb.group({
//       tittle: [''],
//       description: [''],
//       user: ['']
//     });
//   }

//   submitForm() {
//     this.noteService.CreateNote(this.noteForm.value).subscribe(res => {
//       console.log('description added!');
//       alert('description added!');

//       this.ngZone.run(() => this.router.navigateByUrl('/:userId'));
//     });
//   }
// }
