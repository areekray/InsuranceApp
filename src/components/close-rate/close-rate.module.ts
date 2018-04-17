import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular/module';
import { CloseRateComponent } from './close-rate';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
    declarations: [
        CloseRateComponent
    ],
    imports: [
        IonicModule,
        NgCircleProgressModule.forRoot()
    ],
    exports: [
        CloseRateComponent
    ]
})
export class CloseRateComponentModule {}