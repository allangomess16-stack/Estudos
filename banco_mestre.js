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
    { id: 117, s: 'g', p: 2, q: "Quem substitui o Prefeito de Goiânia em caso de impedimento ou vacância, imediatamente?", o: ["O Presidente da Câmara", "O Vice-Prefeito", "O Vereador mais votado", "O Juiz da comarca"], a: 1, e: "O substituto imediato do chefe do executivo é sempre o Vice-Prefeito." },



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

// === ELITE: PORTUGUÊS (Sintaxe e Pontuação) ===
    { id: 26, s: 'p', p: 2, q: "No trecho 'Compete ao Operador, conforme o Regimento, a inserção dos caracteres', as vírgulas isolam:", o: ["Um adjunto adverbial deslocado", "Um aposto explicativo", "Uma oração subordinada adjetiva", "Um vocativo"], a: 0, e: "A expressão 'conforme o Regimento' é um adjunto adverbial de conformidade deslocado." },
    { id: 27, s: 'p', p: 2, q: "Assinale a alternativa em que a partícula 'SE' exerce função de índice de indeterminação do sujeito:", o: ["Consertou-se o Switcher.", "Aluga-se esta sala.", "Precisa-se de técnicos qualificados.", "O operador cortou-se no rack."], a: 2, e: "Com verbos transitivos indiretos (precisar de), o 'SE' indetermina o sujeito." },
    { id: 28, s: 'p', p: 2, q: "Qual a figura de linguagem presente em: 'A TV Senado é o olho do cidadão no Congresso'?", o: ["Metonímia", "Hipérbole", "Metáfora", "Eufemismo"], a: 2, e: "Comparação implícita sem o conectivo 'como'." },

    // === ELITE: RACIOCÍNIO LÓGICO (Equivalências e Argumentos) ===
    { id: 68, s: 'l', p: 1, q: "A proposição 'Se o sinal é SDI, então a imagem é digital' é equivalente a:", o: ["Se a imagem é digital, então o sinal é SDI", "O sinal não é SDI ou a imagem é digital", "Se o sinal não é SDI, então a imagem não é digital", "O sinal é SDI e a imagem não é digital"], a: 1, e: "Equivalência da condicional (P->Q) pela regra da 'Neymar': nega a primeira (P), troca por OU (v) e mantém a segunda (Q)." },
    { id: 69, s: 'l', p: 1, q: "Qual a negação de 'Se eu estudar, então passarei no concurso'?", o: ["Se eu não estudar, então não passarei", "Eu estudo e não passo no concurso", "Eu não estudo e passo no concurso", "Eu estudo ou não passo no concurso"], a: 1, e: "Negação da condicional: mantém a primeira E nega a segunda (P ^ ~Q)." },

    // === ELITE: LEGISLAÇÃO GOIÂNIA (Regimento e Lei Orgânica) ===
    { id: 116, s: 'g', p: 2, q: "Sobre o processo legislativo em Goiânia, a iniciativa de leis que disponham sobre o regime jurídico dos servidores municipais é competência exclusiva:", o: ["Da Mesa Diretora", "Do Presidente da Câmara", "Do Prefeito Municipal", "De qualquer Vereador"], a: 2, e: "Matérias sobre servidores e orçamento são de iniciativa privativa do Chefe do Executivo (Prefeito)." },
    { id: 117, s: 'g', p: 2, q: "O quórum necessário para a aprovação de uma Emenda à Lei Orgânica de Goiânia é de:", o: ["Maioria Simples", "Maioria Absoluta", "Dois terços dos membros", "Três quintos dos membros"], a: 2, e: "Para alterar a Lei Orgânica, exige-se votação em dois turnos com 2/3 dos vereadores." },

    // === ELITE: ESPECÍFICAS (Broadcast, Sincronismo e Compressão) ===
    { id: 243, s: 'e', p: 3, q: "O sinal de referência Tri-Level Sync é utilizado preferencialmente em sistemas:", o: ["Analógicos SD", "Digitais HD/UHD", "Apenas para áudio IP", "Streaming de baixa latência"], a: 1, e: "O Tri-level sync é o padrão de sincronismo mais preciso para sinais de Alta Definição (HD)." },
    { id: 244, s: 'e', p: 3, q: "No espaço de cor YCbCr, o componente 'Y' representa:", o: ["A diferença de azul", "A diferença de vermelho", "A Luminância (Brilho)", "A Saturação"], a: 2, e: "Y é a luminância; Cb e Cr são os componentes de crominância (cor)." },
    { id: 245, s: 'e', p: 3, q: "O que caracteriza a compressão Intraframe (como o ProRes ou DNxHD) em comparação à Interframe (como o H.264)?", o: ["Ocupa muito menos espaço no HD", "Cada quadro é comprimido individualmente, facilitando a edição", "Depende de quadros anteriores para ser lido", "Não possui Canal Alpha"], a: 1, e: "Compressão Intraframe (I-frame only) é ideal para edição porque não exige que o processador calcule quadros vizinhos." },
    { id: 246, s: 'e', p: 3, q: "Qual a função de um 'Frame Synchronizer' em uma entrada de switcher que não recebe Genlock?", o: ["Melhorar a cor da câmera", "Gravar o sinal em backup", "Alinhar o timing do sinal externo ao relógio interno do switcher", "Converter SDI para HDMI"], a: 2, e: "O sincronizador de quadro cria um buffer para alinhar sinais 'soltos' ao sistema do estúdio." },
    { id: 247, s: 'e', p: 3, q: "O erro conhecido como 'Color Banding' em degradês de fundo de tela é causado geralmente por:", o: ["Bit-depth baixo (ex: 8-bit)", "Cabo SDI muito longo", "Falta de Genlock", "Resolução 4K"], a: 0, e: "Banding ocorre quando não há tons de cores suficientes para uma transição suave, problema comum em 8-bit." },

    // === ELITE: INFORMÁTICA (Redes e Segurança) ===
    { id: 416, s: 'i', p: 1, q: "Qual topologia de rede é caracterizada por um nó central que gerencia todas as comunicações, comum em redes Wi-Fi de escritórios?", o: ["Anel (Ring)", "Estrela (Star)", "Barramento (Bus)", "Malha (Mesh)"], a: 1, e: "Na topologia Estrela, todos os dispositivos se conectam a um ponto central (Switch ou AP)." },
    { id: 417, s: 'i', p: 1, q: "No Windows 10, o que faz o comando 'ping' executado no Prompt de Comando (CMD)?", o: ["Apaga arquivos temporários", "Testa a conectividade e a latência com outro endereço IP", "Formata o pendrive", "Altera a senha do usuário"], a: 1, e: "O ping envia pacotes ICMP para verificar se um destino está alcançável e o tempo de resposta." },


// === ELITE: PORTUGUÊS (Sintaxe, Regência e Pontuação Avançada) ===
    
       { id: 31, s: 'p', p: 2, 
        q: "No que se refere à concordância verbal e à regência, assinale a alternativa que obedece rigorosamente à norma culta da língua portuguesa:", 
        o: ["Fazem dez anos que a Câmara de Goiânia mudou sua sede administrativa.", "Os técnicos de vídeo assistiram o novo tutorial sobre sinais SDI.", "Haviam muitos vereadores presentes na sessão solene de ontem.", "Devem-se buscar soluções urgentes para os problemas de sinal."], 
        a: 3, 
        e: "Na voz passiva sintética, o verbo deve concordar com o sujeito (soluções). 'Fazer' indicando tempo e 'Haver' no sentido de existir são impessoais (ficam no singular)." 
     } ,
    { 
        id: 32, s: 'p', p: 2, 
        q: "Assinale a alternativa em que o sinal indicativo de crase foi empregado CORRETAMENTE:", 
        o: ["O Operador de Caracteres enviou as tarjas à uma servidora concursada.", "O acesso à rede externa da Câmara será liberado a partir das oito horas.", "A equipe técnica referiu-se àquele equipamento que apresentou defeito.", "As transmissões ao vivo ocorrem de segunda à sexta, sem interrupções."], 
        a: 2, 
        e: "A crase é obrigatória na junção da preposição 'a' com o pronome demonstrativo 'aquele'. Não há crase antes de artigo indefinido (uma), verbos (partir) ou entre dias da semana sem artigo (de... a)." 
    },
    { 
        id: 33, s: 'p', p: 2, 
        q: "Na frase 'A execução do protocolo de Genlock, conquanto seja complexa, garante a estabilidade do vídeo', a conjunção destacada estabelece uma relação de:", 
        o: ["Conclusão", "Explicação", "Concessão", "Adição"], 
        a: 2, 
        e: "'Conquanto' é uma conjunção concessiva, introduzindo uma ideia que se opõe à principal sem anulá-la, semelhante ao 'embora'." 
    },

    // === ELITE: RACIOCÍNIO LÓGICO (Equivalências e Estruturas) ===
    { 
        id: 70, s: 'l', p: 1, 
        q: "Considere a seguinte proposição condicional: 'Se o backup falhar, então os dados serão perdidos'. De acordo com a lógica sentencial, uma proposição equivalente é:", 
        o: ["Se os dados forem perdidos, então o backup falhou.", "O backup não falha ou os dados são perdidos.", "O backup falha e os dados não são perdidos.", "Se o backup não falhar, então os dados não serão perdidos."], 
        a: 1, 
        e: "Equivalência lógica (P -> Q) pode ser feita pela regra da disjunção: ~P v Q (Nega a primeira OU mantém a segunda)." 
    },
    { 
        id: 71, s: 'l', p: 1, 
        q: "Qual é a negação lógica da proposição composta: 'Allan é Operador de Caracteres e estuda Inteligência Artificial'?", 
        o: ["Allan não é Operador de Caracteres e não estuda Inteligência Artificial.", "Se Allan não é Operador de Caracteres, então ele não estuda IA.", "Allan não é Operador de Caracteres ou não estuda Inteligência Artificial.", "Allan estuda IA mas não é Operador de Caracteres."], 
        a: 2, 
        e: "Lei de De Morgan para negação do 'E' (^): Nega-se ambas as proposições e troca-se o conectivo 'E' pelo 'OU' (v)." 
    },

    // === ELITE: LEGISLAÇÃO E REGIMENTO (Poder Legislativo Municipal) ===
    { 
        id: 118, s: 'g', p: 2, 
        q: "De acordo com o Regimento Interno da Câmara Municipal de Goiânia, a Comissão que possui a competência de analisar o mérito administrativo e a constitucionalidade das propostas é a:", 
        o: ["Comissão de Finanças e Orçamento.", "Comissão de Ética e Decoro Parlamentar.", "Comissão de Constituição, Justiça e Redação.", "Comissão de Direitos Humanos."], 
        a: 2, 
        e: "A CCJR é a comissão técnica mais importante, atuando como filtro jurídico para qualquer projeto de lei na Casa." 
    },
    { 
        id: 119, s: 'g', p: 2, 
        q: "Sobre a Lei Orgânica de Goiânia, em caso de impedimento simultâneo do Prefeito e do Vice-Prefeito, quem deverá assumir o cargo interinamente?", 
        o: ["O Secretário de Governo.", "O Presidente da Câmara Municipal.", "O Juiz Diretor do Foro da Comarca de Goiânia.", "O Vereador com o maior número de votos na última eleição."], 
        a: 1, 
        e: "A linha de sucessão municipal prevê que o Presidente da Câmara assume a prefeitura na ausência do Prefeito e do Vice." 
    },

    // === ELITE: CONHECIMENTOS ESPECÍFICOS (Sinal Digital e Broadcast) ===
    { 
        id: 248, s: 'e', p: 3, 
        q: "No processamento de sinal SDI, a diferença fundamental entre as normas HD-SDI (1.5G) e 3G-SDI reside em qual parâmetro técnico?", 
        o: ["O tipo de conector BNC utilizado.", "A profundidade de cor limitada a 8 bits no 3G.", "A largura de banda de dados suportada, permitindo taxas de quadros maiores em 1080p.", "A impossibilidade de transportar áudio embutido no sinal 1.5G."], 
        a: 2, 
        e: "O 3G-SDI dobra a taxa de bits do 1.5G, permitindo transportar sinal 1080p a 50 ou 60 quadros por segundo em um único cabo." 
    },
    { 
        id: 249, s: 'e', p: 3, 
        q: "A técnica de compressão 'Interframe' (como o codec H.264/AVC) economiza espaço de armazenamento baseando-se em qual princípio?", 
        o: ["Redução drástica da resolução horizontal da imagem.", "Exclusão total do canal alpha de transparência.", "Eliminação da redundância temporal entre quadros sucessivos através de vetores de movimento.", "Conversão obrigatória do sinal para preto e branco antes do processamento."], 
        a: 2, 
        e: "Ao contrário da compressão Intraframe (quadro a quadro), a Interframe grava apenas as mudanças entre os quadros, economizando bits." 
    },
    { 
        id: 250, s: 'e', p: 3, 
        q: "O processo de 'Keying' conhecido como 'Luma Key' realiza o recorte da imagem baseando-se em quais níveis do sinal de vídeo?", 
        o: ["Apenas no canal de cor verde (Green).", "Nos níveis de luminância (brilho), separando áreas claras de áreas escuras.", "Na diferença de fase do sinal de sincronismo.", "Apenas nas frequências de áudio sincronizadas."], 
        a: 1, 
        e: "O Luma Key usa o contraste de brilho (preto/branco) para gerar a transparência, comum para sobrepor textos brancos em fundos escuros." 
    },

    // === ELITE: INFORMÁTICA (Redes, Segurança e Servidores) ===
    { 
        id: 418, s: 'i', p: 1, 
        q: "Em uma infraestrutura de rede corporativa, qual a função específica de um servidor que executa o serviço de DHCP?", 
        o: ["Armazenar as páginas de internet acessadas pelos servidores.", "Traduzir nomes de domínios (URLs) em endereços IP numéricos.", "Atribuir endereços IP de forma dinâmica e automática aos computadores da rede.", "Realizar o backup diário dos arquivos da Câmara."], 
        a: 2, 
        e: "O DHCP (Dynamic Host Configuration Protocol) gerencia a entrega de IPs para que o administrador não precise configurar cada máquina manualmente." 
    },
    { 
        id: 419, s: 'i', p: 1, 
        q: "Considerando as ameaças de segurança digital, um 'Ransomware' é classificado como um software malicioso que tem por objetivo:", 
        o: ["Capturar todas as teclas digitadas pelo usuário para roubar senhas.", "Monitorar o uso da webcam sem autorização.", "Criptografar arquivos do sistema e exigir um resgate financeiro para a liberação.", "Aumentar a velocidade do processador para causar superaquecimento."], 
        a: 2, 
        e: "Ransomware é um tipo de sequestro digital de dados através de criptografia forte." 
    },

// === ELITE: PORTUGUÊS (Continuação) ===
    { 
        id: 34, s: 'p', p: 2, 
        q: "Quanto à sintaxe de concordância e pontuação, assinale a alternativa que apresenta a redação inteiramente correta de acordo com a norma padrão:", 
        o: ["A maioria dos servidores da TV, optaram por realizar o treinamento em regime de teletrabalho.", "Deveriam haver mais câmeras operando em 4K no plenário da Câmara Municipal.", "Informou-se aos candidatos, durante a prova, que não seriam permitidos aparelhos eletrônicos.", "Tratam-se de questões complexas, cujas as respostas exigem profundo conhecimento técnico."], 
        a: 2, 
        e: "A alternativa 'C' apresenta a voz passiva sintética correta. Na 'A', não se separa sujeito de verbo por vírgula. Na 'B', 'haver' (existir) é impessoal. Na 'D', 'tratar-se de' é impessoal e não aceita artigo após o pronome relativo 'cujas'." 
    },
    { 
        id: 35, s: 'p', p: 2, 
        q: "Assinale a alternativa que preenche corretamente as lacunas: 'O técnico referiu-se ___ novas normas de sinal, visando ___ melhoria da transmissão, embora estivesse atento ___ exigências da diretoria.'", 
        o: ["as - a - as", "às - à - às", "às - a - às", "as - à - as"], 
        a: 1, 
        e: "Regência nominal e verbal: quem se refere, refere-se A (as normas = às); visando (no sentido de objetivar) A (a melhoria = à); atento A (as exigências = às)." 
    },

    // === ELITE: RACIOCÍNIO LÓGICO (Argumentação e Diagramas) ===
    { 
        id: 72, s: 'l', p: 1, 
        q: "Considere a afirmação: 'Se o servidor é concursado e o sinal está ativo, então a transmissão ocorre'. Uma negação lógica para essa afirmação é:", 
        o: ["Se o servidor não é concursado ou o sinal não está ativo, então a transmissão não ocorre.", "O servidor é concursado, o sinal está ativo e a transmissão não ocorre.", "O servidor não é concursado e o sinal não está ativo, mas a transmissão ocorre.", "Se a transmissão não ocorre, então o servidor não é concursado ou o sinal está inativo."], 
        a: 1, 
        e: "Negação da condicional (P -> Q): mantém-se o antecedente (P) e nega-se o consequente (~Q). Como o antecedente é uma conjunção (P ^ R), ele deve ser mantido integralmente." 
    },

    // === ELITE: LEGISLAÇÃO GOIÂNIA (Processo Legislativo Especial) ===
    { 
        id: 120, s: 'g', p: 2, 
        q: "Sobre a fiscalização contábil, financeira e orçamentária do Município de Goiânia, é correto afirmar que o controle externo será exercido pela Câmara Municipal, com o auxílio do:", 
        o: ["Tribunal de Contas do Estado (TCE).", "Tribunal de Contas dos Municípios (TCM).", "Tribunal de Contas da União (TCU).", "Conselho de Contas do Prefeito."], 
        a: 1, 
        e: "Em Goiás, a fiscalização dos municípios é auxiliada pelo Tribunal de Contas dos Municípios (TCM-GO)." 
    },

    // === ELITE: CONHECIMENTOS ESPECÍFICOS (Engenharia de Vídeo e Switcher) ===
    { 
        id: 251, s: 'e', p: 3, 
        q: "No contexto de sinais de vídeo digital SDI, o fenômeno conhecido como 'Jitter' refere-se especificamente a:", 
        o: ["Uma distorção na colorimetria do sinal devido ao cabo longo.", "Variações indesejadas no tempo de transição dos pulsos digitais em relação a um relógio de referência.", "A perda completa de quadros durante a compressão interframe.", "O ruído sonoro captado por cabos coaxiais mal blindados."], 
        a: 1, 
        e: "Jitter é a instabilidade temporal do sinal digital. Se for excessivo, o receptor não consegue reconstruir o sinal de vídeo corretamente." 
    },
    
    { 
        id: 252, s: 'e', p: 3, 
        q: "Um sinal de vídeo 1080p a 59.94Hz transportado via 3G-SDI Level A difere do Level B principalmente por:", 
        o: ["O Level A usar compressão JPEG2000 e o Level B ser sem perdas.", "O Level A transportar o sinal como um fluxo único e o Level B combinar dois fluxos de 1.5G (Dual Link).", "O Level A ser analógico e o Level B ser estritamente digital.", "O Level A não suportar áudio embutido."], 
        a: 1, 
        e: "Level A é o mapeamento direto (Direct Mapping) de um sinal 3G. Level B é o mapeamento de dois sinais 1.5G (Dual Link) em um único cabo 3G." 
    },
    { 
        id: 253, s: 'e', p: 3, 
        q: "Ao configurar um Chroma Key no Switcher, o ajuste de 'Spill Suppression' serve para:", 
        o: ["Aumentar o brilho do fundo projetado.", "Remover o reflexo da cor do fundo (geralmente verde) que atinge as bordas ou o talento.", "Sincronizar a fase do vídeo com o áudio externo.", "Ajustar o foco automático da lente da câmera."], 
        a: 1, 
        e: "O 'Spill' é o vazamento de cor do fundo no objeto principal; o supressor remove tonalidades verdes indesejadas da pele ou roupas." 
    },

    // === ELITE: INFORMÁTICA (Hardware e Servidores) ===
    { 
        id: 420, s: 'i', p: 1, 
        q: "Em servidores de alto desempenho, a tecnologia RAID 10 (ou 1+0) caracteriza-se por:", 
        o: ["Priorizar apenas a capacidade total de armazenamento, sem segurança.", "Combinar o espelhamento (Mirroring) do RAID 1 com o fracionamento (Striping) do RAID 0.", "Usar apenas um disco para paridade e os demais para dados.", "Ser uma tecnologia exclusiva para discos rígidos mecânicos (SATA)."], 
        a: 1, 
        e: "O RAID 10 oferece alta velocidade e alta redundância, espelhando os dados e depois distribuindo-os entre os pares de discos." 
    },
    
    { 
        id: 421, s: 'i', p: 1, 
        q: "Qual a função de um servidor de 'Proxy' em uma rede corporativa como a da Câmara de Goiânia?", 
        o: ["Gerar endereços IP dinâmicos para os computadores.", "Atuar como intermediário para requisições de clientes solicitando recursos de outros servidores, permitindo cache e filtragem de conteúdo.", "Realizar o backup físico das mídias digitais.", "Monitorar a temperatura física da sala de racks."], 
        a: 1, 
        e: "O Proxy centraliza o tráfego web, podendo acelerar o acesso através de cache e aplicar políticas de segurança e bloqueio de sites." 
    },

    // === ELITE: CONHECIMENTOS ESPECÍFICOS (Engenharia de Sinais e Fluxo) ===
    { 
        id: 254, s: 'e', p: 3, 
        q: "No processamento de cor para televisão, o termo 'Chroma Subsampling' 4:2:2 indica que:", 
        o: ["A luminância e a crominância têm a mesma resolução horizontal.", "A luminância tem resolução total, enquanto os canais de cor têm metade da resolução horizontal.", "O sinal é composto apenas por canais de cor, sem luminância.", "A imagem é transmitida em preto e branco com metadados de cor."], 
        a: 1, 
        e: "No 4:2:2, o primeiro número (4) é a luminância (Y) total. O segundo (2) indica que a cor é amostrada na metade da taxa horizontal, padrão profissional que equilibra qualidade e largura de banda." 
    },
    { 
        id: 255, s: 'e', p: 3, 
        q: "A função de um 'Waveform Monitor' na central técnica (MCR) é monitorar especificamente:", 
        o: ["A qualidade do áudio em decibéis.", "Os níveis de luminância e sincronismo do sinal de vídeo.", "A temperatura da CPU do servidor de exibição.", "A latência da rede de streaming."], 
        a: 1, 
        e: "O Waveform exibe o sinal de vídeo em forma de onda, permitindo ajustar o branco, o preto e o pedestal dentro dos limites legais (700mV)." 
    },
    { 
        id: 256, s: 'e', p: 3, 
        q: "Qual o impacto direto de uma taxa de compressão (GOP - Group of Pictures) muito longa em um sinal de transmissão via satélite?", 
        o: ["Melhora a qualidade das cores em tons pastéis.", "Aumenta a latência da decodificação e dificulta cortes precisos em tempo real.", "Reduz o consumo de energia do transmissor.", "Transforma o sinal progressivo em entrelaçado automaticamente."], 
        a: 1, 
        e: "GOPs longos (Long GOP) economizam banda, mas exigem que o decodificador espere mais quadros para reconstruir a imagem, gerando atraso." 
    },

    // === ELITE: PORTUGUÊS (Pontuação e Semântica) ===
    { 
        id: 36, s: 'p', p: 2, 
        q: "Assinale a alternativa em que a alteração da pontuação altera o sentido original da frase:", 
        o: ["Allan, o técnico, enviou o sinal. / Allan - o técnico - enviou o sinal.", "Os vereadores que votaram favoravelmente saíram. / Os vereadores, que votaram favoravelmente, saíram.", "O sinal caiu; a transmissão parou. / O sinal caiu. A transmissão parou.", "Não, o switcher não quebrou. / Não: o switcher não quebrou."], 
        a: 1, 
        e: "Sem vírgulas, a oração é restritiva (apenas alguns votaram). Com vírgulas, é explicativa (todos votaram favoravelmente)." 
    },

    // === ELITE: LEGISLAÇÃO (Administração Pública e Ética) ===
    { 
        id: 121, s: 'g', p: 2, 
        q: "Com base no Regime Jurídico Único dos Servidores de Goiânia, a redistribuição é o deslocamento de cargo de provimento efetivo para outro órgão, ocorrendo exclusivamente por:", 
        o: ["Interesse do servidor para tratamento de saúde.", "Interesse da administração, de ofício, com prévia apreciação do órgão central de pessoal.", "Promoção por tempo de serviço.", "Punição administrativa após processo disciplinar."], 
        a: 1, 
        e: "A redistribuição visa o interesse do serviço público e o ajuste de quadros de pessoal entre órgãos." 
    },

    // === ELITE: INFORMÁTICA (Segurança e Redes Avançadas) ===
    { 
        id: 422, s: 'i', p: 1, 
        q: "No contexto de endereçamento IP, qual a função da 'Máscara de Sub-rede' (Subnet Mask)?", 
        o: ["Aumentar a velocidade da conexão Wi-Fi.", "Definir qual parte do endereço IP refere-se à rede e qual parte refere-se ao host (dispositivo).", "Esconder o endereço real do computador na internet.", "Atribuir um nome amigável ao site (ex: google.com)."], 
        a: 1, 
        e: "A máscara (ex: 255.255.255.0) separa o ID da rede do ID do dispositivo, essencial para o roteamento de dados." 
    },
    { 
        id: 423, s: 'i', p: 1, 
        q: "A técnica de 'Spoofing' em ataques cibernéticos consiste em:", 
        o: ["Criptografar o HD para pedir resgate.", "Falsificar a identidade de um endereço IP, e-mail ou DNS para ganhar acesso a uma rede.", "Derrubar um servidor através de excesso de acessos simultâneos.", "Roubar a senha física através de câmeras de segurança."], 
        a: 1, 
        e: "Spoofing é uma técnica de falsificação de origem para enganar sistemas de segurança." 
    },

    // === ELITE: RACIOCÍNIO LÓGICO (Argumentação e Diagramas) ===
    { 
        id: 73, s: 'l', p: 1, 
        q: "Considere as premissas: 'Todo técnico é organizado' e 'Alguns técnicos são concursados'. Pode-se concluir logicamente que:", 
        o: ["Todo organizado é concursado.", "Algum organizado é concursado.", "Nenhum concursado é organizado.", "Todos os concursados são técnicos."], 
        a: 1, 
        e: "Se alguns técnicos são concursados e TODOS os técnicos são organizados, obrigatoriamente esses que são concursados também são organizados." 
    },


    // === ELITE: PORTUGUÊS (CONCORDÂNCIA, REGÊNCIA E PONTUAÇÃO) ===
    { 
        id: 37, s: 'p', p: 2, 
        q: "Assinale a opção que apresenta erro de concordância verbal, conforme a norma culta:", 
        o: ["Mais de um técnico se cumprimentaram após a transmissão.", "Cerca de cem servidores participaram da sessão na Câmara.", "Fomos nós que instalamos o novo servidor de caracteres.", "Grande parte dos parlamentares votou favoravelmente ao projeto."], 
        a: 0, 
        e: "Com a expressão 'mais de um', o verbo fica no singular, a menos que indique reciprocidade ou o numeral seja repetido." 
    },
    { 
        id: 38, s: 'p', p: 2, 
        q: "No que se refere à regência nominal, qual frase está INCORRETA?", 
        o: ["O diretor estava ansioso por ver os resultados da transmissão.", "Este equipamento de vídeo é incompatível com o sinal analógico.", "O técnico é muito capacitado de resolver problemas de rede.", "Estamos todos imunes a críticas infundadas sobre o trabalho técnico."], 
        a: 2, 
        e: "Quem é capacitado, é capacitado PARA algo ou EM algo, e não 'de' algo." 
    },
    { 
        id: 39, s: 'p', p: 2, 
        q: "Assinale a frase onde a vírgula é usada para separar um adjunto adverbial deslocado:", 
        o: ["Allan, verifique o sinal do switcher agora.", "Durante a madrugada, os servidores de rede foram reiniciados.", "O sinal caiu, mas a gravação continuou ativa.", "Compramos câmeras, lentes, tripés e cabos SDI."], 
        a: 1, 
        e: "'Durante a madrugada' é uma locução adverbial de tempo deslocada para o início da frase." 
    },

    // === ELITE: RACIOCÍNIO LÓGICO (TABELAS VERDADE E NEGAÇÕES) ===
    { 
        id: 74, s: 'l', p: 1, 
        q: "A negação da proposição 'Se o técnico é bom, então o sinal não cai' é equivalente a:", 
        o: ["O técnico é bom e o sinal cai.", "Se o técnico não é bom, então o sinal cai.", "O técnico não é bom ou o sinal não cai.", "Se o sinal cai, então o técnico é bom."], 
        a: 0, 
        e: "A negação de P -> Q é P ^ ~Q. Mantém a primeira (técnico bom) e nega a segunda (sinal cai)." 
    },
    { 
        id: 75, s: 'l', p: 1, 
        q: "Dadas as proposições P (Verdadeira) e Q (Falsa), qual das operações abaixo resulta em VERDADE?", 
        o: ["P ^ Q", "P -> Q", "~P v Q", "P v Q"], 
        a: 3, 
        e: "Na disjunção (v), se ao menos uma for verdadeira, o resultado é verdadeiro." 
    },

    // === ELITE: LEGISLAÇÃO E GOIÁS (ESTATUTO E HISTÓRIA) ===
    { 
        id: 122, s: 'g', p: 2, 
        q: "Segundo o Estatuto dos Servidores de Goiânia, a 'Posse' deve ocorrer no prazo de quantos dias após a publicação do ato de provimento?", 
        o: ["5 dias", "15 dias", "30 dias", "45 dias"], 
        a: 2, 
        e: "O prazo padrão estabelecido para a posse em cargo público municipal é de 30 dias." 
    },
    { 
        id: 123, s: 'g', p: 2, 
        q: "O 'Plano Diretor de Goiânia', elaborado na década de 30 por Attilio Corrêa Lima, previa uma cidade para quantos habitantes?", 
        o: ["15 mil", "50 mil", "100 mil", "500 mil"], 
        a: 1, 
        e: "O projeto original de Attilio previa uma capital para 50.000 habitantes." 
    },

    // === ELITE: CONHECIMENTOS ESPECÍFICOS (STREAMING E BROADCAST IP) ===
    { 
        id: 257, s: 'e', p: 3, 
        q: "O protocolo SRT (Secure Reliable Transport) tem ganhado espaço sobre o RTMP no streaming profissional por qual motivo principal?", 
        o: ["Ser um protocolo mais antigo e estável.", "Capacidade de corrigir perda de pacotes (ARQ) e oferecer menor latência em redes instáveis.", "Não exigir conexão com a internet para funcionar.", "Transmitir apenas sinais em preto e branco."], 
        a: 1, 
        e: "O SRT utiliza recuperação inteligente de pacotes, sendo superior ao RTMP em conexões de longa distância ou instáveis." 
    },
    { 
        id: 258, s: 'e', p: 3, 
        q: "No contexto de áudio embutido no sinal SDI, quantos canais de áudio (máximo) podem ser transportados simultaneamente na norma HD-SDI?", 
        o: ["2 canais (Estéreo)", "8 canais", "16 canais", "32 canais"], 
        a: 2, 
        e: "A norma SDI permite o transporte de até 16 canais de áudio embutidos (4 grupos de 4 canais)." 
    },
    { 
        id: 259, s: 'e', p: 3, 
        q: "O que define o 'Dynamic Range' (Alcance Dinâmico) de uma câmera de vídeo profissional?", 
        o: ["A velocidade do zoom da lente.", "A capacidade de capturar detalhes tanto nas áreas mais claras (highlights) quanto nas mais escuras (shadows).", "A quantidade de pixels totais do sensor.", "O tempo de duração da bateria."], 
        a: 1, 
        e: "Câmeras com alto alcance dinâmico evitam que o céu fique 'estourado' ou as sombras fiquem sem detalhe." 
    },

    // === ELITE: INFORMÁTICA (EXCEL AVANÇADO E REDES) ===
    { 
        id: 424, s: 'i', p: 1, 
        q: "No Microsoft Excel, a função =PROCV(valor_procurado; matriz_tabela; indice; [procurar_intervalo]) realiza qual tarefa?", 
        o: ["Soma apenas valores positivos de uma lista.", "Procura um valor na primeira coluna à esquerda de uma tabela e retorna um valor na mesma linha de uma coluna especificada.", "Inverte a ordem das linhas e colunas.", "Protege a planilha com uma senha criptografada."], 
        a: 1, 
        e: "PROCV significa Procura Vertical, essencial para cruzar dados entre tabelas diferentes." 
    },
    { 
        id: 425, s: 'i', p: 1, 
        q: "Qual a principal diferença entre os protocolos de transporte TCP e UDP?", 
        o: ["O TCP é mais rápido, mas menos seguro que o UDP.", "O TCP garante a entrega e a ordem dos pacotes (orientado à conexão), enquanto o UDP prioriza a velocidade sem garantir a entrega.", "O UDP é usado apenas para e-mails e o TCP para vídeos.", "Não há diferença técnica, são sinônimos."], 
        a: 1, 
        e: "TCP é usado onde a integridade é vital (ex: sites); UDP é usado onde a velocidade é vital (ex: chamadas de vídeo)." 
    }
];