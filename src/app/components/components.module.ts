import { NgModule } from '@angular/core';

import { DonuthComponent } from "./donuth/donuth.component";
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [ DonuthComponent],
    imports: [ ChartsModule ],
    exports: [ DonuthComponent ],
    providers: [],
})
export class ComponentsModule {}