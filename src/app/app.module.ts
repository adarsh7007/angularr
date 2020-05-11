import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoteService } from './service/note.service';
import { UserService } from './service/user.service';
import { FormControl, FormGroup, FormBuilder, NgForm, FormsModule  } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './component/note/note.component';
import { UserComponent } from './component/user/user.component';
import { NoteViewComponent } from './component/note-view/note-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    UserComponent,
    NoteViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule



  ],
  providers: [NoteService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
