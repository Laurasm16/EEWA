document.addEventListener("DOMContentLoaded", function() {
    const temas = document.querySelectorAll("#topics #tema"); // Seleciona todos os itens com id "tema"
    const docs = document.querySelectorAll(".doc"); // Seleciona todos os elementos com a classe "doc"

    temas.forEach((tema, index) => {
        tema.addEventListener('click', function() {
            const doc = docs[index]; // Encontra o documento correspondente
            if (doc.style.display === "none" || doc.style.display === "") {
                doc.style.display = "block";
            } else {
                doc.style.display = "none";
            }
        });
    });
});
