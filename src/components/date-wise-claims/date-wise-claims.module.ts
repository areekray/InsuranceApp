import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular/module';
import { DateWiseClaimsComponent } from './date-wise-claims';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        DateWiseClaimsComponent
    ],
    imports: [
        IonicModule,
        ChartsModule
    ],
    exports: [
        DateWiseClaimsComponent
    ]
})
export class DateWiseClaimsComponentModule {}