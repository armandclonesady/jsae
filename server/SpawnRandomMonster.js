import BasicShooter from "./entities/BasicShooter.js";
import BounceShooter from "./entities/BounceShooter.js";
import CurvedShooter from "./entities/CurvedShooter.js";
import SniperShooter from "./entities/SniperShooter.js";

export default function spawnRandomMonster(randomMonsterIndex) {
  let monster;
  switch (randomMonsterIndex) {
    case 1:
      //basicShooter
      monster = new BasicShooter(
        5,
        60,
        10,
        monster.canvasWidth - 40,
        40 + Math.round(Math.random() * monster.canvasHeight - 40),
        {
          xSpeed: Math.round(Math.random() * 10) + 1,
          ySpeed: Math.round(Math.random() * 6) + 1,
          time: Math.round(Math.random() * 6000) + 1000,
          xSpeed1: Math.round(Math.random() * 10) + 10,
          ySpeed1: Math.round(Math.random() * 8) + 7,
          transitionTime: Math.round(Math.random() * 5000) + 7000,
        }
      );
      break;
    case 2:
      //homingShooter
      monster = new HomingShooter(
        5,
        60,
        10,
        monster.canvasWidth - 40,
        40 + Math.round(Math.random() * monster.canvasHeight - 40),
        {
          xSpeed: Math.round(Math.random() * 10) + 1,
          ySpeed: Math.round(Math.random() * 6) + 1,
          time: Math.round(Math.random() * 6000) + 1000,
          xSpeed1: Math.round(Math.random() * 10) + 10,
          ySpeed1: Math.round(Math.random() * 8) + 7,
          transitionTime: Math.round(Math.random() * 5000) + 7000,
        }
      );
      break;
    case 3:
      //curvedShooter
      monster = new CurvedShooter(
        5,
        60,
        10,
        monster.canvasWidth - 40,
        40 + Math.round(Math.random() * monster.canvasHeight - 40),
        {
          xSpeed: Math.round(Math.random() * 10) + 1,
          ySpeed: Math.round(Math.random() * 6) + 1,
          time: Math.round(Math.random() * 6000) + 1000,
          xSpeed1: Math.round(Math.random() * 10) + 10,
          ySpeed1: Math.round(Math.random() * 8) + 7,
          transitionTime: Math.round(Math.random() * 5000) + 7000,
        }
      );
      break;
    case 4:
      //BounceShooter
      monster = new BounceShooter(
        5,
        60,
        10,
        monster.canvasWidth - 40,
        40 + Math.round(Math.random() * monster.canvasHeight - 40),
        {
          xSpeed: Math.round(Math.random() * 10) + 1,
          ySpeed: Math.round(Math.random() * 6) + 1,
          time: Math.round(Math.random() * 6000) + 1000,
          xSpeed1: Math.round(Math.random() * 10) + 10,
          ySpeed1: Math.round(Math.random() * 8) + 7,
          transitionTime: Math.round(Math.random() * 5000) + 7000,
        }
      );
      break;
    case 5:
      //SniperShooter
      monster = new SniperShooter(
        5,
        60,
        10,
        monster.canvasWidth - 40,
        40 + Math.round(Math.random() * monster.canvasHeight - 40),
        {
          xSpeed: Math.round(Math.random() * 10) + 1,
          ySpeed: Math.round(Math.random() * 6) + 1,
          time: Math.round(Math.random() * 6000) + 1000,
          xSpeed1: Math.round(Math.random() * 10) + 10,
          ySpeed1: Math.round(Math.random() * 8) + 7,
          transitionTime: Math.round(Math.random() * 5000) + 7000,
        }
      );
      break;
    case 6:
      //SkullShooter
      monster = new SkullShooter(
        5,
        60,
        10,
        monster.canvasWidth - 40,
        40 + Math.round(Math.random() * monster.canvasHeight - 40),
        {
          xSpeed: Math.round(Math.random() * 10) + 1,
          ySpeed: Math.round(Math.random() * 6) + 1,
          time: Math.round(Math.random() * 6000) + 1000,
          xSpeed1: Math.round(Math.random() * 10) + 10,
          ySpeed1: Math.round(Math.random() * 8) + 7,
          transitionTime: Math.round(Math.random() * 5000) + 7000,
        }
      );
      break;
    default:
      monster = new HomingShooter(
        5,
        60,
        10,
        monster.canvasWidth - 40,
        40 + Math.round(Math.random() * monster.canvasHeight - 40),
        {
          xSpeed: Math.round(Math.random() * 10) + 1,
          ySpeed: Math.round(Math.random() * 6) + 1,
          time: Math.round(Math.random() * 6000) + 1000,
          xSpeed1: Math.round(Math.random() * 10) + 10,
          ySpeed1: Math.round(Math.random() * 8) + 7,
          transitionTime: Math.round(Math.random() * 5000) + 7000,
        }
      );
      break;
  }
  if (monster) {
    return monster;
  }
}
