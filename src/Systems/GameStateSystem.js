import { ReactiveSystem, System } from 'http://192.168.1.135:8080/build/ecsy.module.js';
import {
  Ball,
  Object3D,
} from '../components.mjs';

export class GameStateSystem extends System {
  init() {

    return {
      entities: [gameState]
    }
  }

  execute(delta, time) {
  }
}