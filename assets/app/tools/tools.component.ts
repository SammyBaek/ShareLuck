import { Component } from "@angular/core";

@Component({
    selector: 'app-tools',
    template: `
        <div class="row">
            <app-tool-input></app-tool-input>
        </div>
        <hr>
        <div class="row">
            <app-tool-list></app-tool-list>
        </div>
    `
})
export class ToolsComponent {

}