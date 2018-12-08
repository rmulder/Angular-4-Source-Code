import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule , MatRadioModule , MatSelectModule, MatInputModule, MatDatepickerModule} from '@angular/material';
import { MatNativeDateModule, MatIconModule, MatButtonModule, MatChipsModule, MatProgressSpinnerModule} from '@angular/material';
import { MatTooltipModule, MatTabsModule} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  exports : [
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule
  ]
})
export class MatComponentsModule { }
