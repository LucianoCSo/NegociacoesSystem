var colunas = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor")
]
var tbody = document.querySelector("table tbody")
document.querySelector(".form").addEventListener("submit", function(e){
  e.preventDefault()

  var tr = document.createElement("tr")

  colunas.forEach(function(coluna){
    var td = document.createElement("td")
    td.textContent = coluna.value
    tr.appendChild(td)
  })
  var tdVolume = document.createElement("td")
  tdVolume.textContent = colunas[1].value * colunas[2].value
  tr.appendChild(tdVolume)

  tbody.appendChild(tr)
  limparCampos(colunas)
})

function limparCampos(colunas){
  colunas[0].value = ""
  colunas[1].value = 1
  colunas[2].value = 0

  colunas[0].focus()
}