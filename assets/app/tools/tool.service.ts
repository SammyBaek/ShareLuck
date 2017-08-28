import { Tool } from "./tool.model";

export class ToolService {
    tools: Tool[] = [];

    addTool(tool: Tool) {
        this.tools.push(tool);
        console.log(this.tools);
    }

    getTools() {
        return this.tools;
    }

    deleteTool(tool: Tool) {
        this.tools.splice(this.tools.indexOf(tool), 1);
    }
}