import { useEffect } from "react";
import "./array-herois.style.css";

export function HeroesList() {
  useEffect(() => {
    const heroes = [
      { nome: "Homem de Ferro", foto: "https://conteudo.imguol.com.br/c/entretenimento/2f/2018/07/20/eu-sou-o-homem-de-ferro-1532117457812_v2_900x506.jpg", descricao: " industrial bilionário, inventor e gênio que usa uma armadura de alta tecnologia para combater o crime. Ele se descreve como um gênio, bilionário, playboy e filantropo e é conhecido por sua inteligência, senso de humor sarcástico e personalidade complexa, que às vezes é arrogante e teimosa. ", avaliacao: "/public/5starspng.png" },
      { nome: "Capitão América", foto: "/public/captain-america-icon.jpg", descricao: " um supersoldado com força, agilidade e durabilidade sobre-humanas, além de ser um mestre em combate e táticas militares. Ele utiliza um escudo de vibranium para ataque e defesa, que pode lançar com grande precisão. O personagem é conhecido por sua liderança, moralidade e senso de justiça. ", avaliacao: "/public/5starspng.png"},
      { nome: "Thor", foto: "https://images.immediate.co.uk/production/volatile/sites/3/2019/04/TRL9000_v006_071804.1013-1-4bdc34d.jpg", descricao: "deus asgardiano do trovão e um membro fundador dos Vingadores. Como filho de Odin, ele possui força, resistência e longevidade sobre-humanas. Seus poderes incluem o controle de tempestades (raios, trovões, chuva e vento) e ele empunha o martelo mágico Mjölnir, que permite voar, gerar raios e retornar após ser lançado. ", avaliacao: "/public/5starspng.png" },
      { nome: "Hulk", foto: "https://i.redd.it/abil2hm4xnn71.jpg", descricao: "alter ego do Dr. Robert Bruce Banner, um físico nuclear brilhante, mas fisicamente fraco e emocionalmente retraído. Durante um experimento com uma Bomba Gama, Banner foi exposto a uma dose massiva de radiação, o que alterou sua fisiologia, permitindo que ele se transformasse em uma criatura massiva e poderosa sempre que experimentasse raiva ou estresse. ", avaliacao: "/public/5starspng.png" },
      { nome: "Thanos", foto: "https://i.redd.it/u46g8jprr8h31.jpg", descricao: "super-vilão poderoso da Marvel, conhecido como um Titã louco com pele roxa e musculatura imponente, que busca estabilizar o universo ao eliminar metade de toda a vida. Ele possui força, resistência e durabilidade sobre-humanas, mas seu poder maior advém de artefatos como a Manopla do Infinito, que pode ser equipada com as Joias do Infinito para conceder controle total sobre o universo.", avaliacao: "/public/5starspng.png" },
      { nome: "Wanda Maximoff", foto: "https://otempo.scene7.com/is/image/sempreeditora/opiniao-elizabeth-olsen-revela-se-feiticeira-escarlate-ainda-esta-viva-no-mcu-1761066716", descricao: "mutante com poderes de manipulação da realidade e magia do caos, que podem se manifestar como telecinese, projeção de energia e alteração de probabilidades. Originalmente de Sokovia, ela ganhou seus poderes após um experimento com a Joia da Mente.", avaliacao: "/public/5starspng.png" }
    ];

    const filmes = [
      { nome: "Capitão América: O Soldado Invernal", 
        lancamento: 2014, cronologia: 10, 
        foto: "https://img.elo7.com.br/product/main/266526B/big-poster-capitao-america-2-o-soldado-invernal-lo5-90x60-cm-vingadores.jpg", 
        descricao: "Steve Rogers segue tentando se ajustar ao mundo moderno. Porém, quando um colega da agência S.H.I.E.L.D. é atacado, Steve se vê preso em uma rede de intrigas que ameaça colocar o mundo em risco. o Capitão América tem que enfrentar um misterioso e inesperado inimigo, o Soldado Invernal.", avaliacao: "/public/5starspng.png" },
      { nome: "Guardiões da Galáxia", 
        lancamento: 2014, cronologia: 11, 
        foto: "https://br.web.img3.acsta.net/pictures/14/06/03/21/11/122582.jpg", 
        descricao: "O aventureiro do espaço, Peter Quill, torna-se presa de caçadores de recompensas após roubar a esfera do vilão traiçoeiro, Ronan. Para escapar do perigo, faz uma aliança com um grupo de quatro extraterrestres. Quill descobre que a esfera foi roubada e possui um poder capaz de mudar os rumos do universo. Ele e seu grupo precisam proteger o objeto para salvar o futuro da galáxia.", avaliacao: "/public/5starspng.png" },
      { nome: "Vingadores: Era de Ultron", 
        lancamento: 2015, cronologia: 12, 
        foto: "https://br.web.img2.acsta.net/pictures/15/02/24/18/27/528824.jpg", 
        descricao: "Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron. Com o destino da Terra em jogo, Capitão América, Homem de Ferro, Thor, Hulk, Viúva Negra e Gavião Arqueiro terão que se unir para mais uma vez salvar a raça humana da extinção.", avaliacao: "/public/5starspng.png" },
      { nome: "Vingadores: Ultimato", 
        lancamento: 2019, cronologia: 22, 
        foto: "https://img.elo7.com.br/product/zoom/266036C/big-poster-filme-vingadores-ultimato-lo47-tamanho-90x60-cm-vingadores.jpg", 
        descricao: "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.", avaliacao: "/public/5starspng.png" },
      { nome: "Homem-Aranha: Sem Volta Para Casa", 
        lancamento: 2021, cronologia: 27, 
        foto: "https://resizing.flixster.com/8PNiwC2bpe9OecfYZSOVkvYC5vk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5NGM0Y2Q1LTAyYTItNGFjNC1hNWZhLWMzYjJjOTdjMTFhOS5qcGc=", 
        descricao: "Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando o feitiço para reverter o evento não sai como esperado, o Homem-Aranha e o seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.", avaliacao: "/public/5starspng.png" },
      { nome: "Pantera Negra", 
        lancamento: 2018, cronologia: 18, 
        foto: "https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0%2C0%2C540%2C810", 
        descricao: "A história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, a inteligência e os sentidos apurados.", avaliacao: "/public/5starspng.png" }
    ];

    const hqs = [
      { nome: "Guerra Civil", foto: "https://m.media-amazon.com/images/I/81PqHKs+rWL._AC_UF1000,1000_QL80_.jpg", 
        descricao: "A HQ começa com uma tragédia causada por jovens heróis, o que leva o governo a aprovar a Lei de Registro Super-Humano, exigindo que todos os super-humanos revelem suas identidades e se registrem. Essa lei divide a comunidade heroica em duas facções: uma a favor, liderada pelo Homem de Ferro, e outra contra, liderada pelo Capitão América, desencadeando um conflito generalizado entre os heróis", avaliacao: "/public/5starspng.png" },
      { nome: "Morte do Capitão América", foto: "https://m.media-amazon.com/images/I/710x7QThJzL._AC_UF1000,1000_QL80_.jpg", 
        descricao: "narra as consequências da Guerra Civil, mostrando o assassinato de Steve Rogers por Ossos Cruzados, a mando do Caveira Vermelha, que usou Sharon Carter (lavagem cerebral) para os disparos fatais.", avaliacao: "/public/5starspng.png" },
      { nome: "Planeta Hulk", foto: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_bhji0gok417j789tkri2si6g6g/-S897-FWEBP", 
        descricao: "conta a história do Hulk, exilado pelos heróis da Terra no planeta Sakaar, onde é escravizado e forçado a lutar como gladiador. Ele se torna o líder de um grupo de gladiadores oprimidos e começa uma revolução para libertar o planeta do tirânico Rei Vermelho, o que o transforma de um escravo em um salvador para o povo. ", avaliacao: "/public/5starspng.png" }
    ];

    // 🔹 Estado simples de controle
    let lista = heroes;
    let inicio = 0;
    const mostrar = 3;

    const container = document.getElementById("heroes-container");
    const btnNext = document.getElementById("btn-proximos");
    const btnPersonagens = document.getElementById("btn-filtrarPersonagens");
    const btnFilmes = document.getElementById("btn-filtrarFilmes");
    const btnHqs = document.getElementById("btn-filtrarHQS");

    // 🔹 Mostra 3 itens por vez
    function render() {
      container.innerHTML = "";
      lista.slice(inicio, inicio + mostrar).forEach(item => {
        container.innerHTML += `
          <div class="hero">
            <img src="${item.foto}">
            <div class="hero-info">
              <h1>${item.nome}</h1>
              <p>${item.descricao}</p>
              <h2>Avaliação dos Fãs</h2>
              <img src="${item.avaliacao}"
            </div>
          </div>
        `;
      });
    }

    // 🔹 Troca e navegação
    function proximo() {
      inicio += mostrar;
      if (inicio >= lista.length) inicio = 0;
      render();
    }

    function trocar(tipo) {
      if (tipo === "heroes") lista = heroes;
      if (tipo === "filmes") lista = filmes;
      if (tipo === "hqs") lista = hqs;
      inicio = 0;
      render();
    }

    // Inicializa e adiciona eventos
    render();
    btnNext.addEventListener("click", proximo);
    btnPersonagens.addEventListener("click", () => trocar("heroes"));
    btnFilmes?.addEventListener("click", () => trocar("filmes"));
    btnHqs?.addEventListener("click", () => trocar("hqs"));
  }, []);

  return (
    <div className="container">
      <div id="heroes-container"></div>
      <button id="btn-proximos">
        <img src="/public/icon-right-arrow.png" width="60px" height="70px" />
      </button>
    </div>
  );
}
