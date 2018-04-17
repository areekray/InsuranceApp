import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular/module';
import { ClaimsStatusComponent } from './claims-status';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        ClaimsStatusComponent
    ],
    imports: [
        IonicModule,
        ChartsModule
    ],
    exports: [
        ClaimsStatusComponent
    ]
})
export class ClaimsStatusComponentModule {}