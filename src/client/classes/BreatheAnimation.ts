import Wave from "shared/Carbon/Classes/Client/Wave";

export class BreatheAnimation {
    private wave: Wave;

    public constructor(amp: number = .05, spd: number = 1.5) {
        this.wave = new Wave(amp, spd);
    }

    public Update(dt: number): CFrame {
        return new CFrame(0, this.wave.Update(dt), 0);
    }
}