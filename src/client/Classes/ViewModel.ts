import { Workspace } from "@rbxts/services";
import { Disposable } from "shared/Carbon/Framework";

export class ViewModel extends Disposable {
    private readonly cam = Workspace.CurrentCamera as Camera;

    public constructor(
        public Model: Model
    ) { 
        super(); 
    }

    public Start() {
        this.GiveTask(() => this.Model.Parent = this.cam);
        this.Destroy();
    }

    public Update(dt: number) {
        this.Model.SetPrimaryPartCFrame(this.cam.CFrame);
    }
}