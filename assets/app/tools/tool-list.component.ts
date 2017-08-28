import { Component } from "@angular/core";

import { Tool } from "./tool.model";

@Component({
    selector: 'app-tool-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-tool
                    [tool]="tool"
                    (editClicked)="tool.content = $event"
                    *ngFor="let tool of tools">
            </app-tool>
        </div>
    `
})
export class ToolListComponent {
    tools: Tool[] = [
        new Tool('Hammer', 'Sam'),
        new Tool('Driver', 'Jack')
    ];
}