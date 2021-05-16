import { UserInputService as Input } from "@rbxts/services";
import { DisposableComponent } from "shared/Carbon/Internal/Component";
import FPS from "client/Classes/FPS";

export class Controller extends DisposableComponent {
    private fps = new FPS;
    private hotbar = new Array<string>(9);

    public constructor() {
        super("FPSController");
    }

    public Start() {
        Input.InputBegan.Connect(io => {
            const key = io.KeyCode;
            switch(key) {
                case Enum.KeyCode.One:
                    this.fps.Equip(this.hotbar[0]);
                    break;
                case Enum.KeyCode.Two:
                    this.fps.Equip(this.hotbar[1]);
                    break;
            }
        });
    }

    public Update(dt: number) {
        this.fps.Update(dt);
    }
}