import { Carbon } from "shared/Carbon/Framework";
import { CameraAnimation } from "./GameComponents/CameraAnimation";
import { Movement } from "./GameComponents/Movement";
import { HealthUX } from "./GameComponents/UX/HealthUX";
import { StaminaUX } from "./GameComponents/UX/StaminaUX";
import { Controller } from "./GameComponents/FPS/Controller";

Carbon.RunComponents(
    new Movement,
    new CameraAnimation,
    // new Controller,
    new StaminaUX,
    new HealthUX
);