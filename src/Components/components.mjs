/* global THREE */
import { TagComponent } from "../../node_modules/ecsy/build/ecsy.module.js";

export class Geometry {
  constructor() {
    this.primitive = "box";
  }
}

export class GLTFModel {}
export class LevelItem {}
export class Shape {}
export class Level {}
export class Dragging extends TagComponent {}
export class FloorCollided extends TagComponent {}
export class Cleared extends TagComponent {}

export class Sky {
  constructor() {}
}

export class Element {
  constructor() {}
}

export class TextGeometry {}

export class Visible {
  constructor() {
    this.reset();
  }

  reset() {
    this.value = false;
  }
}

export class Rotating {
  constructor() {
    this.speed = new THREE.Vector3(0, 0, 0);
  }

  reset() {
    this.speed.set(0, 0, 0);
  }
}

export class ExplosiveMesh {
  constructor() {
    this.reset();
  }

  reset() {
    this.value = 0;
    this.speed = 1;
  }
}

export class Environment {
  constructor() {
    this.active = false;
    this.preset = "default";
    this.seed = 1;
    this.skyType = "atmosphere";
    this.skyColor = "";
    this.horizonColor = "";
    this.lighting = "distant";
    this.shadow = false;
    this.shadowSize = 10;
    this.lightPosition = { x: 0, y: 1, z: -0.2 };
    this.fog = 0;

    this.flatShading = false;
    this.playArea = 1;

    this.ground = "flat";
    this.groundYScale = 3;
    this.groundTexture = "none";
    this.groundColor = "#553e35";
    this.groundColor2 = "#694439";

    this.dressing = "none";
    this.dressingAmount = 10;
    this.dressingColor = "#795449";
    this.dressingScale = 5;
    this.dressingVariance = { x: 1, y: 1, z: 1 };
    this.dressingUniformScale = true;
    this.dressingOnPlayArea = 0;

    this.grid = "none";
    this.gridColor = "#ccc";
  }
}

export class Dissolve {
  constructor() {
    this.value = 1;
    this.speed = 1;
  }

  copy(src) {
    this.value = src.value;
    this.speed = src.speed;
  }
}

export class Parent {
  constructor() {
    this.reset();
  }

  reset() {
    this.value = null;
  }
}

export class CameraRig {
  constructor() {
    this.leftHand = null;
    this.rightHand = null;
    this.camera = null;
  }
}

export class Material {
  constructor() {
    this.color = 0xff0000;
  }
}

export class Transform {
  constructor() {
    this.position = new THREE.Vector3();
    this.rotation = new THREE.Vector3();
  }

  copy(src) {
    this.position.copy(src.position);
    this.rotation.copy(src.rotation);
  }

  reset() {
    this.position.set(0, 0, 0);
    this.rotation.set(0, 0, 0);
  }
}

export class GameState {
  constructor() {
    this.levelFinished = false;
    this.numBallsFailed = 0;
  }
}

export class ThreeContext {
  constructor() {
    this.scene = null;
    this.renderer = null;
  }
}

export class VRController {
  constructor() {
    this.id = 0;
    this.controller = null;
  }
}

export class Draggable {
  constructor() {}
}

export class Active {
  constructor() {}
}

export class Object3D {
  constructor() {
    this.reset();
  }

  reset() {
    this.value = null;
  }
}

export class BallGenerator {
  constructor() {
    this.position = new THREE.Vector3();
    this.linearVelocity = new THREE.Vector3();
  }

  copy(src) {
    this.position.copy(src.position);
    this.linearVelocity.copy(src.linearVelocity);
  }
}

export class Ball {
  constructor() {
    this.position = new THREE.Vector3();
    this.radius = 0.4;
    this.linearVelocity = new THREE.Vector3();
  }

  reset() {
    this.position.copy(0, 0, 0);
    this.radius = 0.4;
    this.linearVelocity.set(0, 0, 0);
  }

  copy(src) {
    this.position.copy(src.position);
    this.radius = src.radius;
    this.linearVelocity.copy(src.linearVelocity);
  }
}

export class Target {
  constructor() {
    this.position = new THREE.Vector3();
  }

  copy(src) {
    this.position.copy(src.position);
  }

}
export class RigidBody {
  constructor() {
    this.object = null;
    this.weight = 0;
    this.restitution = 1;
    this.friction = 1;
    this.linearDamping = 0;
    this.angularDamping = 0;
    this.linearVelocity = { x: 0, y: 0, z: 0 };
  }
}
