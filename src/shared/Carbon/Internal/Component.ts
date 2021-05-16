import { Disposable } from "../Classes/Utility/Disposable";
import { NullishFunction } from "../Framework";

export abstract class Component {   
    public abstract Name: string; 
    public abstract Start?: NullishFunction;
    public abstract Update?: NullishFunction;
    public abstract Run?: NullishFunction;
}

export abstract class NetworkComponent extends Component {    
    abstract readonly Network: object;
}

export class DisposableComponent extends Disposable implements Component {
    public constructor(
        public readonly Name: string
    ) {
        super();
    }

    public Start() {
        this.Destroy();
    }
}