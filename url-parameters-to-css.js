const root = document.documentElement;
let params = new URLSearchParams(window.location.search);

let backgroundColor = params.get('backgroundcolor')
if (backgroundColor) {
    root.style.setProperty('--background-color', backgroundColor);
}

let primaryColor = params.get('primarycolor')
if (primaryColor) {
    root.style.setProperty('--primary-color', primaryColor);
}