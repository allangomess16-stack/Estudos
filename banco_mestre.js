// BANCO DE DADOS MESTRE - SIMULADO CÂMARA DE GOIÂNIA (ALLAN SILVA)
const bancoDeDadosGeral = [

    
    // === PORTUGUÊS (s: 'p') - Peso 2.0 ===
    { id: 1, s: 'p', p: 2, q: "Assinale a alternativa que segue a regra de acentuação dos hiatos, como em 'saída':", o: ["Café", "Saúde", "Pajé", "Órgão"], a: 1, e: "Em 'sa-ú-de', o 'u' tônico está sozinho na sílaba, formando hiato." },
    { id: 2, s: 'p', p: 2, q: "Qual o plural correto da palavra 'caractere', termo técnico essencial para o seu cargo?", o: ["Caracteres", "Caractéres", "Carateres", "Caracteris"], a: 0, e: "O plural de caractere perde o acento tônico da penúltima sílaba: 'ca-rac-te-res'." },
    { id: 3, s: 'p', p: 2, q: "Assinale a opção em que o uso do 'porque' está correto em uma frase interrogativa direta:", o: ["Você faltou porque?", "Por que o sinal caiu?", "Não sei o porquê disso.", "Eles saíram por que quiseram."], a: 1, e: "Em perguntas no início da frase, usa-se 'Por que' separado e sem acento." },
    { id: 4, s: 'p', p: 2, q: "A palavra 'técnico' é acentuada graficamente por qual motivo?", o: ["É uma oxítona terminada em O.", "É uma paroxítona terminada em O.", "Todas as proparoxítonas são acentuadas.", "É um hiato tônico."], a: 2, e: "Técnico (téc-ni-co) tem a antepenúltima sílaba tônica, sendo proparoxítona." },
    { id: 5, s: 'p', p: 2, q: "O antônimo da palavra 'provisório', comum em escalas de trabalho, é:", o: ["Temporário", "Efêmero", "Permanente", "Rápido"], a: 2, e: "Permanente é aquilo que dura, o contrário de provisório." },
    { id: 6, s: 'p', p: 2, q: "Assinale a alternativa em que a palavra perdeu o acento gráfico com o Novo Acordo Ortográfico:", o: ["Saúde", "Herói", "Idéia", "Pajé"], a: 2, e: "Ditongos abertos (ei, oi) em palavras paroxítonas perderam o acento." },
    { id: 7, s: 'p', p: 2, q: "Sinônimo da palavra 'Inexorável':", o: ["Evitável", "Implacável", "Flexível", "Rápido"], a: 1, e: "Inexorável é aquilo que não cede, implacável." },
    { id: 8, s: 'p', p: 2, q: "Qual a função sintática de 'Allan' em: 'Allan, o técnico, enviou o sinal'?", o: ["Aposto", "Vocativo", "Sujeito", "Predicado"], a: 2, e: "Allan é o núcleo do sujeito que pratica a ação." },
    { id: 9, s: 'p', p: 2, q: "Coletivo de 'índios':", o: ["Vara", "Tribo", "Alcatéia", "Código"], a: 1, e: "Tribo é o conjunto de indígenas." },
    { id: 10, s: 'p', p: 2, q: "Significado de 'Ratificar':", o: ["Corrigir", "Confirmar", "Mudar", "Parar"], a: 1, e: "Ratificar significa validar ou confirmar." },
    { id: 11, s: 'p', p: 2, q: "Assinale a alternativa em que a palavra foi acentuada INCORRETAMENTE:", o: ["Mesa", "Saúde", "Automóvel", "Péssimo"], a: 0, e: "Mesa é uma paroxítona terminada em 'a', não leva acento." },
    { id: 12, s: 'p', p: 2, q: "Qual o antônimo da palavra 'Efêmero'?", o: ["Passageiro", "Curto", "Eterno", "Rápido"], a: 2, e: "Efêmero é o que dura pouco; Eterno é o que não tem fim." },
    { id: 13, s: 'p', p: 2, q: "Na frase 'Allan e Roberta compraram um carro', o sujeito é:", o: ["Simples", "Composto", "Oculto", "Inexistente"], a: 1, e: "Possui dois núcleos: Allan e Roberta." },
    { id: 14, s: 'p', p: 2, q: "Escolha a grafia correta para completar: 'Não sei o ______ de tanta confusão'.", o: ["Porque", "Por que", "Por quê", "Porquê"], a: 3, e: "Quando substantivado (antecedido de artigo), usa-se 'porquê' junto e com acento." },
    { id: 15, s: 'p', p: 2, q: "Qual destas palavras é um hiato?", o: ["Caixa", "Peixe", "Saída", "Noite"], a: 2, e: "Sa-í-da: as vogais se separam em sílabas diferentes." },
    { id: 16, s: 'p', p: 2, q: "Assinale a alternativa que apresenta uma palavra grafada INCORRETAMENTE quanto ao uso do X ou CH:", o: ["Enxame", "Chicote", "Enchente", "Enchame"], a: 3, e: "O correto é 'Enxame'. 'Enchame' não existe." },
    { id: 17, s: 'p', p: 2, q: "Qual a classe gramatical da palavra destacada em: 'Allan estuda **muito**'?", o: ["Substantivo", "Adjetivo", "Advébio de intensidade", "Preposição"], a: 2, e: "Muito está intensificando a ação de estudar, logo é um advérbio." },
    { id: 18, s: 'p', p: 2, q: "Assinale a frase com erro de concordância nominal:", o: ["A entrada é proibida.", "É proibido entrada.", "Água é bom.", "A água é bom."], a: 3, e: "O correto seria 'A água é boa', pois o artigo 'A' força a concordância." },
    { id: 19, s: 'p', p: 2, q: "Qual o feminino de 'Poeta'?", o: ["Poetiza", "Poetisa", "Poeta", "Poetina"], a: 1, e: "O feminino de poeta é poetisa (com S)." },
    { id: 20, s: 'p', p: 2, q: "Escolha a opção que completa corretamente a lacuna: 'Ele não veio _____ estava chovendo'.", o: ["por que", "porquê", "porque", "por quê"], a: 2, e: "Usa-se 'porque' junto e sem acento como conjunção explicativa." },
 
     // === ELITE: PORTUGUÊS (Sintaxe e Pontuação) ===
    { id: 26, s: 'p', p: 2, q: "No trecho 'Compete ao Operador, conforme o Regimento, a inserção dos caracteres', as vírgulas isolam:", o: ["Um adjunto adverbial deslocado", "Um aposto explicativo", "Uma oração subordinada adjetiva", "Um vocativo"], a: 0, e: "A expressão 'conforme o Regimento' é um adjunto adverbial de conformidade deslocado." },
    { id: 27, s: 'p', p: 2, q: "Assinale a alternativa em que a partícula 'SE' exerce função de índice de indeterminação do sujeito:", o: ["Consertou-se o Switcher.", "Aluga-se esta sala.", "Precisa-se de técnicos qualificados.", "O operador cortou-se no rack."], a: 2, e: "Com verbos transitivos indiretos (precisar de), o 'SE' indetermina o sujeito." },
    { id: 28, s: 'p', p: 2, q: "Qual a figura de linguagem presente em: 'A TV Senado é o olho do cidadão no Congresso'?", o: ["Metonímia", "Hipérbole", "Metáfora", "Eufemismo"], a: 2, e: "Comparação implícita sem o conectivo 'como'." },
    {id: 1101, s: 'p', p: 2,
        q: "No período: 'O operador inseriu os caracteres, **entretanto** o sinal de vídeo apresentou instabilidade', a conjunção em destaque estabelece relação de:",
        o: ["Conclusão", "Adversidade", "Explicação", "Adição"],
        a: 1,
        e: "<b>O Pilar da Adversidade:</b> Imagine um trilho de trem. A ideia A (inseriu caracteres) vai para um lado. O 'entretanto' é o desvio que joga o sentido para o lado OPOSTO (erro no sinal). <br><b>Dica de Ouro:</b> Substitua mentalmente por 'MAS'. Se couber o 'MAS', a resposta é Adversidade."},
    { id: 1102, s: 'p', p: 2,
        q: "Assinale a alternativa em que a regência do verbo ASSISTIR está em conformidade com a norma culta, no sentido de presenciar:",
        o: ["O técnico assistiu o tutorial ontem.", "Allan assistiu ao debate dos vereadores.", "Todos assistiram o filme na TV Senado.", "Assistimos uma palestra sobre IA."],
        a: 1,
        e: "<b>Regra do V-T-I:</b> No sentido de VER/PRESENCIAR, o verbo assistir é 'exigente': ele obriga o uso da preposição 'A'. <br><b>Exemplo Prático:</b> Quem assiste (vê), assiste A alguma coisa. Por isso: assistiu AO (A + O) debate." },
    {id: 1103, s: 'p', p: 2,
        q: "Na frase 'Faz três anos que a sede foi inaugurada', o uso do verbo 'Fazer' no singular justifica-se porque:",
        o: ["O sujeito é simples.", "É um verbo impessoal indicando tempo decorrido.", "Concorda com o objeto direto.", "O sujeito é oculto."],
        a: 1,
        e: "<b>O Verbo Solitário:</b> Verbos que indicam tempo (como fazer e haver) não têm 'dono' (sujeito). <br><b>Analogia:</b> O tempo não tem plural. Você nunca diz 'fazem 3 anos', assim como não diz 'choveram canivetes' (em sentido literal). Fica sempre no singular, como se estivesse 'congelado'." },
    {id: 1104, s: 'p', p: 2,
        q: "Escolha a opção onde o uso da crase é OBRIGATÓRIO:",
        o: ["O diretor entregou o relatório a secretária.", "Fui a Goiânia conhecer a Câmara.", "Allan começou a estudar cedo.", "Entreguei o manual a ele."],
        a: 0,
        e: "<b>O Teste do 'AO':</b> A crase é o casamento do 'A' (preposição) com o 'A' (artigo). <br><b>Dica:</b> Troque a palavra feminina por uma masculina. Se 'secretária' virar 'secretário', o 'A' vira 'AO'. <br><b>Resultado:</b> 'Entregou o relatório AO secretário'. Se deu AO, tem crase no À!" },
    {id: 1105, s: 'p', p: 2,
        q: "O termo 'conquanto', recorrente em textos legislativos, possui valor de:",
        o: ["Causa", "Consequência", "Concessão", "Condição"],
        a: 2,
        e: "<b>O Pilar da Concessão:</b> Concessão é uma 'permissão contrária'. É como se você dissesse: 'Eu deixo essa ideia passar, mesmo que ela atrapalhe'. <br><b>Exemplo:</b> Conquanto (embora) estivesse chovendo, Allan foi trabalhar. A chuva tentou impedir, mas ele foi." },
 // === ELITE: PORTUGUÊS (Sintaxe, Regência e Pontuação Avançada) ===
    { id: 31, s: 'p', p: 2, 
        q: "No que se refere à concordância verbal e à regência, assinale a alternativa que obedece rigorosamente à norma culta da língua portuguesa:", 
        o: ["Fazem dez anos que a Câmara de Goiânia mudou sua sede administrativa.", "Os técnicos de vídeo assistiram o novo tutorial sobre sinais SDI.", "Haviam muitos vereadores presentes na sessão solene de ontem.", "Devem-se buscar soluções urgentes para os problemas de sinal."], 
        a: 3, 
        e: "Na voz passiva sintética, o verbo deve concordar com o sujeito (soluções). 'Fazer' indicando tempo e 'Haver' no sentido de existir são impessoais (ficam no singular)."  } ,
    { id: 32, s: 'p', p: 2, 
        q: "Assinale a alternativa em que o sinal indicativo de crase foi empregado CORRETAMENTE:", 
        o: ["O Operador de Caracteres enviou as tarjas à uma servidora concursada.", "O acesso à rede externa da Câmara será liberado a partir das oito horas.", "A equipe técnica referiu-se àquele equipamento que apresentou defeito.", "As transmissões ao vivo ocorrem de segunda à sexta, sem interrupções."], 
        a: 2, 
        e: "A crase é obrigatória na junção da preposição 'a' com o pronome demonstrativo 'aquele'. Não há crase antes de artigo indefinido (uma), verbos (partir) ou entre dias da semana sem artigo (de... a)."},
    { id: 33, s: 'p', p: 2, 
        q: "Na frase 'A execução do protocolo de Genlock, conquanto seja complexa, garante a estabilidade do vídeo', a conjunção destacada estabelece uma relação de:", 
        o: ["Conclusão", "Explicação", "Concessão", "Adição"], 
        a: 2, 
        e: "'Conquanto' é uma conjunção concessiva, introduzindo uma ideia que se opõe à principal sem anulá-la, semelhante ao 'embora'."  },
// === ELITE: PORTUGUÊS (Continuação) ===
    {  id: 34, s: 'p', p: 2, 
        q: "Quanto à sintaxe de concordância e pontuação, assinale a alternativa que apresenta a redação inteiramente correta de acordo com a norma padrão:", 
        o: ["A maioria dos servidores da TV, optaram por realizar o treinamento em regime de teletrabalho.", "Deveriam haver mais câmeras operando em 4K no plenário da Câmara Municipal.", "Informou-se aos candidatos, durante a prova, que não seriam permitidos aparelhos eletrônicos.", "Tratam-se de questões complexas, cujas as respostas exigem profundo conhecimento técnico."], 
        a: 2, 
        e: "A alternativa 'C' apresenta a voz passiva sintética correta. Na 'A', não se separa sujeito de verbo por vírgula. Na 'B', 'haver' (existir) é impessoal. Na 'D', 'tratar-se de' é impessoal e não aceita artigo após o pronome relativo 'cujas'."    },
    {  id: 35, s: 'p', p: 2, 
        q: "Assinale a alternativa que preenche corretamente as lacunas: 'O técnico referiu-se ___ novas normas de sinal, visando ___ melhoria da transmissão, embora estivesse atento ___ exigências da diretoria.'", 
        o: ["as - a - as", "às - à - às", "às - a - às", "as - à - as"], 
        a: 1, 
        e: "Regência nominal e verbal: quem se refere, refere-se A (as normas = às); visando (no sentido de objetivar) A (a melhoria = à); atento A (as exigências = às)."    },
// === ELITE: PORTUGUÊS (Pontuação e Semântica) ===
    { id: 36, s: 'p', p: 2, 
        q: "Assinale a alternativa em que a alteração da pontuação altera o sentido original da frase:", 
        o: ["Allan, o técnico, enviou o sinal. / Allan - o técnico - enviou o sinal.", "Os vereadores que votaram favoravelmente saíram. / Os vereadores, que votaram favoravelmente, saíram.", "O sinal caiu; a transmissão parou. / O sinal caiu. A transmissão parou.", "Não, o switcher não quebrou. / Não: o switcher não quebrou."], 
        a: 1, 
        e: "Sem vírgulas, a oração é restritiva (apenas alguns votaram). Com vírgulas, é explicativa (todos votaram favoravelmente)."     },
 // === ELITE: PORTUGUÊS (CONCORDÂNCIA, REGÊNCIA E PONTUAÇÃO) ===
    {  id: 37, s: 'p', p: 2, 
        q: "Assinale a opção que apresenta erro de concordância verbal, conforme a norma culta:", 
        o: ["Mais de um técnico se cumprimentaram após a transmissão.", "Cerca de cem servidores participaram da sessão na Câmara.", "Fomos nós que instalamos o novo servidor de caracteres.", "Grande parte dos parlamentares votou favoravelmente ao projeto."], 
        a: 0, 
        e: "Com a expressão 'mais de um', o verbo fica no singular, a menos que indique reciprocidade ou o numeral seja repetido."     },
    { id: 38, s: 'p', p: 2, 
        q: "No que se refere à regência nominal, qual frase está INCORRETA?", 
        o: ["O diretor estava ansioso por ver os resultados da transmissão.", "Este equipamento de vídeo é incompatível com o sinal analógico.", "O técnico é muito capacitado de resolver problemas de rede.", "Estamos todos imunes a críticas infundadas sobre o trabalho técnico."], 
        a: 2, 
        e: "Quem é capacitado, é capacitado PARA algo ou EM algo, e não 'de' algo."  },
    {  id: 39, s: 'p', p: 2, 
        q: "Assinale a frase onde a vírgula é usada para separar um adjunto adverbial deslocado:", 
        o: ["Allan, verifique o sinal do switcher agora.", "Durante a madrugada, os servidores de rede foram reiniciados.", "O sinal caiu, mas a gravação continuou ativa.", "Compramos câmeras, lentes, tripés e cabos SDI."], 
        a: 1, 
        e: "'Durante a madrugada' é uma locução adverbial de tempo deslocada para o início da frase."  },
 // === ELITE: PORTUGUÊS (SINTAXE E PONTUAÇÃO) ===
    { id: 40, s: 'p', p: 2, 
        q: "Assinale a opção que apresenta a pontuação e a concordância corretas, de acordo com a norma-padrão da língua portuguesa:", 
        o: ["Ocorreram, durante a transmissão matutina, diversos problemas técnicos que impediram o sinal de chegar à Brasília.", "Haviam, no plenário da Câmara, cerca de trinta vereadores aguardando o início da sessão solene.", "Tratam-se de mudanças urgentes, as quais os técnicos devem se adaptar imediatamente para garantir o fluxo.", "Informou-se aos operadores de caracteres que, a partir de amanhã, as escalas de plantão serão alteradas."], 
        a: 3, 
        e: "A alternativa D está correta. Na A, não se usa crase antes de Brasília (cidade que não admite artigo). Na B, o verbo 'haver' (existir) é impessoal. Na C, o verbo 'tratar-se de' é impessoal." },
    {  id: 41, s: 'p', p: 2, 
        q: "No trecho 'A implantação do sistema digital, conquanto necessária, exigiu alto investimento', a conjunção destacada pode ser substituída, sem alteração de sentido, por:", 
        o: ["Portanto", "Todavia", "Embora", "Visto que"], 
        a: 2, 
        e: "'Conquanto' é uma conjunção concessiva, assim como 'embora'." },
// === ELITE: FIGURAS DE LINGUAGEM (s: 'p') ===
    { id: 901, s: 'p', p: 2, 
        q: "Na frase 'A Câmara Municipal de Goiânia ouviu o clamor das ruas', qual figura de linguagem foi utilizada para indicar a opinião da população?", 
        o: ["Hipérbole.", "Metonímia.", "Eufemismo.", "Pleonasmo."], 
        a: 1, 
        e: "Metonímia: substitui-se o continente (ruas) pelo conteúdo (pessoas/população)." },
    { id: 902, s: 'p', p: 2, 
        q: "Identifique a alternativa que apresenta uma Hipérbole:", 
        o: ["O sinal de vídeo está um pouco instável hoje.", "Allan já explicou o protocolo de Genlock um bilhão de vezes.", "A diretoria solicitou novos equipamentos de edição.", "O técnico é rápido como um raio."], 
        a: 1, 
        e: "Dizer que explicou 'um bilhão de vezes' é um exagero proposital para dar ênfase (Hipérbole)."},
    {  id: 903, s: 'p', p: 2, 
        q: "Quando um parlamentar utiliza a expressão 'Ele partiu para o andar de cima' para se referir ao falecimento de um colega, ele está utilizando um(a):", 
        o: ["Ironia.", "Metáfora.", "Eufemismo.", "Antítese."], 
        a: 2, 
        e: "Eufemismo é a suavização de uma ideia penosa ou desagradável." },
        // === ELITE: REVISÃO DE FIGURAS E VÍCIOS (s: 'p') ===
    { 
        id: 2301, s: 'p', p: 2, 
        q: "No trecho 'Aquela câmera é um olho atento sobre o plenário', temos qual figura de linguagem?", 
        o: ["Metonímia.", "Metáfora.", "Hipérbole.", "Antítese."], 
        a: 1, 
        e: "Metáfora: afirma-se que a câmera É um olho, criando uma comparação implícita." 
    },
    { id: 2302, s: 'p', p: 2, 
        q: "Qual alternativa apresenta um vício de linguagem que deve ser evitado em documentos oficiais da Câmara?", 
        o: ["O projeto foi lido em plenário.", "Houve um consenso geral entre os parlamentares.", "O técnico revisou o áudio.", "A sessão solene iniciou no horário."], 
        a: 1, 
        e: "Pleonasmo: Consenso já significa a concordância de todos (geral), portanto 'consenso geral' é redundante." },
// === BLOCO ELITE: PORTUGUÊS (SINTAXE E FIGURAS) ===
    { id: 3001, s: 'p', p: 2, 
        q: "Na frase 'O técnico de vídeo entregou os cabos ao coordenador', os termos destacados exercem, respectivamente, a função de:", 
        o: ["Objeto Indireto e Sujeito.", "Objeto Direto e Objeto Indireto.", "Complemento Nominal e Adjunto.", "Sujeito e Predicativo."], 
        a: 1, 
        e: "O verbo 'entregar' é VTDI (quem entrega, entrega ALGO a ALGUÉM). 'Os cabos' (OD) e 'ao coordenador' (OI)." },
    { id: 3002, s: 'p', p: 2, 
        q: "Qual figura de linguagem está presente em: 'A TV Câmara é um farol que ilumina as decisões políticas de Goiânia'?", 
        o: ["Metonímia.", "Metáfora.", "Pleonasmo.", "Cacofonia."], 
        a: 1, 
        e: "Metáfora: comparação implícita entre a TV e um farol sem o conectivo 'como'."},
    { id: 3003, s: 'p', p: 2, 
        q: "Identifique o vício de linguagem na frase: 'Eu vi ela entrando na sala de edição agora pouco'.", 
        o: ["Ambiguidade.", "Cacofonia.", "Eco.", "Arcaísmo."], 
        a: 1, 
        e: "Cacofonia: 'Vi ela' soa como 'viela'. O correto seria 'A vi'." },
// === PORTUGUÊS (ORAÇÕES COORDENADAS E SUBORDINADAS) ===
{ 
  id: 7001, s: 'p', p: 2, 
  q: "Na frase: 'O edital foi publicado, **todavia** poucos candidatos iniciaram os estudos', a oração destacada é:", 
  correta: "Coordenada Sindética Adversativa.", 
  distracoes: [
    "Coordenada Sindética Conclusiva.",
    "Subordinada Adverbial Concessiva.",
    "Coordenada Sindética Explicativa.",
    "Subordinada Adjetiva Restritiva.",
    "Coordenada Assindética."
  ],
  e: "Todavia, porém, contudo, mas = Adversidade (Oposição)." 
},
{ 
  id: 7002, s: 'p', p: 2, 
  q: "Assinale a alternativa que contém uma Oração Subordinada Adjetiva Explicativa:", 
  correta: "O técnico de vídeo, que é muito dedicado, revisou todo o cabeamento.", 
  distracoes: [
    "O técnico de vídeo que é dedicado revisou o cabeamento.",
    "Allan revisou o cabeamento porque é muito dedicado.",
    "Embora fosse dedicado, o técnico não revisou o cabeamento.",
    "O técnico revisou o cabeamento e foi para casa descansar.",
    "Quando o técnico revisou o cabeamento, o sinal voltou."
  ],
  e: "A explicativa vem SEMPRE entre vírgulas. Sem vírgula, ela seria restritiva." 
},
{ 
  id: 7003, s: 'p', p: 2, 
  q: "Em 'Estudei tanto **que** adormeci sobre os livros', a conjunção 'que' introduz uma oração:", 
  correta: "Subordinada Adverbial Consecutiva.", 
  distracoes: [
    "Subordinada Adverbial Causal.",
    "Subordinada Adverbial Concessiva.",
    "Subordinada Adverbial Comparativa.",
    "Coordenada Sindética Aditiva.",
    "Subordinada Adverbial Condicional."
  ],
  e: "Indica uma consequência do fato anterior (estudar muito)." 
},
// === PORTUGUÊS: ACENTUAÇÃO E ORTOGRAFIA (BLOCAGEM ALLAN SILVA) ===
    { 
        id: 1201, s: 'p', p: 2, tema: "Acentuação Gráfica",
        q: "Assinale a alternativa em que TODAS as palavras estão corretamente acentuadas seguindo a regra das proparoxítonas:",
        o: ["Índice, técnico, automático.", "Câmera, carater, ágil.", "Sinal, rúbrica, público.", "Vídeo, áudio, régua."], 
        a: 0, 
        e: "<b>Regra Absoluta:</b> Todas as proparoxítonas (tônica na antepenúltima) são acentuadas. Rúbrica é paroxítona sem acento. Vídeo e Áudio são paroxítonas terminadas em ditongo." 
    },
    { 
        id: 1202, s: 'p', p: 2, tema: "Novo Acordo Ortográfico",
        q: "Pelo Novo Acordo Ortográfico, qual das palavras abaixo perdeu o acento gráfico corretamente?",
        o: ["Saúde", "Idéia", "Saída", "Péssimo"], 
        a: 1, 
        e: "<b>Ditongos Abertos:</b> Os ditongos 'ei' e 'oi' em palavras PAROXÍTONAS (como Ideia, Assembleia, Jiboia) perderam o acento. Nas oxítonas (Herói, Papéis), o acento permanece." 
    },
    { 
        id: 1203, s: 'p', p: 2, tema: "Acentuação de Hiatos",
        q: "Assinale a alternativa que apresenta erro de acentuação na regra do hiato:",
        o: ["País", "Conteúdo", "Juíz", "Baú"], 
        a: 2, 
        e: "<b>Regra do I/U:</b> O 'i' tônico de hiato não leva acento se for seguido de 'z' na mesma sílaba (Ju-iz). Já 'Ju-í-zes' leva acento porque o 'i' fica sozinho." 
    },
    { 
        id: 1204, s: 'p', p: 2, tema: "Ortografia (G ou J)",
        q: "Qual opção preenche corretamente as lacunas: 'O técnico via__ou para a __erência da TV para fazer a massa__em no cabo.'",
        o: ["j - g - g", "g - j - j", "j - j - g", "g - g - j"], 
        a: 0, 
        e: "Viajou (verbo viajar = J). Gerência (substantivo = G). Massagem (terminações em -agem, -igem, -ugem = G)." 
    },
    { 
        id: 1205, s: 'p', p: 2, tema: "Ortografia (S, Z, X ou CH)",
        q: "Identifique a palavra escrita de forma INCORRETA quanto à grafia oficial:",
        o: ["Enxame", "Chicote", "Analizar", "Atraso"], 
        a: 2, 
        e: "<b>S ou Z:</b> Analisar escreve-se com S, pois deriva de 'análise'. Atraso e Enxame estão corretos." 
    },
    { 
        id: 1206, s: 'p', p: 2, tema: "Acento Diferencial",
        q: "Assinale a frase que respeita as regras atuais de acento diferencial:",
        o: ["Eles tem muitos equipamentos.", "Allan vai pôr o switcher no rack.", "Ele pára o carro na vaga.", "O vôo foi cancelado."], 
        a: 1, 
        e: "<b>Pôr vs Por:</b> O acento em 'pôr' (verbo) continua para diferenciar da preposição 'por'. O acento em 'têm' (plural) também existe, mas na opção A faltou o acento." 
    },
    { 
        id: 1207, s: 'p', p: 2, tema: "Acentuação Gráfica",
        q: "As palavras 'automóvel', 'caráter' e 'fácil' são acentuadas porque:",
        o: ["São oxítonas terminadas em l e r.", "São paroxítonas terminadas em l e r.", "São proparoxítonas.", "São hiatos tônicos."], 
        a: 1, 
        e: "Paroxítonas terminadas em R, L, N, X e PS (mnemônico ROUXINOL) recebem acento gráfico." 
    },
    { 
        id: 1208, s: 'p', p: 2, tema: "Novo Acordo Ortográfico",
        q: "Em qual dessas palavras o hífen foi utilizado CORRETAMENTE após o Novo Acordo?",
        o: ["Micro-ondas", "Anti inflamatório", "Auto-escola", "Autoimune."], 
        a: 0, 
        e: "<b>Regra dos Opostos:</b> Letras iguais se separam com hífen (Micro-ondas, Anti-inflamatório). Letras diferentes se unem (Autoescola)." 
    },
    { 
        id: 1209, s: 'p', p: 2, tema: "Oxítonas",
        q: "Assinale a alternativa que contém apenas oxítonas que devem ser acentuadas:",
        o: ["Caju, urubu, tatu.", "Parabéns, jacaré, avô.", "Item, hifens, mesa.", "Papel, sinal, feliz."], 
        a: 1, 
        e: "Acentuam-se as oxítonas terminadas em A, E, O (seguidas ou não de S), EM e ENS." 
    },
    { 
        id: 1210, s: 'p', p: 2, tema: "Ortografia (Uso do Porquê)",
        q: "Escolha a grafia correta para: 'Não entendo o _____ do sinal cair, _____ estudei muito.'",
        o: ["porque - por que", "porquê - porque", "por que - porquê", "por quê - porque"], 
        a: 1, 
        e: "<b>Porquê:</b> Substantivado (com artigo 'o'). <b>Porque:</b> Conjunção explicativa/causal." 
    },
    // --- LÍNGUA PORTUGUESA ---
    { 
        id: 2001, s: 'p', p: 2, tema: "Acentuação Gráfica",
        q: "Assinale a alternativa em que todas as palavras seguem a mesma regra de acentuação de 'universitário':",
        o: ["Baú, Piauí, Herói, Saúde", "Relatório, Cenário, Distância, Próprio", "Café, Jiló, Alguém, Armazém", "Lâmpada, Câmera, Técnico, Árvore", "Vírus, Álbuns, Caráter, Fácil"], 
        a: 1, 
        e: "<b>Regra:</b> 'Universitário' é uma paroxítona terminada em ditongo crescente. A alternativa B traz apenas palavras que seguem rigorosamente esta mesma terminação." 
    },
    { 
        id: 2002, s: 'p', p: 2, tema: "Conectivos",
        q: "Em 'Não só estudou, como também trabalhou', a estrutura estabelece ideia de:",
        o: ["Oposição ou contraste", "Adição ou soma", "Causa e efeito", "Condição necessária", "Finalidade objetiva"], 
        a: 1, 
        e: "<b>Explicação:</b> As locuções correlativas 'não só... mas também/como também' possuem valor <b>ADITIVO</b>, somando duas ações realizadas pelo sujeito." 
    },
    { 
        id: 2003, s: 'p', p: 2, tema: "Conectivos",
        q: "\"Conquanto fizesse sol, não saiu.\" A conjunção sublinhada é classificada como:",
        o: ["Causal", "Concessiva", "Condicional", "Conformativa", "Consecutiva"], 
        a: 1, 
        e: "<b>Explicação:</b> 'Conquanto' é uma conjunção <b>CONCESSIVA</b> (sinônimo de embora). Indica um fato contrário que não impede a ação principal." 
    },
    { 
        id: 2004, s: 'p', p: 2, tema: "Sintaxe",
        q: "Identifique a frase que apresenta uma Conjunção Integrante:",
        o: ["O livro que li é excelente.", "Ele disse que viria hoje.", "Corra, que o trem já vem!", "Estudou tanto que passou.", "Quero o carro que estava ali."], 
        a: 1, 
        e: "<b>Macete:</b> A conjunção integrante introduz uma oração que pode ser substituída por 'ISSO'. Ele disse <b>ISSO</b> (que viria hoje)." 
    },
    { 
        id: 2005, s: 'p', p: 2, tema: "Conectivos",
        q: "\"À medida que o tempo passa, aprendemos.\" A locução conjuntiva expressa:",
        o: ["Tempo exato", "Proporção", "Causa", "Finalidade", "Consequência"], 
        a: 1, 
        e: "<b>Explicação:</b> 'À medida que' e 'À proporção que' indicam fatos que se desenvolvem <b>simultaneamente</b> à oração principal." 
    },
    { 
        id: 2006, s: 'p', p: 2, tema: "Conectivos",
        q: "\"Estude, pois a prova se aproxima.\" A conjunção 'pois' (antes do verbo) é:",
        o: ["Explicativa", "Conclusiva", "Adversativa", "Aditiva", "Alternativa"], 
        a: 0, 
        e: "<b>Explicação:</b> O 'pois' <b>antes</b> do verbo tem valor explicativo. Se estivesse <b>depois</b> do verbo, teria valor conclusivo." 
    },
    { 
        id: 2007, s: 'p', p: 2, tema: "Pontuação",
        q: "O uso da vírgula antes de conjunções adversativas (mas, porém, contudo) é:",
        o: ["Facultativo em frases curtas", "Obrigatório para separar orações", "Proibido pelo novo acordo", "Necessário apenas no final do parágrafo", "Dispensável se houver conjunção 'e'"], 
        a: 1, 
        e: "<b>Regra:</b> A vírgula é <b>OBRIGATÓRIA</b> antes das conjunções coordenadas adversativas, exceto na conjunção 'mas' quando liga termos da mesma função." 
    },
    { 
        id: 2008, s: 'p', p: 2, tema: "Conectivos",
        q: "\"Vim, vi e venci.\" As vírgulas indicam omissão de conjunções:",
        o: ["Alternativas", "Aditivas", "Adversativas", "Explicativas", "Conclusivas"], 
        a: 1, 
        e: "<b>Explicação:</b> Trata-se de orações coordenadas assindéticas (sem conectivo) que possuem valor de <b>SOMA</b>." 
    },
    { 
        id: 2009, s: 'p', p: 2, tema: "Conectivos",
        q: "\"Caso chova, o evento será cancelado.\" A conjunção 'Caso' é:",
        o: ["Causal", "Condicional", "Concessiva", "Temporal", "Final"], 
        a: 1, 
        e: "<b>Explicação:</b> 'Caso' estabelece uma <b>CONDIÇÃO</b> necessária para que ocorra o cancelamento do evento." 
    },
    { 
        id: 2010, s: 'p', p: 2, tema: "Acentuação Gráfica",
        q: "Qual alternativa apresenta erro de acentuação gráfica?",
        o: ["Idéia", "Herói", "Baú", "Piauí", "Chapéu"], 
        a: 0, 
        e: "<b>Novo Acordo:</b> Os ditongos abertos <b>'EI'</b> e <b>'OI'</b> perderam o acento em palavras PAROXÍTONAS (Idéia -> Ideia)." 
    },







    //final do codigo de portugues.







    

    // === RACIOCÍNIO LÓGICO (s: 'l') - Peso 1.0 ===

    { id: 51, s: 'l', p: 1, q: "Se a proposição P é verdadeira, a sua negação (~P) será obrigatoriamente:", o: ["Veradeira", "Falsa", "Inconclusiva", "Nula"], a: 1, e: "A negação inverte o valor lógico: se P é V, ~P é F." },
    { id: 52, s: 'l', p: 1, q: "O conectivo lógico '^' (conjunção) equivale a qual palavra na linguagem comum?", o: ["Ou", "Então", "Se e somente se", "E"], a: 3, e: "O símbolo '^' representa a conjunção 'E'." },
    { id: 53, s: 'l', p: 1, q: "Qual a negação lógica da frase 'Todo operador é atento'?", o: ["Nenhum operador é atento.", "Pelo menos um operador não é atento.", "Todos os atentos são operadores.", "Algum operador é atento."], a: 1, e: "Para negar o 'Todo', basta que 'Pelo menos um não seja'." },
    { id: 54, s: 'l', p: 1, q: "Uma Tautologia é uma proposição composta que:", o: ["É sempre falsa.", "É sempre verdadeira.", "Depende dos valores das partes.", "É uma pergunta sem resposta."], a: 1, e: "Tautologia é uma verdade absoluta na lógica." },
    { id: 55, s: 'l', p: 1, q: "Na tabela verdade da condicional (P -> Q), o único caso FALSO é quando:", o: ["P é V e Q é V.", "P é F e Q é F.", "P é V e Q é F.", "P é F e Q é V."], a: 2, e: "A condicional só é falsa no caso de Antecedente V e Consequente F." },
    { id: 56, s: 'l', p: 1, q: "Negação de 'Verdadeiro' é:", o: ["Certo", "Falso", "Talvez", "Dúvida"], a: 1, e: "O oposto lógico de V é F." },
    { id: 57, s: 'l', p: 1, q: "O conectivo 'v' representa qual operação?", o: ["OU", "E", "NÃO", "ENTÃO"], a: 0, e: "O símbolo 'v' representa a disjunção 'OU'." },
    { id: 58, s: 'l', p: 1, q: "Uma Contradição é sempre:", o: ["Verdadeira", "Falsa", "Mista", "Nula"], a: 1, e: "Contradição é o oposto da tautologia." },
    { id: 59, s: 'l', p: 1, q: "P <-> Q é verdadeiro quando:", o: ["P e Q são iguais", "P e Q são diferentes", "Sempre", "Nunca"], a: 0, e: "Bicondicional exige valores iguais para ser verdade." },
    { id: 60, s: 'l', p: 1, q: "Se 1=1 e 2=3, o conectivo 'E' resulta em:", o: ["V", "F", "Erro", "Indeterminado"], a: 1, e: "No 'E', tudo deve ser verdade. Se 2=3 é falso, o resultado é F." },
    { id: 61, s: 'l', p: 1, q: "Qual a negação de 'Nenhum brasileiro é médico'?", o: ["Todo brasileiro é médico", "Algum brasileiro é médico", "Todos os médicos são brasileiros", "Ninguém é médico"], a: 1, e: "A negação de 'Nenhum' é 'Pelo menos um'." },
    { id: 62, s: 'l', p: 1, q: "Na lógica, o que é uma 'Contingência'?", o: ["Algo que é sempre verdadeiro", "Algo que é sempre falso", "Algo que pode ser verdadeiro ou falso dependendo dos valores", "Uma mentira"], a: 2, e: "Diferente da Tautologia e Contradição, a Contingência varia." },
       // === ELITE: RACIOCÍNIO LÓGICO (Equivalências e Argumentos) ===
    { id: 68, s: 'l', p: 1, q: "A proposição 'Se o sinal é SDI, então a imagem é digital' é equivalente a:", o: ["Se a imagem é digital, então o sinal é SDI", "O sinal não é SDI ou a imagem é digital", "Se o sinal não é SDI, então a imagem não é digital", "O sinal é SDI e a imagem não é digital"], a: 1, e: "Equivalência da condicional (P->Q) pela regra da 'Neymar': nega a primeira (P), troca por OU (v) e mantém a segunda (Q)." },
    { id: 69, s: 'l', p: 1, q: "Qual a negação de 'Se eu estudar, então passarei no concurso'?", o: ["Se eu não estudar, então não passarei", "Eu estudo e não passo no concurso", "Eu não estudo e passo no concurso", "Eu estudo ou não passo no concurso"], a: 1, e: "Negação da condicional: mantém a primeira E nega a segunda (P ^ ~Q)." },
// === ELITE: RACIOCÍNIO LÓGICO (Equivalências e Estruturas) ===
    { id: 70, s: 'l', p: 1, 
        q: "Considere a seguinte proposição condicional: 'Se o backup falhar, então os dados serão perdidos'. De acordo com a lógica sentencial, uma proposição equivalente é:", 
        o: ["Se os dados forem perdidos, então o backup falhou.", "O backup não falha ou os dados são perdidos.", "O backup falha e os dados não são perdidos.", "Se o backup não falhar, então os dados não serão perdidos."], 
        a: 1, 
        e: "Equivalência lógica (P -> Q) pode ser feita pela regra da disjunção: ~P v Q (Nega a primeira OU mantém a segunda)."  },
    {  id: 71, s: 'l', p: 1, 
        q: "Qual é a negação lógica da proposição composta: 'Allan é Operador de Caracteres e estuda Inteligência Artificial'?", 
        o: ["Allan não é Operador de Caracteres e não estuda Inteligência Artificial.", "Se Allan não é Operador de Caracteres, então ele não estuda IA.", "Allan não é Operador de Caracteres ou não estuda Inteligência Artificial.", "Allan estuda IA mas não é Operador de Caracteres."], 
        a: 2, 
        e: "Lei de De Morgan para negação do 'E' (^): Nega-se ambas as proposições e troca-se o conectivo 'E' pelo 'OU' (v)."  },
    {  id: 119, s: 'g', p: 2, 
        q: "Sobre a Lei Orgânica de Goiânia, em caso de impedimento simultâneo do Prefeito e do Vice-Prefeito, quem deverá assumir o cargo interinamente?", 
        o: ["O Secretário de Governo.", "O Presidente da Câmara Municipal.", "O Juiz Diretor do Foro da Comarca de Goiânia.", "O Vereador com o maior número de votos na última eleição."], 
        a: 1, 
        e: "A linha de sucessão municipal prevê que o Presidente da Câmara assume a prefeitura na ausência do Prefeito e do Vice." },
// === ELITE: RACIOCÍNIO LÓGICO (Argumentação e Diagramas) ===
    { id: 72, s: 'l', p: 1, 
        q: "Considere a afirmação: 'Se o servidor é concursado e o sinal está ativo, então a transmissão ocorre'. Uma negação lógica para essa afirmação é:", 
        o: ["Se o servidor não é concursado ou o sinal não está ativo, então a transmissão não ocorre.", "O servidor é concursado, o sinal está ativo e a transmissão não ocorre.", "O servidor não é concursado e o sinal não está ativo, mas a transmissão ocorre.", "Se a transmissão não ocorre, então o servidor não é concursado ou o sinal está inativo."], 
        a: 1, 
        e: "Negação da condicional (P -> Q): mantém-se o antecedente (P) e nega-se o consequente (~Q). Como o antecedente é uma conjunção (P ^ R), ele deve ser mantido integralmente."  },
// === ELITE: RACIOCÍNIO LÓGICO (Argumentação e Diagramas) ===
    { id: 73, s: 'l', p: 1, 
        q: "Considere as premissas: 'Todo técnico é organizado' e 'Alguns técnicos são concursados'. Pode-se concluir logicamente que:", 
        o: ["Todo organizado é concursado.", "Algum organizado é concursado.", "Nenhum concursado é organizado.", "Todos os concursados são técnicos."], 
        a: 1, 
        e: "Se alguns técnicos são concursados e TODOS os técnicos são organizados, obrigatoriamente esses que são concursados também são organizados." },
// === ELITE: RACIOCÍNIO LÓGICO (TABELAS VERDADE E NEGAÇÕES) ===
    { id: 74, s: 'l', p: 1, 
        q: "A negação da proposição 'Se o técnico é bom, então o sinal não cai' é equivalente a:", 
        o: ["O técnico é bom e o sinal cai.", "Se o técnico não é bom, então o sinal cai.", "O técnico não é bom ou o sinal não cai.", "Se o sinal cai, então o técnico é bom."], 
        a: 0, 
        e: "A negação de P -> Q é P ^ ~Q. Mantém a primeira (técnico bom) e nega a segunda (sinal cai)." },
    { id: 75, s: 'l', p: 1, 
        q: "Dadas as proposições P (Verdadeira) e Q (Falsa), qual das operações abaixo resulta em VERDADE?", 
        o: ["P ^ Q", "P -> Q", "~P v Q", "P v Q"], 
        a: 3, 
        e: "Na disjunção (v), se ao menos uma for verdadeira, o resultado é verdadeiro." },
     { id: 123, s: 'g', p: 2, 
        q: "O 'Plano Diretor de Goiânia', elaborado na década de 30 por Attilio Corrêa Lima, previa uma cidade para quantos habitantes?", 
        o: ["15 mil", "50 mil", "100 mil", "500 mil"], 
        a: 1, 
        e: "O projeto original de Attilio previa uma capital para 50.000 habitantes." },
// === BLOCO ELITE: RACIOCÍNIO LÓGICO ===
    { id: 3011, s: 'l', p: 1, 
        q: "Considere a proposição composta: 'Se Allan configura o switcher, então a transmissão é estável'. A negação lógica é:", 
        o: ["Allan configura o switcher e a transmissão não é estável.", "Se a transmissão não é estável, Allan não configurou.", "Allan não configura o switcher ou a transmissão é estável.", "Se Allan não configura, a transmissão não é estável."], 
        a: 0, 
        e: "Negação da Condicional (P -> Q): Regra do MANÉ (MAntém a primeira E NEga a segunda)."  },
    { id: 3012, s: 'l', p: 1, 
        q: "A equivalência lógica de 'P -> Q' pela regra da contrapositiva é:", 
        o: ["Q -> P", "~P -> ~Q", "~Q -> ~P", "P ^ ~Q"], 
        a: 2, 
        e: "Contrapositiva: Inverte as ordens e nega as duas partes."  },
// === ELITE: RACIOCÍNIO LÓGICO E MATEMÁTICA (s: 'l') ===
    { id: 76, s: 'l', p: 1, 
        q: "Em uma urna há 5 cabos SDI azuis e 3 cabos SDI vermelhos. Se retirarmos 2 cabos sucessivamente, sem reposição, qual a probabilidade de ambos serem vermelhos?", 
        o: ["9/64", "3/28", "6/56", "1/8"], 
        a: 1, 
        e: "Probabilidade do 1º ser vermelho (3/8) vezes o 2º ser vermelho (2/7) = 6/56, que simplificado é 3/28." },
// === ELITE: RACIOCÍNIO LÓGICO (LÓGICA SENTENCIAL) ===
    { id: 77, s: 'l', p: 1, 
        q: "Uma proposição equivalente a 'Se o servidor é eficiente, então o cidadão é bem atendido' é:", 
        o: ["Se o cidadão é bem atendido, então o servidor é eficiente.", "O servidor não é eficiente ou o cidadão é bem atendido.", "O servidor é eficiente e o cidadão não é bem atendido.", "Se o servidor não for eficiente, o cidadão não será bem atendido."], 
        a: 1, 
        e: "Equivalência da condicional (P -> Q) pela regra: ~P v Q (Nega a primeira OU mantém a segunda)." },
    { id: 78, s: 'l', p: 1, 
        q: "Qual a negação lógica da afirmação: 'Todo técnico de vídeo é organizado'?", 
        o: ["Nenhum técnico de vídeo é organizado.", "Pelo menos um técnico de vídeo não é organizado.", "Todos os organizados são técnicos de vídeo.", "Alguns técnicos de vídeo são organizados."], 
        a: 1, 
        e: "A negação de 'Todo' é 'Pelo menos um não'." },
 // --- RACIOCÍNIO LÓGICO (DINÂMICO) ---
{ id: 501, s: 'l', p: 1, 
  q: "Considerando a tabela-verdade dos conectivos lógicos, a única alternativa que apresenta uma proposição FALSA é:", 
  correta: "Uma condicional (p → q) onde a primeira parte é Verdadeira e a segunda é Falsa.", 
  distracoes: [
    "Uma conjunção (p ^ q) onde ambas as partes são Verdadeiras.",
    "Uma disjunção (p v q) onde a primeira parte é Falsa e a segunda é Verdadeira.",
    "Uma bicondicional (p ↔ q) onde ambas as partes são Falsas.",
    "Uma disjunção exclusiva (p v q) onde os valores lógicos são diferentes.",
    "Uma condicional (p → q) onde a primeira parte é Falsa e a segunda é Verdadeira."
  ],
  e: "Regra da Vera Fischer: Na condicional (Se...então), V → F é a única combinação que resulta em Falso." },
{ id: 502, s: 'l', p: 1, 
  q: "A negação lógica da frase 'Se eu estudar, então passarei no concurso da Câmara' é:", 
  correta: "Eu estudo e não passo no concurso da Câmara.", 
  distracoes: [
    "Se eu não estudar, então não passarei no concurso.",
    "Eu não estudo ou passarei no concurso.",
    "Se eu passar no concurso, então estudei.",
    "Eu não estudo e não passo no concurso da Câmara.",
    "Não estudo e passo no concurso."
  ],
  e: "Regra do MANÉ (Mantém a primeira E Nega a segunda): p → q vira p ^ ~q." },
{ id: 503, s: 'l', p: 1, 
  q: "Qual das alternativas abaixo apresenta uma equivalência lógica para 'Se faz sol, então vou à praia'?", 
  correta: "Se não vou à praia, então não faz sol.", 
  distracoes: [
    "Se não faz sol, então não vou à praia.",
    "Se vou à praia, então faz sol.",
    "Faz sol e não vou à praia.",
    "Não faz sol e não vou à praia.",
    "Vou à praia e faz sol."
  ],
  e: "Equivalência da Condicional (Contrapositiva): Inverte as proposições e nega ambas." },
{ id: 504, s: 'l', p: 1, 
  q: "Na lógica sentencial, a proposição 'p ↔ q' (bicondicional) será verdadeira sempre que:", 
  correta: "Os valores lógicos de p e q forem iguais (ambos V ou ambos F).", 
  distracoes: [
    "Pelo menos uma das proposições for verdadeira.",
    "A primeira proposição for verdadeira e a segunda falsa.",
    "As duas proposições tiverem valores lógicos diferentes.",
    "Apenas a primeira proposição for falsa.",
    "Ambas as proposições forem falsas exclusivamente."
  ],
  e: "Bicondicional (Iguais dão Verdade): V↔V=V e F↔F=V." },
{ id: 505, s: 'l', p: 1, 
  q: "Dizer que 'Não é verdade que João é médico ou Maria é enfermeira' é logicamente equivalente a dizer que:", 
  correta: "João não é médico e Maria não é enfermeira.", 
  distracoes: [
    "João não é médico ou Maria não é enfermeira.",
    "João é médico e Maria não é enfermeira.",
    "Se João não é médico, então Maria não é enfermeira.",
    "João é médico ou Maria é enfermeira.",
    "João não é médico e Maria é enfermeira."
  ],
  e: "Leis de De Morgan: A negação do 'OU' vira 'E', negando as duas partes." },
  // === RACIOCÍNIO LÓGICO (ESTRUTURAS E TABELAS) ===
{ 
  id: 5001, s: 'l', p: 1, 
  q: "Qual a negação lógica da proposição composta: 'Se o sinal de vídeo cai, então o técnico reinicia o switcher'?", 
  correta: "O sinal de vídeo cai e o técnico não reinicia o switcher.", 
  distracoes: [
    "Se o sinal de vídeo não cai, então o técnico não reinicia o switcher.",
    "O sinal de vídeo não cai ou o técnico reinicia o switcher.",
    "Se o técnico reinicia o switcher, então o sinal de vídeo caiu.",
    "O sinal de vídeo não cai e o técnico não reinicia o switcher.",
    "Sempre que o sinal cai, o switcher é reiniciado automaticamente."
  ],
  e: "Negação da Condicional (MANÉ): Mantém a 1ª (p) E Nega a 2ª (~q)." 
},
{ 
  id: 5002, s: 'l', p: 1, 
  q: "Uma proposição logicamente equivalente a 'Ou Allan estuda IA, ou Allan trabalha na TV' é:", 
  correta: "Se Allan estuda IA, então ele não trabalha na TV.", 
  distracoes: [
    "Allan estuda IA e trabalha na TV.",
    "Se Allan não estuda IA, então ele não trabalha na TV.",
    "Allan estuda IA se e somente se trabalha na TV.",
    "Se Allan estuda IA, então ele trabalha na TV.",
    "Allan não estuda IA e não trabalha na TV."
  ],
  e: "A Disjunção Exclusiva (ou...ou) indica que se um acontece, o outro obrigatoriamente não acontece." 
},
// --- RACIOCÍNIO LÓGICO ---
    { 
        id: 2011, s: 'r', p: 2, tema: "Negação Lógica",
        q: "A negação lógica de \"P e Q\" é:",
        o: ["~P e ~Q", "~P ou ~Q", "~P -> ~Q", "P ou Q", "P -> Q"], 
        a: 1, 
        e: "<b>Lei de De Morgan:</b> Para negar o 'E', negamos as duas proposições e trocamos o conectivo por <b>'OU'</b>." 
    },
    { 
        id: 2012, s: 'r', p: 2, tema: "Tabela Verdade",
        q: "Na condicional (P -> Q), se P=V e Q=F, o resultado é:",
        o: ["Verdadeiro", "Falso", "Inconclusivo", "Neutro", "Proporcional"], 
        a: 1, 
        e: "<b>Mnemônico:</b> Na condicional, o único caso Falso é a <b>Vera Fischer</b> (V -> F = F)." 
    },
    { 
        id: 2013, s: 'r', p: 2, tema: "Quantificadores",
        q: "Negação de \"Todo médico é atencioso\":",
        o: ["Nenhum médico é atencioso", "Algum médico não é atencioso", "Todos os médicos são rudes", "Algum médico é atencioso", "Se é médico, é atencioso"], 
        a: 1, 
        e: "<b>Regra:</b> A negação de 'Todo A é B' é 'Algum A <b>NÃO</b> é B'." 
    },
    { 
        id: 2014, s: 'r', p: 2, tema: "Tabela Verdade",
        q: "A disjunção inclusiva (v) é falsa quando:",
        o: ["P é V", "Q é V", "Ambas são falsas", "Ambas são verdadeiras", "Uma é diferente da outra"], 
        a: 2, 
        e: "<b>Regra do OU:</b> O conectivo OU só é <b>FALSO</b> se ambas as proposições forem Falsas simultaneamente." 
    },
    { 
        id: 2015, s: 'r', p: 2, tema: "Tabela Verdade",
        q: "Tabela verdade para 3 proposições simples possui:",
        o: ["4 linhas", "6 linhas", "8 linhas", "12 linhas", "16 linhas"], 
        a: 2, 
        e: "<b>Fórmula:</b> O número de linhas é dado por 2^n, onde n é o número de proposições. <b>2³ = 8</b>." 
    },
    { 
        id: 2016, s: 'r', p: 2, tema: "Equivalência Lógica",
        q: "Equivalência de P -> Q:",
        o: ["Q -> P", "~Q -> ~P", "P e ~Q", "~P e Q", "P ou Q"], 
        a: 1, 
        e: "<b>Contrapositiva:</b> A principal equivalência da condicional é inverter a ordem negando ambas." 
    },
    { 
        id: 2017, s: 'r', p: 2, tema: "Lógica Proposicional",
        q: "O símbolo '^' representa qual conectivo?",
        o: ["Disjunção", "Conjunção", "Condicional", "Bicondicional", "Negação"], 
        a: 1, 
        e: "<b>Simbologia:</b> ^ (Conjunção/E), v (Disjunção/OU), -> (Condicional/Se...então)." 
    },
    { 
        id: 2018, s: 'r', p: 2, tema: "Tautologia",
        q: "Uma Tautologia é uma proposição que:",
        o: ["É sempre falsa", "É sempre verdadeira", "Depende do contexto", "Possui 50% de verdade", "É impossível de calcular"], 
        a: 1, 
        e: "<b>Definição:</b> Tautologia ocorre quando o resultado da tabela verdade é <b>SEMPRE V</b>, independente dos valores das simples." 
    },
    { 
        id: 2019, s: 'r', p: 2, tema: "Negação Lógica",
        q: "Negação da Condicional (P -> Q):",
        o: ["~P -> ~Q", "P e ~Q", "~P ou Q", "Q -> P", "~P e ~Q"], 
        a: 1, 
        e: "<b>Regra do MANÉ:</b> Mantém a primeira (P) <b>E</b> nega a segunda (~Q)." 
    },
    { 
        id: 2020, s: 'r', p: 2, tema: "Tabela Verdade",
        q: "O 'OU Exclusivo' (v sublinhado) é verdadeiro quando:",
        o: ["Ambas são iguais", "Ambas são diferentes", "Ambas são verdadeiras", "Ambas são falsas", "P é necessariamente falsa"], 
        a: 1, 
        e: "<b>Regra do XOR:</b> O OU Exclusivo exige que as proposições tenham valores <b>DIFERENTES</b> para resultar em Verdade." 
    },





    //final do codigo raciocionio logico.




    // === LEGISLAÇÃO E GOIÁS (s: 'g') - Peso 2.0 ===

    { id: 101, s: 'g', p: 2, q: "Goiânia foi planejada na década de 1930. Quem foi o seu fundador?", o: ["Anhanguera", "Pedro Ludovico Teixeira", "Attilio Corrêa Lima", "Iris Rezende"], a: 1, e: "Pedro Ludovico Teixeira liderou a mudança da capital em 1933." },
    { id: 102, s: 'g', p: 2, q: "O estilo arquitetônico marcante de Goiânia, tombado pelo IPHAN, é o:", o: ["Barroco", "Gótico", "Art Déco", "Modernista"], a: 2, e: "Goiânia é mundialmente reconhecida pelo acervo Art Déco." },
    { id: 103, s: 'g', p: 2, q: "Qual o principal bioma presente no estado de Goiás?", o: ["Caatinga", "Pantanal", "Cerrado", "Mata Atlântica"], a: 2, e: "O Cerrado é a vegetação predominante em Goiás." },
    { id: 104, s: 'g', p: 2, q: "A Câmara Municipal de Goiânia exerce quais funções?", o: ["Executiva e Judiciária.", "Legislativa e Fiscalizadora.", "Apenas Administrativa.", "Judiciária e Policial."], a: 1, e: "A Câmara faz leis e fiscaliza o Prefeito." },
    { id: 105, s: 'g', p: 2, q: "Antes de Goiânia, qual cidade era a capital de Goiás?", o: ["Anápolis", "Trindade", "Aparecida", "Cidade de Goiás"], a: 3, e: "Vila Boa (Cidade de Goiás) foi a capital histórica." },
    { id: 106, s: 'g', p: 2, q: "Rio que faz a divisa natural de Goiás a Oeste:", o: ["Rio Meia Ponte", "Rio Araguaia", "Rio Paranaíba", "Rio Tocantins"], a: 1, e: "O Araguaia divide Goiás de Mato Grosso." },
    { id: 107, s: 'g', p: 2, q: "Vegetação 'casca grossa' e troncos tortuosos é do:", o: ["Cerrado", "Mangue", "Selva", "Pampa"], a: 0, e: "Características típicas das árvores do Cerrado." },
    { id: 108, s: 'g', p: 2, q: "Ano da pedra fundamental de Goiânia:", o: ["1933", "1920", "1950", "1942"], a: 0, e: "Lançada em 24 de outubro de 1933." },
    { id: 109, s: 'g', p: 2, q: "O Batismo Cultural de Goiânia ocorreu em:", o: ["1933", "1942", "1950", "1960"], a: 1, e: "O evento solene de inauguração foi em 1942." },
    { id: 110, s: 'g', p: 2, q: "Padroeira de Goiânia:", o: ["Aparecida", "Auxiliadora", "Luzia", "Fátima"], a: 1, e: "Nossa Senhora Auxiliadora é a padroeira da capital." },
    { id: 114, s: 'g', p: 2, q: "Segundo a Lei Orgânica de Goiânia, quantos vereadores compõem atualmente a Câmara Municipal?", o: ["25 vereadores", "35 vereadores", "45 vereadores", "15 vereadores"], a: 1, e: "A composição atual da Câmara Municipal de Goiânia é de 35 vereadores." },
    { id: 115, s: 'g', p: 2, q: "O Poder Legislativo Municipal é exercido pela Câmara Municipal, que tem como funções principais:", o: ["Legislar e Julgar crimes comuns.", "Legislar e Fiscalizar o Executivo.", "Administrar o trânsito e as escolas.", "Prender infratores e multar empresas."], a: 1, e: "A Câmara cria leis e fiscaliza as contas e atos do Prefeito." },
    { id: 116, s: 'g', p: 2, q: "Qual é a duração do mandato da Mesa Diretora da Câmara Municipal de Goiânia?", o: ["1 ano", "2 anos", "4 anos", "Indeterminado"], a: 1, e: "O mandato da Mesa Diretora é de 2 anos, permitida a recondução." },
    { id: 117, s: 'g', p: 2, q: "Quem substitui o Prefeito de Goiânia em caso de impedimento ou vacância, imediatamente?", o: ["O Presidente da Câmara", "O Vice-Prefeito", "O Vereador mais votado", "O Juiz da comarca"], a: 1, e: "O substituto imediato do chefe do executivo é sempre o Vice-Prefeito."}, 
 // === ELITE: LEGISLAÇÃO GOIÂNIA (Regimento e Lei Orgânica) ===
    { id: 116, s: 'g', p: 2, q: "Sobre o processo legislativo em Goiânia, a iniciativa de leis que disponham sobre o regime jurídico dos servidores municipais é competência exclusiva:", o: ["Da Mesa Diretora", "Do Presidente da Câmara", "Do Prefeito Municipal", "De qualquer Vereador"], a: 2, e: "Matérias sobre servidores e orçamento são de iniciativa privativa do Chefe do Executivo (Prefeito)." },
    { id: 117, s: 'g', p: 2, q: "O quórum necessário para a aprovação de uma Emenda à Lei Orgânica de Goiânia é de:", o: ["Maioria Simples", "Maioria Absoluta", "Dois terços dos membros", "Três quintos dos membros"], a: 2, e: "Para alterar a Lei Orgânica, exige-se votação em dois turnos com 2/3 dos vereadores." },
// === ELITE: LEGISLAÇÃO E REGIMENTO (Poder Legislativo Municipal) ===
    {  id: 118, s: 'g', p: 2, 
        q: "De acordo com o Regimento Interno da Câmara Municipal de Goiânia, a Comissão que possui a competência de analisar o mérito administrativo e a constitucionalidade das propostas é a:", 
        o: ["Comissão de Finanças e Orçamento.", "Comissão de Ética e Decoro Parlamentar.", "Comissão de Constituição, Justiça e Redação.", "Comissão de Direitos Humanos."], 
        a: 2, 
        e: "A CCJR é a comissão técnica mais importante, atuando como filtro jurídico para qualquer projeto de lei na Casa."  },
// === ELITE: LEGISLAÇÃO GOIÂNIA (Processo Legislativo Especial) ===
    {  id: 120, s: 'g', p: 2, 
        q: "Sobre a fiscalização contábil, financeira e orçamentária do Município de Goiânia, é correto afirmar que o controle externo será exercido pela Câmara Municipal, com o auxílio do:", 
        o: ["Tribunal de Contas do Estado (TCE).", "Tribunal de Contas dos Municípios (TCM).", "Tribunal de Contas da União (TCU).", "Conselho de Contas do Prefeito."], 
        a: 1, 
        e: "Em Goiás, a fiscalização dos municípios é auxiliada pelo Tribunal de Contas dos Municípios (TCM-GO)."  },
 // === ELITE: LEGISLAÇÃO (Administração Pública e Ética) ===
    {  id: 121, s: 'g', p: 2, 
        q: "Com base no Regime Jurídico Único dos Servidores de Goiânia, a redistribuição é o deslocamento de cargo de provimento efetivo para outro órgão, ocorrendo exclusivamente por:", 
        o: ["Interesse do servidor para tratamento de saúde.", "Interesse da administração, de ofício, com prévia apreciação do órgão central de pessoal.", "Promoção por tempo de serviço.", "Punição administrativa após processo disciplinar."], 
        a: 1, 
        e: "A redistribuição visa o interesse do serviço público e o ajuste de quadros de pessoal entre órgãos." },
// === ELITE: LEGISLAÇÃO E GOIÁS (ESTATUTO E HISTÓRIA) ===
    {  id: 122, s: 'g', p: 2, 
        q: "Segundo o Estatuto dos Servidores de Goiânia, a 'Posse' deve ocorrer no prazo de quantos dias após a publicação do ato de provimento?", 
        o: ["5 dias", "15 dias", "30 dias", "45 dias"], 
        a: 2, 
        e: "O prazo padrão estabelecido para a posse em cargo público municipal é de 30 dias."  },
 // === ELITE: LEGISLAÇÃO E DIREITO ADMINISTRATIVO (s: 'g') ===
    { id: 126, s: 'g', p: 2, 
        q: "Sobre os atos administrativos, o conceito de 'Imperatividade' refere-se à característica que:", 
        o: ["Permite à administração executar suas decisões sem auxílio do Judiciário.", "Obriga o administrado ao cumprimento do ato, independentemente de sua concordância.", "Garante que o ato foi editado conforme a lei até prova em contrário.", "Exige que o ato esteja previsto em lei para ser válido."], 
        a: 1, 
        e: "A imperatividade é o poder do ato administrativo de se impor a terceiros, criando obrigações." },
     { id: 127, s: 'g', p: 2, 
        q: "A investidura em cargo público na Câmara de Goiânia ocorre com:", 
        o: ["A nomeação.", "A aprovação no concurso.", "A posse.", "O exercício."], 
        a: 2, 
        e: "Conforme o Estatuto do Servidor, a investidura ocorre com a assinatura do termo de posse."},


        // === ELITE: LEGISLAÇÃO MUNICIPAL (LEI ORGÂNICA E REGIMENTO) ===
    {  id: 501, s: 'g', p: 2, 
        q: "Segundo a Lei Orgânica de Goiânia, a emenda à referida Lei será discutida e votada em dois turnos, com interstício mínimo de dez dias, considerando-se aprovada se obtiver em ambos o voto de:", 
        o: ["Maioria absoluta dos membros da Câmara.", "Dois terços dos membros da Câmara.", "Maioria simples dos presentes.", "Três quintos dos membros da Câmara."], 
        a: 1, 
        e: "Para alterar a 'Constituição Municipal' (LOM), exige-se o quórum qualificado de 2/3 em dois turnos." },
 // === ELITE: TERMINOLOGIA E LEIS (s: 'g') ===
    { id: 801, s: 'g', p: 2, 
        q: "Qual a diferença fundamental entre a Maioria Absoluta e a Maioria Simples nas votações da Câmara de Goiânia?", 
        o: ["Não há diferença, são nomes para o mesmo quórum.", "A Absoluta baseia-se no total de membros da Casa; a Simples baseia-se nos membros presentes.", "A Simples exige 18 votos e a Absoluta exige 24 votos.", "A Absoluta é usada para homenagens e a Simples para leis."], 
        a: 1, 
        e: "Maioria Absoluta = 1º número inteiro após a metade do total de vereadores (35). Simples = maioria dos presentes na sessão."},
// === BLOCO ELITE: HISTÓRIA DE GOIÁS E LEGISLAÇÃO ===
    { id: 3021, s: 'g', p: 2, 
        q: "O estilo arquitetônico predominante nos primeiros prédios públicos de Goiânia, como o Palácio das Esmeraldas, é o:", 
        o: ["Barroco.", "Rococó.", "Art Déco.", "Modernista (Niemeyer)."], 
        a: 2, 
        e: "Goiânia é uma das cidades com o maior acervo Art Déco do mundo, estilo trazido por Attilio Corrêa Lima." },
    
    {  id: 3022, s: 'g', p: 2, 
        q: "Conforme a Lei Orgânica de Goiânia, o quórum para aprovação de emenda à referida lei é de:", 
        o: ["Maioria Simples em turno único.", "Maioria Absoluta em dois turnos.", "Dois terços (2/3) em dois turnos.", "Metade mais um em votação secreta."], 
        a: 2, 
        e: "LOM exige 2/3 de votos favoráveis e votação em 2 turnos (intervalo mínimo de 10 dias)."  },
    { id: 3023, s: 'g', p: 2, 
        q: "Quem foi o líder político e 'interventor' responsável por concretizar a mudança da capital para Goiânia na década de 30?", 
        o: ["Attilio Corrêa Lima.", "Pedro Ludovico Teixeira.", "Anhanguera.", "Iris Rezende."], 
        a: 1, 
        e: "Pedro Ludovico foi o mentor político; Attilio foi o mentor técnico/urbanista." },
        // === HISTÓRIA E GEOGRAFIA DE GOIÁS/GOIÂNIA ===
{ 
  id: 4001, s: 'g', p: 2, 
  q: "Goiânia foi construída para substituir a antiga capital, Vila Boa. Qual foi o principal fator político-econômico para essa mudança na década de 1930?", 
  correta: "A 'Marcha para o Oeste', visando integrar o interior do país e ocupar o território goiano.", 
  distracoes: [
    "A descoberta de grandes jazidas de ouro na região do Rio Meia Ponte.",
    "A destruição total da antiga capital por uma inundação do Rio Vermelho.",
    "A necessidade de aproximar a capital goiana do novo Porto de Santos.",
    "Uma exigência da Coroa Portuguesa para manter o controle fiscal das minas.",
    "A fuga da epidemia de febre amarela que assolava o sudoeste goiano."
  ],
  e: "Pedro Ludovico Teixeira seguiu a diretriz de Getúlio Vargas para interiorizar o desenvolvimento do Brasil." 
},
{ 
  id: 4002, s: 'g', p: 2, 
  q: "O traçado urbanístico original de Goiânia, projetado por Attilio Corrêa Lima, tem como característica marcante:", 
  correta: "O desenho em formato de 'leque', convergindo para a Praça Cívica.", 
  distracoes: [
    "Um sistema de canais inspirado na cidade de Veneza.",
    "Um formato quadriculado perfeito, sem diagonais, como em Nova York.",
    "A ausência total de praças para priorizar o tráfego de bondes.",
    "Um formato circular concêntrico inspirado na cidade de Brasília.",
    "A construção exclusiva de prédios acima de 20 andares no centro."
  ],
  e: "A Praça Cívica é o coração do projeto, onde se concentram os três poderes." 
},



// === ELITE: DIREITO ADMINISTRATIVO E ATOS (s: 'g') ===
    { id: 124, s: 'g', p: 2, 
        q: "No que se refere aos Atos Administrativos, o atributo que permite à Administração Pública executar suas decisões diretamente, inclusive com o uso da força, sem necessidade de autorização prévia do Judiciário, é a:", 
        o: ["Presunção de Legitimidade", "Imperatividade", "Autoexecutoriedade", "Tipicidade"], 
        a: 2, 
        e: "A autoexecutoriedade permite que a administração ponha em prática suas decisões (ex: guinchar um carro) sem ordem judicial prévia." },
    {  id: 125, s: 'g', p: 2, 
        q: "A demissão de um servidor público estável da Câmara de Goiânia, após a devida apuração em processo administrativo disciplinar (PAD), é um exemplo do exercício do poder:", 
        o: ["Poder Regulamentar", "Poder Hierárquico", "Poder Disciplinar", "Poder de Polícia"], 
        a: 2, 
        e: "O Poder Disciplinar é o que permite à Administração punir infrações funcionais de seus servidores." },
    {  id: 262, s: 'e', p: 3, 
        q: "O que caracteriza a tecnologia de conexão 'Optical Fiber SDI' em comparação ao cabo coaxial BNC tradicional?", 
        o: ["É limitada a distâncias de no máximo 10 metros.", "Imunidade total a interferências eletromagnéticas e suporte a distâncias de quilômetros.", "Não permite o transporte de áudio embutido.", "É uma tecnologia analógica de alta fidelidade."], 
        a: 1, 
        e: "A fibra óptica usa luz para transmitir dados, eliminando interferências elétricas de motores ou geradores no estúdio."  },
// --- ATOS ADMINISTRATIVOS ---
{  id: 301, s: 'g', p: 2, 
  q: "Sobre a extinção dos atos administrativos, a retirada de um ato legal e legítimo por razões de conveniência e oportunidade é chamada de:", 
  correta: "Revogação", 
  distracoes: ["Anulação", "Cassação", "Caducidade", "Contraposição", "Invalidação"],
  e: "Revogação atinge atos válidos por interesse público (conveniência/oportunidade). Anulação atinge atos ilegais." },
{ id: 302, s: 'g', p: 2, 
  q: "Qual elemento do ato administrativo é sempre vinculado, não admitindo margem de escolha para o administrador?", 
  correta: "Finalidade", 
  distracoes: ["Motivo", "Objeto", "Mérito", "Conveniência"],
  e: "Competência, Finalidade e Forma são sempre vinculados. Motivo e Objeto podem ser discricionários." },
// --- HISTÓRIA E GEOGRAFIA DE GOIÁS ---
    { 
        id: 2021, s: 'g', p: 2, tema: "História de GO",
        q: "O urbanista Attílio Corrêa Lima projetou Goiânia inspirado no:",
        o: ["Barroco Mineiro", "Art Déco", "Modernismo de Brasília", "Neoclássico Europeu", "Colonial Português"], 
        a: 1, 
        e: "<b>Curiosidade:</b> Goiânia possui um dos maiores acervos de arquitetura <b>Art Déco</b> do mundo, estilo predominante na década de 30." 
    },
    { 
        id: 2022, s: 'g', p: 2, tema: "História de GO",
        q: "O movimento pró-mudança da capital chamava-se:",
        o: ["Entradismo", "Mudancismo", "Coronelismo", "Bandeirantismo", "Revolucionários"], 
        a: 1, 
        e: "<b>História:</b> O 'Mudancismo' era o grupo político que defendia a construção de uma nova capital para modernizar o estado." 
    },
    { 
        id: 2023, s: 'g', p: 2, tema: "Geografia de GO",
        q: "Rio que faz divisa natural entre GO e MT:",
        o: ["Rio Paranaíba", "Rio Araguaia", "Rio Meia Ponte", "Rio Tocantins", "Rio Vermelho"], 
        a: 1, 
        e: "<b>Mapa:</b> O <b>Rio Araguaia</b> marca a divisa oeste de Goiás com o Mato Grosso, sendo vital para o turismo goiano." 
    },
    { 
        id: 2024, s: 'g', p: 2, tema: "História de GO",
        q: "Data do Batismo Cultural de Goiânia:",
        o: ["1933", "1942", "1937", "1950", "1960"], 
        a: 1, 
        e: "<b>Data Chave:</b> Embora fundada em 33, o <b>Batismo Cultural</b> (inauguração oficial) ocorreu apenas em 1942." 
    },
    { 
        id: 2025, s: 'g', p: 2, tema: "Geografia de GO",
        q: "Goiânia está em qual macrorregião?",
        o: ["Sul Goiano", "Centro Goiano", "Entorno do DF", "Norte Goiano", "Sudoeste"], 
        a: 1, 
        e: "<b>Regionalização:</b> A capital está inserida na Região <b>Centro Goiano</b>, o núcleo administrativo e populacional do estado." 
    },
    { 
        id: 2026, s: 'g', p: 2, tema: "História de GO",
        q: "O interventor federal que fundou Goiânia foi:",
        o: ["Mauro Borges", "Pedro Ludovico Teixeira", "Getúlio Vargas", "Iris Rezende", "Maguito Vilela"], 
        a: 1, 
        e: "<b>Personagem:</b> <b>Pedro Ludovico</b> foi o grande idealizador e líder político da transferência da capital." 
    },
    { 
        id: 2027, s: 'g', p: 2, tema: "História de GO",
        q: "Base econômica do século XVIII em GO:",
        o: ["Soja", "Ouro", "Gado", "Indústria", "Café"], 
        a: 1, 
        e: "<b>Ciclos:</b> O primeiro grande ciclo econômico goiano foi a <b>Mineração de Ouro</b>, que fundou cidades como Vila Boa (Goiás)." 
    },
    { 
        id: 2028, s: 'g', p: 2, tema: "Geografia de GO",
        q: "Ponto mais alto de Goiás:",
        o: ["Pico da Bandeira", "Pouso Alto", "Serra Dourada", "Morro do Alemão", "Chapada dos Guimarães"], 
        a: 1, 
        e: "<b>Relevo:</b> O <b>Pouso Alto</b>, na Chapada dos Veadeiros (Alto Paraíso), é o cume do estado com 1.691m." 
    },
    { 
        id: 2029, s: 'g', p: 2, tema: "História de GO",
        q: "Vila Boa é o antigo nome de:",
        o: ["Goiânia", "Cidade de Goiás", "Anápolis", "Pirenópolis", "Caldas Novas"], 
        a: 1, 
        e: "<b>História:</b> Fundada pelo Anhanguera, a Vila Boa de Goyaz foi a capital por mais de 200 anos." 
    },
    { 
        id: 2030, s: 'g', p: 2, tema: "Geografia de GO",
        q: "Clima predominante em GO:",
        o: ["Equatorial", "Tropical de Altitude/Savana", "Semiárido", "Subtropical", "Temperado"], 
        a: 1, 
        e: "<b>Climatologia:</b> O clima predominante é o <b>Tropical</b>, caracterizado por duas estações bem definidas (seca e chuvosa)." 
    },

//legislação concurso


    { 
        id: 3009, s: 'd', p: 2, tema: "Direitos Fundamentais",
        q: "Segundo a Constituição Federal, a casa é asilo inviolável do indivíduo. Assinale a situação em que o ingresso nela SEM consentimento do morador, durante a NOITE, é permitido:",
        o: ["Para cumprimento de determinação judicial.", "Para prestar socorro.", "Para realização de busca e apreensão.", "Para instalação de escutas telefônicas.", "Em nenhuma hipótese é permitido à noite."], 
        a: 1, 
        e: "<b>Regra de Ouro:</b> O ingresso SEM consentimento à NOITE só é permitido em 3 casos: <b>Flagrante delito, Desastre ou para Prestar Socorro</b>. Determinação judicial só pode ser cumprida durante o DIA." 
    },
    { 
        id: 3010, s: 'd', p: 2, tema: "LGPD",
        q: "A Lei Geral de Proteção de Dados (LGPD) define como 'Dado Pessoal Sensível' aquele que se refere a:",
        o: ["Número de telefone e endereço residencial.", "Histórico de compras em sites de e-commerce.", "Origem racial ou étnica e convicção religiosa.", "Nome completo e data de nascimento.", "Preferências de lazer e viagens."], 
        a: 2, 
        e: "<b>LGPD:</b> Dados sensíveis são aqueles que podem gerar discriminação. Exemplos: <b>origem racial, convicção religiosa, opinião política, saúde ou vida sexual</b>." 
    },
    { 
        id: 3011, s: 'd', p: 2, tema: "Poder Legislativo",
        q: "Compete privativamente à Assembleia Legislativa do Estado de Goiás:",
        o: ["Sancionar leis federais.", "Eleger sua Mesa Diretora.", "Processar o Presidente da República.", "Declarar guerra a outros estados.", "Legislar sobre direito civil."], 
        a: 1, 
        e: "<b>Autonomia:</b> Cada casa legislativa (Câmara ou Assembleia) possui autonomia administrativa para <b>eleger sua própria Mesa</b> e elaborar seu Regimento Interno." 
    },
    { 
        id: 3012, s: 'd', p: 2, tema: "Administração Pública",
        q: "O princípio da Administração Pública que exige que o agente público atue sem favoritismos ou perseguições, buscando o interesse coletivo, é o da:",
        o: ["Legalidade.", "Publicidade.", "Eficiência.", "Impessoalidade.", "Moralidade."], 
        a: 3, 
        e: "<b>LIMPE:</b> A <b>Impessoalidade</b> obriga o tratamento neutro. O servidor não atende o 'amigo' primeiro; ele atende o interesse público." 
    },
    { 
        id: 3013, s: 'd', p: 2, tema: "LGPD",
        q: "Na LGPD, a pessoa natural ou jurídica a quem competem as decisões referentes ao tratamento de dados pessoais é denominada:",
        o: ["Operador.", "Encarregado.", "Controlador.", "Titular.", "Usuário."], 
        a: 2, 
        e: "<b>Atores da LGPD:</b> O <b>Controlador</b> é quem toma as decisões (o 'dono' do processo). O Operador apenas executa as ordens do controlador." 
    },


//Direito Constitucional e LGPD concurso assembleia legislativa go
    { 
        id: 3009, s: 'd', p: 2, tema: "Direitos Fundamentais",
        q: "Segundo a Constituição Federal, a casa é asilo inviolável do indivíduo. Assinale a situação em que o ingresso nela SEM consentimento do morador, durante a NOITE, é permitido:",
        o: ["Para cumprimento de determinação judicial.", "Para prestar socorro.", "Para realização de busca e apreensão.", "Para instalação de escutas telefônicas.", "Em nenhuma hipótese é permitido à noite."], 
        a: 1, 
        e: "<b>Regra de Ouro:</b> O ingresso SEM consentimento à NOITE só é permitido em 3 casos: <b>Flagrante delito, Desastre ou para Prestar Socorro</b>. Determinação judicial só pode ser cumprida durante o DIA." 
    },
    { 
        id: 3010, s: 'd', p: 2, tema: "LGPD",
        q: "A Lei Geral de Proteção de Dados (LGPD) define como 'Dado Pessoal Sensível' aquele que se refere a:",
        o: ["Número de telefone e endereço residencial.", "Histórico de compras em sites de e-commerce.", "Origem racial ou étnica e convicção religiosa.", "Nome completo e data de nascimento.", "Preferências de lazer e viagens."], 
        a: 2, 
        e: "<b>LGPD:</b> Dados sensíveis são aqueles que podem gerar discriminação. Exemplos: <b>origem racial, convicção religiosa, opinião política, saúde ou vida sexual</b>." 
    },
    { 
        id: 3011, s: 'd', p: 2, tema: "Poder Legislativo",
        q: "Compete privativamente à Assembleia Legislativa do Estado de Goiás:",
        o: ["Sancionar leis federais.", "Eleger sua Mesa Diretora.", "Processar o Presidente da República.", "Declarar guerra a outros estados.", "Legislar sobre direito civil."], 
        a: 1, 
        e: "<b>Autonomia:</b> Cada casa legislativa (Câmara ou Assembleia) possui autonomia administrativa para <b>eleger sua própria Mesa</b> e elaborar seu Regimento Interno." 
    },
    { 
        id: 3012, s: 'd', p: 2, tema: "Administração Pública",
        q: "O princípio da Administração Pública que exige que o agente público atue sem favoritismos ou perseguições, buscando o interesse coletivo, é o da:",
        o: ["Legalidade.", "Publicidade.", "Eficiência.", "Impessoalidade.", "Moralidade."], 
        a: 3, 
        e: "<b>LIMPE:</b> A <b>Impessoalidade</b> obriga o tratamento neutro. O servidor não atende o 'amigo' primeiro; ele atende o interesse público." 
    },
    { 
        id: 3013, s: 'd', p: 2, tema: "LGPD",
        q: "Na LGPD, a pessoa natural ou jurídica a quem competem as decisões referentes ao tratamento de dados pessoais é denominada:",
        o: ["Operador.", "Encarregado.", "Controlador.", "Titular.", "Usuário."], 
        a: 2, 
        e: "<b>Atores da LGPD:</b> O <b>Controlador</b> é quem toma as decisões (o 'dono' do processo). O Operador apenas executa as ordens do controlador." 
    },
    







        // final de legislaçao.



// === CONHECIMENTOS ESPECÍFICOS (s: 'e') - Peso 3.0 ===
    { id: 201, s: 'e', p: 3, q: "A resolução Full HD (1080p) corresponde a quantos pixels?", o: ["1280x720", "1920x1080", "3840x2160", "640x480"], a: 1, e: "1920 pixels de largura por 1080 de altura." },
    { id: 202, s: 'e', p: 3, q: "O que significa 'Crawl' no contexto de um Gerador de Caracteres?", o: ["Texto vertical", "Logo fixa", "Texto horizontal", "Erro de vídeo"], a: 2, e: "Crawl é o movimento lateral, como barras de notícias." },
    { id: 203, s: 'e', p: 3, q: "Qual formato suporta transparência (Canal Alpha)?", o: ["JPEG", "PNG", "BMP", "GIF"], a: 1, e: "PNG é o padrão para transparência em vídeo profissional." },
    { id: 204, s: 'e', p: 3, q: "A margem 'Title Safe' (80%) serve para garantir que:", o: ["Cores brilhem", "Textos não sejam cortados", "Som não distorça", "Foco aumente"], a: 1, e: "Evita que caracteres fiquem fora da área visível de monitores antigos." },
    { id: 205, s: 'e', p: 3, q: "No Switcher, o barramento 'Program' (PGM) é:", o: ["A imagem em preparação", "O sinal 'No Ar'", "O teste", "O áudio"], a: 1, e: "PGM é a saída final que vai para o telespectador." },
    { id: 206, s: 'e', p: 3, q: "O sinal SDI transporta vídeo digital através de qual cabo?", o: ["HDMI", "Fibra", "Coaxial 75 ohms", "Rede"], a: 2, e: "SDI usa cabos coaxiais com conectores BNC." },
    { id: 207, s: 'e', p: 3, q: "O que define o 'Bit-depth' de um vídeo?", o: ["Velocidade", "Quantidade de cores", "Resolução", "Peso"], a: 1, e: "Define a precisão cromática (ex: 8-bit ou 10-bit)." },
    { id: 208, s: 'e', p: 3, q: "Leading refere-se ao ajuste de:", o: ["Espaço letras", "Entrelinha", "Tamanho", "Sombra"], a: 1, e: "Leading é o espaçamento vertical entre linhas de texto." },
    { id: 209, s: 'e', p: 3, q: "Genlock serve para:", o: ["Gravar áudio", "Sincronizar fontes", "Mudar cor", "Bloquear"], a: 1, e: "Sincroniza o timing de todas as câmeras no sistema." },
    { id: 210, s: 'e', p: 3, q: "Lower Third refere-se a:", o: ["Logo no topo", "Tarja no terço inferior", "Créditos", "Abertura"], a: 1, e: "Tarjas de identificação de nomes e cargos." },
    { id: 211, s: 'e', p: 3, q: "O que é Chroma Key?", o: ["Recorte por brilho", "Recorte por cor", "Mix de áudio", "Filtro de luz"], a: 1, e: "Técnica de substituir um fundo de cor sólida." },
    { id: 212, s: 'e', p: 3, q: "Significado de FPS:", o: ["Foco", "Quadros por segundo", "Frequência", "Ponto"], a: 1, e: "Frames Per Second (Quadros por segundo)." },
    { id: 213, s: 'e', p: 3, q: "Stroke em tipografia é:", o: ["Sombra", "Luz", "Contorno", "Brilho"], a: 2, e: "Borda externa aplicada ao redor das letras." },
    { id: 214, s: 'e', p: 3, q: "Barramento 'Preview' serve para:", o: ["Gravar", "Mandar ao ar", "Conferir antes", "Deletar"], a: 2, e: "Visualização prévia da fonte antes do corte final." },
    { id: 215, s: 'e', p: 3, q: "Aspect Ratio HD padrão:", o: ["4:3", "1:1", "16:9", "9:16"], a: 2, e: "Formato Widescreen de alta definição." },
    { id: 216, s: 'e', p: 3, q: "SVG caracteriza-se por ser um arquivo:", o: ["Vetor", "Mapa de bits", "Vídeo", "Áudio"], a: 0, e: "Vetores podem ser ampliados sem perda de qualidade." },
    { id: 217, s: 'e', p: 3, q: "Drop Shadow serve para:", o: ["Mudar cor", "Contraste e profundidade", "Limpar ruído", "Girar logo"], a: 1, e: "Sombra projetada que destaca o texto do fundo." },
    { id: 218, s: 'e', p: 3, q: "O conector BNC é padrão para sinais:", o: ["HDMI", "USB", "SDI", "VGA"], a: 2, e: "Conector de engate rápido profissional para vídeo." },
    { id: 219, s: 'e', p: 3, q: "Fontes Sans Serif são:", o: ["Com risquinhos", "Sem risquinhos", "Cursivas", "Góticas"], a: 1, e: "Sem prolongamentos (ex: Arial), ideais para leitura em tela." },
    { id: 220, s: 'e', p: 3, q: "Sinal 1080i é:", o: ["Progressivo", "Entrelaçado", "Bit-depth", "4K"], a: 1, e: "A letra 'i' vem de Interlaced (entrelaçado)." },
    { id: 221, s: 'e', p: 3, q: "Taxa de quadros da TV Brasileira (Digital):", o: ["24 fps", "29.97/60 fps", "50 fps", "12 fps"], a: 1, e: "Padrão herdado do sistema NTSC." },
    { id: 222, s: 'e', p: 3, q: "Sinal 'Fill' em GC profissional:", o: ["Mapa transparência", "Cores e formas", "Sincronia", "Áudio"], a: 1, e: "É o conteúdo visual que preenche o recorte." },
    { id: 223, s: 'e', p: 3, q: "Switcher de vídeo processa:", o: ["Só áudio", "Apenas 1 câmera", "Múltiplas fontes", "Papel"], a: 2, e: "Seleciona e mistura diversas fontes de vídeo." },
    { id: 224, s: 'e', p: 3, q: "Roll corre em qual direção?", o: ["Lateral", "Fixo", "Vertical (Sobe)", "Pisca"], a: 2, e: "Movimento comum em créditos finais de filmes/programas." },
    { id: 225, s: 'e', p: 3, q: "Rec 709 é o espaço de cor para:", o: ["SD", "4K", "HDTV", "Cinema"], a: 2, e: "Espaço de cor padrão das transmissões em Alta Definição." },
    { id: 226, s: 'e', p: 3, q: "Onde o DSK atua no Switcher?", o: ["Primeira camada", "Última camada", "Só no áudio", "Fora do ar"], a: 1, e: "Downstream Keyer é a última sobreposição antes da saída." },
    { id: 227, s: 'e', p: 3, q: "Safe Area Ação ocupa geralmente:", o: ["80%", "90%", "100%", "50%"], a: 1, e: "Action Safe garante que elementos da ação não sejam cortados." },
    { id: 228, s: 'e', p: 3, q: "Pixels HD atuais são:", o: ["Redondos", "Triangulares", "Quadrados", "Retangulares"], a: 2, e: "Diferente da TV analógica, o sinal digital usa square pixels." },
    { id: 229, s: 'e', p: 3, q: "Bit-depth 10-bit oferece mais de:", o: ["100 cores", "1 bilhão de tons", "1000 tons", "2 cores"], a: 1, e: "Oferece uma precisão de cor muito superior ao 8-bit." },
    { id: 230, s: 'e', p: 3, q: "Luma Key recorta baseado em:", o: ["Cor verde", "Brilho (Luz)", "Saturação", "Movimento"], a: 1, e: "Usa a luminância para definir a transparência." },
    { id: 231, s: 'e', p: 3, q: "O que acontece se um sinal de vídeo não estiver 'Genlocado' em um switcher?", o: ["O áudio fica mudo", "A imagem fica preta e branca", "Ocorre um pulo ou congelamento (glitch) no momento do corte", "A resolução aumenta"], a: 2, e: "Sem sincronismo de fase, o switcher não consegue trocar as fontes de forma limpa." },
    { id: 232, s: 'e', p: 3, q: "Qual a taxa de aspecto (Aspect Ratio) de um vídeo em resolução 1080x1920 (formato vertical para redes sociais)?", o: ["16:9", "4:3", "9:16", "1:1"], a: 2, e: "É o inverso do widescreen (16:9), resultando no formato vertical." },
    { id: 233, s: 'e', p: 3, q: "No Gerador de Caracteres, o que define a 'Sombra Projetada' ou 'Drop Shadow'?", o: ["O contorno da letra", "A transparência da letra", "Um deslocamento escuro que dá profundidade ao texto", "A cor principal da fonte"], a: 2, e: "A sombra ajuda a separar o texto do fundo, melhorando a leitura." },
    { id: 234, s: 'e', p: 3, q: "O sinal SDI 3G consegue transportar resoluções de até:", o: ["SD", "720p", "1080p a 60 fps", "4K"], a: 2, e: "O 3G-SDI suporta até 1080p60. Para 4K, geralmente usa-se 6G ou 12G-SDI." },
    { id: 235, s: 'e', p: 3, q: "Qual a função do 'Keyer' em um Switcher de vídeo?", o: ["Gravar o programa", "Sobrepor uma imagem sobre outra (como um GC ou Chroma Key)", "Ajustar o volume", "Limpar as lentes das câmeras"], a: 1, e: "O Keyer é o recurso que permite 'vazar' ou sobrepor elementos gráficos." },
     // === ELITE: ESPECÍFICAS (Broadcast, Sincronismo e Compressão) ===
    { id: 243, s: 'e', p: 3, q: "O sinal de referência Tri-Level Sync é utilizado preferencialmente em sistemas:", o: ["Analógicos SD", "Digitais HD/UHD", "Apenas para áudio IP", "Streaming de baixa latência"], a: 1, e: "O Tri-level sync é o padrão de sincronismo mais preciso para sinais de Alta Definição (HD)." },
    { id: 244, s: 'e', p: 3, q: "No espaço de cor YCbCr, o componente 'Y' representa:", o: ["A diferença de azul", "A diferença de vermelho", "A Luminância (Brilho)", "A Saturação"], a: 2, e: "Y é a luminância; Cb e Cr são os componentes de crominância (cor)." },
    { id: 245, s: 'e', p: 3, q: "O que caracteriza a compressão Intraframe (como o ProRes ou DNxHD) em comparação à Interframe (como o H.264)?", o: ["Ocupa muito menos espaço no HD", "Cada quadro é comprimido individualmente, facilitando a edição", "Depende de quadros anteriores para ser lido", "Não possui Canal Alpha"], a: 1, e: "Compressão Intraframe (I-frame only) é ideal para edição porque não exige que o processador calcule quadros vizinhos." },
    { id: 246, s: 'e', p: 3, q: "Qual a função de um 'Frame Synchronizer' em uma entrada de switcher que não recebe Genlock?", o: ["Melhorar a cor da câmera", "Gravar o sinal em backup", "Alinhar o timing do sinal externo ao relógio interno do switcher", "Converter SDI para HDMI"], a: 2, e: "O sincronizador de quadro cria um buffer para alinhar sinais 'soltos' ao sistema do estúdio." },
    { id: 247, s: 'e', p: 3, q: "O erro conhecido como 'Color Banding' em degradês de fundo de tela é causado geralmente por:", o: ["Bit-depth baixo (ex: 8-bit)", "Cabo SDI muito longo", "Falta de Genlock", "Resolução 4K"], a: 0, e: "Banding ocorre quando não há tons de cores suficientes para uma transição suave, problema comum em 8-bit." },
// === ELITE: CONHECIMENTOS ESPECÍFICOS (Sinal Digital e Broadcast) ===
    { id: 248, s: 'e', p: 3, 
        q: "No processamento de sinal SDI, a diferença fundamental entre as normas HD-SDI (1.5G) e 3G-SDI reside em qual parâmetro técnico?", 
        o: ["O tipo de conector BNC utilizado.", "A profundidade de cor limitada a 8 bits no 3G.", "A largura de banda de dados suportada, permitindo taxas de quadros maiores em 1080p.", "A impossibilidade de transportar áudio embutido no sinal 1.5G."], 
        a: 2, 
        e: "O 3G-SDI dobra a taxa de bits do 1.5G, permitindo transportar sinal 1080p a 50 ou 60 quadros por segundo em um único cabo." },
    {  id: 249, s: 'e', p: 3, 
        q: "A técnica de compressão 'Interframe' (como o codec H.264/AVC) economiza espaço de armazenamento baseando-se em qual princípio?", 
        o: ["Redução drástica da resolução horizontal da imagem.", "Exclusão total do canal alpha de transparência.", "Eliminação da redundância temporal entre quadros sucessivos através de vetores de movimento.", "Conversão obrigatória do sinal para preto e branco antes do processamento."], 
        a: 2, 
        e: "Ao contrário da compressão Intraframe (quadro a quadro), a Interframe grava apenas as mudanças entre os quadros, economizando bits."  },
    { id: 250, s: 'e', p: 3, 
        q: "O processo de 'Keying' conhecido como 'Luma Key' realiza o recorte da imagem baseando-se em quais níveis do sinal de vídeo?", 
        o: ["Apenas no canal de cor verde (Green).", "Nos níveis de luminância (brilho), separando áreas claras de áreas escuras.", "Na diferença de fase do sinal de sincronismo.", "Apenas nas frequências de áudio sincronizadas."], 
        a: 1, 
        e: "O Luma Key usa o contraste de brilho (preto/branco) para gerar a transparência, comum para sobrepor textos brancos em fundos escuros."  },
 // === ELITE: CONHECIMENTOS ESPECÍFICOS (Engenharia de Vídeo e Switcher) ===
    { id: 251, s: 'e', p: 3, 
        q: "No contexto de sinais de vídeo digital SDI, o fenômeno conhecido como 'Jitter' refere-se especificamente a:", 
        o: ["Uma distorção na colorimetria do sinal devido ao cabo longo.", "Variações indesejadas no tempo de transição dos pulsos digitais em relação a um relógio de referência.", "A perda completa de quadros durante a compressão interframe.", "O ruído sonoro captado por cabos coaxiais mal blindados."], 
        a: 1, 
        e: "Jitter é a instabilidade temporal do sinal digital. Se for excessivo, o receptor não consegue reconstruir o sinal de vídeo corretamente." },
    
    { id: 252, s: 'e', p: 3, 
        q: "Um sinal de vídeo 1080p a 59.94Hz transportado via 3G-SDI Level A difere do Level B principalmente por:", 
        o: ["O Level A usar compressão JPEG2000 e o Level B ser sem perdas.", "O Level A transportar o sinal como um fluxo único e o Level B combinar dois fluxos de 1.5G (Dual Link).", "O Level A ser analógico e o Level B ser estritamente digital.", "O Level A não suportar áudio embutido."], 
        a: 1, 
        e: "Level A é o mapeamento direto (Direct Mapping) de um sinal 3G. Level B é o mapeamento de dois sinais 1.5G (Dual Link) em um único cabo 3G."  },
    {  id: 253, s: 'e', p: 3, 
        q: "Ao configurar um Chroma Key no Switcher, o ajuste de 'Spill Suppression' serve para:", 
        o: ["Aumentar o brilho do fundo projetado.", "Remover o reflexo da cor do fundo (geralmente verde) que atinge as bordas ou o talento.", "Sincronizar a fase do vídeo com o áudio externo.", "Ajustar o foco automático da lente da câmera."], 
        a: 1, 
        e: "O 'Spill' é o vazamento de cor do fundo no objeto principal; o supressor remove tonalidades verdes indesejadas da pele ou roupas."  },
// === ELITE: CONHECIMENTOS ESPECÍFICOS (Engenharia de Sinais e Fluxo) ===
    { id: 254, s: 'e', p: 3, 
        q: "No processamento de cor para televisão, o termo 'Chroma Subsampling' 4:2:2 indica que:", 
        o: ["A luminância e a crominância têm a mesma resolução horizontal.", "A luminância tem resolução total, enquanto os canais de cor têm metade da resolução horizontal.", "O sinal é composto apenas por canais de cor, sem luminância.", "A imagem é transmitida em preto e branco com metadados de cor."], 
        a: 1, 
        e: "No 4:2:2, o primeiro número (4) é a luminância (Y) total. O segundo (2) indica que a cor é amostrada na metade da taxa horizontal, padrão profissional que equilibra qualidade e largura de banda." },
    {  id: 255, s: 'e', p: 3, 
        q: "A função de um 'Waveform Monitor' na central técnica (MCR) é monitorar especificamente:", 
        o: ["A qualidade do áudio em decibéis.", "Os níveis de luminância e sincronismo do sinal de vídeo.", "A temperatura da CPU do servidor de exibição.", "A latência da rede de streaming."], 
        a: 1, 
        e: "O Waveform exibe o sinal de vídeo em forma de onda, permitindo ajustar o branco, o preto e o pedestal dentro dos limites legais (700mV)."  },
    {  id: 256, s: 'e', p: 3, 
        q: "Qual o impacto direto de uma taxa de compressão (GOP - Group of Pictures) muito longa em um sinal de transmissão via satélite?", 
        o: ["Melhora a qualidade das cores em tons pastéis.", "Aumenta a latência da decodificação e dificulta cortes precisos em tempo real.", "Reduz o consumo de energia do transmissor.", "Transforma o sinal progressivo em entrelaçado automaticamente."], 
        a: 1, 
        e: "GOPs longos (Long GOP) economizam banda, mas exigem que o decodificador espere mais quadros para reconstruir a imagem, gerando atraso." },
// === ELITE: CONHECIMENTOS ESPECÍFICOS (STREAMING E BROADCAST IP) ===
    {  id: 257, s: 'e', p: 3, 
        q: "O protocolo SRT (Secure Reliable Transport) tem ganhado espaço sobre o RTMP no streaming profissional por qual motivo principal?", 
        o: ["Ser um protocolo mais antigo e estável.", "Capacidade de corrigir perda de pacotes (ARQ) e oferecer menor latência em redes instáveis.", "Não exigir conexão com a internet para funcionar.", "Transmitir apenas sinais em preto e branco."], 
        a: 1, 
        e: "O SRT utiliza recuperação inteligente de pacotes, sendo superior ao RTMP em conexões de longa distância ou instáveis." },
    { id: 258, s: 'e', p: 3, 
        q: "No contexto de áudio embutido no sinal SDI, quantos canais de áudio (máximo) podem ser transportados simultaneamente na norma HD-SDI?", 
        o: ["2 canais (Estéreo)", "8 canais", "16 canais", "32 canais"], 
        a: 2, 
        e: "A norma SDI permite o transporte de até 16 canais de áudio embutidos (4 grupos de 4 canais)." },
    {  id: 259, s: 'e', p: 3, 
        q: "O que define o 'Dynamic Range' (Alcance Dinâmico) de uma câmera de vídeo profissional?", 
        o: ["A velocidade do zoom da lente.", "A capacidade de capturar detalhes tanto nas áreas mais claras (highlights) quanto nas mais escuras (shadows).", "A quantidade de pixels totais do sensor.", "O tempo de duração da bateria."], 
        a: 1, 
        e: "Câmeras com alto alcance dinâmico evitam que o céu fique 'estourado' ou as sombras fiquem sem detalhe." },
// === BLOCO ELITE: CONHECIMENTOS ESPECÍFICOS (VÍDEO/ÁUDIO) ===
    { id: 3041, s: 'e', p: 3, 
        q: "Na operação de áudio, o efeito indesejado de realimentação sonora, que gera um apito agudo quando o som da caixa volta para o microfone, chama-se:", 
        o: ["Cacofonia.", "Microfonia (Feedback).", "Jitter.", "Cross-fade."], 
        a: 1, 
        e: "Microfonia ocorre em loops de áudio onde a saída é recaptada pela entrada em volume excessivo."  },
    
    {  id: 3042, s: 'e', p: 3, 
        q: "Em sinais SDI, qual o tipo de conector padrão utilizado para garantir a impedância de 75 ohms?", 
        o: ["XLR.", "BNC.", "HDMI.", "RCA."], 
        a: 1, 
        e: "Conectores BNC são o padrão para vídeo profissional SDI em cabos coaxiais de 75 ohms."  },
// === ELITE: CONHECIMENTOS ESPECÍFICOS (ÁUDIO E VÍDEO BROADCAST) ===
    { id: 263, s: 'e', p: 3, 
        q: "Ao trabalhar com áudio digital em estúdios de TV, o termo 'Sample Rate' (Taxa de Amostragem) padrão para broadcast é de:", 
        o: ["44.1 kHz", "48.0 kHz", "96.0 kHz", "192 kHz"], 
        a: 1, 
        e: "O padrão broadcast (EBU/AES) para áudio profissional é 48 kHz." },
    { id: 264, s: 'e', p: 3, 
        q: "Qual a função do protocolo PTP (Precision Time Protocol - IEEE 1588) em infraestruturas de vídeo sobre IP (ST-2110)?", 
        o: ["Comprimir o sinal de vídeo para 4K.", "Garantir o sincronismo de tempo (clock) extremamente preciso entre todos os dispositivos da rede.", "Proteger o sinal contra ataques de hackers.", "Converter áudio analógico em digital."], 
        a: 1, 
        e: "O PTP é o substituto do Genlock analógico em redes IP, garantindo que todos os pacotes de vídeo e áudio estejam em fase." },
    { id: 265, s: 'e', p: 3, 
        q: "O erro visual conhecido como 'Aliasing' em geradores de caracteres é minimizado através de qual processo técnico?", 
        o: ["Aumento do brilho da fonte.", "Anti-aliasing (suavização de bordas por meio de interpolação de cores).", "Mudança da fonte Sans Serif para Serif.", "Uso de cabos HDMI banhados a ouro."], 
        a: 1, 
        e: "O Anti-aliasing suaviza as bordas 'serrilhadas' das letras, tornando a leitura na TV mais confortável."},
    {  id: 266, s: 'e', p: 3, 
        q: "Em um switcher de vídeo, o recurso 'Clean Feed' refere-se a uma saída que:", 
        o: ["Não possui sinal de áudio.", "É idêntica ao Program (PGM), mas sem as sobreposições de caracteres (gráficos/tarjas).", "Possui apenas o sinal da câmera 1.", "Serve para limpar as cabeças de gravação."], 
        a: 1, 
        e: "O Clean Feed é essencial para gravações que precisam ser editadas posteriormente sem os nomes (GCs) fixos na imagem."  },

{ id: 116, 
  s: 'e', 
  p: 3, 
  q: "Um sinal de vídeo 1080p a 59.94Hz transportado via 3G-SDI Level A difere do Level B principalmente por:", 
  correta: "O Level A transportar o sinal como um fluxo único e o Level B combinar dois fluxos de 1.5G (Dual Link).", 
  distracoes: [
    "O Level A usar compressão JPEG2000 e o Level B ser sem perdas.",
    "O Level A ser analógico e o Level B ser estritamente digital.",
    "O Level A não suportar áudio embutido.",
    "O Level B permitir cabos de até 500 metros e o Level A apenas 100 metros.",
    "O Level A ser usado apenas em fibras ópticas e o Level B em cabos coaxiais."
  ],
  e: "Level A (Direct Mapping) é um fluxo único de 3G. Level B (Dual Link) multiplexa dois fluxos de 1.5G." },
// --- VÍDEO E ESPAÇOS DE COR ---
{ id: 401, s: 'e', p: 3, 
  q: "Em relação aos espaços de cor, o padrão Rec. 2020 é superior ao Rec. 709 principalmente por:", 
  correta: "Possuir um gamut de cor muito mais amplo, suportando HDR e profundidade de até 12 bits.", 
  distracoes: [
    "Ser o padrão exclusivo para transmissões em preto e branco.",
    "Utilizar compressão MPEG-2 para reduzir o tamanho dos arquivos.",
    "Ser limitado à resolução SD (480i).",
    "Não suportar resoluções acima de Full HD."
  ],
  e: "Rec. 709 é o padrão HD (SDR). Rec. 2020 é o padrão Ultra HD (UHD/HDR) com gamut estendido." },
// === ESPECÍFICA (CONTEÚDO CÂMARA DE GOIÂNIA - AUDIOVISUAL) ===
{ 
  id: 6001, s: 'e', p: 3, 
  q: "Em uma transmissão digital via SDI, o erro 'Jitter' afeta principalmente:", 
  correta: "A estabilidade temporal do sinal, podendo causar a perda de sincronismo e 'drop' de quadros.", 
  distracoes: [
    "O brilho da imagem, deixando-a mais escura em cabos curtos.",
    "A cor das roupas dos apresentadores, tendendo ao magenta.",
    "O volume do áudio, que fica oscilando entre baixo e alto.",
    "A resolução do vídeo, que cai de 1080p para 480i automaticamente.",
    "O peso físico dos arquivos gravados no servidor de exibição."
  ],
  e: "Jitter é a variação de tempo nos pulsos digitais. É o 'inimigo silencioso' da transmissão SDI." 
},
{ 
  id: 6002, s: 'e', p: 3, 
  q: "Ao configurar o áudio para TV, a diferença entre sinal BALANÇADO e NÃO-BALANÇADO é:", 
  correta: "O sinal balançado usa dois condutores de sinal com fases invertidas para cancelar ruídos e interferências.", 
  distracoes: [
    "O sinal balançado é apenas para microfones de plástico baratos.",
    "O sinal não-balançado permite cabos de até 500 metros sem perda.",
    "O sinal balançado é digital e o não-balançado é estritamente analógico.",
    "Não há diferença técnica, apenas o formato do conector (P10 vs XLR).",
    "O sinal balançado consome mais bateria das câmeras DSLRs."
  ],
  e: "Sinais balançados (XLR) são essenciais em estúdios para evitar o 'hum' de interferência elétrica." 
},
// --- CONHECIMENTOS ESPECÍFICOS (OPERADOR DE CARACTERES) ---
    { 
        id: 2031, s: 'e', p: 3, tema: "Equipamentos de TV",
        q: "Sigla GC em TV significa:",
        o: ["Grade Curricular", "Gerador de Caracteres", "Guia de Cores", "Gravação de Canal", "Grupo de Controle"], 
        a: 1, 
        e: "<b>Técnico:</b> O GC é o software/equipamento responsável por gerar as tarjas de nomes e informações no vídeo." 
    },
    { 
        id: 2032, s: 'e', p: 3, tema: "Vídeo e Formatos",
        q: "Aspect Ratio padrão HD:",
        o: ["4:3", "16:9", "21:9", "1:1", "16:10"], 
        a: 1, 
        e: "<b>Padrão:</b> O formato widescreen (TV Digital) utiliza a proporção <b>16 por 9</b>." 
    },
    { 
        id: 2033, s: 'e', p: 3, tema: "Composição Visual",
        q: "Safe Area serve para:",
        o: ["Esfriar o processador", "Evitar corte de textos na borda", "Guardar backups", "Definir a cor do fundo", "Bloquear usuários"], 
        a: 1, 
        e: "<b>Produção:</b> A <b>Safe Area</b> garante que os caracteres não fiquem cortados em diferentes modelos de TV." 
    },
    { 
        id: 2034, s: 'e', p: 3, tema: "Vídeo e Formatos",
        q: "Canal Alpha representa:",
        o: ["Cor Vermelha", "Transparência", "Brilho", "Saturação", "Contraste"], 
        a: 1, 
        e: "<b>Técnico:</b> Em computação gráfica, o canal <b>Alpha</b> define o nível de transparência de uma imagem ou caractere." 
    },
    { 
        id: 2035, s: 'e', p: 3, tema: "Produção Legislativa",
        q: "GC legislativo padrão identifica:",
        o: ["Nome e Endereço", "Nome, Partido e Cargo", "Salário do Deputado", "Tempo de mandato", "CPF do orador"], 
        a: 1, 
        e: "<b>Padrão TV Senado:</b> A identificação clássica em sessões solenes é composta pelo Nome completo, Partido e Unidade Federativa/Cargo." 
    },
    { 
        id: 2036, s: 'e', p: 3, tema: "Equipamentos de TV",
        q: "Conector de vídeo profissional SDI:",
        o: ["RCA", "BNC", "HDMI", "P10", "VGA"], 
        a: 1, 
        e: "<b>Conectores:</b> O conector <b>BNC</b> é o padrão utilizado para cabos SDI (Serial Digital Interface) em estúdios de TV." 
    },
    { 
        id: 2037, s: 'e', p: 3, tema: "Terminologia TV",
        q: "Texto Crawling corre na:",
        o: ["Vertical de baixo para cima", "Horizontal da direita para esquerda", "Diagonal", "Somente no centro", "De cima para baixo"], 
        a: 1, 
        e: "<b>Técnico:</b> <b>Crawl</b> é o texto que corre horizontalmente (geralmente notícias), enquanto <b>Roll</b> corre na vertical (créditos)." 
    },
    { 
        id: 2038, s: 'e', p: 3, tema: "Produção de GC",
        q: "Template é um:",
        o: ["Erro de sistema", "Modelo pré-formatado", "Hardware de captura", "Manual impresso", "Cabo de rede"], 
        a: 1, 
        e: "<b>Produtividade:</b> O uso de <b>Templates</b> garante a agilidade e o padrão visual da identidade da emissora." 
    },
    { 
        id: 2039, s: 'e', p: 3, tema: "Terminologia TV",
        q: "Chroma Key substitui:",
        o: ["O áudio", "Uma cor por imagem/cenário", "A lente da câmera", "O brilho da luz", "A resolução do vídeo"], 
        a: 1, 
        e: "<b>Efeito:</b> Técnica de sobreposição onde se isola uma cor (verde ou azul) para inserir cenários virtuais." 
    },
    { 
        id: 2040, s: 'e', p: 3, tema: "Composição Visual",
        q: "Essencial para leitura de GC:",
        o: ["Fonte com serifa pequena", "Alto contraste entre letra e fundo", "Usar todas as cores do arco-íris", "Colocar o texto em cima do rosto", "Usar transparência de 90% na letra"], 
        a: 1, 
        e: "<b>Diretriz:</b> Para garantir a <b>Legibilidade</b>, é obrigatório o uso de alto contraste e fontes limpas (geralmente sem serifa)." 
    },


// tecnico de som assembleia legislativa



    { 
        id: 3031, s: 'e', p: 3, tema: "Microfones",
        q: "Sobre as características dos microfones, analise:\nI. Dinâmicos não pedem alimentação.\nII. Condensadores são mais sensíveis.\nIII. Microfones de fita (ribbon) são imunes a pressões sonoras elevadas.",
        o: ["II e III, apenas.", "I e III, apenas.", "II, apenas.", "I, II e III.", "I e II, apenas."], 
        a: 4, 
        e: "<b>Explicação:</b> I e II estão corretas. A III está errada porque microfones de fita são muito frágeis e podem ser danificados por SPL elevado." 
    },
    { 
        id: 3032, s: 'e', p: 3, tema: "Padrões Polares",
        q: "Sobre posicionamento de monitores e microfonia, assinale a sequência correta (V/F):\n() No Cardióide, o monitor deve ficar a 180º.\n() No Supercardióide, o monitor deve ficar a 125º.\n() No Hipercardióide, a rejeição a 180º é total.",
        o: ["V - V - F", "V - F - F", "F - V - V", "F - F - V", "V - V - V"], 
        a: 0, 
        e: "<b>Análise:</b> Super e Hipercardióides possuem um lóbulo traseiro, por isso o ponto de rejeição (nulo) não é 180º, mas sim as diagonais." 
    },
    { 
        id: 3035, s: 'e', p: 3, tema: "Fluxo de Sinal",
        q: "Ligar a saída de potência de um amplificador diretamente na entrada de microfone de uma mesa resulta em:",
        o: ["Um sinal limpo e forte.", "Necessidade de ganho extra.", "Casamento perfeito de impedância.", "Dano físico aos circuitos da mesa.", "Conversão automática para linha."], 
        a: 3, 
        e: "<b>Risco:</b> A voltagem de saída de um amplificador é muito alta para pré-amplificadores de microfone, causando queima imediata." 
    },
    { 
        id: 3038, s: 'e', p: 3, tema: "Medições de Áudio",
        q: "Sobre as escalas de medida, assinale a alternativa correta:",
        o: ["dBFS mede som acústico.", "dB SPL é usado em DAWs.", "0 dBFS é o teto no mundo digital.", "VU meter mede picos instantâneos.", "Peak meter mede volume médio."], 
        a: 2, 
        e: "<b>Explicação:</b> No mundo digital (FS - Full Scale), o 0 é o limite máximo. Qualquer sinal acima disso gera clipping digital." 
    },
    { 
        id: 3040, s: 'e', p: 3, tema: "Cabos e Conectores",
        q: "A técnica de Rejeição em Modo Comum (CMRR) em cabos balanceados serve para:",
        o: ["Aumentar o brilho do áudio.", "Transformar mono em estéreo.", "Eliminar ruídos captados no cabo.", "Alimentar microfones dinâmicos.", "Reduzir a impedância do cabo."], 
        a: 2, 
        e: "<b>Lógica:</b> Ao inverter a fase do sinal 'frio' na entrada, o ruído que entrou igual nos dois fios se cancela por oposição de fase." 
    },





//final do codigo de especifical

















// === INFORMÁTICA (NOVO TEMA) (s: 'i') - Peso 1.0 ===
    { id: 401, s: 'i', p: 1, q: "Qual o componente do computador responsável por realizar os cálculos matemáticos e processar as instruções dos softwares?", o: ["Memória RAM", "Disco Rígido (HD)", "Processador (CPU)", "Placa de Vídeo"], a: 2, e: "A CPU é o cérebro do computador, onde as instruções são processadas." },
    { id: 402, s: 'i', p: 1, q: "No Windows 10, qual o atalho de teclado utilizado para alternar rapidamente entre as janelas abertas?", o: ["Alt + Tab", "Ctrl + C", "Win + L", "Alt + F4"], a: 0, e: "O Alt + Tab é o comando universal para alternância de tarefas." },
    { id: 403, s: 'i', p: 1, q: "O que significa a sigla SSD, dispositivo de armazenamento que substituiu os antigos HDs?", o: ["System Smart Drive", "Solid State Drive", "Super Speed Disk", "Static Source Data"], a: 1, e: "SSD significa Unidade de Estado Sólido, muito mais rápida que os discos mecânicos." },
    { id: 404, s: 'i', p: 1, q: "Qual destes é um exemplo de hardware de saída de dados?", o: ["Teclado", "Mouse", "Monitor de Vídeo", "Scanner"], a: 2, e: "Hardware de saída é aquele que exibe os resultados do processamento ao usuário." },
    { id: 405, s: 'i', p: 1, q: "No Microsoft Excel, qual símbolo deve iniciar obrigatoriamente qualquer fórmula ou função?", o: ["@", "#", "$", "="], a: 3, e: "O sinal de igual (=) avisa ao Excel que o conteúdo da célula é um cálculo." },
    { id: 406, s: 'i', p: 1, q: "Qual protocolo é utilizado para garantir uma conexão segura e criptografada em sites da internet?", o: ["HTTP", "HTTPS", "FTP", "SMTP"], a: 1, e: "O 'S' no HTTPS significa Secure (Seguro), indicando criptografia SSL/TLS." },
    { id: 407, s: 'i', p: 1, q: "O que é um 'Phishing' no contexto de segurança da informação?", o: ["Um antivírus potente", "Um tipo de golpe para roubar dados através de mensagens falsas", "Um componente de hardware", "Uma rede social"], a: 1, e: "Phishing é uma técnica de engenharia social para enganar usuários e obter senhas." },
    { id: 408, s: 'i', p: 1, q: "Qual a principal função da Memória RAM em um computador?", o: ["Armazenar arquivos permanentemente", "Proteger contra vírus", "Armazenar dados temporários que o processador está usando no momento", "Gerar as imagens do monitor"], a: 2, e: "A RAM é uma memória volátil de alta velocidade para uso imediato do sistema." },
    { id: 409, s: 'i', p: 1, q: "No contexto de Inteligência Artificial, o que é o 'Machine Learning'?", o: ["Consertar máquinas quebradas", "Aprendizado de máquina através de padrões em dados", "Um tipo de monitor touch", "Internet de alta velocidade"], a: 1, e: "Machine Learning é a subárea da IA que permite que sistemas aprendam sem serem explicitamente programados." },
    { id: 410, s: 'i', p: 1, q: "Qual a função do atalho Ctrl + Z na maioria dos programas do Windows?", o: ["Copiar", "Colar", "Desfazer a última ação", "Salvar arquivo"], a: 2, e: "Ctrl + Z é o comando padrão para desfazer erros ou ações recentes." },
    { id: 411, s: 'i', p: 1, q: "No Microsoft Word, qual é a função do atalho de teclado 'Ctrl + K'?", o: ["Imprimir o documento", "Inserir um hiperlink", "Colocar o texto em negrito", "Alinhar o texto à direita"], a: 1, e: "O atalho Ctrl+K abre a janela para inserir links em textos selecionados." },
    { id: 412, s: 'i', p: 1, q: "Qual das alternativas abaixo apresenta apenas sistemas operacionais?", o: ["Windows, Linux e Android", "Excel, Word e PowerPoint", "Chrome, Firefox e Edge", "Intel, AMD e Nvidia"], a: 0, e: "Windows, Linux e Android são softwares que gerenciam o hardware e permitem a execução de outros programas." },
    { id: 413, s: 'i', p: 1, q: "O termo 'Cloud Computing' (Computação em Nuvem) refere-se a:", o: ["Aumentar a velocidade do cooler", "Serviços de computação oferecidos através da internet", "Limpar o histórico do navegador", "Um tipo de vírus que ataca o HD"], a: 1, e: "Refere-se ao processamento e armazenamento de dados em servidores remotos acessados via web." },
    { id: 414, s: 'i', p: 1, q: "O que é um 'Firewall' no contexto de segurança de redes?", o: ["Um componente que acelera a internet", "Um sistema que filtra o tráfego de rede para proteger o computador", "Um programa para editar vídeos", "A parte física do roteador"], a: 1, e: "O firewall atua como uma barreira de segurança, autorizando ou bloqueando conexões." },
    { id: 415, s: 'i', p: 1, q: "Qual a função principal de um roteador em uma rede de computadores?", o: ["Processar textos", "Encaminhar pacotes de dados entre redes diferentes", "Armazenar fotos", "Imprimir documentos"], a: 1, e: "O roteador gerencia o tráfego de dados, escolhendo a melhor rota para a informação chegar ao destino." },
    { id: 411, s: 'i', p: 1, q: "No Microsoft Word, qual é a função do atalho de teclado 'Ctrl + K'?", o: ["Imprimir o documento", "Inserir um hiperlink", "Colocar o texto em negrito", "Alinhar o texto à direita"], a: 1, e: "O atalho Ctrl+K abre a janela para inserir links em textos selecionados." },
    { id: 412, s: 'i', p: 1, q: "Qual das alternativas abaixo apresenta apenas sistemas operacionais?", o: ["Windows, Linux e Android", "Excel, Word e PowerPoint", "Chrome, Firefox e Edge", "Intel, AMD e Nvidia"], a: 0, e: "Windows, Linux e Android são softwares que gerenciam o hardware e permitem a execução de outros programas." },
    { id: 413, s: 'i', p: 1, q: "O termo 'Cloud Computing' (Computação em Nuvem) refere-se a:", o: ["Aumentar a velocidade do cooler", "Serviços de computação oferecidos através da internet", "Limpar o histórico do navegador", "Um tipo de vírus que ataca o HD"], a: 1, e: "Refere-se ao processamento e armazenamento de dados em servidores remotos acessados via web." },
    { id: 414, s: 'i', p: 1, q: "O que é um 'Firewall' no contexto de segurança de redes?", o: ["Um componente que acelera a internet", "Um sistema que filtra o tráfego de rede para proteger o computador", "Um programa para editar vídeos", "A parte física do roteador"], a: 1, e: "O firewall atua como uma barreira de segurança, autorizando ou bloqueando conexões." },
    { id: 415, s: 'i', p: 1, q: "Qual a função principal de um roteador em uma rede de computadores?", o: ["Processar textos", "Encaminhar pacotes de dados entre redes diferentes", "Armazenar fotos", "Imprimir documentos"], a: 1, e: "O roteador gerencia o tráfego de dados, escolhendo a melhor rota para a informação chegar ao destino." },
   // === ELITE: INFORMÁTICA (Redes e Segurança) ===
    { id: 416, s: 'i', p: 1, q: "Qual topologia de rede é caracterizada por um nó central que gerencia todas as comunicações, comum em redes Wi-Fi de escritórios?", o: ["Anel (Ring)", "Estrela (Star)", "Barramento (Bus)", "Malha (Mesh)"], a: 1, e: "Na topologia Estrela, todos os dispositivos se conectam a um ponto central (Switch ou AP)." },
    { id: 417, s: 'i', p: 1, q: "No Windows 10, o que faz o comando 'ping' executado no Prompt de Comando (CMD)?", o: ["Apaga arquivos temporários", "Testa a conectividade e a latência com outro endereço IP", "Formata o pendrive", "Altera a senha do usuário"], a: 1, e: "O ping envia pacotes ICMP para verificar se um destino está alcançável e o tempo de resposta." },
// === ELITE: INFORMÁTICA (Redes, Segurança e Servidores) ===
    {  id: 418, s: 'i', p: 1, 
        q: "Em uma infraestrutura de rede corporativa, qual a função específica de um servidor que executa o serviço de DHCP?", 
        o: ["Armazenar as páginas de internet acessadas pelos servidores.", "Traduzir nomes de domínios (URLs) em endereços IP numéricos.", "Atribuir endereços IP de forma dinâmica e automática aos computadores da rede.", "Realizar o backup diário dos arquivos da Câmara."], 
        a: 2, 
        e: "O DHCP (Dynamic Host Configuration Protocol) gerencia a entrega de IPs para que o administrador não precise configurar cada máquina manualmente." },
    {  id: 419, s: 'i', p: 1, 
        q: "Considerando as ameaças de segurança digital, um 'Ransomware' é classificado como um software malicioso que tem por objetivo:", 
        o: ["Capturar todas as teclas digitadas pelo usuário para roubar senhas.", "Monitorar o uso da webcam sem autorização.", "Criptografar arquivos do sistema e exigir um resgate financeiro para a liberação.", "Aumentar a velocidade do processador para causar superaquecimento."], 
        a: 2, 
        e: "Ransomware é um tipo de sequestro digital de dados através de criptografia forte." },
// === ELITE: INFORMÁTICA (Hardware e Servidores) ===
    { id: 420, s: 'i', p: 1, 
        q: "Em servidores de alto desempenho, a tecnologia RAID 10 (ou 1+0) caracteriza-se por:", 
        o: ["Priorizar apenas a capacidade total de armazenamento, sem segurança.", "Combinar o espelhamento (Mirroring) do RAID 1 com o fracionamento (Striping) do RAID 0.", "Usar apenas um disco para paridade e os demais para dados.", "Ser uma tecnologia exclusiva para discos rígidos mecânicos (SATA)."], 
        a: 1, 
        e: "O RAID 10 oferece alta velocidade e alta redundância, espelhando os dados e depois distribuindo-os entre os pares de discos." },
    {id: 421, s: 'i', p: 1, 
        q: "Qual a função de um servidor de 'Proxy' em uma rede corporativa como a da Câmara de Goiânia?", 
        o: ["Gerar endereços IP dinâmicos para os computadores.", "Atuar como intermediário para requisições de clientes solicitando recursos de outros servidores, permitindo cache e filtragem de conteúdo.", "Realizar o backup físico das mídias digitais.", "Monitorar a temperatura física da sala de racks."], 
        a: 1, 
        e: "O Proxy centraliza o tráfego web, podendo acelerar o acesso através de cache e aplicar políticas de segurança e bloqueio de sites." },
// === ELITE: INFORMÁTICA (Segurança e Redes Avançadas) ===
    { id: 422, s: 'i', p: 1, 
        q: "No contexto de endereçamento IP, qual a função da 'Máscara de Sub-rede' (Subnet Mask)?", 
        o: ["Aumentar a velocidade da conexão Wi-Fi.", "Definir qual parte do endereço IP refere-se à rede e qual parte refere-se ao host (dispositivo).", "Esconder o endereço real do computador na internet.", "Atribuir um nome amigável ao site (ex: google.com)."], 
        a: 1, 
        e: "A máscara (ex: 255.255.255.0) separa o ID da rede do ID do dispositivo, essencial para o roteamento de dados." },
    { id: 423, s: 'i', p: 1, 
        q: "A técnica de 'Spoofing' em ataques cibernéticos consiste em:", 
        o: ["Criptografar o HD para pedir resgate.", "Falsificar a identidade de um endereço IP, e-mail ou DNS para ganhar acesso a uma rede.", "Derrubar um servidor através de excesso de acessos simultâneos.", "Roubar a senha física através de câmeras de segurança."], 
        a: 1, 
        e: "Spoofing é uma técnica de falsificação de origem para enganar sistemas de segurança." },
// === ELITE: INFORMÁTICA (EXCEL AVANÇADO E REDES) ===
    { id: 424, s: 'i', p: 1, 
        q: "No Microsoft Excel, a função =PROCV(valor_procurado; matriz_tabela; indice; [procurar_intervalo]) realiza qual tarefa?", 
        o: ["Soma apenas valores positivos de uma lista.", "Procura um valor na primeira coluna à esquerda de uma tabela e retorna um valor na mesma linha de uma coluna especificada.", "Inverte a ordem das linhas e colunas.", "Protege a planilha com uma senha criptografada."], 
        a: 1, 
        e: "PROCV significa Procura Vertical, essencial para cruzar dados entre tabelas diferentes." },
    {  id: 425, s: 'i', p: 1, 
        q: "Qual a principal diferença entre os protocolos de transporte TCP e UDP?", 
        o: ["O TCP é mais rápido, mas menos seguro que o UDP.", "O TCP garante a entrega e a ordem dos pacotes (orientado à conexão), enquanto o UDP prioriza a velocidade sem garantir a entrega.", "O UDP é usado apenas para e-mails e o TCP para vídeos.", "Não há diferença técnica, são sinônimos."], 
        a: 1, 
        e: "TCP é usado onde a integridade é vital (ex: sites); UDP é usado onde a velocidade é vital (ex: chamadas de vídeo)." },
// === ELITE: HARDWARE DE VÍDEO E SWITCHER (s: 'e') ===
    { id: 260, s: 'e', p: 3, 
        q: "Ao operar um switcher de grande porte (como Ross Carbonite ou Blackmagic Constellation), o termo 'Upstream Keyer' (USK) refere-se a uma chave que atua em qual momento do fluxo?", 
        o: ["Após a transição final do PGM.", "Antes das transições de corte e mix do barramento principal.", "Apenas no sinal de áudio.", "Exclusivamente para o multiviewer."], 
        a: 1, 
        e: "O USK (Upstream) é processado antes da transição principal, permitindo criar camadas que 'viajam' junto com o corte da câmera." },
    {  id: 261, s: 'e', p: 3, 
        q: "Em um ambiente broadcast, a função 'Frame Delay' (atraso de quadro) é frequentemente aplicada para corrigir qual problema técnico?", 
        o: ["Falta de brilho na imagem.", "Sincronização de 'Lip Sync' (atraso entre o áudio e o movimento labial do apresentador).", "Melhorar a resolução do sinal 720p para 1080p.", "Aumentar a vida útil das lâmpadas do estúdio."], 
        a: 1, 
        e: "Como o processamento de vídeo é mais pesado que o de áudio, usa-se o delay para alinhar os dois sinais perfeitamente."  },
// === ELITE: INFORMÁTICA E EXCEL AVANÇADO (s: 'i') ===
    {  id: 426, s: 'i', p: 1, 
        q: "No Microsoft Excel, qual das seguintes fórmulas retornaria o valor 'Aprovado' caso a célula A1 seja maior ou igual a 7, e 'Reprovado' caso seja menor?", 
        o: ["=SE(A1>=7;'Aprovado';'Reprovado')", "=SE(A1>7;'Reprovado';'Aprovado')", "=CONT.SE(A1;7;'Aprovado')", "=PROCV(A1;7;'Aprovado')"], 
        a: 0, 
        e: "A função SE realiza um teste lógico: (condição; valor_se_verdade; valor_se_falso)."  },
    { id: 427, s: 'i', p: 1, 
        q: "O que define um ataque de 'Denial of Service' (DoS) contra um servidor de transmissão da Câmara?", 
        o: ["Roubo de senhas por meio de e-mails falsos.", "Sobrecarga do servidor com requisições simultâneas para torná-lo indisponível aos usuários legítimos.", "Instalação de um vírus que espiona a webcam.", "Falsificação física do crachá do técnico."], 
        a: 1, 
        e: "O ataque de Negação de Serviço visa derrubar sistemas inundando-os com tráfego inútil."  },
// === ELITE: INFORMÁTICA E REDES (s: 'i') ===
    { id: 428, s: 'i', p: 1, 
        q: "Qual a função de um servidor de 'DNS' (Domain Name System) em uma rede de computadores?", 
        o: ["Atribuir endereços IP automaticamente.", "Traduzir nomes de domínio (como www.goiania.go.leg.br) em endereços IP numéricos.", "Bloquear o acesso de sites maliciosos.", "Realizar a varredura de vírus em e-mails."], 
        a: 1, 
        e: "O DNS é a 'lista telefônica' da internet, resolvendo nomes em IPs para que os roteadores saibam para onde enviar os dados." },
    {  id: 429, s: 'i', p: 1, 
        q: "O que caracteriza a tecnologia de virtualização de servidores, amplamente utilizada em data centers?", 
        o: ["Aumentar o tamanho físico dos servidores.", "Executar múltiplos sistemas operacionais independentes em um único hardware físico.", "Eliminar a necessidade de cabos de rede.", "Substituir o uso de memórias RAM por HDs externos."], 
        a: 1, 
        e: "Virtualização permite otimizar hardware, rodando vários servidores virtuais em uma única máquina física (host)." },
    {  id: 430, s: 'i', p: 1, 
        q: "No Microsoft Windows 10, o que acontece ao pressionar a combinação de teclas 'Win + D'?", 
        o: ["Abre o Explorador de Arquivos.", "Minimiza todas as janelas e mostra a Área de Trabalho.", "Bloqueia o computador imediatamente.", "Abre o Painel de Controle."], 
        a: 1, 
        e: "Win + D é o atalho para 'Show Desktop'."  },  
    { id: 502, s: 'g', p: 2, 
        q: "Conforme o Regimento Interno da Câmara Municipal de Goiânia, qual o quórum necessário para a abertura de uma Sessão Ordinária?", 
        o: ["A presença de qualquer número de vereadores.", "A presença da maioria absoluta dos membros (18 vereadores).", "A presença de um terço dos membros da Casa.", "Apenas a presença do Presidente e do Primeiro Secretário."], 
        a: 2, 
        e: "O Art. 104 do RI define que as sessões só iniciam com a presença de, no mínimo, 1/3 dos membros."  },
    { id: 503, s: 'g', p: 2, 
        q: "No que tange ao Regime Jurídico Único, o deslocamento do servidor, a pedido ou de ofício, com preenchimento de vaga, no âmbito do mesmo quadro, denomina-se:", 
        o: ["Redistribuição.", "Remoção.", "Ascensão.", "Readaptação."], 
        a: 1, 
        e: "Remoção é o deslocamento do servidor dentro do mesmo quadro. Redistribuição é o deslocamento do cargo." },
    { id: 504, s: 'g', p: 2, 
        q: "Compete privativamente ao Prefeito Municipal de Goiânia a iniciativa de leis que disponham sobre:", 
        o: ["Criação de cargos, funções ou empregos públicos na administração direta.", "Homenagens a cidadãos ilustres.", "Denominação de logradouros públicos.", "Criação de comissões parlamentares de inquérito."], 
        a: 0, 
        e: "Matérias que geram despesa ou tratam da estrutura do Executivo são de iniciativa exclusiva do Prefeito." },
    { id: 505, s: 'g', p: 2, 
        q: "Qual comissão permanente da Câmara de Goiânia deve, obrigatoriamente, manifestar-se sobre o aspecto constitucional e legal de todas as proposições?", 
        o: ["Comissão de Finanças e Orçamento.", "Comissão de Trabalho e Servidor Público.", "Comissão de Constituição, Justiça e Redação (CCJR).", "Comissão de Ética e Decoro Parlamentar."], 
        a: 2, 
        e: "A CCJR é o filtro de legalidade da Casa. Sem o parecer dela, o projeto não prossegue conforme a norma." },
// === ELITE: INFORMÁTICA E REDES (s: 'i') ===
    { id: 427, s: 'i', p: 1, 
        q: "O que define um ataque de 'Denial of Service' (DoS) contra um servidor de transmissão da Câmara?", 
        o: ["Roubo de senhas por meio de e-mails falsos.", "Sobrecarga do servidor com requisições simultâneas para torná-lo indisponível aos usuários legítimos.", "Instalação de um vírus que espiona a webcam.", "Falsificação física do crachá do técnico."], 
        a: 1, 
        e: "O ataque de Negação de Serviço visa derrubar sistemas inundando-os com tráfego inútil." },
    { id: 428, s: 'i', p: 1, 
        q: "Qual a função de um servidor de 'DNS' (Domain Name System) em uma rede de computadores?", 
        o: ["Atribuir endereços IP automaticamente.", "Traduzir nomes de domínio (como www.goiania.go.leg.br) em endereços IP numéricos.", "Bloquear o acesso de sites maliciosos.", "Realizar a varredura de vírus em e-mails."], 
        a: 1, 
        e: "O DNS é a 'lista telefônica' da internet, resolvendo nomes em IPs para que os roteadores saibam para onde enviar os dados." },
    { id: 429, s: 'i', p: 1, 
        q: "O que caracteriza a tecnologia de virtualização de servidores, amplamente utilizada em data centers?", 
        o: ["Aumentar o tamanho físico dos servidores.", "Executar múltiplos sistemas operacionais independentes em um único hardware físico.", "Eliminar a necessidade de cabos de rede.", "Substituir o uso de memórias RAM por HDs externos."], 
        a: 1, 
        e: "Virtualização permite otimizar hardware, rodando vários servidores virtuais em uma única máquina física (host)." },
    {  id: 430, s: 'i', p: 1, 
        q: "No Microsoft Windows 10, o que acontece ao pressionar a combinação de teclas 'Win + D'?", 
        o: ["Abre o Explorador de Arquivos.", "Minimiza todas as janelas e mostra a Área de Trabalho.", "Bloqueia o computador imediatamente.", "Abre o Painel de Controle."], 
        a: 1, 
        e: "Win + D é o atalho para 'Show Desktop'."  },
   { id: 502, s: 'g', p: 2, 
        q: "Conforme o Regimento Interno da Câmara Municipal de Goiânia, qual o quórum necessário para a abertura de uma Sessão Ordinária?", 
        o: ["A presença de qualquer número de vereadores.", "A presença da maioria absoluta dos membros (18 vereadores).", "A presença de um terço dos membros da Casa.", "Apenas a presença do Presidente e do Primeiro Secretário."], 
        a: 2, 
        e: "O Art. 104 do RI define que as sessões só iniciam com a presença de, no mínimo, 1/3 dos membros." },
    {  id: 503, s: 'g', p: 2, 
        q: "No que tange ao Regime Jurídico Único, o deslocamento do servidor, a pedido ou de ofício, com preenchimento de vaga, no âmbito do mesmo quadro, denomina-se:", 
        o: ["Redistribuição.", "Remoção.", "Ascensão.", "Readaptação."], 
        a: 1, 
        e: "Remoção é o deslocamento do servidor dentro do mesmo quadro. Redistribuição é o deslocamento do cargo." },
    {  id: 504, s: 'g', p: 2, 
        q: "Compete privativamente ao Prefeito Municipal de Goiânia a iniciativa de leis que disponham sobre:", 
        o: ["Criação de cargos, funções ou empregos públicos na administração direta.", "Homenagens a cidadãos ilustres.", "Denominação de logradouros públicos.", "Criação de comissões parlamentares de inquérito."], 
        a: 0, 
        e: "Matérias que geram despesa ou tratam da estrutura do Executivo são de iniciativa exclusiva do Prefeito."  },
    {  id: 505, s: 'g', p: 2, 
        q: "Qual comissão permanente da Câmara de Goiânia deve, obrigatoriamente, manifestar-se sobre o aspecto constitucional e legal de todas as proposições?", 
        o: ["Comissão de Finanças e Orçamento.", "Comissão de Trabalho e Servidor Público.", "Comissão de Constituição, Justiça e Redação (CCJR).", "Comissão de Ética e Decoro Parlamentar."], 
        a: 2, 
        e: "A CCJR é o filtro de legalidade da Casa. Sem o parecer dela, o projeto não prossegue conforme a norma." },
 // === ELITE: INFORMÁTICA (HARDWARE, REDES E SEGURANÇA) ===
    {  id: 601, s: 'i', p: 1, 
        q: "Em uma rede local de computadores (LAN), qual dispositivo é responsável por centralizar a conexão e encaminhar os quadros de dados especificamente para a porta do destinatário, baseando-se no endereço MAC?", 
        o: ["Hub.", "Repetidor.", "Switch (Comutador).", "Modem analógico."], 
        a: 2, 
        e: "Diferente do Hub (que replica para todos), o Switch é inteligente e envia os dados apenas para o destino correto." },
    { id: 602, s: 'i', p: 1, 
        q: "No Microsoft Windows 10, o recurso que permite 'congelar' o estado atual do computador, salvando os dados da RAM no HD/SSD e desligando o hardware completamente, denomina-se:", 
        o: ["Suspender.", "Reiniciar.", "Hibernar.", "Logoff."], 
        a: 2, 
        e: "Hibernação salva tudo no disco rígido, permitindo que a energia seja cortada sem perder o trabalho atual." },
    {  id: 603, s: 'i', p: 1, 
        q: "Qual protocolo de e-mail é utilizado para sincronizar mensagens entre o servidor e múltiplos dispositivos, mantendo as alterações (como lidas ou excluídas) em todos eles?", 
        o: ["POP3.", "SMTP.", "IMAP.", "HTTP."], 
        a: 2, 
        e: "O IMAP mantém as mensagens no servidor e sincroniza o estado entre celular, PC e webmail." },
    { id: 604, s: 'i', p: 1, 
        q: "Considerando a segurança da informação, a 'Integridade' garante que:", 
        o: ["A informação esteja disponível sempre que necessário.", "A informação só seja acessada por pessoas autorizadas.", "A informação não tenha sido alterada por pessoas não autorizadas durante o processo.", "A origem da informação possa ser comprovada juridicamente."], 
        a: 2, 
        e: "Integridade foca na proteção contra alterações não autorizadas nos dados."  },
    {  id: 605, s: 'i', p: 1, 
        q: "O componente físico da placa-mãe que armazena o firmware responsável pelo processo de boot (inicialização) e pelas configurações básicas de hardware é o:", 
        o: ["Chipset.", "Slot PCI Express.", "Chip da BIOS/UEFI.", "Socket do Processador."], 
        a: 2, 
        e: "A BIOS (ou UEFI moderna) é o primeiro software executado ao ligar o computador." },
    {  id: 802, s: 'g', p: 2, 
        q: "O ato pelo qual o Prefeito Municipal manifesta sua concordância com o projeto de lei aprovado pela Câmara denomina-se:", 
        o: ["Promulgação.", "Publicação.", "Sanção.", "Ratificação."], 
        a: 2, 
        e: "Sanção é o ato de concordância do Executivo. Se ele discordar, ele Veta."  },
    {  id: 803, s: 'g', p: 2, 
        q: "De acordo com o Estatuto do Servidor de Goiânia (LC 011/92), a investidura em cargo público ocorre com a:", 
        o: ["Nomeação.", "Posse.", "Entrada em exercício.", "Aprovação final no concurso."], 
        a: 1, 
        e: "É na POSSE que o vínculo jurídico se forma e o cidadão se torna servidor." },
// === BLOCO ELITE: INFORMÁTICA ===
    {  id: 3031, s: 'i', p: 1, 
        q: "Em redes de computadores, o protocolo responsável por converter nomes de domínio (como camara.go.gov.br) em endereços IP é o:", 
        o: ["HTTP.", "FTP.", "DNS.", "DHCP."], 
        a: 2, 
        e: "DNS (Domain Name System) faz a tradução de nomes para números IP." },


//PROVA ASSEMBLEIA LEGISLATIVA DE GOIAS - TECNICO DE SOM (PROVA COMPLETA)


    
  
    // --- LÍNGUA PORTUGUESA (1-8) ---
   
    { 
        id: 3001, s: 'p', p: 2, tema: "ALEGO - Português",
        q: `<div style="background:#f1f3f5; padding:15px; border-left:4px solid #002855; margin-bottom:15px; font-style:italic; font-size:0.95em;">
            "O empresário Danilo Bastos comprou cenários e guarda-roupa para uma peça sobre Lucrécia Bórgia. Contratou Nestor de Holanda para escrever o texto e deixou claro:<br>
            - O primeiro ato termina com Alexandre VI coroando Lucrécia rainha da Itália.<br>
            Nestor se admirou:<br>
            - Lucrécia nunca foi rainha da Itália.<br>
            Danilo não quis saber:<br>
            - Ah, se nunca foi, vai ser. Gastei mais de um milhão nos cenários e no guarda-roupa. Não posso perder esse dinheiro."<br>
            <span style="display:block; text-align:right; font-size:0.8em; margin-top:5px;">(Livro dos Erros - Mário Goulart)</span>
            </div>
            Sobre o texto acima, assinale a opção que mostra uma observação INADEQUADA sobre o emprego de nomes próprios:`,
        o: [
            "'Danilo Bastos' aparece identificado por 'empresário' por, presumivelmente, não ser conhecido por boa parte dos leitores.",
            "'Danilo Bastos' aparece com nome e sobrenome por ser personagem de alguma formalidade.",
            "'Lucrécia Bórgia' e 'Alexandre VI' não aparecem identificados por serem, segundo o autor, bem conhecidos.",
            "Tanto 'Danilo Bastos' como 'Lucrécia Bórgia' podem ser identificados, na continuidade, pelo prenome ou sobrenome.",
            "'Nestor de Holanda' é identificado por 'Nestor' na continuidade do texto, por já ter sido citado antes."
        ], 
        a: 1, 
        e: "<b>Interpretação:</b> A opção B é inadequada. O uso de nome completo na primeira citação é uma norma jornalística de apresentação para situar o leitor, não um sinal de 'cerimônia' ou formalidade excessiva." 
    },
    { 
        id: 3002, s: 'p', p: 2, tema: "ALEGO - Português",
        q: `No segmento do texto "e deixou claro", o termo "claro" é um adjetivo que funciona como advérbio (= claramente). Assinale a opção em que ocorre o mesmo processo.`,
        o: [
            "O vendeiro foi direito ao grupo.",
            "Tudo ali prosperava forte em grosso.",
            "Ele deve estar ensopado de suor.",
            "Via-se uma miserável estrebaria.",
            "Um octogenário seco, que parecia mumificado."
        ], 
        a: 0, 
        e: "<b>Morfologia:</b> Em 'foi direito', o adjetivo 'direito' modifica o verbo 'ir', significando 'diretamente' (advérbio de modo), assim como 'claro' modifica 'deixou'." 
    },
    { 
        id: 3003, s: 'p', p: 2, tema: "ALEGO - Português",
        q: `Assinale a opção que apresenta a única frase, retirada do romance O Cortiço, de Aluísio Azevedo, que se mostra gramaticalmente incorreta quanto ao emprego do gerúndio.`,
        o: [
            "Você quer encarregar-se disto? ... parando ambos à espera do bonde.",
            "...era vista com frequência ... empinando muito a barriga para a frente.",
            "...que muitas vezes lhe arrancara, a ele, sinceras lágrimas ... declamando no teatro.",
            "O rapaz não respondeu à carta, e, daí a meses, desaparecendo Pombinha ... essa quase morre.",
            "A cadeia continuava ... o cortiço estava preparando uma nova prostituta."
        ], 
        a: 3, 
        e: "<b>Sintaxe:</b> O gerúndio 'desaparecendo' cria uma oração reduzida que soa desconexa temporalmente ('daí a meses') em relação ao desfecho da frase, indicando uma ação posterior e não simultânea." 
    },
    { 
        id: 3004, s: 'p', p: 2, tema: "ALEGO - Português",
        q: `No texto, o termo "peça" é retomado por "o texto". Esse tipo de retomada, por meio de um termo de significação mais ampla (hiperônimo), ocorre também em:`,
        o: [
            "O armário do quarto era pesado ... transportar a peça.",
            "A obra era bastante volumosa ... a leitura do romance.",
            "Atrás da porta estava uma eletrola ... notava a sua presença.",
            "O enfermo deixava o remédio ... tomar o medicamento.",
            "Havia muitos indígenas ... interesse dos povos originários."
        ], 
        a: 3, 
        e: "<b>Coesão:</b> 'Medicamento' é um hiperônimo (termo mais geral/classe) usado para retomar 'Remédio' (termo específico), evitando repetição." 
    },
    { 
        id: 3005, s: 'p', p: 2, tema: "ALEGO - Português",
        q: `<div style="background:#f1f3f5; padding:15px; border-left:4px solid #002855; margin-bottom:15px; font-style:italic; font-size:0.95em;">
            "O bispo de Botucatu encomendou pinturas religiosas a Cândido Portinari. Na entrega das obras, o bispo começou a fazer observações, criticando isto e aquilo. Portinari logo o interrompeu:<br>
            - O senhor, na sua profissão é bispo. Eu, na minha, sou papa."<br>
            <span style="display:block; text-align:right; font-size:0.8em; margin-top:5px;">(Livro dos Erros - Mário Goulart)</span>
            </div>
            O texto acima apresenta qual modo de organização discursiva?`,
        o: ["Dissertativo-argumentativo.", "Dissertativo-expositivo.", "Narrativo.", "Descritivo.", "Injuntivo."], 
        a: 2, 
        e: "<b>Tipologia:</b> É um texto <b>Narrativo</b>, pois relata uma sequência de ações com personagens, tempo e espaço definidos." 
    },
    { 
        id: 3006, s: 'p', p: 2, tema: "ALEGO - Português",
        q: `Sobre a significação do texto do Bispo e Portinari (citado na questão anterior), assinale a afirmativa correta:`,
        o: [
            "Há uma crítica indireta ao bispo de Botucatu no primeiro período.",
            "As pinturas foram designadas 'obras' para valorizá-las.",
            "Os pronomes 'isto e aquilo' não têm antecedentes.",
            "As palavras 'bispo' e 'papa' estão em sentido figurado.",
            "As comparações mostram a superioridade de ambos em seus respectivos campos."
        ], 
        a: 4, 
        e: "<b>Interpretação:</b> A resposta de Portinari ('Eu, na minha, sou papa') estabelece que, assim como o bispo manda na igreja, o pintor é a autoridade máxima em sua arte, igualando ou superando a hierarquia." 
    },
    { 
        id: 3007, s: 'p', p: 2, tema: "ALEGO - Português",
        q: `Assinale a frase em que a substituição do verbo "pôr" pelo verbo indicado entre parênteses é ADEQUADA:`,
        o: [
            "Pois já puseram internet (uniram).",
            "O menino se pôs debaixo da mesa (enfiou).",
            "O médico pôs uma pomada (aconselhou).",
            "Que ponhamos os livros em ordem (situemos).",
            "Tinha que pôr mais açúcar (juntar)."
        ], 
        a: 1, 
        e: "<b>Semântica:</b> 'Enfiou-se' ou 'Meteu-se' debaixo da mesa são sinônimos coloquiais válidos para 'se pôs' neste contexto de entrar em local apertado." 
    },
    { 
        id: 3008, s: 'p', p: 2, tema: "ALEGO - Português",
        q: `<div style="background:#f1f3f5; padding:15px; border-left:4px solid #002855; margin-bottom:15px; font-style:italic; font-size:0.95em;">
            "Gosto de ir aos cemitérios, admirar os túmulos dos que venceram na vida". (Eno Teodoro Wanke)
            </div>
            Sobre a frase acima, assinale a afirmativa correta:`,
        o: [
            "A norma culta recomenda 'nos cemitérios'.",
            "A vírgula mostra que são duas ações distintas (ir e admirar).",
            "O sujeito de 'gostar' não é identificável.",
            "O substantivo 'túmulos' tem artigo definido pois está determinado ('dos que venceram').",
            "O sufixo 'tério' significa 'morte'."
        ], 
        a: 3, 
        e: "<b>Sintaxe:</b> O artigo 'os' em 'os túmulos' é obrigatório porque o termo é seguido de uma restrição determinativa: 'dos que venceram na vida'." 
    },

    // =================================================================================
    // RACIOCÍNIO LÓGICO (Questões 9 a 11)
    // =================================================================================
    { 
        id: 3009, s: 'r', p: 2, tema: "ALEGO - Raciocínio Lógico",
        q: `Considere como verdadeiras as seguintes sentenças:<br>
            I. O carro é preto.<br>
            II. A moto não é branca.<br>
            III. A bicicleta é vermelha.<br>
            É correto concluir que:`,
        o: [
            "Se o carro é preto e a moto não é branca, então a bicicleta não é vermelha.",
            "Se o carro não é preto ou a moto não é branca, então a bicicleta não é vermelha.",
            "Se a bicicleta não é vermelha ou o carro é preto, então a moto é branca.",
            "Se a bicicleta não é vermelha e o carro é preto, então a moto é branca.",
            "Se a moto não é branca, então o carro não é preto."
        ], 
        a: 3, 
        e: "<b>Lógica:</b> Vamos analisar a opção D: 'Se a bicicleta não é vermelha (F) e o carro é preto (V)...'. O antecedente (F e V) resulta em FALSO. Em uma condicional, se o 'Se' é Falso, a proposição inteira é automaticamente VERDADEIRA." 
    },
    { 
        id: 3010, s: 'r', p: 2, tema: "ALEGO - Raciocínio Lógico",
        q: `Uma sentença logicamente equivalente a: "Se a bola é branca e a caixa não é azul, então a ficha é vermelha" é:`,
        o: [
            "Se a bola não é branca e a caixa é azul, então a ficha não é vermelha.",
            "Se a ficha é vermelha, então a bola é branca e a caixa não é azul.",
            "A bola não é branca ou a caixa é azul ou a ficha é vermelha.",
            "A bola não é branca ou a caixa não é azul ou a ficha é vermelha.",
            "A bola não é branca e a caixa é azul e a ficha é vermelha."
        ], 
        a: 2, 
        e: "<b>Equivalência:</b> Aplicando a regra da Disjunção (~P v Q). Negamos o antecedente (Bola Branca E Caixa ~Azul) pela Lei de De Morgan, resultando em (Bola ~Branca OU Caixa Azul). Mantemos o consequente (Ficha Vermelha)." 
    },
    { 
        id: 3011, s: 'r', p: 2, tema: "ALEGO - Raciocínio Lógico",
        q: `Considere a sequência (5, 4, -1, -5, -4, ...), onde cada termo, a partir do terceiro, é a diferença entre o penúltimo e o último termo. O 2025º termo dessa sequência é:`,
        o: ["-5", "-4", "-1", "1", "4"], 
        a: 2, 
        e: "<b>Sequências:</b> A sequência completa é cíclica: 5, 4, -1, -5, -4, 1... (repete a cada 6 números). Dividindo 2025 por 6, obtemos resto 3. Logo, o termo procurado é o 3º da sequência, que é -1." 
    },

    // =================================================================================
    // INFORMÁTICA (Questões 12 a 14)
    // =================================================================================
    { 
        id: 3012, s: 'i', p: 1, tema: "ALEGO - Informática",
        q: `Assinale a opção que indica o caminho completo no Windows 10 (versão português) para acessar, em uma única janela, a configuração para usuários canhotos do mouse e o plano de energia para alto desempenho:`,
        o: [
            "Painel de Controle -> Hardware e Sons -> Mouse e Painel de Controle -> Hardware e Sons -> Opções de Energia.",
            "Configurações (Windows + I) -> Dispositivos -> Mouse -> Escolher o botão principal e Configurações -> Sistema -> Tela.",
            "Configurações (Windows + I) -> Dispositivos -> Mouse -> Escolher o botão principal e Configurações -> Sistema -> Energia e suspensão -> Configurações de energia adicionais.",
            "Configurações (Windows + I) -> Facilidade de Acesso -> Mouse -> Usar teclado numérico e Configurações -> Sistema -> Sobre.",
            "Painel de Controle -> Facilidade de Acesso -> Central de Facilidade de Acesso e Configurações -> Atualização e Segurança -> Recuperação."
        ], 
        a: 2, 
        e: "<b>Windows 10:</b> As configurações de mouse (botão primário) ficam em 'Dispositivos'. As opções de energia avançadas são acessadas via 'Sistema > Energia e Suspensão' e depois no link para configurações adicionais." 
    },
    { 
        id: 3013, s: 'i', p: 1, tema: "ALEGO - Informática",
        q: `Para criar uma tabela comparativa na ALE-GO com valores orçados e executados, permitindo cálculos automáticos (percentuais e variações) e geração de gráficos, o tipo de arquivo mais adequado é:`,
        o: [
            "Uma planilha eletrônica (formato .XLSX).",
            "Uma apresentação de slides (formato .PPTX).",
            "Um documento de texto (formato .DOCX).",
            "Um banco de dados (formato .ACCDB).",
            "Um arquivo de imagem (formato .PNG)."
        ], 
        a: 0, 
        e: "<b>Excel:</b> O formato .XLSX é o padrão nativo para planilhas eletrônicas, ideal para manipulação de dados numéricos, fórmulas e visualização gráfica." 
    },
    { 
        id: 3014, s: 'i', p: 1, tema: "ALEGO - Informática",
        q: `Ao acessar um site de notícias, um Assessor Legislativo vê o anúncio: "SEU COMPUTADOR PODE ESTAR INFECTADO! CLIQUE AQUI PARA VERIFICAR AGORA!". Essa prática maliciosa, que usa falsos alertas para enganar o usuário, é conhecida como:`,
        o: ["Phishing.", "Spam.", "Ransomware.", "Backdoor.", "Scareware."], 
        a: 4, 
        e: "<b>Segurança:</b> O termo correto é <b>Scareware</b> (software do medo). Ele simula um problema de segurança para induzir o usuário a baixar malware ou comprar serviços falsos." 
    },

    // =================================================================================
    // HISTÓRIA E GEOGRAFIA DE GOIÁS (Questões 15 a 17)
    // =================================================================================
    { 
        id: 3015, s: 'g', p: 2, tema: "ALEGO - História GO",
        q: `<div style="background:#f1f3f5; padding:15px; border-left:4px solid #002855; margin-bottom:15px; font-style:italic; font-size:0.95em;">
            "O ambiente de sadia renovação, gerado no país pela vitória da Revolução de 30, não ficou, felizmente, restrito aos Estados mais adiantados. A transformação operou-se também em Goiás [...] A nossa atitude decorre tanto do desejo de darmos a este grande Estado o ritmo de evolução que lhe é próprio..."<br>
            <span style="display:block; text-align:right; font-size:0.8em; margin-top:5px;">(Pedro Ludovico Teixeira, 1934)</span>
            </div>
            Com base na leitura do texto e nos conhecimentos sobre o período, assinale a opção que indica corretamente os motivos pelos quais Pedro Ludovico propôs a mudança da capital:`,
        o: [
            "Favorecer as oligarquias rurais do interior.",
            "Vantagens pessoais e gastos excessivos.",
            "Aproximar a capital do litoral brasileiro.",
            "Romper com as antigas estruturas políticas (Coronelismo) e modernizar o estado.",
            "Utilizar a estrutura ferroviária já existente."
        ], 
        a: 3, 
        e: "<b>Mudancismo:</b> O objetivo central era político: enfraquecer as oligarquias da Cidade de Goiás (Vila Boa) e alinhar o estado ao projeto modernizador de Getúlio Vargas (Marcha para o Oeste)." 
    },
    { 
        id: 3016, s: 'g', p: 2, tema: "ALEGO - Geografia GO",
        q: `<div style="background:#f1f3f5; padding:15px; border-left:4px solid #002855; margin-bottom:15px; font-style:italic; font-size:0.95em;">
            "As cidades mais populosas do Estado, Goiânia e Aparecida de Goiânia, seguem crescendo, mas a um ritmo mais lento que o estadual: enquanto a população de Goiás cresceu exato 1% entre 2024 e 2025, a de Goiânia e Aparecida aumentaram, respectivamente, 0,58% e 0,92%..."
            </div>
            O texto aponta que Goiânia cresce menos que a média do estado. Isso pode ser explicado principalmente por:`,
        o: [
            "Baixo custo habitacional em Goiânia.",
            "Proximidade de Valparaíso com o Distrito Federal.",
            "Aumento de áreas rurais em Aparecida.",
            "Industrialização de Caldas Novas.",
            "Oferta de empregos e desenvolvimento econômico em cidades do interior (Descentralização)."
        ], 
        a: 4, 
        e: "<b>Demografia:</b> Ocorre uma desconcentração econômica. Polos regionais como Rio Verde (Agro), Catalão (Mineração) e Anápolis (Indústria) atraem a população que antes migrava apenas para a capital." 
    },
    { 
        id: 3017, s: 'g', p: 2, tema: "ALEGO - Geografia GO",
        q: `Comparando fotos de Goiânia de 1960 e 2025 (descritas no enunciado original), analise as afirmativas sobre os impactos da urbanização:<br>
            I. O crescimento urbano desordenado pressiona os serviços de saneamento e favorece doenças como a dengue.<br>
            II. A impermeabilização do solo pelo asfalto agrava problemas de alagamentos e enchentes.<br>
            III. O aumento da infraestrutura viária resolveu definitivamente os desafios de mobilidade urbana.<br>
            Está correto o que se afirma em:`,
        o: ["I e II, apenas.", "I e III, apenas.", "II e III, apenas.", "I, apenas.", "I, II e III."], 
        a: 0, 
        e: "<b>Urbanização:</b> Itens I e II são consequências clássicas e verdadeiras. O item III é Falso, pois a mobilidade urbana (trânsito) continua sendo um dos maiores desafios da capital, não foi resolvido." 
    },

    // =================================================================================
    // LEGISLAÇÃO E DIREITO (Questões 18 a 26)
    // =================================================================================
    { 
        id: 3018, s: 'd', p: 2, tema: "ALEGO - Regulamento",
        q: `O retorno à atividade de servidor em disponibilidade far-se-á mediante aproveitamento obrigatório em cargo de atribuições e vencimentos compatíveis com o anteriormente ocupado. Esse retorno é tecnicamente denominado:`,
        o: ["Readaptação.", "Aproveitamento.", "Reversão.", "Recondução.", "Promoção."], 
        a: 1, 
        e: "<b>Provimento:</b> Conforme o Estatuto, quem está em disponibilidade deve ser <b>APROVEITADO</b> quando surge vaga compatível." 
    },
    { 
        id: 3019, s: 'd', p: 2, tema: "ALEGO - Regulamento",
        q: `São deveres fundamentais do servidor da ALEGO, conforme seu regulamento administrativo:<br>
            I. Assiduidade.<br>
            II. Pontualidade.<br>
            III. Urbanidade.<br>
            IV. Discrição.<br>
            Estão corretos:`,
        o: ["I e II, apenas.", "III e IV, apenas.", "I, II e III, apenas.", "II, III e IV, apenas.", "Todos os itens (I, II, III e IV)."], 
        a: 4, 
        e: "<b>Deveres:</b> Todos os itens citados são deveres funcionais expressos no regulamento administrativo e no estatuto dos servidores." 
    },
    { 
        id: 3020, s: 'd', p: 2, tema: "ALEGO - Regulamento",
        q: `Sobre o aperfeiçoamento profissional na ALEGO, analise:<br>
            ( ) É dever do servidor diligenciar seu constante aperfeiçoamento.<br>
            ( ) É dever frequentar cursos de treinamento e especialização designados.<br>
            ( ) A ALEGO promoverá cursos através da Escola do Legislativo.<br>
            A sequência correta (V/F) é:`,
        o: ["V - V - V", "V - F - F", "F - V - F", "F - V - V", "V - V - F"], 
        a: 0, 
        e: "<b>Capacitação:</b> O aperfeiçoamento é tratado como direito e dever, sendo promovido institucionalmente pela Escola do Legislativo." 
    },
    { 
        id: 3021, s: 'd', p: 2, tema: "ALEGO - Constitucional",
        q: `Segundo o Art. 4º da Constituição Federal, a República Federativa do Brasil buscará a integração econômica, política, social e cultural dos povos da:`,
        o: ["América Latina.", "Sul Global.", "América do Sul.", "Comunidade dos Países de Língua Portuguesa.", "América."], 
        a: 0, 
        e: "<b>Constituição:</b> O texto literal do parágrafo único do Art. 4º cita a integração dos povos da <b>América Latina</b>." 
    },
    { 
        id: 3022, s: 'd', p: 2, tema: "ALEGO - Eleitoral",
        q: `André, brasileiro nato, com 21 anos completos, deseja candidatar-se ao cargo de Deputado Estadual, mas não possui filiação partidária. Diante disso, é correto afirmar que:`,
        o: [
            "Pode candidatar-se, pois não há exigência de idade mínima.",
            "Não pode, pois a idade mínima é 30 anos.",
            "Não pode, pois a idade mínima é 30 anos e exige filiação.",
            "Pode candidatar-se, pois a candidatura avulsa é permitida.",
            "Não pode candidatar-se, pois a filiação partidária é condição de elegibilidade."
        ], 
        a: 4, 
        e: "<b>Elegibilidade:</b> A idade de 21 anos é suficiente para Deputado Estadual, mas a Constituição veda a candidatura avulsa. A <b>filiação partidária</b> é obrigatória." 
    },
    { 
        id: 3023, s: 'd', p: 2, tema: "ALEGO - Constitucional",
        q: `Sobre o Poder Legislativo, assinale a afirmativa correta:<br>
            ( ) A Câmara dos Deputados compõe-se de representantes dos Estados e do DF.<br>
            ( ) O número total de Deputados é proporcional à população, não podendo ser inferior a 8 nem superior a 70.<br>
            ( ) A representação de cada Estado será renovada de quatro em quatro anos, alternadamente, por um e dois terços.<br>
            A classificação correta (V ou F) é:`,
        o: ["F - V - F", "V - F - V", "F - F - F", "F - F - V", "V - V - F"], 
        a: 2, 
        e: "<b>Legislativo:</b> Todas Falsas. 1ª: Câmara representa o POVO (Senado representa Estados). 2ª: Mínimo é 8, Máximo é 70. 3ª: A renovação alternada (1/3 e 2/3) refere-se ao SENADO, não à Câmara." 
    },
    { 
        id: 3024, s: 'd', p: 2, tema: "ALEGO - Dir. Administrativo",
        q: `De acordo com a Lei nº 14.133/2021 (Nova Lei de Licitações), sobre o recebimento de obras e serviços: O recebimento definitivo pela Administração:`,
        o: [
            "Exclui a responsabilidade civil pelo trabalho.",
            "Implica a realização de testes de qualidade por conta do Governo.",
            "Não exime o consultor ou projetista da responsabilidade técnica.",
            "Deve ocorrer em prazos definidos em lei específica.",
            "Permite a rejeição parcial apenas se houver desacordo técnico."
        ], 
        a: 2, 
        e: "<b>Contratos:</b> O recebimento definitivo atesta a execução, mas NÃO isenta o responsável técnico (engenheiro/projetista) da responsabilidade pela solidez e segurança da obra nos prazos legais." 
    },
    { 
        id: 3025, s: 'd', p: 2, tema: "ALEGO - LGPD",
        q: `A disciplina da proteção de dados pessoais tem como fundamentos, EXCETO:`,
        o: ["Livre iniciativa e defesa do Poder Público.", "Desenvolvimento econômico e tecnológico.", "Inviolabilidade da intimidade, da honra e da imagem.", "Livre desenvolvimento da personalidade.", "Autodeterminação informativa."], 
        a: 0, 
        e: "<b>LGPD:</b> A lei protege a livre iniciativa e a livre concorrência, mas não cita a 'defesa do Poder Público' como fundamento. O foco é a proteção do titular dos dados." 
    },
    { 
        id: 3026, s: 'd', p: 2, tema: "ALEGO - Improbidade",
        q: `Caso um servidor cometa ato de improbidade administrativa que cause lesão ao patrimônio público e venha a falecer, a obrigação de reparar o dano:`,
        o: [
            "Extingue-se com a morte do agente.",
            "Transfere-se aos herdeiros, que respondem integralmente com seus bens.",
            "Transfere-se aos herdeiros, até o limite do valor da herança.",
            "Limita-se aos bens adquiridos ilicitamente.",
            "É convertida em multa civil aplicada ao espólio."
        ], 
        a: 2, 
        e: "<b>Lei 8.429:</b> O sucessor daquele que causar lesão ao patrimônio público está sujeito às cominações da lei <b>até o limite do valor da herança</b>." 
    },

    // =================================================================================
    // CONHECIMENTOS ESPECÍFICOS: TÉCNICO DE SOM (Questões 27 a 50)
    // =================================================================================
    { 
        id: 3027, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Um técnico conecta um microfone condensador a uma entrada de microfone de uma mesa de som analógica, mas não observa sinal no medidor, embora o cabo esteja testado e funcionando. A causa mais provável é:`,
        o: ["Impedância incompatível.", "Ganho de entrada muito alto.", "Ausência de alimentação phantom power (+48V).", "Uso de cabo balanceado.", "Falta de compressão dinâmica."], 
        a: 2, 
        e: "<b>Microfones:</b> Microfones condensadores possuem circuito ativo e exigem alimentação elétrica externa (+48V) para funcionar." 
    },
    { 
        id: 3028, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Relacione os equipamentos às suas funções na cadeia de sinal:<br>
            (1) Pré-amplificador<br>
            (2) Equalizador<br>
            (3) Amplificador de Potência<br><br>
            ( ) Eleva o sinal de linha para nível de caixa acústica.<br>
            ( ) Eleva o sinal de microfone para nível de linha.<br>
            ( ) Altera o equilíbrio de frequências do sinal.<br>
            A sequência correta é:`,
        o: ["3 - 1 - 2", "2 - 1 - 3", "1 - 3 - 2", "3 - 2 - 1", "1 - 2 - 3"], 
        a: 0, 
        e: "<b>Fluxo de Sinal:</b> O Power Amp (3) dá força para a caixa. O Pré (1) levanta o sinal fraco do mic. O EQ (2) ajusta o timbre." 
    },
    { 
        id: 3029, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `O uso de um microfone do tipo "Shotgun" para captação de diálogos em vídeo é adequado principalmente porque:`,
        o: [
            "Elimina completamente o som ambiente.",
            "Substitui o tratamento acústico da sala.",
            "É um microfone exclusivamente digital.",
            "Possui alta direcionalidade, isolando a fonte sonora frontal.",
            "Sua resposta de frequência independe da distância."
        ], 
        a: 3, 
        e: "<b>Direcionalidade:</b> O Shotgun usa um tubo de interferência para cancelar sons laterais, tornando-se altamente direcional para captar à distância." 
    },
    { 
        id: 3030, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Durante a mixagem de monitor (retorno) para os músicos, o técnico percebe que ao abaixar o fader principal (P.A.), o volume nos monitores também diminui. Para corrigir isso e tornar a via de monitor independente, ele deve:`,
        o: ["Aumentar o ganho do pré-amplificador.", "Configurar o envio Auxiliar como Pre-Fader.", "Inserir um compressor no canal.", "Utilizar uma saída de subgrupo.", "Desativar o botão de Mute."], 
        a: 1, 
        e: "<b>Monitoração:</b> O envio <b>Pre-Fader</b> retira o sinal antes do fader de volume, garantindo que a mixagem do palco não seja afetada pela mixagem da casa." 
    },
    { 
        id: 3031, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Sobre as características técnicas dos microfones, analise:<br>
            I. Microfones dinâmicos não necessitam de alimentação externa.<br>
            II. Microfones condensadores apresentam, em geral, maior sensibilidade que os dinâmicos.<br>
            III. Microfones de fita (ribbon) são imunes a variações de pressão sonora elevadas.<br>
            Está correto o que se afirma em:`,
        o: ["II e III, apenas.", "I e III, apenas.", "II, apenas.", "I, II e III.", "I e II, apenas."], 
        a: 4, 
        e: "<b>Microfones:</b> A afirmativa III está errada. Microfones de fita são extremamente frágeis e podem ser destruídos por sopros ou SPL muito alto." 
    },
    { 
        id: 3032, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `No padrão polar Supercardióide, onde fica o ponto de maior rejeição (ponto nulo) para posicionar o monitor de chão e evitar microfonia?`,
        o: ["Exatamente atrás (180º).", "Nas diagonais traseiras (aprox. 125º).", "Nas laterais (90º).", "Exatamente na frente (0º).", "Em qualquer lugar."], 
        a: 1, 
        e: "<b>Polares:</b> Diferente do Cardióide (nulo a 180º), o Supercardióide tem um lóbulo de captação traseiro. Seu ponto de rejeição máxima desloca-se para as diagonais." 
    },
    { 
        id: 3033, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Considerando os formatos de áudio digital, o formato WAV é amplamente utilizado em sistemas de gravação profissional porque:`,
        o: [
            "Permite compressão com perdas ajustável.",
            "Reduz significativamente o tamanho do arquivo.",
            "Armazena áudio sem compressão de dados (lossless), preservando a integridade do sinal.",
            "É exclusivo para transmissão via internet.",
            "Converte automaticamente para taxas de amostragem menores."
        ], 
        a: 2, 
        e: "<b>Formatos:</b> WAV é PCM linear não comprimido. Ele guarda cada bit de informação captada, essencial para edição e processamento de alta qualidade." 
    },
    { 
        id: 3034, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Sobre sistemas de áudio sobre IP (AoIP), analise:<br>
            I. A latência não é influenciada pelo tamanho do buffer de rede.<br>
            II. O AoIP elimina a necessidade de sincronismo de relógio.<br>
            III. Protocolos como Dante utilizam infraestrutura de rede Ethernet padrão.<br>
            Está correto o que se afirma em:`,
        o: ["II, apenas.", "III, apenas.", "II e III, apenas.", "I e III, apenas.", "I, II e III."], 
        a: 1, 
        e: "<b>Redes:</b> Apenas III. Latência depende do buffer e o sincronismo (PTP) é crítico. Dante roda em redes Gigabit padrão." 
    },
    { 
        id: 3035, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Ao analisar um diagrama onde a saída de potência (speaker out) de um amplificador é conectada diretamente a uma entrada de microfone (XLR) de uma mesa de som, o técnico conclui que:`,
        o: [
            "Há um loop de impedância aceitável.",
            "O sistema está configurado em mono.",
            "Não há erro, pois ambos usam conectores compatíveis.",
            "Existe uma conexão incorreta gravíssima que danificará os circuitos da mesa.",
            "Os cabos devem ser substituídos por Speakon."
        ], 
        a: 3, 
        e: "<b>Segurança:</b> A voltagem de saída de um amplificador (dezenas de Volts) é letal para a entrada de microfone (milivolts), causando queima imediata." 
    },
    { 
        id: 3036, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Um sinal de áudio digital apresenta distorção audível na reprodução, mesmo com os medidores de pico indicando níveis abaixo de 0 dBFS. A causa técnica mais provável é:`,
        o: ["Clipping analógico na entrada.", "Aliasing por taxa insuficiente.", "Falha no cabo.", "Ruído térmico.", "Saturação por picos intersample (entre amostras)."], 
        a: 4, 
        e: "<b>Áudio Digital:</b> Picos <b>Intersample</b> ocorrem quando a reconstrução analógica da onda ultrapassa o limite, mesmo que os pontos digitais (samples) estejam dentro da escala." 
    },
    { 
        id: 3037, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Relacione os processadores às suas funções:<br>
            (1) Compressor<br>
            (2) Gate<br>
            (3) Reverb<br><br>
            ( ) Simula ambiência acústica.<br>
            ( ) Reduz a faixa dinâmica atenuando picos.<br>
            ( ) Corta o sinal quando o nível cai abaixo de um limiar.<br>
            A sequência correta é:`,
        o: ["3 - 1 - 2", "1 - 2 - 3", "2 - 3 - 1", "2 - 1 - 3", "3 - 2 - 1"], 
        a: 0, 
        e: "<b>Processamento:</b> Reverb cria espaço (3). Compressor controla dinâmica (1). Gate limpa ruído/vazamento (2)." 
    },
    { 
        id: 3038, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Sobre medições em áudio, assinale a alternativa INCORRETA (ou adaptada para correta conforme gabarito oficial da questão original):<br>
            Analise: 0 dBFS é o limite máximo em sistemas digitais?`,
        o: [
            "dBFS mede pressão sonora no ar.",
            "dB SPL é usado em DAWs.",
            "0 dBFS é o teto absoluto no domínio digital, acima do qual ocorre clipping.",
            "VU meters indicam picos instantâneos.",
            "Peak meters indicam volume médio (Loudness)."
        ], 
        a: 2, 
        e: "<b>Medição:</b> A escala Digital (FS - Full Scale) tem o 0 como topo. Valores positivos não existem matematicamente sem distorção." 
    },
    { 
        id: 3039, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Um ruído constante de baixa frequência (hum) é ouvido no sistema e seu nível se altera ao tocar no chassi metálico de um equipamento. Isso indica a necessidade de:`,
        o: ["Trocar por cabos não balanceados.", "Verificar e unificar o aterramento dos equipamentos.", "Reduzir o ganho de entrada.", "Inserir um compressor.", "Aumentar a impedância."], 
        a: 1, 
        e: "<b>Ground Loop:</b> O 'Hum' de 60Hz geralmente é causado por diferença de potencial entre os terras de equipamentos diferentes." 
    },
    { 
        id: 3040, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `A razão técnica fundamental para utilizar cabos balanceados (XLR) em conexões de áudio profissionais longas é:`,
        o: [
            "Aumentar a resposta de frequência acima de 20kHz.",
            "Converter sinal analógico em digital.",
            "Amplificar a voltagem do sinal em +4dB.",
            "Separar o áudio em estéreo.",
            "Eliminar ruídos eletromagnéticos induzidos através da inversão de fase e Rejeição em Modo Comum (CMRR)."
        ], 
        a: 4, 
        e: "<b>Balanceamento:</b> O sistema envia o sinal em duas fases opostas. O ruído entra igual nas duas. No destino, a inversão de fase cancela o ruído." 
    },
    { 
        id: 3041, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Sobre manutenção preventiva de equipamentos:<br>
            ( ) Deve-se usar limpa-contatos específico em potenciômetros.<br>
            ( ) Enrolar cabos no cotovelo ajuda a preservar a malha.<br>
            ( ) O uso de óleo desengripante (WD-40) é recomendado para faders.<br>
            A sequência correta (V/F) é:`,
        o: ["V - F - F", "F - V - F", "V - V - V", "F - F - V", "V - F - V"], 
        a: 0, 
        e: "<b>Manutenção:</b> Enrolar no cotovelo torce e quebra o cabo. WD-40 é isolante e junta poeira, destruindo faders." 
    },
    { 
        id: 3042, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Ao aplicar um filtro passa-altas (High-Pass Filter) em 30 Hz numa mixagem musical, o impacto sonoro percebido permanece praticamente inalterado. Isso ocorre porque:`,
        o: ["O ouvido humano só ouve acima de 5kHz.", "O filtro aumenta o ganho.", "A energia musical útil e a sensibilidade auditiva abaixo de 30Hz são baixas.", "Sons graves não se propagam no ar.", "O filtro estava desligado."], 
        a: 2, 
        e: "<b>Espectro:</b> Subgraves extremos consomem energia do sistema mas são pouco percebidos musicalmente." 
    },
    { 
        id: 3043, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Sobre a física do som e diretividade:<br>
            I. Frequências altas (agudos) tendem a ser mais direcionais.<br>
            II. Frequências baixas (graves) tendem a ser omnidirecionais.<br>
            Estão corretas:`,
        o: ["I, apenas.", "II, apenas.", "Nenhuma.", "I e II.", "Apenas se for ao ar livre."], 
        a: 3, 
        e: "<b>Acústica:</b> Agudos têm onda curta e não contornam obstáculos (são como feixes). Graves têm onda longa e se espalham (difração)." 
    },
    { 
        id: 3044, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Relacione os fenômenos:<br>
            (1) Atenuação com a distância<br>
            (2) Difração<br>
            (3) Atraso de tempo (Delay)<br><br>
            ( ) Som grave contorna obstáculos.<br>
            ( ) Perda de energia sonora ao se afastar da fonte.<br>
            ( ) Diferença de chegada do som devido à velocidade de propagação.<br>
            A sequência é:`,
        o: ["2 - 1 - 3", "1 - 2 - 3", "3 - 2 - 1", "1 - 3 - 2", "2 - 3 - 1"], 
        a: 0, 
        e: "<b>Fenômenos:</b> Difração contorna (2). Atenuação é perda de nível (1). Delay é tempo (3)." 
    },
    { 
        id: 3045, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Sobre mídias de armazenamento:<br>
            I. A fita cassete é um meio de acesso linear.<br>
            II. O CD é uma mídia magnética.<br>
            III. Cartões SD permitem acesso aleatório aos arquivos.<br>
            Estão corretas:`,
        o: ["I, apenas.", "I e II.", "II e III.", "I, II e III.", "I e III, apenas."], 
        a: 4, 
        e: "<b>Mídias:</b> CD é mídia <b>Óptica</b> (laser), não magnética. Fita é linear (precisa rebobinar). SD é aleatório (vai direto ao ponto)." 
    },
    { 
        id: 3046, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `No contexto de streaming e broadcast, a medição de "Loudness Integrado" (LUFS) serve principalmente para:`,
        o: ["Padronizar a percepção de volume médio entre diferentes programas.", "Substituir o limitador de picos.", "Aumentar a resolução de bits.", "Eliminar a necessidade de compressão.", "Medir apenas o ruído de fundo."], 
        a: 0, 
        e: "<b>Normas:</b> O Loudness (LUFS) mede o volume como o ouvido humano percebe ao longo do tempo, garantindo consistência na transmissão." 
    },
    { 
        id: 3047, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Sobre Edição Não-Linear em DAWs (Digital Audio Workstations), é correto afirmar que:`,
        o: [
            "Altera o arquivo de áudio original permanentemente no disco.",
            "É destrutiva por natureza.",
            "Baseia-se em referências (ponteiros) e não altera o arquivo original (Não-Destrutiva).",
            "Exige o uso de fita magnética.",
            "Não permite o recurso de desfazer (Undo)."
        ], 
        a: 2, 
        e: "<b>Edição Digital:</b> A DAW cria um 'mapa' de cortes sem mexer no arquivo fonte (Source File), permitindo experimentação sem riscos." 
    },
    { 
        id: 3048, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Relacione a ferramenta à função:<br>
            (1) Normalização<br>
            (2) Compressor<br>
            (3) Equalizador<br>
            (4) Limiter<br><br>
            ( ) Ajusta o ganho para atingir um pico alvo.<br>
            ( ) Define um teto máximo que o sinal não pode ultrapassar.<br>
            ( ) Reduz a faixa dinâmica.<br>
            ( ) Altera o conteúdo espectral (frequências).<br>
            A sequência é:`,
        o: ["1 - 4 - 2 - 3", "2 - 3 - 4 - 2", "3 - 2 - 4 - 1", "3 - 1 - 4 - 2", "2 - 1 - 4 - 3"], 
        a: 0, 
        e: "<b>Ferramentas:</b> Norm=Pico Alvo (1); Limiter=Teto (4); Comp=Dinâmica (2); EQ=Espectro (3)." 
    },
    { 
        id: 3049, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Sobre conversão e processamento:<br>
            ( ) A normalização de pico altera a microdinâmica do sinal.<br>
            ( ) Converter um arquivo MP3 para WAV recupera a qualidade perdida.<br>
            ( ) O downsampling (redução de taxa) exige filtragem low-pass prévia.<br>
            A sequência correta (V/F) é:`,
        o: ["V - F - V", "F - F - V", "F - V - V", "V - F - F", "F - F - F"], 
        a: 1, 
        e: "<b>Processamento:</b> Normalizar é só volume (ganho), não comprime (F). MP3 perde dados pra sempre (F). Filtragem é vital no downsampling para evitar aliasing (V)." 
    },
    { 
        id: 3050, s: 'e', p: 3, tema: "ALEGO - Téc. Som",
        q: `Converter um arquivo de áudio de 96 kHz para 48 kHz (mantendo a profundidade de bits) resulta tecnicamente em:`,
        o: ["Aumento do ruído térmico.", "Aumento da faixa dinâmica.", "Compressão de dados.", "Normalização.", "Redução da resolução temporal e da largura de banda."], 
        a: 4, 
        e: "<b>Teorema de Nyquist:</b> Reduzir a taxa de amostragem diminui a quantidade de 'fotos' por segundo, reduzindo a precisão no tempo e a frequência máxima reproduzível." 
    }



    



    

   
    ]



