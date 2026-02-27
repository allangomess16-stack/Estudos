// Este banco contém a "aula" para quando você errar
const bancoExplicações = {
    "2102": {
        titulo: "Cacofonia: O som que engana",
        corpo: `
            <p>A <b>Cacofonia</b> ocorre quando a junção de duas palavras forma um som desagradável ou uma palavra nova estranha.</p>
            <table class='tab-estudo'>
                <tr><th>Frase Errada</th><th>Som Formado</th><th>Correção</th></tr>
                <tr><td>"Vi ela"</td><td>Viela (rua)</td><td>"A vi"</td></tr>
                <tr><td>"Vou-me já"</td><td>Suja</td><td>"Vou agora"</td></tr>
            </table>
            <div class='dica'><b>Dica de Elite:</b> Leia a frase em voz alta. Se parecer um palavrão ou algo engraçado, é cacofonia!</div>
            <div class='teste-rapido'>
                <b>Teste Rápido:</b> "Uma mão lava a outra" tem cacofonia?<br>
                <button onclick="alert('Sim! Som de MAMÃO.')">Ver Resposta</button>
            </div>
        `
    },
    "2201": {
        titulo: "Fundação de Goiânia e Attilio Corrêa Lima",
        corpo: `
            <p>Não confunda o político com o técnico. A banca adora trocar os nomes.</p>
            <ul>
                <li><b>Pedro Ludovico:</b> O político (Interventor).</li>
                <li><b>Attilio Corrêa Lima:</b> O urbanista (Planejou a cidade).</li>
            </ul>
            <div class='alerta'>Lembre-se: O estilo é <b>Art Déco</b>, focado em linhas retas e modernismo da década de 30.</div>
        `
    },

    "2201": {
        titulo: "🏙️ Urbanismo de Goiânia: Attilio vs Pedro Ludovico",
        corpo: `
            <p>Muitos candidatos erram por confundir quem fez o quê. Vamos separar as funções:</p>
            <table class='tab-estudo'>
                <tr><th>Nome</th><th>Papel</th><th>Dica de Prova</th></tr>
                <tr><td><b>Pedro Ludovico</b></td><td>Interventor Político</td><td>Foi quem decidiu mudar a capital.</td></tr>
                <tr><td><b>Attilio Corrêa Lima</b></td><td>Urbanista/Arquiteto</td><td>Foi quem desenhou o projeto (Cidade-Jardim).</td></tr>
            </table>
            <div class='alerta'>
                <b>Foco no Estilo:</b> O estilo arquitetônico é o <b>Art Déco</b>. 
                Imagine as linhas retas e os prédios do Centro de Goiânia.
            </div>
            <div class='teste-rapido'>
                <b>Teste Rápido:</b> Goiânia foi construída para substituir qual cidade como capital?<br>
                <button onclick="alert('Cidade de Goiás (Vila Boa)!')">Ver Resposta</button>
            </div>
        `
    },

    "2202": {
        titulo: "🎯 Objeto Direto: A caça ao complemento",
        corpo: `
            <p>Para achar o Objeto Direto, você deve interrogar o verbo com "O QUÊ?" ou "QUEM?" sem usar preposição.</p>
            <div class='dica'>
                <b>Exemplo:</b> "A Câmara contratou novos técnicos."<br>
                <b>Pergunta:</b> Contratou O QUÊ? <br>
                <b>Resposta:</b> Novos técnicos (Objeto Direto).
            </div>
            <p>Se o verbo pedisse "DE QUÊ?" (como o verbo precisar), seria Objeto Indireto.</p>
        `
    },

    "3022": {
        titulo: "⚖️ Alteração da Lei Orgânica (LOM)",
        corpo: `
            <p>Alterar a "Constituição Municipal" é um processo rígido. Memorize a regra dos <b>2-2-2</b>:</p>
            <ul>
                <li><b>2 turnos</b> de votação.</li>
                <li><b>2 terços (2/3)</b> de votos favoráveis (quórum qualificado).</li>
                <li>Mínimo de <b>10 dias</b> entre os turnos (interstício).</li>
            </ul>
        `
    },

    "3021": {
        titulo: "🎨 O Estilo Art Déco em Goiânia",
        corpo: `
            <p>Goiânia é considerada uma das capitais mundiais do <b>Art Déco</b>. Esse estilo dominou a construção da cidade na década de 30.</p>
            <div class='dica'>
                <b>Características do Art Déco:</b>
                <ul>
                    <li>Linhas retas e formas geométricas.</li>
                    <li>Sensação de modernidade e progresso.</li>
                    <li>Uso de concreto armado (novidade na época).</li>
                </ul>
            </div>
            <p><b>Prédios Famosos:</b> Palácio das Esmeraldas, Teatro Goiânia e a Estação Ferroviária.</p>
        `
    },

    "3022": {
        titulo: "⚖️ Quóruns de Votação (A regra dos 2/3)",
        corpo: `
            <p>Para o concurso da Câmara, você precisa saber que nem toda lei é votada do mesmo jeito.</p>
            <table class='tab-estudo'>
                <tr><th>Tipo de Lei</th><th>Quórum</th><th>Observação</th></tr>
                <tr><td>Leis Comuns</td><td>Maioria Simples</td><td>Metade + 1 dos presentes.</td></tr>
                <tr><td>Emenda à Lei Orgânica</td><td><b>2/3 (Dois Terços)</b></td><td>Exige 2 turnos de votação.</td></tr>
                <tr><td>Cassar Vereador</td><td><b>2/3 (Dois Terços)</b></td><td>Punição máxima.</td></tr>
            </table>
            <div class='alerta'>Lembre-se do <b>Interstício:</b> intervalo de 10 dias entre os dois turnos da Lei Orgânica.</div>
        `
    },

    "3023": {
        titulo: "👤 Pedro Ludovico: O Mentor da Mudança",
        corpo: `
            <p>Pedro Ludovico Teixeira foi o <b>Interventor Federal</b> (cargo equivalente a Governador hoje) indicado por Getúlio Vargas.</p>
            <div class='dica'>
                <b>Por que ele mudou a capital?</b>
                <ul>
                    <li><b>Política:</b> Romper com as velhas oligarquias de Vila Boa (Cidade de Goiás).</li>
                    <li><b>Estratégia:</b> "Marcha para o Oeste" (ocupar o interior do Brasil).</li>
                    <li><b>Econômica:</b> Buscar terras mais planas e férteis para o desenvolvimento.</li>
                </ul>
            </div>
        `
    },

    // Continuação do banco_estudos.js

    // === MENTORIA: PORTUGUÊS BÁSICO (IDs 1 a 20) ===

    "1": {
        titulo: "📐 Regra do Hiato Tônico (I e U)",
        corpo: `
            <p>Acentuamos o <b>I</b> e <b>U</b> tônicos quando formam hiato com a vogal anterior, desde que estejam sozinhos na sílaba (ou com S).</p>
            <table class='tab-estudo'>
                <tr><th>Exemplo</th><th>Separação</th><th>Por que acentua?</th></tr>
                <tr><td>Saída</td><td>Sa-í-da</td><td>I tônico sozinho.</td></tr>
                <tr><td>Saúde</td><td>Sa-ú-de</td><td>U tônico sozinho.</td></tr>
                <tr><td>Baú</td><td>Ba-ú</td><td>U tônico sozinho no fim.</td></tr>
            </table>
            <div class='alerta'><b>Cuidado:</b> Se o 'i' ou 'u' vier seguido de <b>NH</b>, não acentua (Ex: Rainha).</div>
        `
    },

    "2": {
        titulo: "🎙️ Termos Técnicos: Caractere vs. Caracteres",
        corpo: `
            <p>Essa é uma "pegadinha" clássica para o seu cargo de Operador de Caracteres.</p>
            <div class='dica'>
                <b>Singular:</b> Ca-rac-te-re (Paroxítona).<br>
                <b>Plural:</b> Ca-rac-te-res (A sílaba tônica muda de lugar, mas a palavra continua paroxítona e <b>perde o acento</b> se o tivesse).
            </div>
            <p>Lembre-se: No plural, a pronúncia correta é 'caractéres' (aberto), mas a grafia não leva acento.</p>
        `
    },

    "3": {
        titulo: "❓ Os 4 Porquês (O Guia Definitivo)",
        corpo: `
            <p>Dominar os porquês é essencial para o GC e para a prova.</p>
            <table class='tab-estudo'>
                <tr><th>Tipo</th><th>Uso</th><th>Exemplo</th></tr>
                <tr><td><b>Por que</b></td><td>Início de perguntas</td><td>"Por que o sinal caiu?"</td></tr>
                <tr><td><b>Por quê</b></td><td>Fim de frases</td><td>"O sinal caiu por quê?"</td></tr>
                <tr><td><b>Porque</b></td><td>Respostas / Explicação</td><td>"Caiu porque choveu."</td></tr>
                <tr><td><b>Porquê</b></td><td>Substantivo (O motivo)</td><td>"Não sei o porquê disso."</td></tr>
            </table>
        `
    },

    "6": {
        titulo: "🆕 Novo Acordo: Ditongos Abertos (ÉI, ÓI)",
        corpo: `
            <p>Com o Novo Acordo Ortográfico, as palavras <b>paroxítonas</b> perderam o acento nos ditongos abertos 'ei' e 'oi'.</p>
            <div class='alerta'>
                <b>Antes:</b> Idéia, Geléia, Heróico, Jibóia.<br>
                <b>Agora (CORRETO):</b> Ideia, Geleia, Heroico, Jiboia.
            </div>
            <p><b>Atenção:</b> Se a palavra for <b>oxítona</b>, o acento continua! (Ex: Herói, Papéis, Constrói).</p>
        `
    },

    "8": {
        titulo: "👤 Análise Sintática: O Sujeito",
        corpo: `
            <p>O Sujeito é o termo sobre o qual se faz uma declaração e com o qual o verbo concorda.</p>
            <div class='dica'>
                <b>Como achar?</b> Pergunte ao verbo: "QUEM enviou o sinal?"<br>
                <b>Resposta:</b> Allan (Sujeito).
            </div>
            <p>Não confunda com o <b>Aposto</b> (que explica quem é o Allan) ou <b>Vocativo</b> (que seria um chamado).</p>
        `
    },

    "10": {
        titulo: "✅ Ratificar vs. Retificar (Não confunda!)",
        corpo: `
            <p>Esses verbos são "parônimos" (parecidos no som, diferentes no sentido).</p>
            <ul>
                <li><b>RAtificar:</b> Confirmar / Validar. (Pense em <b>A</b>provar).</li>
                <li><b>REtificar:</b> Corrigir / Mudar. (Pense em <b>E</b>rrar para consertar).</li>
            </ul>
            <div class='teste-rapido'>
                <b>Exemplo:</b> "Allan precisou ____ o erro na tarja." <br>
                <i>Resposta: Retificar.</i>
            </div>
        `
    },

    "14": {
        titulo: "💎 Porquê (Substantivado)",
        corpo: `
            <p>Quando a palavra "porquê" vem acompanhada de um artigo (o, um), numeral ou pronome, ela se torna um substantivo.</p>
            <div class='dica'>
                Sempre será escrito <b>junto e com acento</b>.<br>
                <b>Dica:</b> Tente substituir por "O MOTIVO".<br>
                <i>"Não sei o <b>porquê</b> (o motivo) da falha."</i>
            </div>
        `
    },

    "18": {
        titulo: "⚠️ Concordância: É proibido / É proibida",
        corpo: `
            <p>Expressões como "é bom", "é proibido", "é necessário" só variam se houver um artigo.</p>
            <table class='tab-estudo'>
                <tr><th>Sem Artigo (Masculino)</th><th>Com Artigo (Varia)</th></tr>
                <tr><td>"É proibido entrada"</td><td>"A entrada é proibid<b>a</b>"</td></tr>
                <tr><td>"Água é bom"</td><td>"<b>A</b> água é bo<b>a</b>"</td></tr>
            </table>
        `
    },

    "19": {
        titulo: "👫 Femininos Específicos: Poetisa",
        corpo: `
            <p>Alguns substantivos possuem formas femininas que geram dúvida quanto à grafia (S ou Z).</p>
            <div class='alerta'>
                <b>Poetisa:</b> Sempre com <b>S</b>.<br>
                <b>Profetisa:</b> Sempre com <b>S</b>.<br>
                <b>Sacerdotisa:</b> Sempre com <b>S</b>.
            </div>
            <p>Pense que esses sufixos de origem nobre/religiosa geralmente usam S.</p>
        `
    },
    // Continuação do banco_estudos.js - BLOCO ELITE SINTAXE E PONTUAÇÃO

    "27": {
        titulo: "🕵️ O Mistério do 'SE': Índice de Indeterminação (IIS)",
        corpo: `
            <p>O 'SE' pode ser muita coisa, mas para a prova, você precisa diferenciar o <b>VTD</b> do <b>VTI</b>.</p>
            <table class='tab-estudo'>
                <tr><th>Estrutura</th><th>Função do 'SE'</th><th>Exemplo</th></tr>
                <tr><td>Verbo Transitivo Direto</td><td>Partícula Passiva</td><td>"Consertou-se o switcher" (O switcher foi consertado).</td></tr>
                <tr><td>Verbo Transitivo Indireto</td><td><b>Índice de Indeterminação</b></td><td>"Precisa-se <b>de</b> técnicos" (Não dá para dizer 'técnicos são precisados').</td></tr>
            </table>
            <div class='dica'><b>Dica de Elite:</b> Se houver preposição (de, em, para) logo após o 'SE', o sujeito é indeterminado e o verbo fica obrigatoriamente no <b>Singular</b>.</div>
        `
    },

    "1101": {
        titulo: "⚔️ Adversidade: O 'Mas' e seus primos",
        corpo: `
            <p>As conjunções adversativas ligam ideias que se opõem. É um choque de sentidos.</p>
            <div class='dica'>
                <b>Principais Adversativas:</b> Mas, Porém, Contudo, Todavia, No entanto, <b>Entretanto</b>.
            </div>
            <p><b>A Prova do Real:</b> Sempre substitua pelo <b>MAS</b>. Se a frase continuar fazendo sentido, é adversidade.</p>
            <div class='teste-rapido'>
                <b>Exemplo:</b> "O sinal estava bom, ______ caiu." <br>
                <i>Resposta: Entretanto / Mas.</i>
            </div>
        `
    },

    "1102": {
        titulo: "📺 Regência do Verbo ASSISTIR",
        corpo: `
            <p>Este é o verbo que mais cai para cargos de TV e Multimídia.</p>
            <ul>
                <li><b>No sentido de VER (Presenciar):</b> Exige a preposição <b>A</b>. <br> <i>Ex: Assistiu <b>ao</b> debate (Correto) / Assistiu o debate (Errado).</i></li>
                <li><b>No sentido de AJUDAR (Dar assistência):</b> É direto (sem preposição). <br> <i>Ex: O Allan assistiu o colega no switcher.</i></li>
            </ul>
            <div class='alerta'>Lembre-se: Para a prova de Goiânia, foque no sentido de <b>VER</b>. Assistir <b>AO</b> jogo, <b>À</b> sessão.</div>
        `
    },

    "1103": {
        titulo: "❄️ Verbos Impessoais: O 'Faz' Congelado",
        corpo: `
            <p>Verbos que indicam tempo decorrido ou fenômenos da natureza não possuem sujeito. Eles ficam "congelados" na 3ª pessoa do singular.</p>
            <div class='dica'>
                <b>Fazer e Haver:</b> Quando indicam tempo que já passou.<br>
                ❌ Errado: "Fazem três anos." <br>
                ✅ Correto: <b>"Faz três anos."</b>
            </div>
            <p>Pense assim: O tempo é uma entidade única, ele não se multiplica no plural.</p>
        `
    },

    "1104": {
        titulo: "🎀 Crase: O Casamento do 'A' com 'A'",
        corpo: `
            <p>A crase é a fusão da Preposição (pedida pelo verbo) + Artigo (aceito pelo substantivo feminino).</p>
            <div class='alerta'><b>Regra do Masculino:</b> Troque a palavra feminina por uma masculina. Se aparecer <b>AO</b>, a crase é obrigatória.</div>
            <table class='tab-estudo'>
                <tr><th>Frase Feminina</th><th>Troca por Masculino</th><th>Resultado</th></tr>
                <tr><td>Entregou à secretária</td><td>Entregou <b>AO</b> secretário</td><td><b>Tem Crase!</b></td></tr>
                <tr><td>Fui à Câmara</td><td>Fui <b>AO</b> gabinete</td><td><b>Tem Crase!</b></td></tr>
            </table>
        `
    },

    "1105": {
        titulo: "🤝 Concessão: O 'Conquanto' Legislativo",
        corpo: `
            <p>A <b>Concessão</b> é uma oposição mais "suave" que a adversidade. Ela admite uma barreira, mas não deixa que ela impeça a ação principal.</p>
            <div class='dica'>
                <b>Principais Concessivas:</b> Embora, Ainda que, Mesmo que, Posto que, <b>Conquanto</b>.
            </div>
            <p><b>Macetes:</b> O "Conquanto" é o preferido dos textos jurídicos e da Câmara. Substitua sempre por <b>EMBORA</b>.</p>
        `
    },

    "32": {
        titulo: "🧲 Crase com Pronomes: Àquele / Àquela",
        corpo: `
            <p>Muitos acham que crase só ocorre antes de palavras femininas comuns, mas ela ocorre com pronomes demonstrativos também!</p>
            <div class='dica'>
                Se o verbo pedir a preposição <b>A</b> e a palavra seguinte for <b>Aquele</b>, ocorre a fusão: <b>Àquele</b>.
            </div>
            <p><b>Exemplo:</b> "Quem se refere, se refere <b>A</b> algum lugar. Referiu-se <b>ÀQUELE</b> equipamento."</p>
        `
    },
    // Continuação do banco_estudos.js - BLOCO PONTUAÇÃO E SINTAXE AVANÇADA

    "34": {
        titulo: "🚫 Proibição de Elite: Cujo + Artigo",
        corpo: `
            <p>O pronome relativo <b>CUJO</b> é um dos mais cobrados. Ele já carrega a ideia de posse e gênero, por isso <b>nunca</b> aceita artigo depois dele.</p>
            <div class='alerta'>
                ❌ Errado: "Cujas as respostas..." <br>
                ✅ Correto: "Cujas respostas..."
            </div>
            <p><b>Outro erro comum da questão:</b> Separar Sujeito do Verbo com vírgula. Nunca faça isso, mesmo que o sujeito seja longo!</p>
        `
    },

    "36": {
        titulo: "🔄 Vírgula Muda-Sentido: Restritiva vs Explicativa",
        corpo: `
            <p>A presença ou ausência de vírgulas em orações que começam com "QUE" altera totalmente o significado. Veja o perigo:</p>
            <table class='tab-estudo'>
                <tr><th>Frase</th><th>Classificação</th><th>Sentido Real</th></tr>
                <tr><td>"Os vereadores <b>que votaram</b> saíram."</td><td>Restritiva (Sem vírgula)</td><td><b>Apenas alguns</b> saíram (só os que votaram).</td></tr>
                <tr><td>"Os vereadores, <b>que votaram</b>, saíram."</td><td>Explicativa (Com vírgula)</td><td><b>Todos</b> os vereadores votaram e <b>todos</b> saíram.</td></tr>
            </table>
            <div class='dica'><b>Analogia do Cercadinho:</b> A vírgula isola uma explicação geral. Sem ela, você está "apontando o dedo" apenas para um grupo específico.</div>
            
        `
    },

    "37": {
        titulo: "🔢 Concordância: 'Mais de um'",
        corpo: `
            <p>A expressão "Mais de um" segue a regra do numeral.</p>
            <div class='dica'>
                <b>Regra Geral:</b> Verbo no SINGULAR. <br>
                <i>Ex: "Mais de um técnico <b>foi</b> treinado."</i>
            </div>
            <p><b>A exceção (Reciprocidade):</b> Se a ação indicar algo feito entre dois, vai para o plural.<br>
            <i>Ex: "Mais de um técnico se <b>cumprimentaram</b>" (um cumprimentou o outro).</i></p>
        `
    },

    "40": {
        titulo: "📍 Crase com Cidades (O teste da volta)",
        corpo: `
            <p>Você mora em Brasília e trabalha para Goiânia, então essa regra é obrigatória para você.</p>
            <div class='alerta'>
                <b>Mnemônica de Ouro:</b> <br>
                "Vou <b>A</b>, volto <b>DA</b>: Crase há!" <br>
                "Vou <b>A</b>, volto <b>DE</b>: Crase pra quê?"
            </div>
            <table class='tab-estudo'>
                <tr><th>Destino</th><th>Volta</th><th>Crase?</th></tr>
                <tr><td>Vou a Goiânia</td><td>Volto <b>DE</b> Goiânia</td><td>Não (a Goiânia)</td></tr>
                <tr><td>Vou a Brasília</td><td>Volto <b>DE</b> Brasília</td><td>Não (a Brasília)</td></tr>
                <tr><td>Vou à Bahia</td><td>Volto <b>DA</b> Bahia</td><td>Sim (à Bahia)</td></tr>
            </table>
            <p><i>Nota: Se você especificar a cidade, a crase volta: "Vou <b>à</b> Brasília de JK".</i></p>
            
        `
    },

    "41": {
        titulo: "🔄 Sinônimos de Elite: Conquanto = Embora",
        corpo: `
            <p>A banca quer saber se você conhece o vocabulário formal. O <b>Conquanto</b> é o "conector camaleão" da concessão.</p>
            <div class='dica'>
                <b>Pode substituir por:</b> Embora, Ainda que, Posto que, Mesmo que.
            </div>
            <p><b>Cuidado:</b> Não confunda com "Contudo" (Adversidade/Mas) ou "Portanto" (Conclusão).</p>
        `
    },
    // Continuação do banco_estudos.js - BLOCO SEMÂNTICA E FIGURAS DE ESTILO

    "901": {
        titulo: "🔄 Metonímia: A Troca Lógica",
        corpo: `
            <p>A <b>Metonímia</b> ocorre quando substituímos uma palavra por outra porque existe uma relação de proximidade ou lógica entre elas.</p>
            <table class='tab-estudo'>
                <tr><th>Tipo</th><th>O que trocamos?</th><th>Exemplo</th></tr>
                <tr><td><b>Continente pelo Conteúdo</b></td><td>O lugar pelas pessoas</td><td>"A Câmara (prédio) ouviu as ruas (pessoas)."</td></tr>
                <tr><td><b>Autor pela Obra</b></td><td>Quem fez pelo que foi feito</td><td>"Li Pedro Ludovico para a prova."</td></tr>
                <tr><td><b>Marca pelo Produto</b></td><td>O nome pela coisa</td><td>"Comprou um Bombril" (Palha de aço).</td></tr>
            </table>
            <div class='dica'><b>Dica:</b> Na metonímia não há comparação, há uma <b>substituição</b> por conveniência ou costume.</div>
        `
    },

    "902": {
        titulo: "🚀 Hipérbole: O Exagero Estratégico",
        corpo: `
            <p>A <b>Hipérbole</b> é uma figura de pensamento que utiliza o exagero para dar ênfase a uma ideia ou sentimento.</p>
            <div class='alerta'>
                <b>Como identificar:</b> Pergunte-se: "Isso é fisicamente possível?". <br>
                <i>"Morri de rir" / "Chorei rios de lágrimas" / "Um bilhão de vezes".</i>
            </div>
            <p><b>Dica de Prova:</b> A banca costuma usar frases do cotidiano para testar se você percebe o exagero informal.</p>
        `
    },

    "903": {
        titulo: "🤫 Eufemismo: A Suavização",
        corpo: `
            <p>O <b>Eufemismo</b> é o oposto da hipérbole em termos de impacto. Ele serve para "amaciar" uma notícia ruim ou um termo chocante.</p>
            <div class='dica'>
                <b>Exemplos Clássicos:</b>
                <ul>
                    <li>"Faltar com a verdade" (Mentir).</li>
                    <li>"Partir para o andar de cima" (Morrer).</li>
                    <li>"Apropriar-se do alheio" (Roubar).</li>
                </ul>
            </div>
            <p><b>Uso Político:</b> É a figura mais usada em discursos parlamentares e diplomáticos para evitar conflitos diretos.</p>
        `
    },

    "2301": {
        titulo: "👁️ Metáfora: A Comparação sem o 'COMO'",
        corpo: `
            <p>A <b>Metáfora</b> é uma comparação poética onde você afirma que uma coisa É outra, baseando-se em uma semelhança entre elas.</p>
            
            <div class='alerta'>
                <b>A Diferença Crucial:</b>
                <ul>
                    <li><b>Comparação:</b> "A câmera é <u>como</u> um olho." (Tem conectivo).</li>
                    <li><b>Metáfora:</b> "A câmera <u>é</u> um olho." (Afirmação direta).</li>
                </ul>
            </div>
            <p>Na sua questão: Dizer que a câmera é um olho atento significa que ela "vê tudo", transpondo a característica do órgão humano para o equipamento.</p>
        `
    },

    "2302": {
        titulo: "♻️ Pleonasmo Vicioso: A Redundância Burra",
        corpo: `
            <p>O Pleonasmo pode ser literário (para dar ênfase), mas na prova ele é cobrado como um <b>Vício de Linguagem</b> que deve ser evitado.</p>
            <table class='tab-estudo'>
                <tr><th>Expressão</th><th>Por que é erro?</th></tr>
                <tr><td>"Consenso Geral"</td><td>Todo consenso já é de todos (geral).</td></tr>
                <tr><td>"Elo de ligação"</td><td>Todo elo já serve para ligar.</td></tr>
                <tr><td>"Surpresa inesperada"</td><td>Se for esperada, não é surpresa.</td></tr>
            </table>
            <div class='dica'><b>Dica de Ouro:</b> No cargo de Operador, evite redundâncias nos títulos e tarjas (GC). Seja direto.</div>
        `
    },

    "3003": {
        titulo: "🔊 Cacofonia: O Som que Atrapalha",
        corpo: `
            <p>A <b>Cacofonia</b> é o som desagradável que surge da união do final de uma palavra com o início da outra.</p>
            <div class='alerta'>
                <b>O perigo do GC:</b> Ao escrever tarjas, cuidado com:
                <ul>
                    <li>"V<b>i ela</b>" (Viela).</li>
                    <li>"U<b>ma mão</b>" (Mamão).</li>
                    <li>"Vou-<b>me já</b>" (Suja).</li>
                    <li>"<b>Por cada</b>" (Porca).</li>
                </ul>
            </div>
            <p><b>Como evitar:</b> Sempre leia a frase em voz alta para checar se a sonoridade não cria um sentido ridículo ou obsceno.</p>
            
        `
    },





    // EXPLIOCAÇÕES PARA RACIOCINIO LOGICO

    



    // Continuação do banco_estudos.js - BLOCO RACIOCÍNIO LÓGICO E LEGISLAÇÃO

    "53": {
        titulo: "🚫 Negação de Quantificadores: 'Todo' não é 'Nenhum'",
        corpo: `
            <p>Este é o erro mais comum em lógica. Negar o <b>TODO</b> não é dizer <b>NENHUM</b>.</p>
            <div class='dica'>
                <b>Mnemônico PEA + NÃO:</b><br>
                Para negar o "TODO", você precisa de:<br>
                <b>P</b> - Pelo menos um... não é.<br>
                <b>E</b> - Existe um... que não é.<br>
                <b>A</b> - Algum... não é.
            </div>
            <p><i>Exemplo:</i> "Todo técnico é atento". <br><b>Negação:</b> "Algum técnico não é atento".</p>
        `
    },

    "55": {
        titulo: "⚡ Tabela Verdade da Condicional (P → Q)",
        corpo: `
            <p>A condicional (Se... então) é a rainha das provas. Você só precisa decorar o caso em que ela dá <b>FALSO</b>.</p>
            <table class='tab-estudo'>
                <tr><th>P (Antecedente)</th><th>Q (Consequente)</th><th>Resultado</th></tr>
                <tr><td>V</td><td>V</td><td>V</td></tr>
                <tr><td><b>V</b></td><td><b>F</b></td><td><b>F (Vera Fischer)</b></td></tr>
                <tr><td>F</td><td>V</td><td>V</td></tr>
                <tr><td>F</td><td>F</td><td>V</td></tr>
            </table>
            <div class='alerta'><b>Dica:</b> Lembre-se da "Vera Fischer é Falsa". V com F dá F. Todos os outros casos são Verdade.</div>
        `
    },

    "68": {
        titulo: "🔄 Equivalência 'Neymar' (P → Q)",
        corpo: `
            <p>Quando a questão pede uma frase equivalente ao "Se... então", e as opções usam o "OU", use a regra do jogador:</p>
            <div class='dica'>
                <b>Regra do NE-Y-MAR:</b><br>
                1. <b>NE</b>ga a primeira parte.<br>
                2. Troca o "Se... então" por <b>Y (OU)</b>.<br>
                3. <b>MAR</b>ntém a segunda parte.
            </div>
            <p><i>Exemplo:</i> "Se estudo, passo." <br><b>Equivalente:</b> "Não estudo ou passo."</p>
        `
    },

    "71": {
        titulo: "🛡️ Leis de De Morgan (Negar o 'E' e o 'OU')",
        corpo: `
            <p>Augustus De Morgan criou a regra para negar conectivos de conjunção e disjunção.</p>
            <div class='alerta'>
                <b>Para negar o "E":</b><br>
                1. Nega a primeira.<br>
                2. Nega a segunda.<br>
                3. Troca o <b>E</b> pelo <b>OU</b>.
            </div>
            <p><i>Questão Allan:</i> "Allan é Operador E estuda IA". <br><b>Negação:</b> "Allan não é Operador OU não estuda IA".</p>
        `
    },

    "73": {
        titulo: "⭕ Diagramas Lógicos (Todo e Algum)",
        corpo: `
            <p>Para resolver questões de "Todo/Algum", desenhe círculos (Diagramas de Venn).</p>
            <div class='dica'>
                1. Desenhe o círculo dos "Técnicos" dentro do círculo dos "Organizados" (Todo técnico é organizado).<br>
                2. Desenhe o círculo dos "Concursados" cruzando o círculo dos "Técnicos" (Algum técnico é concursado).
            </div>
            <p><b>Conclusão Visual:</b> Onde o círculo dos concursados tocou os técnicos, ele obrigatoriamente está dentro do círculo maior dos organizados.</p>
        `
    },

    "76": {
        titulo: "🎲 Probabilidade Sucessiva (Sem Reposição)",
        corpo: `
            <p>Probabilidade é: <b>O que eu quero / O que eu tenho disponível</b>.</p>
            <div class='dica'>
                <b>Passo 1 (1ª retirada):</b> Tenho 3 vermelhos em 8 totais = 3/8.<br>
                <b>Passo 2 (2ª retirada):</b> Agora só restam 2 vermelhos e 7 cabos no total = 2/7.
            </div>
            <p><b>Cálculo:</b> (3/8) x (2/7) = 6/56. <br> Simplificando por 2: <b>3/28</b>.</p>
        `
    },

    "119": {
        titulo: "🏛️ Linha de Sucessão Municipal",
        corpo: `
            <p>Na ausência dos chefes do Executivo, a cidade não pode parar. A ordem é clara:</p>
            <ol>
                <li>Prefeito.</li>
                <li>Vice-Prefeito.</li>
                <li><b>Presidente da Câmara Municipal</b> (Assume interinamente).</li>
            </ol>
            <div class='alerta'><b>Cuidado:</b> O Presidente da Câmara não "vira" prefeito, ele apenas "exerce" o cargo até que a situação se normalize ou novas eleições ocorram.</div>
        `
    },

    "127": {
        titulo: "📅 Nomeação vs. Posse vs. Exercício",
        corpo: `
            <p>Esses três conceitos fundamentais do Estatuto do Servidor confundem muita gente:</p>
            <table class='tab-estudo'>
                <tr><th>Ato</th><th>O que é?</th><th>Efeito</th></tr>
                <tr><td>Nomeação</td><td>Publicação no Diário Oficial</td><td>Convocação</td></tr>
                <tr><td><b>Posse</b></td><td>Assinatura do Termo</td><td><b>Investidura</b> (Você vira servidor aqui)</td></tr>
                <tr><td>Exercício</td><td>Começar a trabalhar</td><td>Início do estágio probatório</td></tr>
            </table>
            <div class='dica'><b>Dica:</b> A <b>Investidura</b> acontece no "beija-mão", ou seja, na <b>Posse</b>.</div>
        `
    },


    // LEGISLAÇÃO



    // Continuação do banco_estudos.js - BLOCO GEOGRAFIA, HISTÓRIA E LEGISLAÇÃO GOIÂNIA

    "103": {
        titulo: "🌳 O Cerrado: A Caixa D'água do Brasil",
        corpo: `
            <p>O Cerrado é o bioma predominante em Goiás. Ele é essencial não só pela biodiversidade, mas pelo ciclo hídrico.</p>
            
            <div class='dica'>
                <b>Características para a Prova:</b>
                <ul>
                    <li><b>Árvores:</b> Troncos tortuosos, casca grossa (cortiça) e raízes profundas.</li>
                    <li><b>Estações:</b> Bem definidas (Verão chuvoso e Inverno seco).</li>
                    <li><b>Solo:</b> Ácido (necessita de calagem para agricultura).</li>
                </ul>
            </div>
        `
    },

    "104": {
        titulo: "🏛️ Funções da Câmara Municipal",
        corpo: `
            <p>A Câmara não apenas "faz leis". Ela possui quatro funções fundamentais que você precisa separar:</p>
            <table class='tab-estudo'>
                <tr><th>Função</th><th>O que faz?</th></tr>
                <tr><td><b>Legislativa</b></td><td>Cria, altera e revoga leis municipais.</td></tr>
                <tr><td><b>Fiscalizadora</b></td><td>Controla as contas do Prefeito com auxílio do TCM.</td></tr>
                <tr><td><b>Administrativa</b></td><td>Organiza sua própria estrutura interna (concursos, pessoal).</td></tr>
                <tr><td><b>Julgadora</b></td><td>Julga infrações político-administrativas do Prefeito ou Vereadores.</td></tr>
            </table>
        `
    },

    "114": {
        titulo: "👥 Composição da Câmara de Goiânia",
        corpo: `
            <p>O número de vereadores é proporcional à população, conforme a Constituição Federal.</p>
            <div class='alerta'>
                <b>Número Atual:</b> 35 Vereadores.<br>
                <b>Quórum de Maioria Absoluta:</b> 18 votos (Metade + 1).
            </div>
            <p>Fique atento, pois se a população crescer muito, esse número pode ser alterado por lei, mas para o seu concurso, o número mágico é <b>35</b>.</p>
        `
    },

    "122": {
        titulo: "⏰ Prazos do Estatuto: Posse e Exercício",
        corpo: `
            <p>Muitos candidatos confundem os prazos de cada etapa. Memorize esta sequência:</p>
            <div class='dica'>
                <b>1. Nomeação:</b> Ato de chamar o candidato.<br>
                <b>2. Posse (30 dias):</b> Assinatura do termo. Onde ocorre a <u>Investidura</u>.<br>
                <b>3. Exercício (15 dias):</b> Início do trabalho efetivo.
            </div>
            
            <p><b>Atenção:</b> Se você não tomar posse em 30 dias, o ato de nomeação é tornado sem efeito.</p>
        `
    },

    "124": {
        titulo: "⚡ Atributos do Ato Administrativo: P.A.I.T.",
        corpo: `
            <p>A Administração Pública tem "superpoderes" que o cidadão comum não tem. São os atributos:</p>
            <table class='tab-estudo'>
                <tr><th>Atributo</th><th>O que significa?</th></tr>
                <tr><td><b>P</b>resunção de Legitimidade</td><td>O ato nasce "certo" até que se prove o contrário.</td></tr>
                <tr><td><b>A</b>utoexecutoriedade</td><td>A Adm. executa sem pedir licença ao Juiz (ex: guinchar carro).</td></tr>
                <tr><td><b>I</b>mperatividade</td><td>O ato se impõe ao cidadão, ele querendo ou não.</td></tr>
                <tr><td><b>T</b>ipicidade</td><td>O ato deve estar previsto em lei.</td></tr>
            </table>
        `
    },

    "125": {
        titulo: "👮 Os Poderes Administrativos",
        corpo: `
            <p>Diferencie os poderes para não cair na pegadinha da "Punição":</p>
            <ul>
                <li><b>Poder Disciplinar:</b> Usado para punir <u>servidores</u> ou quem tem vínculo (ex: empresa contratada).</li>
                <li><b>Poder de Polícia:</b> Usado para restringir direitos de <u>particulares</u> (ex: fechar bar barulhento).</li>
                <li><b>Poder Hierárquico:</b> Usado para organizar, dar ordens e distribuir funções internamente.</li>
            </ul>
        `
    },

    "262": {
        titulo: "📽️ Fibra Óptica SDI vs. Coaxial BNC",
        corpo: `
            <p>Como Operador na TV Senado, você sabe que o sinal de vídeo é sensível. A Fibra Óptica resolve problemas que o cobre não consegue.</p>
            <div class='dica'>
                <b>Vantagens da Fibra no Estúdio:</b>
                <ul>
                    <li><b>Imunidade:</b> Não sofre interferência de cabos de energia ou motores (EMI/RFI).</li>
                    <li><b>Distância:</b> O BNC (cobre) perde sinal após 100m. A Fibra leva quilômetros sem perda.</li>
                    <li><b>Largura de Banda:</b> Suporta resoluções 4K e 8K com mais facilidade.</li>
                </ul>
            </div>
            
        `
    },

    "801": {
        titulo: "📊 Maioria Simples vs. Maioria Absoluta",
        corpo: `
            <p>Este conceito é a base do Processo Legislativo.</p>
            <ul>
                <li><b>Maioria Simples:</b> Maioria dos <u>presentes</u> (desde que haja quórum mínimo). Se houver 20 vereadores, 11 aprovam.</li>
                <li><b>Maioria Absoluta:</b> Primeiro número inteiro acima da metade do <u>total de membros</u>. Em Goiânia (35 membros), são sempre <b>18 votos</b>.</li>
            </ul>
        `
    },


    // ESPECIFICAS

    // Continuação do banco_estudos.js - BLOCO ENGENHARIA DE VÍDEO E BROADCAST

    "202": {
        titulo: "🎬 Movimentos de Texto: Crawl vs. Roll",
        corpo: `
            <p>No Gerador de Caracteres (GC), a direção do movimento define o nome técnico da função.</p>
            <table class='tab-estudo'>
                <tr><th>Termo</th><th>Direção</th><th>Uso Comum</th></tr>
                <tr><td><b>Crawl</b></td><td>Horizontal (Lateral)</td><td>Barras de notícias (breaking news).</td></tr>
                <tr><td><b>Roll</b></td><td>Vertical (Sobe/Desce)</td><td>Créditos finais de programas.</td></tr>
            </table>
            <div class='dica'><b>Dica:</b> Lembre-se do "Crawl" como o rastro de uma lagarta no chão (horizontal).</div>
        `
    },

    "204": {
        titulo: "📐 Safe Areas: Onde colocar o texto?",
        corpo: `
            <p>Nem tudo o que você vê no seu monitor de estúdio aparece na TV do telespectador. Por isso existem as margens de segurança.</p>
            
            <ul>
                <li><b>Action Safe (90%):</b> Garante que elementos importantes da ação não sejam cortados.</li>
                <li><b>Title Safe (80%):</b> Área onde os caracteres (nomes, cargos) devem ficar para garantir a leitura em qualquer tela.</li>
            </ul>
        `
    },

    "205": {
        titulo: "🎛️ Barramentos do Switcher: PGM vs. PVW",
        corpo: `
            <p>O Switcher de vídeo é o coração do estúdio. Ele trabalha com dois estados principais:</p>
            <div class='dica'>
                <b>1. Preview (PVW):</b> A imagem que você está preparando. Só você vê no monitor de conferência.<br>
                <b>2. Program (PGM):</b> A imagem que está "No Ar". É o sinal final enviado para o transmissor.
            </div>
            <p>Ao apertar "CUT" ou "AUTO", o sinal que estava no PVW troca de lugar com o PGM.</p>
        `
    },

    "209": {
        titulo: "⏱️ Genlock: O Maestro do Sistema",
        corpo: `
            <p>Sem Genlock, o seu switcher "pula" ao trocar de câmera. O Genlock sincroniza o início de cada quadro de vídeo de todas as fontes.</p>
            
            <div class='alerta'>
                <b>Por que é vital?</b> <br>
                Câmeras digitais processam imagens em tempos ligeiramente diferentes. O Genlock (ou Tri-Level Sync em HD) obriga todas a "baterem o pé" no mesmo ritmo.
            </div>
        `
    },

    "226": {
        titulo: "Layering no Switcher: O que é o DSK?",
        corpo: `
            <p>O <b>Downstream Keyer (DSK)</b> é a "última camada" do bolo de vídeo.</p>
            <div class='dica'>
                Tudo o que é colocado no DSK aparece <b>por cima</b> de todas as outras transições e efeitos. É o local ideal para logos de emissora (marca d'água) e caracteres de urgência.
            </div>
        `
    },

    "244": {
        titulo: "🌈 Espaço de Cor YCbCr (Componente)",
        corpo: `
            <p>A TV não transmite em RGB puro para economizar espaço. Ela divide o sinal em:</p>
            <ul>
                <li><b>Y (Luma):</b> O brilho da imagem (Preto e Branco). É o sinal mais pesado.</li>
                <li><b>Cb (Chroma Blue):</b> Diferença de azul.</li>
                <li><b>Cr (Chroma Red):</b> Diferença de vermelho.</li>
            </ul>
            <p>O olho humano é mais sensível ao brilho (Y) do que à cor, por isso o sinal Y é preservado com mais qualidade.</p>
        `
    },

    "254": {
        titulo: "📉 Chroma Subsampling (4:2:2)",
        corpo: `
            <p>É uma técnica de compressão que remove informações de cor que o olho humano não percebe, mantendo a nitidez do brilho.</p>
            <table class='tab-estudo'>
                <tr><th>Padrão</th><th>Uso</th><th>Qualidade</th></tr>
                <tr><td>4:4:4</td><td>Cinema / VFX</td><td>Máxima (Sem perdas).</td></tr>
                <tr><td><b>4:2:2</b></td><td><b>Broadcast Profissional</b></td><td>Ideal para Chroma Key e edição.</td></tr>
                <tr><td>4:2:0</td><td>Internet / DVDs</td><td>Baixa (Cores "borradas" em bordas finas).</td></tr>
            </table>
            
        `
    },

    "255": {
        titulo: "📈 Waveform Monitor: O Olho Técnico",
        corpo: `
            <p>O Waveform monitora os níveis de tensão (mV) do vídeo. Ele garante que a imagem não esteja "estourada" ou "lavada".</p>
            <div class='alerta'>
                <b>Escala IRE:</b> <br>
                - <b>0 IRE (Preto):</b> Nível de pedestal.<br>
                - <b>100 IRE (Branco):</b> Nível máximo de brilho legal.
            </div>
            <p>Se o seu branco passar de 100 IRE (700mV), você está gerando "clipping", perdendo detalhes nas nuvens ou rostos claros.</p>
        `
    },

    // Continuação do banco_estudos.js - BLOCO INFORMÁTICA, REDES E SEGURANÇA

    "406": {
        titulo: "🔒 HTTPS: O Cadeado da Internet",
        corpo: `
            <p>O <b>HTTPS</b> é a versão segura do protocolo de transferência de hipertexto (HTTP). Ele utiliza certificados digitais para garantir a segurança.</p>
            <table class='tab-estudo'>
                <tr><th>Recurso</th><th>O que garante?</th></tr>
                <tr><td><b>Criptografia</b></td><td>Os dados são embaralhados e só o destino pode ler.</td></tr>
                <tr><td><b>Autenticidade</b></td><td>Garante que o site é realmente de quem diz ser.</td></tr>
                <tr><td><b>Integridade</b></td><td>Os dados não são alterados durante o trajeto.</td></tr>
            </table>
            <div class='dica'><b>Dica de Elite:</b> O cadeado no navegador indica o uso de protocolos <b>SSL ou TLS</b>.</div>
        `
    },

    "408": {
        titulo: "🧠 Memória RAM vs. Armazenamento",
        corpo: `
            <p>Muitos confundem "memória" com "armazenamento". No seu switcher, imagine que a RAM é a sua mesa de trabalho e o HD é o arquivo morto.</p>
            
            <ul>
                <li><b>RAM:</b> Volátil (apaga sem energia). É onde os programas que você está usando agora ficam "abertos".</li>
                <li><b>SSD/HD:</b> Não volátil. Guarda suas fotos e o sistema operacional mesmo com o PC desligado.</li>
            </ul>
        `
    },

    "418": {
        titulo: "🌐 DHCP: O Garçom de IPs",
        corpo: `
            <p>O <b>DHCP</b> é o serviço que "aluga" endereços IP para os dispositivos que entram na rede da Câmara.</p>
            <div class='dica'>
                <b>Como funciona:</b> Quando você liga seu celular no Wi-Fi, o servidor DHCP entrega um IP vago. Sem ele, o técnico teria que configurar o número manualmente em cada computador.
            </div>
            <p><b>Analogia:</b> É como um hotel que entrega uma chave de quarto diferente para cada hóspede que chega no balcão.</p>
        `
    },

    "419": {
        titulo: "☣️ Ransomware: O Sequestro Digital",
        corpo: `
            <p>É um dos ataques mais perigosos para órgãos públicos. O hacker não rouba seus dados, ele os <b>tranca</b>.</p>
            <div class='alerta'>
                <b>O Processo:</b>
                1. O vírus entra (geralmente por e-mail falso). <br>
                2. Ele criptografa (codifica) todos os arquivos. <br>
                3. Exibe uma mensagem pedindo resgate (geralmente em Bitcoin).
            </div>
            <p><b>Prevenção:</b> Backup offline (fora da rede) é a única defesa 100% eficaz.</p>
        `
    },

    "425": {
        titulo: "🚢 TCP vs. UDP: Entrega Garantida vs. Velocidade",
        corpo: `
            <p>Esses dois protocolos de transporte definem como os dados "viajam" na rede.</p>
            <table class='tab-estudo'>
                <tr><th>Característica</th><th>TCP</th><th>UDP</th></tr>
                <tr><td><b>Garantia</b></td><td>Confirma o recebimento.</td><td>Não confirma.</td></tr>
                <tr><td><b>Ordem</b></td><td>Organiza os pacotes.</td><td>Chegam como der.</td></tr>
                <tr><td><b>Uso Ideal</b></td><td>E-mails, Bancos, Sites.</td><td><b>Streaming de Vídeo</b>, Jogos.</td></tr>
            </table>
            <div class='dica'><b>Dica do Operador:</b> No seu trabalho, transmissões ao vivo usam <b>UDP</b> porque preferem perder um "pixel" do que travar a imagem esperando confirmação.</div>
        `
    },

    "426": {
        titulo: "📊 Função SE no Excel (Lógica Pura)",
        corpo: `
            <p>A função <b>=SE()</b> é idêntica a uma estrutura de decisão na programação.</p>
            <div class='teste-rapido'>
                <b>Estrutura:</b> =SE( Teste_Lógico ; Valor_se_Verdade ; Valor_se_Falso )<br><br>
                <b>Exemplo:</b> =SE( A1>=7 ; "Aprovado" ; "Reprovado" )
            </div>
            <p><b>Cuidado:</b> Textos dentro de fórmulas no Excel devem estar obrigatoriamente entre <b>aspas duplas (" ")</b>.</p>
        `
    },

    "601": {
        titulo: "🔌 Switch vs. Hub: Inteligência na Rede",
        corpo: `
            <p>Ambos servem para conectar cabos de rede, mas o comportamento é diferente.</p>
            <ul>
                <li><b>Hub:</b> "Burro". Recebe um dado e replica para todas as portas (gera lentidão/colisão).</li>
                <li><b>Switch:</b> "Inteligente". Lê o endereço <b>MAC</b> e envia o dado apenas para o cabo do computador de destino.</li>
            </ul>
            <p>É a base das redes modernas (Topologia em Estrela).</p>
        `
    },

    "603": {
        titulo: "✉️ IMAP vs. POP3: Onde estão seus e-mails?",
        corpo: `
            <p>Ao configurar o e-mail da Câmara, você escolherá entre esses dois:</p>
            <div class='dica'>
                <b>IMAP:</b> Sincroniza. Se você apagar no celular, apaga no PC. As mensagens ficam no servidor. (Melhor para múltiplos dispositivos).<br>
                <b>POP3:</b> Baixa. Ele "puxa" as mensagens para o seu PC e as apaga do servidor.
            </div>
        `
    },
    // Adicione estes itens ao seu objeto de revisão (ex: revisao_dados)

    "301": {
        titulo: "⚖️ Anulação vs. Revogação: O Vício do Ato",
        corpo: `
            <p>A banca vai tentar te confundir no motivo da extinção do ato:</p>
            <div class='vs-container' style='display: flex; gap: 10px; margin-top: 10px;'>
                <div style='flex: 1; background: #fff1f1; padding: 10px; border-radius: 8px; border-left: 4px solid #ad3131;'>
                    <b>ANULAÇÃO:</b> Ocorre por <b>Ilegalidade</b>. Efeito <i>Ex Tunc</i> (retroage). Pode ser feita pela Adm. ou Judiciário.
                </div>
                <div style='flex: 1; background: #f1f7ff; padding: 10px; border-radius: 8px; border-left: 4px solid #002855;'>
                    <b>REVOGAÇÃO:</b> Ocorre por <b>Conveniência/Oportunidade</b>. Efeito <i>Ex Nunc</i> (não retroage). Só a Adm. faz.
                </div>
            </div>
        `
    },
    
    "401": {
        titulo: "🎥 Rec. 709 vs. Rec. 2020: O Espaço de Cor",
        corpo: `
            <p>Como Operador na TV Senado, foque na largura do Gamut (gama de cores):</p>
            <div class='dica'>
                <b>Rec. 709:</b> Padrão do HDTV (SDR). Limitado a 8 bits e cores menos saturadas.<br>
                <b>Rec. 2020:</b> Padrão do UHDTV (4K/HDR). Suporta 10/12 bits e um volume de cores muito maior (gamut estendido).
            </div>
            <p style='font-size: 0.9em; margin-top: 5px; color: #666;'><i>Lembre-se: Rec. 2020 é essencial para o HDR (High Dynamic Range).</i></p>
        `
    },
    // Adicione estes itens ao seu objeto de revisão (ex: revisao_dados)

    "501": {
        titulo: "📊 A Tabela Verdade: O Guia de Sobrevivência",
        corpo: `
            <p>Para não errar mais, memorize o 'gatilho' de cada conectivo:</p>
            <table style='width:100%; border-collapse: collapse; font-size: 0.9em; text-align: center;'>
                <tr style='background: #002855; color: white;'>
                    <th>Conectivo</th>
                    <th>Símbolo</th>
                    <th>Regra de Ouro (Para ser VERDADE)</th>
                </tr>
                <tr>
                    <td><b>Conjunção (e)</b></td>
                    <td>^</td>
                    <td>Tudo tem que ser verdade (V + V = V)</td>
                </tr>
                <tr>
                    <td><b>Disjunção (ou)</b></td>
                    <td>v</td>
                    <td>Basta uma verdade (V + F = V)</td>
                </tr>
                <tr>
                    <td><b>Condicional (se...então)</b></td>
                    <td>→</td>
                    <td>Só é Falsa se for <b>Vera Fischer</b> (V → F = F)</td>
                </tr>
                <tr>
                    <td><b>Bicondicional (se e somente se)</b></td>
                    <td>↔</td>
                    <td>Iguais dão Verdade (V↔V=V ou F↔F=V)</td>
                </tr>
                <tr>
                    <td><b>Disjunção Exclusiva (ou...ou)</b></td>
                    <td><u>v</u></td>
                    <td>Diferentes dão Verdade (V<u>v</u>F=V ou F<u>v</u>V=V)</td>
                </tr>
            </table>
        `
    },
    

    "502": {
        titulo: "🏹 A Condicional (p → q) e suas Equivalências",
        corpo: `
            <p>A condicional é a que mais cai. Lembre-se das duas formas de dizer a mesma coisa (Equivalências):</p>
            <div class='dica' style='background: #fdf2f2; border-left: 4px solid #ad3131; padding: 10px;'>
                <b>1. Contrapositiva (Inverte e Nega):</b><br>
                Se p, então q ≡ <b>Se não q, então não p</b>. <br>
                <i>Ex: Se chove, o chão molha ≡ Se o chão não molhou, não choveu.</i>
            </div>
            <div class='dica' style='background: #f1f7ff; border-left: 4px solid #002855; padding: 10px; margin-top: 10px;'>
                <b>2. Regra do NE Y MA (Nega a 1ª OU Mantém a 2ª):</b><br>
                Se p, então q ≡ <b>Não p ou q</b>. <br>
                <i>Ex: Se sou goiano, sou brasileiro ≡ Não sou goiano OU sou brasileiro.</i>
            </div>
            <p style='margin-top: 10px;'><b>Negação da Condicional (MANÉ):</b> Mantém a primeira E Nega a segunda (p ^ ~q).</p>
        `
    },
    
    // --- PORTUGUÊS: CONJUNÇÕES ---
    "701": {
        titulo: "🔗 Mas vs. Embora: O Duelo das Oposições",
        corpo: `
            <p>A banca ama confundir <b>Adversativas</b> com <b>Concessivas</b>. Ambas trazem oposição, mas mudam o verbo:</p>
            <div class='vs-container' style='display: flex; gap: 10px; margin-top: 10px;'>
                <div style='flex: 1; background: #fff1f1; padding: 10px; border-radius: 8px; border-left: 4px solid #ad3131;'>
                    <b>ADVERSATIVAS:</b> (Mas, porém, contudo). Oposição forte. Verbo no <b>Indicativo</b>.<br><i>Ex: Estudei, mas não passei.</i>
                </div>
                <div style='flex: 1; background: #f1f7ff; padding: 10px; border-radius: 8px; border-left: 4px solid #002855;'>
                    <b>CONCESSIVAS:</b> (Embora, ainda que, conquanto). Oposição 'fraquinha'. Verbo no <b>Subjuntivo</b>.<br><i>Ex: Embora tenha estudado, não passei.</i>
                </div>
            </div>
        `
    },

    // --- INFORMÁTICA: SEGURANÇA ---
    "605": {
        titulo: "🛡️ Malware: Quem é quem no ataque?",
        corpo: `
            <p>Diferencie os principais códigos maliciosos para a prova da Câmara:</p>
            <div class='dica'>
                <b>Worm (Verme):</b> Se multiplica sozinho pela rede. Não precisa de hospedeiro.<br>
                <b>Ransomware:</b> O sequestrador. Criptografa seus dados e pede resgate (Bitcoin).<br>
                <b>Spyware (Keylogger):</b> O fofoqueiro. Grava o que você digita para roubar senhas.
            </div>
        `
    },

    // --- ESPECÍFICA: ÁUDIO (OPERADOR MULTIMÍDIA) ---
    "405": {
        titulo: "🎤 Nível de Linha vs. Nível de Microfone",
        corpo: `
            <p>Erro comum em setups de áudio na TV:</p>
            <div class='dica'>
                <b>Mic Level:</b> Sinal muito baixo (milivolts). Precisa de um <b>Pré-amplificador</b>.<br>
                <b>Line Level:</b> Sinal forte (aprox. 1V). É o padrão de saída de switchers e consoles.<br>
                <b>CUIDADO:</b> Ligar um sinal de Linha numa entrada de Microfone vai causar <b>Distorção (Clip)</b> grave.
            </div>
        `
    },

    
    // --- ID 27: PORTUGUÊS (Índice de Indeterminação) ---
    "27": {
        titulo: "🕵️ O 'SE' Indeterminador de Sujeito",
        corpo: `
            <p>A banca vai tentar te confundir com a Partícula Apassivadora. Olhe o verbo:</p>
            <div class='vs-container' style='display: flex; gap: 10px; margin-top: 10px;'>
                <div style='flex: 1; background: #fff1f1; padding: 10px; border-radius: 8px; border-left: 4px solid #ad3131;'>
                    <b>V.T.D. + SE:</b> Partícula Apassivadora. O sujeito existe e sofre a ação.<br><i>Ex: Alugam-se salas (Salas são alugadas).</i>
                </div>
                <div style='flex: 1; background: #f1f7ff; padding: 10px; border-radius: 8px; border-left: 4px solid #002855;'>
                    <b>V.T.I. + SE:</b> Índice de Indeterminação. Não se sabe quem faz a ação.<br><i>Ex: Precisa-se de técnicos (Quem precisa? Não diz).</i>
                </div>
            </div>
        `
    },

    // --- ID 231: ESPECÍFICA (Genlock e Glitch) ---
    "231": {
        titulo: "🔄 Sincronismo Genlock: O Maestro do Estúdio",
        corpo: `
            <p>Se você cortar entre duas câmeras que não estão 'Genlocadas', o switcher terá um 'soluço'.</p>
            <div class='dica'>
                <b>O problema:</b> Cada câmera tem seu próprio relógio interno. Sem Genlock, elas mandam o quadro em tempos diferentes.<br>
                <b>A solução:</b> O Genlock (Generator Lock) envia um sinal de referência para que todas as câmeras comecem a 'desenhar' o quadro exatamente no mesmo microssegundo.
            </div>
        `
    },

    // --- ID 601: INFORMÁTICA (Switch vs Hub) ---
    "601": {
        titulo: "🔌 Switch (Inteligente) vs. Hub (Burro)",
        corpo: `
            <p>Em redes de computadores, a diferença está na segmentação de dados:</p>
            <div class='dica'>
                <b>Hub:</b> Recebe um dado e espalha para todas as portas. Gera colisões e lentidão.<br>
                <b>Switch:</b> Lê o endereço <b>MAC</b> e entrega o pacote apenas para o computador de destino. É o padrão em redes modernas.
            </div>
        `
    },

    // --- PORTUGUÊS: COORDENADAS VS SUBORDINADAS ---
    "7001": {
        titulo: "🔗 Conjunções Adversativas (Coordenadas)",
        corpo: `
            <p>Apareceu <b>Todavia, Porém, Contudo, Entretanto ou Mas</b>? É oposição!</p>
            <div class='dica'>
                As <b>Coordenadas Adversativas</b> unem frases que têm sentido completo sozinhas, mas que se 'chocam' na ideia. 
                <br><i>Ex: O sinal está bom (Ideia 1), <b>todavia</b> a gravação falhou (Ideia 2).</i>
            </div>
        `
    },

    "7002": {
        titulo: "🔍 Adjetivas: Restritiva vs. Explicativa",
        corpo: `
            <p>O segredo aqui é a <b>VÍRGULA</b>. Como Operador, pense na vírgula como um botão de 'Informação Extra':</p>
            <div class='vs-container' style='display: flex; gap: 10px; margin-top: 10px;'>
                <div style='flex: 1; background: #fff1f1; padding: 10px; border-radius: 8px; border-left: 4px solid #ad3131;'>
                    <b>COM VÍRGULA:</b> Explicativa. Generaliza. <br><i>Ex: Os técnicos, que são lentos, saíram. (Todos são lentos).</i>
                </div>
                <div style='flex: 1; background: #f1f7ff; padding: 10px; border-radius: 8px; border-left: 4px solid #002855;'>
                    <b>SEM VÍRGULA:</b> Restritiva. Especifica. <br><i>Ex: Os técnicos que são lentos saíram. (Apenas os lentos saíram).</i>
                </div>
            </div>
        `
    },

    "7003": {
        titulo: "⚡ Subordinada Adverbial Consecutiva",
        corpo: `
            <p>Indica a <b>CONSEQUÊNCIA</b> de um exagero feito na frase anterior.</p>
            <div class='dica'>
                Geralmente aparece o 'que' antecedido de um 'intensificador' (Tão, Tanto, Tamanho).
                <br><b>Fórmula:</b> Tão/Tanto [Causa] + QUE [Consequência].
                <br><i>Ex: Gritou <b>tanto</b> (Causa) <b>que</b> ficou rouco (Consequência).</i>
            </div>
        `
    },

    // --- HISTÓRIA DE GOIÂNIA ---
    "4001": {
        titulo: "🏛️ A Marcha para o Oeste e Goiânia",
        corpo: `
            <p>Goiânia não nasceu por acaso; foi um projeto geopolítico de <b>Getúlio Vargas</b> executado por <b>Pedro Ludovico</b>.</p>
            <div class='dica'>
                <b>Marcha para o Oeste:</b> O objetivo era levar o progresso para o interior do Brasil, já que a população ficava presa no litoral. Vila Boa (Cidade de Goiás) era encravada na serra e não permitia o crescimento planejado que o estado precisava.
            </div>
        `
    },

    "4002": {
        titulo: "📐 O Urbanismo de Attilio Corrêa Lima",
        corpo: `
            <p>O plano original de 1933 previa uma cidade moderna para 50 mil habitantes.</p>
            <div class='dica'>
                <b>O Formato de Leque:</b> As avenidas principais (Araguaia, Goiás e Tocantins) saem da <b>Praça Cívica</b> como raios. Isso é o estilo <i>Art Déco</i> aplicado ao urbanismo: simetria, ordem e modernidade.
            </div>
        `
    },

    // --- RACIOCÍNIO LÓGICO ---
    "5001": {
        titulo: "🥊 Negação da Condicional (Regra do MANÉ)",
        corpo: `
            <p>Para negar um 'Se... então', você nunca usa outro 'Se'. Você vira um <b>MANÉ</b>:</p>
            <div class='flashcard' style='background: #fdf2f2; border-left: 5px solid #ad3131; padding: 10px;'>
                <b>MA</b>ntém a primeira parte + <b>NE</b>ga a segunda parte.
                <br>Troca o conectivo 'então' pelo <b>'E'</b>.
                <br><i>Ex: Se chove, eu corro ≡ Chove E eu não corro.</i>
            </div>
        `
    },

    "5002": {
        titulo: "⚖️ Equivalência da Disjunção Exclusiva (Ou... Ou)",
        corpo: `
            <p>O 'Ou exclusivo' significa que apenas UMA das coisas pode ser verdade. Se uma acontece, a outra morre.</p>
            <div class='dica'>
                <b>Equivalência:</b> Ou p ou q ≡ <b>Se p, então não q</b>.
                <br><i>Ex: Ou é dia ou é noite ≡ Se é dia, então NÃO é noite.</i>
            </div>
        `
    },

    // --- ESPECÍFICA: ÁUDIO ---
    "6002": {
        titulo: "🎤 Áudio Balançado (XLR): Por que usar?",
        corpo: `
            <p>No ambiente da TV Senado, cheio de cabos de energia, o sinal balançado é vida ou morte para o som.</p>
            <div class='dica'>
                <b>Como funciona:</b> O cabo envia o som por dois fios internos. Um fio vai normal e o outro vai com a fase 'de cabeça para baixo'. 
                No final, o equipamento inverte de volta e <b>anula qualquer chiado</b> que o cabo tenha pego no caminho. É por isso que cabos XLR podem ser bem longos sem dar ruído.
            </div>
        `
    },
    // === NOVAS EXPLICAÇÕES: INFORMÁTICA AVANÇADA ===
    "424": {
        titulo: "📊 PROCV: A Busca Vertical do Excel",
        corpo: `
            <p>O <b>PROCV</b> é o comando de busca mais famoso das planilhas. Ele 'caça' um valor em uma coluna e te devolve o que está na frente.</p>
            <div class='dica'>
                <b>A Lógica:</b> PROCV( <i>o que você busca</i> ; <i>onde buscar</i> ; <i>qual coluna quer o resultado</i> ; 0 )
                <br>Lembre-se: Ele sempre busca na <b>primeira coluna</b> da esquerda para a direita.
            </div>
        `
    },
    

    "425": {
        titulo: "🚢 TCP vs. UDP: O Transporte de Dados",
        corpo: `
            <p>Os dados viajam de duas formas na rede da Câmara:</p>
            <div class='vs-container' style='display: flex; gap: 10px; margin-top: 10px;'>
                <div style='flex: 1; background: #f1f7ff; padding: 10px; border-radius: 8px; border-left: 4px solid #002855;'>
                    <b>TCP:</b> Confiável. Ele confia se o dado chegou. Se perder, ele manda de novo. <br><i>Uso: Sites, E-mail.</i>
                </div>
                <div style='flex: 1; background: #fff9f1; padding: 10px; border-radius: 8px; border-left: 4px solid #e65100;'>
                    <b>UDP:</b> Rápido. Não confere nada. <br><i>Uso: <b>Streaming de Vídeo</b>, VoIP. Na TV, usamos UDP para não travar o sinal.</i>
                </div>
            </div>
        `
    },

    // === NOVAS EXPLICAÇÕES: LEGISLAÇÃO E REGIMENTO ===
    "503": {
        titulo: "🔄 Remoção vs. Redistribuição (Estatuto)",
        corpo: `
            <p>Não confunda o deslocamento do <b>Servidor</b> com o do <b>Cargo</b>:</p>
            <ul>
                <li><b>REmoção:</b> O <u>RE</u>servista (servidor) muda de lugar. O cargo continua onde estava.</li>
                <li><b>REdistribuição:</b> O <u>Cargo</u> inteiro é movido para outro órgão. O servidor vai junto com a 'vaga'.</li>
            </ul>
        `
    },

    "505": {
        titulo: "⚖️ CCJR: A Comissão mais Importante",
        corpo: `
            <p>Na Câmara de Goiânia, a <b>Comissão de Constituição, Justiça e Redação (CCJR)</b> é o filtro de legalidade.</p>
            <div class='alerta'>
                <b>O que ela faz:</b> Analisa se o projeto é constitucional e legal. Se a CCJR der parecer contrário por ilegalidade, o projeto geralmente 'morre' ali, antes de ir ao plenário.
            </div>
        `
    },

    // === NOVAS EXPLICAÇÕES: ESPECÍFICA AUDIOVISUAL ===
    "254": {
        titulo: "🎨 Chroma Subsampling 4:2:2",
        corpo: `
            <p>Para economizar banda no sinal SDI, a TV 'engana' o olho humano:</p>
            <div class='dica'>
                <b>4:</b> Luminância total (Brilho/Detalhe).<br>
                <b>2:2:</b> Metade da informação de cor.
                <br>Como o olho vê mais brilho do que cor, o <b>4:2:2</b> é o padrão perfeito para Broadcast (TV Senado/Câmara), pois permite um ótimo Chroma Key sem pesar o sinal.
            </div>
        `
    },
    

    "245": {
        titulo: "🎞️ Compressão: Intraframe vs. Interframe",
        corpo: `
            <p>O segredo da edição rápida está aqui:</p>
            <ul>
                <li><b>Intraframe (ProRes/DNxHD):</b> Cada quadro é uma foto completa. <br><i>Vantagem: Edição leve. Desvantagem: Arquivos gigantes.</i></li>
                <li><b>Interframe (H.264/H.265):</b> Grava apenas a diferença entre um quadro e outro. <br><i>Vantagem: Arquivos pequenos. Desvantagem: Exige muito processador para 'adivinhar' os quadros.</i></li>
            </ul>
        `
    },
    // === SEGURANÇA DA INFORMAÇÃO (IDs 407, 414, 419, 423, 427) ===
    "407": {
        titulo: "🎣 Phishing: A Pescaria de Dados",
        corpo: `
            <p>O <b>Phishing</b> é um golpe de engenharia social. O atacante envia uma isca (e-mail ou site falso) para "fisgar" seus dados.</p>
            <div class='dica'>
                <b>Como identificar:</b> Mensagens urgentes, erros de português, links estranhos e pedidos de senha ou dados bancários que a instituição nunca pediria por e-mail.
            </div>
        `
    },
    "414": {
        titulo: "🧱 Firewall: A Parede de Fogo",
        corpo: `
            <p>O <b>Firewall</b> atua como um filtro entre a rede interna da Câmara e a Internet. Ele decide o que entra e o que sai com base em regras de segurança.</p>
            <div class='alerta'>
                <b>Importante:</b> O Firewall NÃO é um antivírus. Ele bloqueia acessos indevidos (portas), mas pode deixar passar um vírus se ele estiver em um arquivo que você autorizou o download.
            </div>
        `
    },
    
    "423": {
        titulo: "🎭 Spoofing: O Ataque de Falsificação",
        corpo: `
            <p>No <b>Spoofing</b>, o invasor mascara sua identidade para parecer uma fonte confiável (falsifica o IP, o e-mail ou o DNS).</p>
            <div class='dica'>
                Diferença: No <b>Phishing</b> você é enganado pelo conteúdo; no <b>Spoofing</b> o sistema é enganado pela identidade técnica falsificada.
            </div>
        `
    },
    "427": {
        titulo: "🚫 Ataque DoS: Negação de Serviço",
        corpo: `
            <p>O objetivo do <b>DoS (Denial of Service)</b> não é roubar dados, mas sim <b>derrubar</b> o servidor (ex: o streaming da TV Câmara).</p>
            <div class='dica'>
                O atacante inunda o servidor com tantas requisições falsas que ele "trava" e deixa de atender os usuários legítimos. Quando feito por vários computadores ao mesmo tempo, chama-se <b>DDoS</b> (Distribuído).
            </div>
        `
    },

    // === RACIOCÍNIO LÓGICO: PROBABILIDADE E DIAGRAMAS (IDs 73, 76) ===
    "73": {
        titulo: "⭕ Diagramas de Venn: Todo e Algum",
        corpo: `
            <p>Para questões de premissas, desenhe sempre os círculos:</p>
            <ul>
                <li><b>Todo A é B:</b> O círculo A está totalmente dentro do B.</li>
                <li><b>Algum A é B:</b> Existe uma intersecção (beira) entre os dois.</li>
                <li><b>Nenhum A é B:</b> Os círculos não se tocam.</li>
            </ul>
            <div class='dica'>Pense na questão dos técnicos: Se alguns são concursados e todos são organizados, a parte 'concursada' está presa dentro do círculo maior dos 'organizados'.</div>
        `
    },
    
    "76": {
        titulo: "🎲 Probabilidade Sucessiva (Sem Reposição)",
        corpo: `
            <p>Quando retiramos objetos sem devolver, o total (espaço amostral) diminui a cada rodada.</p>
            <div class='dica'>
                <b>Fórmula:</b> P(A) x P(B|A). <br>
                1ª retirada: 3/8 (3 vermelhos em 8 totais). <br>
                2ª retirada: 2/7 (sobraram 2 vermelhos em 7 totais). <br>
                <b>Multiplicação:</b> 3/8 * 2/7 = 6/56, que simplificado por 2 dá <b>3/28</b>.
            </div>
        `
    },

    // === LEGISLAÇÃO: QUÓRUNS E COMISSÕES (IDs 118, 120, 502, 505) ===
    "118": {
        titulo: "⚖️ Comissões Permanentes: CCJR",
        corpo: `
            <p>A <b>CCJR (Comissão de Constituição, Justiça e Redação)</b> é a "porta de entrada" dos projetos.</p>
            <div class='alerta'>
                Ela analisa se o projeto fere a Constituição ou a Lei Orgânica. É a única comissão que pode "matar" um projeto por ilegalidade antes mesmo de ele ser discutido no mérito (se é bom ou ruim).
            </div>
        `
    },
    "120": {
        titulo: "📊 Controle Externo: O Papel do TCM-GO",
        corpo: `
            <p>A fiscalização da Câmara é feita pelo Poder Legislativo, mas eles não fazem isso sozinhos.</p>
            <div class='dica'>
                Em Goiás, quem auxilia a Câmara na fiscalização das contas do Prefeito é o <b>TCM-GO (Tribunal de Contas dos Municípios)</b>. Fique atento: se a questão falar apenas em TCE, está errada para nível municipal.
            </div>
        `
    },
    "502": {
        titulo: "⏱️ Quórum de Abertura de Sessão",
        corpo: `
            <p>Para começar os trabalhos na Câmara de Goiânia, é necessário um número mínimo de presentes (Quórum de Presença).</p>
            <div class='dica'>
                O Regimento Interno exige a presença de <b>1/3 (um terço)</b> dos membros da Casa para abrir a sessão. Para votar leis, o quórum muda dependendo da matéria (Simples ou Absoluta).
            </div>
        `
    },

    // === ENGENHARIA DE VÍDEO E BROADCAST (IDs 231, 251, 264, 266) ===
    "231": {
        titulo: "🔄 Sincronismo Genlock e Tri-Level Sync",
        corpo: `
            <p>Sem Genlock, os sinais das câmeras chegam ao switcher em tempos diferentes, causando o famoso 'glitch' (pulo de imagem) no corte.</p>
            <div class='dica'>
                <b>Analógico:</b> Usa Blackburst. <br>
                <b>Digital HD:</b> Usa <b>Tri-Level Sync</b>, que é muito mais preciso para manter o alinhamento dos quadros em alta definição.
            </div>
        `
    },
    "251": {
        titulo: "📉 Jitter: O Inimigo do Sinal Digital",
        corpo: `
            <p>O <b>Jitter</b> é a variação no tempo de chegada dos pulsos digitais. Se o pulso chega atrasado ou adiantado demais, o receptor não entende se é 0 ou 1.</p>
            <div class='alerta'>
                Causas comuns: Cabos muito longos, cabos de má qualidade (não são 75 ohms) ou conectores BNC mal crimpados.
            </div>
        `
    },
    "264": {
        titulo: "⏱️ Protocolo PTP (Precision Time Protocol)",
        corpo: `
            <p>No mundo do vídeo sobre IP (ST-2110), não usamos mais cabos BNC para sincronismo.</p>
            <div class='dica'>
                O <b>PTP (IEEE 1588)</b> é o "Genlock via rede". Ele garante que todos os dispositivos da rede (câmeras, switchers, servidores) tenham o mesmo relógio com precisão de nanossegundos através do cabo de rede.
            </div>
        `
    },
    "266": {
        titulo: "🎞️ Clean Feed: A Saída Limpa",
        corpo: `
            <p>O <b>Clean Feed</b> é uma saída do switcher idêntica ao Program (PGM), mas sem a camada de caracteres (tarjas/logos).</p>
            <div class='dica'>
                <b>Uso Prático:</b> Essencial para enviar o sinal para uma emissora parceira que vai colocar suas próprias tarjas, ou para gravar o programa "limpo" para edição posterior.
            </div>
        `
    },

    // === EXCEL AVANÇADO (IDs 424, 426) ===
    "424": {
        titulo: "🔍 PROCV: Onde está o dado?",
        corpo: `
            <p>O <b>PROCV</b> busca um valor na vertical e retorna algo que está na mesma linha.</p>
            <div class='dica'>
                <b>Fórmula:</b> =PROCV(valor; tabela; coluna; [falso]) <br>
                Lembre-se: O Excel sempre procura o valor na <b>primeira coluna</b> do intervalo que você selecionou.
            </div>
        `
    },
    "426": {
        titulo: "🤔 Função SE (Teste Lógico)",
        corpo: `
            <p>A função <b>=SE()</b> faz uma pergunta ao Excel e dá duas respostas possíveis.</p>
            <div class='dica'>
                <b>Sintaxe:</b> =SE(pergunta ; resposta_se_sim ; resposta_se_não). <br>
                <i>Ex: =SE(A1>=7 ; "Aprovado" ; "Reprovado").</i>
            </div>
        `
    },
    // === PORTUGUÊS: SINTAXE E REGÊNCIA (IDs 26, 28, 35, 38) ===
    "26": {
        titulo: "📍 Adjunto Adverbial Deslocado",
        corpo: `
            <p>O Adjunto Adverbial indica uma circunstância (tempo, lugar, modo). Quando ele sai do fim da frase e vai para o início ou meio, usamos a vírgula.</p>
            <div class='dica'>
                <b>Regra da Câmara:</b> Se o adjunto for 'curto' (até 2 palavras), a vírgula é facultativa. Se for 'longo', é <b>Obrigatória</b>.
                <br><i>Ex: 'Conforme o Regimento' é uma conformidade deslocada, por isso as vírgulas o isolam.</i>
            </div>
        `
    },
    "28": {
        titulo: "🎭 Metáfora vs. Metonímia",
        corpo: `
            <p>Não confunda essas duas figuras de linguagem na prova:</p>
            <div class='vs-container' style='display: flex; gap: 10px; margin-top: 10px;'>
                <div style='flex: 1; background: #fdf2f2; padding: 10px; border-radius: 8px; border-left: 4px solid #ad3131;'>
                    <b>METÁFORA:</b> Uma comparação sem o 'como'. <br><i>Ex: 'A TV é o olho do cidadão'. (Afirma que É).</i>
                </div>
                <div style='flex: 1; background: #f1f7ff; padding: 10px; border-radius: 8px; border-left: 4px solid #002855;'>
                    <b>METONÍMIA:</b> Uma substituição lógica. <br><i>Ex: 'A Câmara ouviu as ruas'. (O lugar pelas pessoas).</i>
                </div>
            </div>
        `
    },
    "35": {
        titulo: "🔗 Regência Tríplice (A / À / ÀS)",
        corpo: `
            <p>Essa questão testa três regências de uma vez:</p>
            <ul>
                <li><b>Referir-se:</b> Exige 'A'. (Referiu-se às normas).</li>
                <li><b>Visar (Objetivar):</b> Exige 'A'. (Visando à melhoria).</li>
                <li><b>Atento:</b> Exige 'A'. (Atento às exigências).</li>
            </ul>
            <div class='alerta'>Se a palavra seguinte for feminina e aceitar artigo, ocorre a <b>Crase</b>.</div>
        `
    },

    // === INFORMÁTICA: HARDWARE E REDES (IDs 420, 422, 429, 605) ===
    "420": {
        titulo: "💾 RAID 10: Velocidade + Segurança",
        corpo: `
            <p>O RAID 10 (ou 1+0) é o padrão usado em servidores de vídeo da TV por combinar o melhor de dois mundos:</p>
            <div class='dica'>
                <b>RAID 0 (Striping):</b> Divide os dados entre discos para ganhar velocidade.<br>
                <b>RAID 1 (Mirroring):</b> Espelha os dados para ter backup se um disco falhar.<br>
                <b>RAID 10:</b> Primeiro espelha, depois divide. Você tem a performance do 0 e a segurança do 1.
            </div>
        `
    },
    

    "422": {
        titulo: "🔢 Máscara de Sub-rede (Subnet Mask)",
        corpo: `
            <p>A máscara de rede serve para o computador saber quem está na mesma sala (rede local) e quem está fora (internet).</p>
            <div class='dica'>
                <b>Exemplo 255.255.255.0:</b> Os números 255 'trancam' a rede. O 0 indica onde os aparelhos (hosts) podem mudar. É o que define o tamanho da rede da Câmara.
            </div>
        `
    },
    "429": {
        titulo: "☁️ Virtualização: Servidores dentro de Servidores",
        corpo: `
            <p>A virtualização (VMWare, Hyper-V) permite que um único computador físico 'potente' rode vários sistemas operacionais ao mesmo tempo.</p>
            <div class='alerta'>
                Cada servidor virtual (VM) acha que é um hardware real, mas na verdade eles dividem o mesmo processador e memória. Isso economiza energia e espaço no rack.
            </div>
        `
    },

    // === ESPECÍFICA: BROADCAST E SINAIS (IDs 248, 253, 260, 261) ===
    "248": {
        titulo: "📡 Largura de Banda: HD-SDI vs. 3G-SDI",
        corpo: `
            <p>A diferença está na 'estrada' de dados dentro do cabo:</p>
            <ul>
                <li><b>HD-SDI (1.5G):</b> Suporta até 1080i (entrelaçado) ou 1080p a 30fps.</li>
                <li><b>3G-SDI (3.0G):</b> Dobra a velocidade. Permite 1080p a 60fps em um único cabo.</li>
            </ul>
            <p>Como Operador, lembre-se: Se a sua produção for 60p, o cabo e o switcher <b>devem</b> ser 3G.</p>
        `
    },
    "253": {
        titulo: "🟢 Spill Suppression (Croma Key)",
        corpo: `
            <p>Ao fazer o recorte do fundo verde, a luz do painel rebate no ombro e no cabelo do apresentador. Isso é o <b>Spill</b> (Vazamento).</p>
            <div class='dica'>
                O ajuste de <b>Spill Suppression</b> no switcher 'aniquila' esses reflexos esverdeados, trocando-os por um tom neutro ou cinza, deixando o recorte com aspecto profissional.
            </div>
        `
    },
    "260": {
        titulo: "🎹 Upstream Keyer (USK) vs. DSK",
        corpo: `
            <p>A ordem dos fatores altera o produto no switcher:</p>
            <ul>
                <li><b>USK (Upstream):</b> Vem ANTES da transição. Se você cortar para outra câmera, o gráfico 'viaja' junto com o corte.</li>
                <li><b>DSK (Downstream):</b> Vem DEPOIS de tudo. O gráfico fica 'colado' na tela, não importa qual câmera você corte embaixo.</li>
            </ul>
        `
    },
    "261": {
        titulo: "👄 Frame Delay e Lip Sync",
        corpo: `
            <p>Vídeo é 'pesado', áudio é 'leve'. O processador de vídeo leva alguns milissegundos a mais para tratar a imagem.</p>
            <div class='dica'>
                O <b>Frame Delay</b> atrasa o áudio propositalmente para que ele saia exatamente junto com o movimento da boca do apresentador, garantindo o sincronismo labial.
            </div>
        `
    },

    // === RACIOCÍNIO LÓGICO: PROPOSIÇÕES (IDs 54, 58, 62) ===
    "54": {
        titulo: "🏆 Tautologia: A Verdade Absoluta",
        corpo: `
            <p>Na lógica, uma <b>Tautologia</b> é uma frase composta que será SEMPRE VERDADEIRA, não importa o que aconteça.</p>
            <div class='dica'>
                Ex: 'Ou Allan é técnico, ou Allan não é técnico'. (P v ~P). <br>
                Não tem erro: uma das duas terá que ser verdade.
            </div>
        `
    },
    "58": {
        titulo: "💣 Contradição: O Erro Absoluto",
        corpo: `
            <p>É o oposto da tautologia. Uma <b>Contradição</b> é sempre FALSA, independentemente dos valores das partes.</p>
            <div class='alerta'>
                Ex: 'Allan é técnico E Allan não é técnico'. (P ^ ~P). <br>
                É impossível ser as duas coisas ao mesmo tempo. Resultado: Falso.
            </div>
        `
    },
   

    "2001": {
        titulo: "📐 Regra das Paroxítonas e Ditongos",
        corpo: `<p>Acentuamos as paroxítonas terminadas em <b>ditongo crescente</b>.</p>
                <table class='tab-estudo'>
                    <tr><th>Palavra</th><th>Divisão</th></tr>
                    <tr><td>Universitário</td><td>U-ni-ver-si-tá-rio</td></tr>
                    <tr><td>Relatório</td><td>Re-la-tó-rio</td></tr>
                </table>
                <div class='dica'><b>Dica:</b> Terminou em "io", "ia", "ie" e é a penúltima forte? Tem acento!</div>`
    },
    "2002": {
        titulo: "🔗 Adição Correlativa: Não só... mas também",
        corpo: `<p>Estabelece uma relação de <b>SOMA</b> entre duas orações.</p>
                <div class='alerta'>Equivale ao conectivo "E", mas com maior ênfase na adição das tarefas.</div>`
    },
    "2003": {
        titulo: "📉 Concessão: O 'Conquanto'",
        corpo: `<p><b>Conquanto</b> é uma conjunção concessiva (oposição que não impede a ação).</p>
                <div class='dica'><b>Teste:</b> Substitua sempre por <b>EMBORA</b>. Se fizer sentido, é concessiva.</div>`
    },
    "2004": {
        titulo: "🕵️ Conjunção Integrante vs Pronome Relativo",
        corpo: `<p>A integrante introduz uma oração que completa o sentido do verbo.</p>
                <div class='dica'><b>Macetes:</b> Substitua a oração por <b>ISSO</b>. "Disse ISSO". Se couber, o 'que' é integrante.</div>`
    },
    "2005": {
        titulo: "⏳ Proporção: À medida que",
        corpo: `<p>Indica fatos que ocorrem simultaneamente e de forma proporcional.</p>
                <div class='alerta'>Cuidado: "Ao passo que" também é proporcional. "À medida de" não existe.</div>`
    },
    "2006": {
        titulo: "❓ O 'Pois' Explicativo",
        corpo: `<p>O <b>Pois</b> antes do verbo justifica uma ordem ou afirmação anterior.</p>
                <div class='dica'>Se vier após o verbo e entre vírgulas, vira <b>Conclusivo</b> (Portanto).</div>`
    },
    "2007": {
        titulo: "🚩 Vírgula nas Adversativas",
        corpo: `<p>A vírgula é <b>OBRIGATÓRIA</b> antes de conectivos de oposição (mas, porém, contudo...).</p>`
    },
    "2008": {
        titulo: "Vim, vi e venci: Assíndeto",
        corpo: `<p>A omissão das conjunções gera uma lista de ações rápidas com valor <b>ADITIVO</b>.</p>`
    },
    "2009": {
        titulo: "🔄 Condição: O 'Caso'",
        corpo: `<p>O 'Caso' exige o verbo no <b>Subjuntivo</b>. Estabelece uma hipótese.</p>
                <p><i>Ex: Caso estude (hipótese), passará.</i></p>`
    },
    "2010": {
        titulo: "🆕 Novo Acordo: Ditongos em Paroxítonas",
        corpo: `<p>Ditongos abertos <b>EI</b> e <b>OI</b> perderam o acento em paroxítonas.</p>
                <table class='tab-estudo'>
                    <tr><td>Ideia (Sem acento)</td><td>Herói (Com acento - Oxítona)</td></tr>
                </table>`
    },

    // --- RACIOCÍNIO LÓGICO (2011 - 2020) ---
    "2011": {
        titulo: "🛡️ Lei de De Morgan: Negar o 'E'",
        corpo: `<p>Para negar 'P e Q':</p>
                <ol><li>Nega P</li><li>Nega Q</li><li>Troca o E pelo <b>OU (v)</b></li></ol>`
    },
    "2012": {
        titulo: "👸 Condicional: Vera Fischer",
        corpo: `<p>A condicional (->) só é <b>FALSA</b> no caso: <b>V -> F</b>.</p>
                <div class='alerta'>Se a primeira for F, o resultado será sempre V!</div>`
    },
    "2013": {
        titulo: "🚫 Negação do 'Todo'",
        corpo: `<p>A negação de "Todo" é "<b>Algum... não</b>" (ou 'Existe um que não').</p>
                <div class='alerta'>Nunca negue 'Todo' com 'Nenhum'!</div>`
    },
    "2014": {
        titulo: "Tabela Verdade do 'OU'",
        corpo: `<p>A disjunção (v) só é <b>FALSA</b> se as duas proposições forem falsas.</p>`
    },
    "2015": {
        titulo: "🔢 Linhas da Tabela Verdade",
        corpo: `<p>Use a fórmula <b>2ⁿ</b>. Onde n é o número de proposições simples.</p>
                <p><i>Ex: 3 proposições = 2³ = 8 linhas.</i></p>`
    },
    "2016": {
        titulo: "🔄 Equivalência Contrapositiva",
        corpo: `<p>P -> Q é o mesmo que <b>~Q -> ~P</b>.</p>
                <div class='dica'>Inverte as duas frases e nega ambas.</div>`
    },
    "2017": {
        titulo: "Símbolos Lógicos",
        corpo: `<p><b>^</b> = Conjunção (E)<br><b>v</b> = Disjunção (OU)</p>`
    },
    "2018": {
        titulo: "🏆 Tautologia",
        corpo: `<p>É uma proposição cujo resultado final é <b>SEMPRE VERDADEIRO</b> na tabela.</p>`
    },
    "2019": {
        titulo: "🥊 Negação da Condicional (Regra do MANÉ)",
        corpo: `<p><b>MA</b>ntém a primeira <b>E</b> <b>NE</b>ga a segunda.</p>
                <div class='alerta'>O 'Se' some e entra o 'E'.</div>`
    },
    "2020": {
        titulo: "⚖️ OU Exclusivo (XOR)",
        corpo: `<p>Verdadeiro apenas quando as proposições são <b>DIFERENTES</b> (V e F ou F e V).</p>`
    },

    // --- HISTÓRIA E GEOGRAFIA DE GOIÁS (2021 - 2030) ---
    "2021": {
        titulo: "🏙️ Art Déco e Urbanismo",
        corpo: `<p>Goiânia é um marco do <b>Art Déco</b>. Projetada para ser moderna e funcional.</p>`
    },
    "2022": {
        titulo: "Mudancismo Goiano",
        corpo: `<p>Movimento que pregava a interiorização para fugir do isolamento de Vila Boa.</p>`
    },
    "2023": {
        titulo: "🌊 Rio Araguaia",
        corpo: `<p>Divisa natural entre Goiás (Leste) e Mato Grosso (Oeste).</p>`
    },
    "2024": {
        titulo: "Batismo Cultural (1942)",
        corpo: `<p>Grande evento que consolidou a inauguração de Goiânia para o Brasil.</p>`
    },
    "2025": {
        titulo: "📍 Macrorregião Centro Goiano",
        corpo: `<p>Goiânia polariza a economia e política no coração geográfico do estado.</p>`
    },
    "2026": {
        titulo: "Pedro Ludovico Teixeira",
        corpo: `<p>Interventor nomeado por Vargas; o "pai" da nova capital.</p>`
    },
    "2027": {
        titulo: "💰 Ciclo do Ouro",
        corpo: `<p>Economia do Séc. XVIII baseada na mineração, gerando as cidades coloniais.</p>`
    },
    "2028": {
        titulo: "⛰️ Pouso Alto",
        corpo: `<p>O ponto culminante de Goiás (1.691m), na Chapada dos Veadeiros.</p>`
    },
    "2029": {
        titulo: "Vila Boa de Goyaz",
        corpo: `<p>Antigo nome da Cidade de Goiás, capital até 1937.</p>`
    },
    "2030": {
        titulo: "🌦️ Clima Tropical",
        corpo: `<p>Típico do Cerrado: Verão chuvoso e inverno seco.</p>`
    },

    // --- ESPECÍFICAS: OPERADOR DE CARACTERES (2031 - 2040) ---
    "2031": {
        titulo: "📺 O Gerador de Caracteres (GC)",
        corpo: `<p>Equipamento ou software que sobrepõe textos e gráficos ao vídeo ao vivo.</p>`
    },
    "2032": {
        titulo: "📐 Aspect Ratio 16:9",
        corpo: `<p>Padrão do HD e TV Digital. Substituiu o antigo 4:3 (tubo).</p>`
    },
    "2033": {
        titulo: "Title Safe Area",
        corpo: `<p>Área (80% central) que garante a leitura dos nomes sem cortes nas bordas da TV.</p>`
    },
    "2034": {
        titulo: "👻 Canal Alpha",
        corpo: `<p>Define a <b>transparência</b>. Permite que o fundo do vídeo apareça através do GC.</p>`
    },
    "2035": {
        titulo: "Identificação Legislativa",
        corpo: `<p>Padrão: Nome completo + Partido + UF (Unidade Federativa).</p>`
    },
    "2036": {
        titulo: "🔌 Cabo SDI e BNC",
        corpo: `<p>SDI é o sinal; <b>BNC</b> é o conector de trava por baioneta padrão profissional.</p>`
    },
    "2037": {
        titulo: "Esteira Horizontal: Crawl",
        corpo: `<p><b>Crawl:</b> Texto corre horizontalmente.<br><b>Roll:</b> Texto sobe verticalmente.</p>`
    },
    "2038": {
        titulo: "Templates de GC",
        corpo: `<p>Modelos pré-formatados que garantem agilidade e padrão visual na TV.</p>`
    },
    "2039": {
        titulo: "🟢 Chroma Key",
        corpo: `<p>Isola uma cor (verde/azul) para substituir por outro sinal de vídeo.</p>`
    },
    "2040": {
        titulo: "👁️ Legibilidade no GC",
        corpo: `<p>O contraste entre a cor da fonte e o fundo (tarja) é o fator mais importante.</p>`
    },



    //concurso assembleia legislativa go
   

    // =================================================================================
    // 📚 LÍNGUA PORTUGUESA (Interpretação e Gramática de Alto Nível)
    // =================================================================================
    "3001": {
        titulo: "📰 Gêneros Textuais: Referenciação Jornalística",
        corpo: `
            <p>Muitos candidatos marcam que usar "Nome + Sobrenome" é formalidade. <b>Isso é um erro técnico.</b></p>
            <div class='dica'>
                <b>A Regra do Jornalismo (Lead):</b><br>
                Ao apresentar uma pessoa pela primeira vez no texto, devemos dar a "ficha completa" (Nome + Sobrenome + Cargo) para situar o leitor.
                <br><i>Ex: "O técnico de som Allan Silva ajustou a mesa."</i>
            </div>
            <p>Nas citações seguintes, usamos apenas o prenome ("Allan") ou o sobrenome ("Silva") para evitar repetição (Coesão Textual).</p>`
    },
    "3002": {
        titulo: "🎭 Morfologia: Adjetivo Adverbializado",
        corpo: `
            <p>Como regra geral, Adjetivos variam (bonito/bonita). Advérbios NÃO variam (ontem/hoje).</p>
            <p>Quando um adjetivo modifica um <b>verbo</b>, ele "veste a camisa" de advérbio e para de variar.</p>
            <table class='tab-estudo'>
                <tr><th>Frase</th><th>Análise</th><th>Teste do "-MENTE"</th></tr>
                <tr><td>"Ele fala <b>claro</b>"</td><td>Modo de falar</td><td>Fala <i>Claramente</i></td></tr>
                <tr><td>"A cerveja desce <b>redondo</b>"</td><td>Modo de descer</td><td>Desce <i>Redondamente</i></td></tr>
                <tr><td>"Foi <b>direito</b> ao ponto"</td><td>Modo de ir</td><td>Foi <i>Diretamente</i></td></tr>
            </table>`
    },
    "3003": {
        titulo: "⏳ Sintaxe: O Erro do Gerúndio de Posterioridade",
        corpo: `
            <p>O gerúndio (-ndo) indica ação contínua ou simultânea. Usá-lo para algo que acontece <b>depois</b> é erro clássico.</p>
            <div class='alerta'>
                ❌ <b>Errado:</b> "O ladrão fugiu, <i>sendo</i> preso dias depois." (Não foi ao mesmo tempo).<br>
                ✅ <b>Certo:</b> "O ladrão fugiu <i>e foi</i> preso dias depois."
            </div>
            <p>Na questão: Pombinha não desapareceu enquanto o rapaz lia a carta. Foi uma consequência futura ("daí a meses").</p>`
    },
    "3006": {
        titulo: "🧠 Interpretação: Analogia de Autoridade",
        corpo: `
            <p>Portinari usa uma figura de linguagem para desarmar a crítica do Bispo.</p>
            <ul>
                <li><b>O Bispo:</b> Autoridade máxima na Igreja.</li>
                <li><b>O Papa:</b> Autoridade suprema (acima do Bispo).</li>
            </ul>
            <p>Ao dizer "Na minha [arte], sou Papa", ele diz: <i>"Aqui nas tintas quem manda sou eu, e minha autoridade é absoluta, maior que a sua."</i></p>`
    },
    "3007": {
        titulo: "🗣️ Semântica e Regência do verbo 'Pôr'",
        corpo: `
            <p>O verbo "Pôr" muda drasticamente de sentido dependendo da preposição ou contexto.</p>
            <table class='tab-estudo'>
                <tr><th>Expressão</th><th>Sentido Real</th><th>Sinônimo</th></tr>
                <tr><td>Pôr a mesa</td><td>Arrumar</td><td>Organizar</td></tr>
                <tr><td>Pôr o casaco</td><td>Vestir</td><td>Trajar</td></tr>
                <tr><td><b>Pôr-se (em algum lugar)</b></td><td>Entrar/Ocupar</td><td><b>Enfiar-se / Meter-se</b></td></tr>
            </table>
            <p>A opção "enfiar-se debaixo da mesa" é a única que mantém o sentido físico de entrar em local apertado.</p>`
    },
    "3008": {
        titulo: "🎯 Sintaxe: Artigo Definido e Determinação",
        corpo: `
            <p>O uso do artigo "O/A/OS/AS" serve para <b>especificar</b>. Se eu digo "Gosto de túmulos", gosto de qualquer um. Se digo "Gosto <b>DOS</b> túmulos", estou falando de um grupo específico.</p>
            <div class='dica'>
                Na frase, o termo "túmulos" vem seguido de uma restrição: <i>"...dos que venceram na vida"</i>.
                <br>Como o substantivo está determinado/restrito, o artigo definido é obrigatório.
            </div>`
    },

    // =================================================================================
    // 🧠 RACIOCÍNIO LÓGICO (Métodos Rápidos)
    // =================================================================================
    "3009": {
        titulo: "🧩 Lógica: O Segredo da Condicional (Se... então)",
        corpo: `
            <p>A questão dá as verdades: <b>Carro=Preto(V), Moto=~Branca(V), Bike=Vermelha(V)</b>.</p>
            <p>Analisando a alternativa correta (D): <br><i>"Se a bicicleta NÃO é vermelha e o carro é preto, então..."</i></p>
            <div class='alerta'>
                <b>O Pulo do Gato:</b><br>
                Bike NÃO vermelha é <b>FALSO</b>. <br>
                Na tabela verdade do "Se... então", se a primeira parte (antecedente) é FALSA, a frase inteira é automaticamente <b>VERDADEIRA</b>.
                <br><i>(F -> V = V) e (F -> F = V).</i>
            </div>`
    },
    "3010": {
        titulo: "🔄 Equivalência Lógica: A Regra do NE-Y-MA",
        corpo: `
            <p>Como transformar "Se P, então Q" em uma frase com "OU"?</p>
            <div class='dica'>
                <b>Fórmula:</b> ~P v Q (Nega a primeira OU Mantém a segunda).
            </div>
            <ol>
                <li><b>Original:</b> (Bola Branca E Caixa ~Azul) → Ficha Vermelha.</li>
                <li><b>Nega a 1ª (Morgan):</b> Bola ~Branca <b>OU</b> Caixa Azul.</li>
                <li><b>Troca o conectivo:</b> Coloca o <b>OU</b> principal.</li>
                <li><b>Mantém a 2ª:</b> Ficha Vermelha.</li>
            </ol>
            <p><b>Resultado:</b> Bola ~Branca OU Caixa Azul OU Ficha Vermelha.</p>`
    },
    "3011": {
        titulo: "🔢 Sequências Cíclicas: O Resto da Divisão",
        corpo: `
            <p>Não tente calcular até 2025! Ache o padrão de repetição (o carimbo).</p>
            <p><b>Sequência:</b> 5, 4, -1, -5, -4, 1, <b>5, 4...</b> (Repetiu!).</p>
            <p>O ciclo tem <b>6 números</b>. Agora divida a posição desejada pelo tamanho do ciclo:</p>
            <div class='alerta'>
                <b>Conta:</b> 2025 ÷ 6.<br>
                O que importa é o <b>RESTO</b>, que é <b>3</b>.<br>
                Isso significa que o 2025º termo é igual ao 3º termo da fila: <b>-1</b>.
            </div>`
    },

    // =================================================================================
    // 💻 INFORMÁTICA (Foco em Windows e Segurança)
    // =================================================================================
    "3012": {
        titulo: "⚙️ Windows 10: O Fim do Painel de Controle",
        corpo: `
            <p>A Microsoft está migrando tudo para o menu "Configurações" (Aquele da engrenagem ⚙️).</p>
            <table class='tab-estudo'>
                <tr><th>Recurso</th><th>Onde fica agora?</th></tr>
                <tr><td>Mouse (Botão Primário)</td><td>Configurações > <b>Dispositivos</b></td></tr>
                <tr><td>Energia (Desempenho)</td><td>Configurações > <b>Sistema</b> > Energia e Suspensão</td></tr>
                <tr><td>Desinstalar Programas</td><td>Configurações > <b>Aplicativos</b></td></tr>
            </table>`
    },
    "3014": {
        titulo: "👻 Scareware: O Golpe do Medo",
        corpo: `
            <p>Sabe aquele pop-up que pisca vermelho gritando <i>"SEU PC ESTÁ INFECTADO COM 38 VÍRUS!"</i>?</p>
            <div class='dica'>
                Isso é <b>Scareware</b> (Scare = Susto).<br>
                <b>O objetivo:</b> Te deixar em pânico para você clicar e baixar um suposto "antivírus" que, na verdade, é o verdadeiro malware (Trojan ou Ransomware).
            </div>
            <p><b>Solução:</b> Feche a aba imediatamente (Alt+F4). Nunca clique.</p>`
    },

    // =================================================================================
    // ⚖️ LEGISLAÇÃO (Administrativo e Constitucional)
    // =================================================================================
    "3018": {
        titulo: "🔄 Estatuto: Disponibilidade e Aproveitamento",
        corpo: `
            <p>Imagine o servidor como um jogador de futebol.</p>
            <ul>
                <li>Se o time (cargo) dele acaba, ele não é demitido. Ele vai para o "banco de reservas" (<b>Disponibilidade</b>), recebendo salário proporcional.</li>
                <li>Quando surge uma vaga em outro time compatível, o técnico chama ele de volta. O nome desse retorno é <b>APROVEITAMENTO</b>.</li>
            </ul>
            <div class='alerta'>Macete: Quem está disponível, deve ser aproveitado!</div>`
    },
    "3021": {
        titulo: "🌎 Art. 4º CF: Integração Regional",
        corpo: `
            <p>A Constituição Federal é específica sobre quem são nossos parceiros prioritários.</p>
            <p>O parágrafo único diz: "A República buscará a integração econômica, política, social e cultural dos povos da <b>AMÉRICA LATINA</b>".</p>
            <p><i>Cuidado: Não é só América do Sul, nem Mercosul. O escopo é Latino-Americano.</i></p>`
    },
    "3024": {
        titulo: "🏗️ Obras: O Recebimento Definitivo",
        corpo: `
            <p>Quando a Prefeitura assina o "Recebimento Definitivo" de um viaduto, ela está dizendo: "Ok, a obra está visivelmente pronta".</p>
            <div class='alerta'>
                <b>Isso isenta a empreiteira? NÃO!</b><br>
                Pelo Código Civil, o construtor responde pela <b>solidez e segurança</b> da obra por 5 anos. Se o viaduto cair 3 anos depois, a culpa é do engenheiro, mesmo que a prefeitura tenha aceitado a obra.
            </div>`
    },

    // =================================================================================
    // 🎚️ ESPECÍFICA: TÉCNICO DE SOM (Aulas Práticas de Estúdio)
    // =================================================================================
    "3027": {
        titulo: "⚡ Phantom Power (+48V): A Vida do Condensador",
        corpo: `
            <p>Por que o microfone dinâmico funciona sem pilha e o condensador não?</p>
            <div class='dica'>
                <b>Dinâmico (Bobina):</b> Funciona como um dínamo de bicicleta. O som empurra a membrana, que gera sua própria energia (eletromagnética).<br>
                <b>Condensador (Capacitor):</b> Funciona como uma bateria que precisa ser carregada. Ele tem duas placas que precisam de eletricidade para criar um campo estático.
            </div>
            <p>O <b>Phantom Power</b> envia 48 volts contínuos pelo próprio cabo de áudio para "acordar" o microfone.</p>`
    },
    "3030": {
        titulo: "🎚️ Auxiliar Pre-Fader: A Regra de Ouro do Monitor",
        corpo: `
            <p>Imagine que você está mixando o show. Você acha a guitarra alta e abaixa o fader principal (P.A.).</p>
            <p><b>O Problema:</b> Se o auxiliar do guitarrista for POST-Fader, o volume dele no palco também abaixa. Ele vai reclamar!</p>
            <div class='alerta'>
                <b>A Solução: PRE-Fader.</b><br>
                O sinal para o palco é desviado ANTES de chegar no seu fader. Você pode mexer à vontade no som do público, que o som do músico permanece intacto.
            </div>`
    },
    "3032": {
        titulo: "📐 Padrões Polares: Onde colocar o Monitor?",
        corpo: `
            <p>Para evitar microfonia, o monitor deve ficar na "bunda" do microfone (ponto cego). Mas cuidado:</p>
            <table class='tab-estudo'>
                <tr><th>Tipo</th><th>Desenho</th><th>Ponto Cego (Monitor)</th></tr>
                <tr><td>Cardióide</td><td>Coração</td><td><b>180º (Exatamente atrás)</b></td></tr>
                <tr><td>Supercardióide</td><td>Coração c/ rabinho</td><td><b>125º (Nas diagonais)</b></td></tr>
            </table>
            <p>O Supercardióide capta um pouco atrás (o rabinho). Se você puser o monitor reto atrás dele, vai apitar!</p>`
    },
    "3035": {
        titulo: "🔥 O Perigo da Voltagem: Amp na Mesa",
        corpo: `
            <p>Essa é a receita para queimar uma mesa de som em 1 segundo.</p>
            <ul>
                <li><b>Entrada de Mic (XLR):</b> Feita para receber sussurros elétricos (0.002 Volts).</li>
                <li><b>Saída de Power Amp:</b> Feita para empurrar alto-falantes pesados (50 a 100 Volts).</li>
            </ul>
            <div class='alerta'>
                Ligar a saída do amp na entrada da mesa é como ligar seu celular direto num poste de alta tensão. Os op-amps da entrada derretem na hora.
            </div>`
    },
    "3036": {
        titulo: "📈 Intersample Peaks: O Fantasma Digital",
        corpo: `
            <p>Seu medidor digital mostra -0.1 dB. Parece seguro, né? <b>Nem sempre.</b></p>
            <p>Imagine dois pontos digitais altos lado a lado. Quando o conversor desenha a onda analógica suave entre eles, o arco da onda pode passar de 0 dB.</p>
            <p>Isso é o <b>Pico Intersample</b> (Entre Amostras). Ele causa distorção nos equipamentos analógicos lá na frente, mesmo que o arquivo digital pareça "dentro do limite".</p>`
    },
    "3039": {
        titulo: "🔌 Ground Loop: O Zumbido de 60Hz",
        corpo: `
            <p>Sabe aquele "HUUUUUM" grave que some quando você põe a mão na mesa?</p>
            <div class='dica'>
                <b>A Causa:</b> A mesa está numa tomada (Terra A) e o cubo da guitarra noutra (Terra B). Se houver diferença de voltagem entre os terras, a eletricidade viaja pelo cabo de áudio procurando equilíbrio.
            </div>
            <p><b>A Solução:</b> Usar um <b>Direct Box (DI)</b> com a chave "Ground Lift". Isso corta a malha do cabo, interrompendo a estrada da eletricidade suja, mas deixando o som passar.</p>`
    },
    "3040": {
        titulo: "🛡️ Cabo Balanceado (XLR): A Mágica do Cancelamento",
        corpo: `
            <p>Como um cabo de 100 metros não pega ruído de rádio?</p>
            <ol>
                <li>O cabo leva dois sinais iguais: um <b>Normal (+)</b> e um <b>Invertido (-)</b>.</li>
                <li>O ruído entra no cabo e suja os dois iguais (Fase +).</li>
                <li>Ao chegar na mesa, o sistema <b>desinverte</b> o sinal negativo.</li>
                <li><b>O Truque:</b> O áudio (agora alinhado) dobra de força. O ruído (agora invertido contra ele mesmo) se anula matematicamente (+1 com -1 = 0).</li>
            </ol>`
    },
    "3049": {
        titulo: "📉 Downsampling e Aliasing",
        corpo: `
            <p>Imagine uma roda de carro girando tão rápido que parece rodar para trás. Isso é <b>Aliasing</b>.</p>
            <p>No áudio, se você converter 96kHz para 48kHz sem cuidado, as frequências super altas (acima de 24kHz) "dobram" para trás e viram ruídos graves estranhos.</p>
            <div class='alerta'>
                Para evitar isso, usamos o <b>Filtro Low-Pass</b> (Anti-Aliasing). Ele corta fora tudo o que é agudo demais antes de reduzir a taxa, protegendo a pureza do som.
            </div>`
    },
    "3050": {
        titulo: "⏱️ Sample Rate vs. Bit Depth",
        corpo: `
            <p>Não confunda as duas medidas do áudio digital:</p>
            <table class='tab-estudo'>
                <tr><th>Medida</th><th>Eixo</th><th>O que define?</th></tr>
                <tr><td><b>Bit Depth</b> (24 bits)</td><td>Vertical (Amplitude)</td><td>Faixa Dinâmica (Relação Sinal/Ruído).</td></tr>
                <tr><td><b>Sample Rate</b> (48 kHz)</td><td>Horizontal (Tempo)</td><td>Frequência máxima (Agudos) e precisão de tempo.</td></tr>
            </table>
            <p>Reduzir o Sample Rate diminui a "largura da estrada", cortando os agudos mais finos.</p>`
    }

}
