import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NoteComponent } from './component/note/note.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  { path: ':userId',
   component: NoteComponent
  },
  { path: '',
   component: UserComponent
   },
  // { path: 'employees-list', component: NoteViewComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
