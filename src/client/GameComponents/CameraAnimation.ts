import { Camera } from "shared/Carbon/Framework";
import { WalkCycleSprings } from "../classes/WalkCycleSprings";
import { BreatheAnimation } from "../classes/BreatheAnimation";
import { Component } from "shared/Carbon/Internal/Component";

export class CameraAnimation implements Component {
    public Name = "CameraAnimation";

    private breathing = new BreatheAnimation();
    private walkCycle = new WalkCycleSprings(37, 35, 14);

    public Update(dt: number): void {
        let springCf = new CFrame();

        const breatheCf: CFrame = this.breathing.Update(dt);
        const walkAnim: CFrame = this.walkCycle.Update(dt);
        
        springCf = springCf
            .mul(walkAnim);

        Camera.CFrame = Camera.CFrame
            .mul(breatheCf)
            .mul(springCf);
    }
}