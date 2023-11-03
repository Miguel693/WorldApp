import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarkerCardComponent } from '../marker-card/marker-card.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'add-marker-button',
  templateUrl: './add-marker.component.html',
  styleUrls: ['./add-marker.component.css'],
})
export class AddMarkerButtonComponent {


  public dialog = inject(MatDialog);
  public openDialog(){
    this.dialog.open(MarkerCardComponent);
  }
}
