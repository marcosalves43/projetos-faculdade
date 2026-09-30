
const WHATSAPP_NUMERO = "999999999";



document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function (link) {
    link.href = "https://wa.me/" + WHATSAPP_NUMERO;
});



(function () {
    const nav = document.querySelector("header nav");
    const lista = nav && nav.querySelector("ul");
    if (!nav || !lista) return;

    lista.id = lista.id || "menu-principal";

    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "menu-toggle";
    botao.setAttribute("aria-label", "Abrir menu");
    botao.setAttribute("aria-controls", lista.id);
    botao.setAttribute("aria-expanded", "false");
    botao.innerHTML = "<span></span><span></span><span></span>";

    nav.parentNode.insertBefore(botao, nav);

    function fechar() {
        lista.classList.remove("open");
        botao.setAttribute("aria-expanded", "false");
        botao.setAttribute("aria-label", "Abrir menu");
    }

    botao.addEventListener("click", function () {
        const aberto = lista.classList.toggle("open");
        botao.setAttribute("aria-expanded", String(aberto));
        botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });

   
    lista.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", fechar);
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") fechar();
    });
    window.matchMedia("(min-width: 768px)").addEventListener("change", fechar);
})();



(function () {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = form.nome.value.trim();
        const telefone = form.telefone.value.trim();
        const servico = form.servico.options[form.servico.selectedIndex].text.trim();
        const problema = form.problema.value.trim();

        let mensagem =
            "Olá, André! Gostaria de pedir um orçamento.\n\n" +
            "*Nome:* " + nome + "\n" +
            "*Telefone:* " + telefone + "\n" +
            "*Serviço:* " + servico;

        if (problema) {
            mensagem += "\n*Detalhes:* " + problema;
        }

        const url = "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(mensagem);
        window.open(url, "_blank", "noopener");
        form.reset();
    });
})();