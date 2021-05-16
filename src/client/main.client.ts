import { Carbon } from "shared/Carbon/Framework";
import { CameraAnimation } from "./GameComponents/CameraAnimation";
import { Movement } from "./GameComponents/Movement";
import { HealthUX } from "./GameComponents/UX/HealthUX";
import { StaminaUX } from "./GameComponents/UX/StaminaUX";

Carbon.RunComponents(
    new Movement,
    new CameraAnimation,
    new StaminaUX,
    new HealthUX
);