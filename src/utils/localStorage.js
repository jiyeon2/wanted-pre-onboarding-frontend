const JWT_KEY = "thedayofhippojwttodokey";

export function saveJWT(token) {
  window.localStorage.setItem(JWT_KEY, token);
}

export function getJWT() {}
