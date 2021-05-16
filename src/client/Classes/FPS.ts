import { Assets } from "shared/Carbon/Framework";
import { Spring } from "shared/Carbon/Classes/Client/Spring";
import { Find } from "shared/Carbon/Utility/Find";
import { ViewModel } from "./ViewModel";

export default class FPS {
    public readonly State = {
        active: true,
        firing: false,
        aimed: false,
        reloading: false,
        swapping: false,
        weaponEquipped: false,
        crouched: false,
        lean: 0,
        currentWeapon: undefined
    };

    private readonly vm = new ViewModel(Assets.ViewModel)
    private readonly Springs = {
        sway: new Spring(),
        modelRecoil: new Spring(),
        cameraRecoil: new Spring()
    };

    public IsActive(): boolean {
        return this.State.active;
    }

    public Toggle(active: boolean) {
        this.State.active = active;
    }

    public Update(dt: number) {
        if (!this.IsActive()) return;
    }

    public Equip(weapon: string) {
        if (!this.IsActive()) return;
        if (!weapon) return;
        const weaponModel = Find<Model>(Assets, weapon);
        weaponModel.Parent = this.vm.Model;
    }

    public Unequip(weapon: string) {
        if (!this.IsActive()) return;
        if (!weapon) return;
        const weaponModel = Find<Model>(this.vm.Model, weapon);
        weaponModel.Destroy();
    }

    public Aim(bool: boolean) {
        if (!this.IsActive()) return;
        this.State.aimed = bool;
    }
}