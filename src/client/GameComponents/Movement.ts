import { FastWait } from "@rbxts/fast-wait";
import { UserInputService as Input } from "@rbxts/services";
import { Thread } from "shared/Carbon/Classes/Utility/Thread";
import { Carbon, Character, Client } from "shared/Carbon/Framework";
import { Component } from "shared/Carbon/Internal/Component";
import { Tween } from "shared/Carbon/Utility/UI";
import { WaitFor } from "shared/Carbon/Utility/WaitFor";

export class Movement implements Component {
    public readonly Name = "Movement";

    private humanoid = WaitFor<Humanoid>(Character, "Humanoid");
    private stamina = 100;
    private staminaInc = .25;
    private staminaGainMult = 1.75;
    private secondsAfterSprinting = 0;
    private secondsBeforeStaminaGain = 3;
    private state = "jog";
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
        this.state = "walk";
        const walkTransition = this.MakeTransitionInfo(.75);
        Tween(this.humanoid, walkTransition, {
            WalkSpeed: this.speed.walk
        });
    }

    private Jog() {
        this.state = "jog";
        const jogTransition = this.MakeTransitionInfo(.75);
        Tween(this.humanoid, jogTransition, {
            WalkSpeed: this.speed.jog
        });

        new Thread(() => {
            while (
                this.state === "jog" && 
                this.secondsAfterSprinting >= this.secondsBeforeStaminaGain && 
                this.stamina <= 100
            ) {
                Carbon.Update.Wait();
                this.stamina += this.staminaInc;
                this.UpdateStaminaUI();
            }
        }).FastSpawn();
    }

    private Sprint() {
        this.state = "sprint";
        const sprintTransition = this.MakeTransitionInfo(1.25);
        Tween(this.humanoid, sprintTransition, {
            WalkSpeed: this.speed.sprint
        });

        new Thread(() => {
            while (this.state === "sprint" && this.stamina > 0) {
                Carbon.Update.Wait();
                this.stamina -= this.staminaInc;
                this.UpdateStaminaUI();
            }

            if (this.stamina === 0)
                this.Jog();

            while (this.state !== "sprint") {
                FastWait(1);
                this.secondsAfterSprinting++;
            }

            this.secondsAfterSprinting = 0;
        }).FastSpawn();
    }

    private MakeTransitionInfo(speed: number) {
        return new TweenInfo(speed, Enum.EasingStyle.Sine, Enum.EasingDirection.InOut);
    }

    private UpdateStaminaUI() {
        Client.Emit("Update Stamina", this.stamina);
    }
}