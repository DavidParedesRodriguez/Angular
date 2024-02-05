
// prime-ng.module.ts

import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  exports: [
    TableModule,
    CardModule,
    ButtonModule,
    

    // Agrega aquí otros módulos de PrimeNG que necesites
  ]
})
export class PrimeNgModule {}
