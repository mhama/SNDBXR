import * as path from "path"
import { loadFromFile } from "../loader"
import { Sandbox } from "../connector/Sandbox"
import { GET_MATERIAL_OF_OBJECT, CREATE_PRIMITIVE_OBJECT } from "../../assembly/function_ids"

class TestSandbox extends Sandbox {
  constructor() {
    super()
    this.callEngine_i_i_Map.set(CREATE_PRIMITIVE_OBJECT, this.createPrimitive.bind(this))
    this.callEngine_i_i_Map.set(GET_MATERIAL_OF_OBJECT, this.getMaterial.bind(this))
  }
  logInt(value) {
    expect(value).toBe(23)
  }
  createPrimitive(i0) {
    expect(i0).toBe(0)
    return [10]
  }
  getMaterial(i0) {
    expect(i0).toBe(10)
    return [23]
  }
}

test("test createPrimitive", async () => {
  const sandbox = new TestSandbox()
  await loadFromFile(
    path.join(__dirname, "../../build_test/getMaterialOfObject.wasm"),
    sandbox
  )
  sandbox.onStart()
})