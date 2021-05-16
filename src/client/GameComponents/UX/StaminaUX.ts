import { Client, UI } from "shared/Carbon/Framework";
import { DisposableComponent } from "shared/Carbon/Internal/Component";

export class StaminaUX extends DisposableComponent {
    private main = UI.Find("Main");
    private frame = UI.FindElement<Frame>(this.main, "Frame");
    private statsFrame = UI.FindElement<Frame>(this.frame, "Stats");
    private staminaBarFrame = UI.FindElement<Frame>(this.statsFrame, "StaminaBar");
    private staminaTop = UI.FindElement<ImageLabel>(this.staminaBarFrame, "Top");

    public constructor() {
        super("StaminaUX");
    }

    public Start() {
        this.GiveTask(() => 
            Client.On("Update Stamina", (stamina: number) => 
                this.staminaTop.Size = new UDim2(stamina / 100, 0, 1, 0)
            )
        );
        this.Destroy();
    }
}