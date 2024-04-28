import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecoundComponent } from './secound/secound.component';

export const routes: Routes = [
    {path: 'first', component: FirstComponent},
    {path: 'secound', component: SecoundComponent}
];
