document.addEventListener("DOMContentLoaded", function() {
    const temas = document.querySelectorAll(".tema");
    const docs = document.querySelectorAll(".doc");

    temas.forEach((tema, index) => {
        tema.addEventListener('click', function() {
            const doc = docs[index]; 
            if (doc.style.display === "none" || doc.style.display === "") {
                doc.style.display = "block";
            } else {
                doc.style.display = "none";
            }
        });
    });
});
