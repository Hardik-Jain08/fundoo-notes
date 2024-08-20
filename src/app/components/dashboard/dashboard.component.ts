import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes-service/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  
  notes = []
  ngOnInit(): void {
    this.notesService.getAllNotes('getNotesList').subscribe({
      next: (res: any) => {
        console.log(res);
        this.notes = res.data.data;
      },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }
  

}
