import { NgModule } from '@angular/core';

// Angular Material
import { MatButtonModule }    from '@angular/material/button';
import { MatCardModule }      from '@angular/material/card';
import { MatDividerModule }   from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule }      from '@angular/material/icon';
import { MatInputModule }     from '@angular/material/input';
import { MatListModule }      from '@angular/material/list';
import { MatSidenavModule }   from '@angular/material/sidenav';
import { MatToolbarModule }   from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
  ],
})
export class MaterialModule { }
