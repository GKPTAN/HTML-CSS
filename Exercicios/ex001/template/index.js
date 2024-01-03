// Teste para ver se o navegador suporta o elemento de modelo HTML verificado
// para a presença do atributo content do elemento template.
if ("content" in document.createElement("template")) {
    // Instancie a tabela com o HTML existente
    // e a linha com o modelo
    const tbody = document.querySelector("tbody");
    const template = document.querySelector("#productrow");
  
    // Clone a nova linha e insira-a na tabela
    const clone = template.content.cloneNode(true);
    let td = clone.querySelectorAll("td");
    td[0].textContent = "1235646565";
    td[1].textContent = "Stuff";
  
    tbody.appendChild(clone);
  
    // Clone a nova linha e insira-a na tabela
    const clone2 = template.content.cloneNode(true);
    td = clone2.querySelectorAll("td");
    td[0].textContent = "0384928528";
    td[1].textContent = "Acme Kidney Beans 2";
  
    tbody.appendChild(clone2);
  } else {
    // Encontre outra maneira de adicionar as linhas à tabela porque
    // o elemento de modelo HTML não é suportado.
  }
  