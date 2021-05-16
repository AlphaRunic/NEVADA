export = class Wave {
    public constructor(
        public Amplitude: number = 1,
        public Frequency: number = 1,
        public PhaseShift: number = 0,
        public VerticalShift: number = 0
    ) {}

    public Update(dt: number): number {
        return (this.Amplitude * math.sin(this.Frequency * tick() + this.PhaseShift) + this.VerticalShift) * dt * 60;
    }
}