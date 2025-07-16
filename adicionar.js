// const adicionarBtn = document.getElementById("adicionar-btn")

// adicionarBtn.addEventListener("click", () => {
//     adicionarAula()
// })
// function adicionarAula() {
//     const largura = 600;
//     const altura = 500;
//     const esquerda = (screen.width - largura) / 2;
//     const topo = (screen.height - altura) / 2;

//     window.open(
//         "adicionar.html",
//         "telaNovaAula",
//         `width=${largura},height=${altura},left=${esquerda},top=${topo},resizable=no`
//     );
// }


const btn = document.getElementById("adicionar-btn");
const painel = document.getElementById("painel-aula");
const fecharBtn = document.getElementById("fechar")

btn.addEventListener("click", () => {
    painel.style.display = "block";
});

function salvarAula() {
    const titulo = document.getElementById("novo-topico").value;
    const link = document.getElementById("novo-slide").value;

    const li = document.createElement("li");
    li.classList.add("tema");
    li.innerHTML = `
        ${titulo}
        <div class="doc">
            <p>Class slides</p>
            <iframe src="${link}" width="300" height="200"></iframe>
        </div>
    `;

    document.getElementById("topics").appendChild(li);
    painel.style.display = "none";
    painel.style.transition = "100ms"
}
fecharBtn.addEventListener("click", () => {
    painel.style.display = "none";
});