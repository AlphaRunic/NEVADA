import { Character } from "shared/Carbon/Framework";
import { Spring } from "shared/Carbon/Classes/Client/Spring";
import { WalkAnimation } from "./WalkAnimation";
import { WaitFor } from "shared/Carbon/Utility/WaitFor";

export class WalkCycleSprings {
    private spring = new Spring();
    private characterRoot = WaitFor<Part>(Character, "HumanoidRootPart");

    public constructor(
        private cycleDamp: number,
        private movementDamp: number,
        private movementAngularDamp: number
    ) {}

    public Update(dt: number): CFrame {
        this.spring.Shove(
            this.GetCycleForce(dt)
                .div(this.cycleDamp)
                .mul(dt)
                .mul(60)
        );

        const walkMovement: Vector3 = this.spring.Update(dt).mul(this.GetCharacterVelocityMagnitude());
        return this.GetCFrame(walkMovement)
            .mul(this.GetAngular(walkMovement));
    }

    private GetCycleForce(dt: number): Vector3 {
        return new Vector3(
            WalkAnimation.X.Update(dt),
            WalkAnimation.Y.Update(dt),
            WalkAnimation.Z.Update(dt)
        );
    }

    private GetCharacterVelocityMagnitude(): number {
        const rootPos: Vector3 = this.characterRoot.Position
        const charVelocity: Vector3 = this.characterRoot.GetVelocityAtPosition(rootPos);
        return charVelocity.Magnitude;
    }

    private GetAngular(walkMovement: Vector3): CFrame {
        return CFrame.Angles(
            math.rad(walkMovement.Y / this.movementAngularDamp),
            math.rad(walkMovement.X / (this.movementAngularDamp / 6)),
            walkMovement.Z / (this.movementAngularDamp * 2)
        );
    }

    private GetCFrame(walkMovement: Vector3): CFrame {
        return new CFrame(
            walkMovement.X / this.movementDamp,
            walkMovement.Y / this.movementDamp,
            0
        );
    }
}