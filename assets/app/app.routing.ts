import { RouterModule, Routes } from "@angular/router";
import { ToolsComponent } from "./tools/tools.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/tools',
        pathMatch: 'full'       // otherwise every path includes '/'
    }, {
        path: 'tools',
        component: ToolsComponent
    }, {
        path: 'auth',
        component: AuthenticationComponent,
        children: AUTH_ROUTES
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES);