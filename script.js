function formatCEP(cep) {
    cep = cep.replace("-", "");
    cep = cep.replace(".", "");
    return cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
  }
  
  function consultarCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert("CEP não encontrado. Por favor, digite um CEP válido.");
        } else {
          document.getElementById("cidade").value = data.localidade;
          document.getElementById("estado").value = data.uf;
          document.getElementById("endereco").value = data.logradouro;
  
          document.getElementById("formulario").classList.add("hidden");
          document.getElementById("resultado").classList.remove("hidden");
        }
      })
      .catch(error => console.log(error));
  }
  
  document.getElementById("consultar").addEventListener("click", function() {
    var cep = document.getElementById("cep").value;
    cep = formatCEP(cep);
    if (cep.length === 8) {
      consultarCEP(cep);
    } else {
      alert("Por favor, digite um CEP válido.");
    }
  });
  
  document.getElementById("consultar-novo").addEventListener("click", function() {
    document.getElementById("resultado").classList.add("hidden");
    document.getElementById("formulario").classList.remove("hidden");
  });
  
