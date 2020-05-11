import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Note } from '../model/note';
import { ApsService } from './aps.service';
@Injectable({
  providedIn: 'root'
})
export class NoteService {


  constructor(private apsService: ApsService) { }

  getAll() {
    return this.apsService.get('/note');
  }

  get(id: string) {
    return this.apsService.get('/note/' + id);
  }

  add(note: Note) {
    // this method will add a note to the notes array
    return this.apsService.post('/:userId/note', note);
  }

  update(note: Note) {
    console.log(note);
    return this.apsService.put('/note/' + note._id, note);
  }

  delete(id: string) {
    return this.apsService.delete('/note/' + id);
  }
}

  // Http Headers
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // };

  // POST

//   CreateNote(data): Observable<Note> {
//     return this.apsService.post<Note>(this.baseurl + ':userId/note', JSON.stringify(data));
//   }

//   // GET
//   GetIssue(id): Observable<Note> {
//     return this.apsService.get<Note>(this.baseurl + '' + id);

//   }

//   // GET
//   GetIssues(): Observable<Note> {
//     return this.apsService.get<Note>(this.baseurl + '');

//   }

//   // PUT
//   UpdateNote(id, data): Observable<Note> {
//     return this.apsService.put<Note>(this.baseurl + '' + id, JSON.stringify(data));

//   }

//   // DELETE
//   DeleteNote(id){
//     return this.apsService.delete<Note>(this.baseurl + '/notesId' + id);

//   }



// }
