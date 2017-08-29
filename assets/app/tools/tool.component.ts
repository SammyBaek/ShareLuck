import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Tool } from "./tool.model";
import { ToolService } from "./tool.service";

@Component({
    selector: 'app-tool',
    templateUrl: './tool.component.html',
    styleUrls: ['./tool.component.css']
})
export class ToolComponent {
    @Input() tool: Tool;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private toolService: ToolService) {}

    onEdit(): void {
        this.editClicked.emit('button clicked');
    }

    onDelete(): void {
        this.toolService.deleteTool(this.tool);
    }
}