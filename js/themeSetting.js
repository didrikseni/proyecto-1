// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
        $("#themeToggler").removeClass("fa-toggle-on");
        $("#themeToggler").addClass("fa-toggle-off");
        setTheme("theme-light");
    } else {
        $("#themeToggler").removeClass("fa-toggle-off");
        $("#themeToggler").addClass("fa-toggle-on");
        setTheme("theme-dark");
    }
} // Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-dark");
    } else {
        setTheme("theme-light");
    }
})();