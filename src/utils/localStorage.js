const JWT_KEY = "thedayofhippojwttodokey";

export function saveJWT(token) {
  window.localStorage.setItem(JWT_KEY, token);
}

export function getJWT() {
  return window.localStorage.getItem(JWT_KEY);
}

export function removeJWT() {
  window.localStorage.removeItem(JWT_KEY);
}
