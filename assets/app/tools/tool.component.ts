import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Tool } from "./tool.model";

@Component({
    selector: 'app-tool',
    templateUrl: './tool.component.html',
    styleUrls: ['./tool.component.css']
})
export class ToolComponent {
    @Input() tool: Tool;
    @Output() editClicked = new EventEmitter<string>();

    onEdit(): void {
        this.editClicked.emit('button clicked');
    }
}