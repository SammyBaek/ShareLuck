import { Component } from "@angular/core";

import { ToolService } from "./tool.service";
import { Tool } from "./tool.model";

@Component({
    selector: 'app-tool-input',
    templateUrl: './tool-input.component.html'
})
export class ToolInputComponent {
    constructor(private toolService: ToolService) {}

    onSave(value: string) {
        this.toolService.addTool(new Tool(value, 'Sammy'));
    }
}