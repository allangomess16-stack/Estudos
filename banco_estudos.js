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
    }
    
}
    




