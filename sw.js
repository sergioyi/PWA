let cacheName = "pwa-ciasc-recepcionista";

/*let filesToCache = [
"/",
"/index.html",
"/css/style.css",
"/js/main.js",
"/js/cpf.js",
"/js/tabeladehorario.js",
"/images/Vector.svg",
"./pesquisa.html",
"./agendamento.html"];*/

/* inicializando a service worker e fazendo o 
download do conteúdo da aplicação */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/css/style.css",
        "/js/main.js",
        "/js/cpf.js",
        "/js/tabeladehorario.js",
        "/images/Vector.svg",
        "./pesquisa.html",
        "./agendamento.html"]);
    })
  );
});

// disponibilizando o conteudo quando estiver offline 
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request)
    })
  );
});