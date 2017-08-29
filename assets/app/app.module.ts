import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ToolComponent } from "./tools/tool.component";
import { ToolListComponent } from "./tools/tool-list.component";
import { ToolInputComponent } from "./tools/tool-input.component";
import { ToolsComponent } from "./tools/tools.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";

@NgModule({
    declarations: [
        AppComponent,
        ToolComponent,
        ToolListComponent,
        ToolInputComponent,
        ToolsComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}