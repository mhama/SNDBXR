import { createPrimitive, Object, PrimitiveType, } from "sndbxr/Object"
import { Vector2 } from "sndbxr/Vector2"
import { Vector3 } from "sndbxr/Vector3"

const objects: Object[] = [];
let speed: Vector2 = new Vector2(0, 0.6)
const g: f32 = 1
const mEarth: f32 = 1
const mSun: f32 = 1
const sunPos = new Vector2(0, 0)
let earthPos = new Vector2(2, 0)

const dt: f32 = 0.01

export function update(): void {
  const earth = objects[1]
  const a = g * mSun * mEarth / sunPos.distanceToSquared(earthPos)
  const fn = sunPos.sub(earthPos).normalize()
  const av = fn.multiplyScalar(a as f32)
  earthPos = earthPos.add(speed.multiplyScalar(dt))
  earth.setPosition(new Vector3(earthPos.x, earthPos.y, 0))
  speed = speed.add(av.multiplyScalar(dt))
}

export function start(): i32 {
  const sun = createPrimitive(PrimitiveType.SPHERE)
  const earth = createPrimitive(PrimitiveType.SPHERE)
  if (sun) {
    sun.setPosition(new Vector3(sunPos.x, sunPos.y, 0))
    objects.push(sun)
  }
  if (earth) {
    earth.setPosition(new Vector3(earthPos.x, earthPos.y, 0))
    earth.setScale(new Vector3(0.2, 0.2, 0.2))
    objects.push(earth)
  }
  return 0
}