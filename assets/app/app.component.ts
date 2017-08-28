import { Component } from '@angular/core';

import { ToolService } from "./tools/tool.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ToolService]
})
export class AppComponent {

}