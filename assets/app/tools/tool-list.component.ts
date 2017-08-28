import { Component, OnInit } from "@angular/core";

import { Tool } from "./tool.model";
import { ToolService } from "./tool.service";

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
export class ToolListComponent implements OnInit {
    constructor(private toolService: ToolService) {}
    tools: Tool[];

    ngOnInit() {
        this.tools = this.toolService.getTools();
    }
}