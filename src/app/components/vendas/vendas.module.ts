import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { MaterialModule } from 'src/app/core/material-module/material.module';
import { VendasComponent } from './vendas.component';
import { VendasRoutes } from './vendas.routing';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    DragulaModule.forRoot(),
    RouterModule.forChild(VendasRoutes)
  ],
  declarations: [ VendasComponent ]
})

export class VendasModule {}
