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

let nickColorSheme = params.get('nickcolorscheme')
if (nickColorSheme == "reveil2025") {
    root.style.setProperty('--nick-color-1', '#f5f5b7');
    root.style.setProperty('--nick-color-2', '#de4501');
    root.style.setProperty('--nick-color-3', '#5d4016');
    root.style.setProperty('--nick-color-4', '#ebd999');
    root.style.setProperty('--nick-color-5', '#a6d50d');
    root.style.setProperty('--nick-color-6', '#b9a601');
    root.style.setProperty('--nick-color-7', '#0e75ff');
    root.style.setProperty('--nick-color-8', '#6e66d5');
    root.style.setProperty('--nick-color-9', '#0057b9');
    root.style.setProperty('--nick-color-10', '#65aa8e');
    root.style.setProperty('--nick-color-11', '#00d873');
    root.style.setProperty('--nick-color-12', '#1b8f14');
    root.style.setProperty('--nick-color-13', 'white');
}