import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ToolComponent } from "./tools/tool.component";
import { ToolListComponent } from "./tools/tool-list.component";
import { ToolInputComponent } from "./tools/tool-input.component";

@NgModule({
    declarations: [
        AppComponent,
        ToolComponent,
        ToolListComponent,
        ToolInputComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}