import { NgModule } from '@angular/core';

// Angular Material
import { MatButtonModule }    from '@angular/material/button';
import { MatCardModule }      from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule }      from '@angular/material/icon';
import { MatInputModule }     from '@angular/material/input';
import { MatListModule }      from '@angular/material/list';
import { MatSidenavModule }   from '@angular/material/sidenav';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
  ],
})
export class MaterialModule { }
