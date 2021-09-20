var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// handler.ts
__export(exports, {
  main: () => main
});

// src/main.ts
var r = (statusCode, body) => ({
  statusCode,
  body: JSON.stringify(body)
});
var main = async (event) => {
  console.log(process.env.Foo);
  return r(200, { message: process.env.Foo });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
