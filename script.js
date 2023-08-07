function toggleLightMode() {
    document.body.classList.toggle("lightMode");
}
function search() {
    const searchValue = document.getElementById("Inputbox").value.toLowerCase();
    const items = document.getElementsByClassName("product");
  
    Array.from(items).forEach(function(item) {
      const name = item.getElementsByTagName("h3")[0].textContent.toLowerCase();
      const keywords = item.getAttribute("data-keywords").toLowerCase();
  
      if (name.indexOf(searchValue) > -1 || keywords.indexOf(searchValue) > -1) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
// Função para abrir o link do botão
function openLink(event) {
  const button = event.target;
  const link = button.dataset.link;

  if (link) {
    window.open(link, "_blank");
  }
}

// Adicionando o evento de clique aos botões com a classe "adicionar"
const buttons = document.querySelectorAll(".adicionar");
buttons.forEach((button) => {
  button.addEventListener("click", openLink);
});

