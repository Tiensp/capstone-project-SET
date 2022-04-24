function getTokenFromStorage() {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) {
    sessionStorage.setItem("token", token);
  }
  return token
}

export { getTokenFromStorage };