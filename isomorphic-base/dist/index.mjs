// src/index.ts
import ax from "axios";
async function foo() {
  const re = await ax.get("https://httpbin.org/");
  console.info(re);
}
export {
  foo
};
