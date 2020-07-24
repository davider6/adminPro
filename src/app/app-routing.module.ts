import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { PagesRoutingModule } from "./pages/pages-routing.module";
import { AuthRoutingModule } from "./auth/auth-routing.module";

const routes: Routes = [

    { path: '', redirectTo: '/pages', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
              PagesRoutingModule,
              AuthRoutingModule ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
