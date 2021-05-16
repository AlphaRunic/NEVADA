export class CarbonClient  {
    private listeners = new Array<[string, Callback]>();

    public Emit(event: string, ...args: unknown[]) {
        this.listeners.forEach(info => {
            if (info[0] === event)
                info[1](...args);
        });
    }

    public On(event: string, listener: Callback) {
        const index = this.listeners.push([event, listener]);
        return () => this.listeners.remove(index);
    }

    public Once(event: string, listener: Callback) {
        const unbind = this.On(event, (...args: unknown[]) => {
            listener(...args);
            unbind();
        });
    }
}