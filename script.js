const botoesAvaliar = document.querySelectorAll('.avaliar-btn');
const botoesDetalhes = document.querySelectorAll('.detalhes-btn');
const botoesFavoritar = document.querySelectorAll('.favoritar-btn');
const botoesEnviar = document.querySelectorAll('.enviar-avaliacao');
const botoesEditar = document.querySelectorAll('.editar-btn');
const salvarTitulo = document.querySelectorAll('.salvar-titulo-btn');

botoesAvaliar.forEach((botao) => {
  botao.addEventListener('click', () => {
    const filmeInfo = botao.closest('.filme-info');
    const titulo = filmeInfo.querySelector('h2').textContent;
    alert(`Você vai avaliar ${titulo}`);
  });
});
botoesDetalhes.forEach((botao) => {
  botao.addEventListener('click', () => {
    alert('Estamos carregando detalhes!');
  });
});
botoesFavoritar.forEach((botao) => {
  botao.addEventListener('click', () => {
    const favorito = botao.classList.toggle('favoritado');

    if(favorito){
      botao.textContent = '⭐ Favoritado';
    }
    else{
      botao.textContent = '⭐';
    }
  });
});
botoesAvaliar.forEach((botao) => {
  botao.addEventListener('click', () => {
    const filmeInfo = botao.closest('.filme-info');
    const formulario = filmeInfo.querySelector('.formulario-avaliacao');

    // Alterna entre mostrar e esconder
    formulario.style.display = formulario.style.display === 'none' ? 'block' : 'none';
  });
});

botoesEnviar.forEach((botao) => {
  botao.addEventListener('click', () => {
    const filmeInfo = botao.closest('.filme-info');
    const titulo = filmeInfo.querySelector('h2').textContent;
    const nota = filmeInfo.querySelector('.nota').value;
    const comentario = filmeInfo.querySelector('.comentario').value;

    alert(`Você avaliou "${titulo}" com nota ${nota}.\nComentário: ${comentario}`);
  });
});
botoesEditar.forEach((botao) => {
  botao.addEventListener('click', () => {
    const filmeInfo = botao.closest('.filme-info');
    const formularioTitulo = filmeInfo.querySelector('.formulario-editar-titulo');
    
    formularioTitulo.style.display = formularioTitulo.style.display === 'none' ? 'block' : 'none';
  })
})

salvarTitulo.forEach((botao) => {
  botao.addEventListener('click', () => {
    const filmeInfo = botao.closest('.filme-info');
    const tituloElement = filmeInfo.querySelector('h2');
    const tituloAntigo = tituloElement.textContent;
    const novoTitulo = filmeInfo.querySelector('.novo-titulo').value;
    tituloElement.textContent = novoTitulo;

    alert(`Você alterou o título de ${tituloAntigo} para ${novoTitulo}`);
  })
})