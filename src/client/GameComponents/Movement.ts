import { UserInputService as Input } from "@rbxts/services";
import { Character } from "shared/Carbon/Framework";
import { Component } from "shared/Carbon/Internal/Component";
import { Tween } from "shared/Carbon/Utility/UI";
import { WaitFor } from "shared/Carbon/Utility/WaitFor";

export class Movement implements Component {
    public readonly Name = "Movement";

    private humanoid = WaitFor<Humanoid>(Character, "Humanoid");
    private readonly speed = {
        walk: 8,
        jog: 16,
        sprint: 23
    };

    public Start() {
        this.humanoid.WalkSpeed = this.speed.jog;
        this.humanoid.Died.Connect(() => this.humanoid.WalkSpeed = this.speed.jog);

        Input.InputBegan.Connect(io => {
            const key = io.KeyCode;
            switch(key) {
                case Enum.KeyCode.LeftAlt:
                    this.Walk();
                    break;
                case Enum.KeyCode.LeftShift:
                    this.Sprint();
                    break;
            }
        });

        Input.InputEnded.Connect(io => {
            const key = io.KeyCode;
            switch(key) {
                case Enum.KeyCode.LeftAlt:
                    this.Jog();
                    break;
                case Enum.KeyCode.LeftShift:
                    this.Jog();
                    break;
            }
        });
    }

    private Walk() {
        const walkTransition = this.MakeTransitionInfo(.5);
        Tween(this.humanoid, walkTransition, {
            WalkSpeed: this.speed.walk
        });
    }

    private Jog() {
        const jogTransition = this.MakeTransitionInfo(.5);
        Tween(this.humanoid, jogTransition, {
            WalkSpeed: this.speed.jog
        });
    }

    private Sprint() {
        const sprintTransition = this.MakeTransitionInfo(.5);
        Tween(this.humanoid, sprintTransition, {
            WalkSpeed: this.speed.sprint
        });
    }

    private MakeTransitionInfo(speed: number) {
        return new TweenInfo(speed, Enum.EasingStyle.Sine, Enum.EasingDirection.InOut);
    }
}