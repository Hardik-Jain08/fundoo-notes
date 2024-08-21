import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes-service/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  constructor(private notesService: NotesService) { }
  openCreateContainer = false;
  displayCreateContainer() {
    this.openCreateContainer = !this.openCreateContainer;
  }
  noteDetails : {
    title: string;
    description: string;
    noteLabels: [];
    color: string;
    isArchived: boolean;
    isPined: boolean;
  } = {
    title: '',
    description: '',
    noteLabels: [],
    color: '',
    isArchived: false,
    isPined: false
  };

  ngOnInit(): void {}
  OnAddNewNote() {
    this.notesService.addNewNote('addNotes', this.noteDetails).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }

}
