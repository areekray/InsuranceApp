import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular/module';
import { CurrentMonthClaimsComponent } from './current-month-claims';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        CurrentMonthClaimsComponent
    ],
    imports: [
        IonicModule,
        ChartsModule
    ],
    exports: [
        CurrentMonthClaimsComponent
    ]
})
export class CurrentMonthClaimsComponentModule {}