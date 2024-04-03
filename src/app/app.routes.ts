import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const routes = [
    {path: 'app-login', component: LoginComponent},
    {path: 'app-main', component: MainComponent},
];