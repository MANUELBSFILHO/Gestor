var funcionarios = [];

function cadastrarFuncionario() {
  var nome = prompt("Digite o nome do funcionário:");
  var idade = prompt("Digite a idade do funcionário:");
  var salario = prompt("Digite o salário do funcionário:");
  var cargo = prompt("Digite o cargo do funcionário:");

  var funcionario = {
    nome: nome,
    idade: idade,
    salario: salario,
    cargo: cargo
  };

  funcionarios.push(funcionario);
  exibirMensagem("Funcionário cadastrado com sucesso!");
}

function listarFuncionarios() {
  var output = "<h2>Lista de Funcionários:</h2>";
  output += "<ul>";
  funcionarios.forEach(function(funcionario) {
    output += `<li>${funcionario.nome} - ${funcionario.idade} anos - Salário: ${funcionario.salario} - Cargo: ${funcionario.cargo}</li>`;
  });
  output += "</ul>";
  exibirMensagem(output);
}

function pesquisarFuncionario() {
  var nomePesquisa = prompt("Digite o nome do funcionário para pesquisar:");
  var funcionarioEncontrado = funcionarios.find(function (f) {
    return f.nome === nomePesquisa;
  });

  if (funcionarioEncontrado) {
    var output = `<h2>Funcionário encontrado:</h2>`;
    output += `<p>${funcionarioEncontrado.nome} - ${funcionarioEncontrado.idade} anos - Salário: ${funcionarioEncontrado.salario} - Cargo: ${funcionarioEncontrado.cargo}</p>`;
    exibirMensagem(output);
  } else {
    exibirMensagem("<p>Funcionário não encontrado.</p>");
  }
}

function atualizarFuncionario() {
  var nomeAtualizar = prompt("Digite o nome do funcionário para atualizar:");
  var funcionarioParaAtualizar = funcionarios.find(function (f) {
    return f.nome === nomeAtualizar;
  });

  if (funcionarioParaAtualizar) {
    var novoNome = prompt("Digite o novo nome:");
    var novaIdade = prompt("Digite a nova idade:");
    var novoSalario = prompt("Digite o novo salário:");
    var novoCargo = prompt("Digite o novo cargo:");

    funcionarioParaAtualizar.nome = novoNome;
    funcionarioParaAtualizar.idade = novaIdade;
    funcionarioParaAtualizar.salario = novoSalario;
    funcionarioParaAtualizar.cargo = novoCargo;

    exibirMensagem("Funcionário atualizado com sucesso!");
  } else {
    exibirMensagem("Funcionário não encontrado para atualização.");
  }
}

function deletarFuncionario() {
  var nomeDeletar = prompt("Digite o nome do funcionário para deletar:");
  var indiceParaDeletar = funcionarios.findIndex(function (f) {
    return f.nome === nomeDeletar;
  });

  if (indiceParaDeletar !== -1) {
    funcionarios.splice(indiceParaDeletar, 1);
    exibirMensagem("Funcionário deletado com sucesso!");
  } else {
    exibirMensagem("Funcionário não encontrado para deleção.");
  }
}

function mostrarSalarioSuperior5000() {
  var funcionariosSuperior5000 = funcionarios.filter(function (f) {
    return f.salario > 5000;
  });

  if (funcionariosSuperior5000.length > 0) {
    var output = "<h2>Funcionários com salário superior a 5000:</h2>";
    output += "<ul>";
    funcionariosSuperior5000.forEach(function(funcionario) {
      output += `<li>${funcionario.nome} - Salário: ${funcionario.salario}</li>`;
    });
    output += "</ul>";
    exibirMensagem(output);
  } else {
    exibirMensagem("<p>Nenhum funcionário encontrado com salário superior a 5000.</p>");
  }
}

function sairDoSistema() {
  exibirMensagem("Saindo do sistema...");
  // Pode adicionar mais ações de encerramento do sistema, se necessário
}

function exibirMensagem(mensagem) {
  document.getElementById("output").innerHTML = mensagem;
}
