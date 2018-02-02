let global;

const start = function(){
    const appElement = document.getElementById('app');
    const topicoA = new Topico();
    const topicoB = new Topico();
    const topicoC = new Topico();
    const topicoD = new Topico();
    const topicoE = new Topico();
    const caixaTopicos = new CaixaTopicos([ topicoE, topicoE, topicoE, topicoE, topicoE, topicoE, topicoE, topicoE, topicoE, topicoE, topicoE, topicoE, topicoE, topicoE,topicoE, topicoE]);
    const lateralDireita = new LateralDireita();
    const lateralEsquerda = new LateralEsquerda();
    const caixaExplicacao = new CaixaExplicacao();
    const perguntaRadioBox = new PerguntaRadioBox();
    const perguntaCheckBox = new PerguntaCheckBox();
    const cabecalho = new Cabecalho();
    const container = new Container([cabecalho, lateralEsquerda, perguntaCheckBox, lateralDireita]);

    global = container;

    appElement.innerHTML = container.renderizar();
}

window.onload = start;