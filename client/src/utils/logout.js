import routes from "../routes";

function handleLogout(context) {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  window.location.href = routes.login.path;
  context.setAccount(undefined);
}

export {handleLogout}