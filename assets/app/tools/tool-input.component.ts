import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { ToolService } from "./tool.service";
import { Tool } from "./tool.model";

@Component({
    selector: 'app-tool-input',
    templateUrl: './tool-input.component.html'
})
export class ToolInputComponent {
    constructor(private toolService: ToolService) {}

    onSubmit(form: NgForm) {
        this.toolService.addTool(new Tool(form.value.content, 'Sammy'));
        form.resetForm();
    }
}