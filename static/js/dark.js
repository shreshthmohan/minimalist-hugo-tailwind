(function () {
  var storedTheme; // As set by user using the checkbox on the webpage
  // theme signifies light or dark
  try {
    storedTheme = localStorage.getItem("theme");
  } catch (err) {}

  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  var darkModeSwitch = document.getElementById("dark-mode-switch");

  function makeDark() {
    document.documentElement.classList.add("dark");
    darkModeSwitch.checked = true;
  }

  function makeLight() {
    document.documentElement.classList.remove("dark");
    darkModeSwitch.checked = false;
  }

  if (storedTheme === "dark") {
    makeDark();
  } else if (storedTheme === "light") {
    makeLight();
  } else {
    // use media query
    if (darkQuery.matches) {
      makeDark();
    } else {
      makeLight();
    }
  }
  function darkQueryListen(e) {
    if (e.matches) {
      makeDark();
    } else {
      makeLight();
    }
  }
  darkQuery.addEventListener("change", darkQueryListen);

  function darkModeSwitchListen(e) {
    var newThemeState = e.target.checked;
    darkModeSwitch.checked = newThemeState;
    if (newThemeState) {
      makeDark();
    } else {
      makeLight();
    }
  }

  darkModeSwitch.addEventListener("change", darkModeSwitchListen);

  window.addEventListener("unload", function () {
    console.log("removing listeners");
    // probably unnecessary though
    darkModeSwitch.removeEventListener("change", darkModeSwitchListen);
    darkQuery.removeEventListener("change", darkQueryListen);
  });
})();
