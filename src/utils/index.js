import {
  BASE_WIN_WIDTH,
  BASE_WIN_HEIGHT,
} from "./constant.js";


export function getRealWidth(rect, designWidth) {
  return rect.width / BASE_WIN_WIDTH * designWidth;
}
export function getRealHeight(rect, designHeight) {
  return rect.height / BASE_WIN_HEIGHT * designHeight;
}