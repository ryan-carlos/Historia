const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após uma briga feia com seu pai, Violetta foi morar no interior com sua avó, onde deixa para trás seu namorado Augusto e sua melhor amiga Rúbia, porém acaba conhecendo Joaquim, que acaba se tornando um grande companheiro para ela. Com o passar dos dias, o sentimento de amizade acaba evoluindo para algo a mais. Violetta percebe que Augusto anda meio estranho ultimamente e cogita a possibilidade de fazer uma visita surpresa para ele na cidade e ver se seu sentimento por Joaquim desaparece. Violetta deve ir?",
        alternativas: [
            "Claro ",
            "Com certeza"
        ]
    },
    {
        enunciado: "Chegando na casa de Joaquim ela se depara com ele e Rúbia nus na cama. O que fazer?",
        alternativas: [
            "Matar ambos, sair como se nada tivesse acontecido e viver um romance com Joaquim ",
            "Começar a cantar “50 reais”(Naiara Azevedo) e viver um romance com Joaquim"
        ]
    },
    {
        enunciado: "Após o assassinato Violetta retorna para o interior e se vê em uma situção complicada : ",
        alternativas: [
            "Contar para Joaquim que ela matou Augusto e Rubia  e correr o risco dele contar para a policia e não querer mais ficar com ela",
            "Não contar para Joaquim e contruir uma vida nova no México"
        ]
    },
    {
        enunciado: "Depois de alguns meses em sua nova vida no México ela decide contar para Joaquim sobre o que aconteceu durante sua viagem para a cidade meses atrás e a reação dele foi surpreendente:",
        alternativas: [
            "Com medo, ele abandona-a",
            "Ele compreende sua atitude e apoia essa decisão do passado "
        ]
    },
    {
        enunciado: "e decitem juntos começar uma vida de crimes, roubos e tráfico se tornando uma dupla, e posteriormente um grupo, conhecido por todo o México.",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();