import * as wasm from "./rs_store_bg.wasm";
import { __wbg_set_wasm } from "./rs_store_bg.js";
__wbg_set_wasm(wasm);
export * from "./rs_store_bg.js";
