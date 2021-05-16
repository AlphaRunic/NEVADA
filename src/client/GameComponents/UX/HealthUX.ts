import { Character, UI } from "shared/Carbon/Framework";
import { DisposableComponent } from "shared/Carbon/Internal/Component";
import { WaitFor } from "shared/Carbon/Utility/WaitFor";

export class HealthUX extends DisposableComponent {
    private main = UI.Find("Main");
    private frame = UI.FindElement<Frame>(this.main, "Frame");
    private statsFrame = UI.FindElement<Frame>(this.frame, "Stats");
    private healthBarFrame = UI.FindElement<Frame>(this.statsFrame, "HealthBar");
    private healthTop = UI.FindElement<ImageLabel>(this.healthBarFrame, "Top");

    public constructor() {
        super("HealthUX");
    }

    public Start() {
        this.GiveTask(() => {
            const humanoid = WaitFor<Humanoid>(Character, "Humanoid");
            humanoid.GetPropertyChangedSignal("Health")
                .Connect(() => this.healthTop.Size = new UDim2(humanoid.Health / 100, 0, 1, 0));
        });
        this.Destroy();
    }
}