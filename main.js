
const setCookieButton = document.getElementById('set-cookie-btn');
const cookieDisplay = document.getElementById('cookie-display');

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration in days
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

setCookieButton.addEventListener('click', () => {
    setCookie('exampleCookie', 'Hello, Cookie!', 7); 
    const cookieValue = getCookie('exampleCookie');
    cookieDisplay.textContent = cookieValue ? `Cookie set: ${cookieValue}` : 'No cookie set yet.';
});