const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou preocupado com o avanço da Inteligência Artificial."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Ficou empolgado para descobrir como a IA poderia ajudar no dia a dia."
            }
        ]
    },
    {
        enunciado: "Sua professora pediu um trabalho sobre Inteligência Artificial. O que você faz?",
        alternativas: [
            {
                texto: "Uso IA para pesquisar e entender melhor o assunto.",
                afirmacao: "Aprendeu utilizando a IA como ferramenta de apoio nos estudos."
            },
            {
                texto: "Pesquiso sozinho e escrevo com minhas próprias palavras.",
                afirmacao: "Preferiu desenvolver o conhecimento através das próprias pesquisas."
            }
        ]
    },
    {
        enunciado: "Durante um debate sobre IA e empregos do futuro, qual sua opinião?",
        alternativas: [
            {
                texto: "A IA cria novas oportunidades.",
                afirmacao: "Acreditou que novas profissões surgirão graças à tecnologia."
            },
            {
                texto: "A IA pode substituir trabalhadores.",
                afirmacao: "Defendeu que as pessoas precisam ser preparadas para essas mudanças."
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma imagem representando sua opinião sobre IA.",
        alternativas: [
            {
                texto: "Desenho sozinho.",
                afirmacao: "Mostrou criatividade utilizando apenas suas próprias habilidades."
            },
            {
                texto: "Uso um gerador de imagens por IA.",
                afirmacao: "Aproveitou as ferramentas modernas para transformar ideias em imagens."
            }
        ]
    },
    {
        enunciado: "Um colega copiou totalmente um texto produzido pela IA. O que você faz?",
        alternativas: [
            {
                texto: "Entrega o texto como está.",
                afirmacao: "Confiou totalmente no conteúdo produzido pela Inteligência Artificial."
            },
            {
                texto: "Reviso e acrescento ideias próprias.",
                afirmacao: "Percebeu que a IA ajuda bastante, mas o pensamento humano continua essencial."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){

    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativas();

}

function mostraAlternativas(){

    for(const alternativa of perguntaAtual.alternativas){

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", ()=> respostaSelecionada(alternativa));

        caixaAlternativas.appendChild(botao);

    }

}

function respostaSelecionada(opcaoSelecionada){

    historiaFinal += opcaoSelecionada.afirmacao + " ";

    atual++;

    mostraPergunta();

}

function mostraResultado(){

    caixaPerguntas.textContent = "Em 2049...";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = "";

}

mostraPergunta();