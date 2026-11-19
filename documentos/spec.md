Tenho uma especificação de MVP de lista de tarefas.
Transforme-a em um prompt para gerar somente o front-end no Lovable.
Inclua: usuário, problema, fluxo, componentes, estados de interface,
responsividade, acessibilidade e restrições do escopo.
NÃO adicione autenticação, serviços de banco ou integrações externas.
Use dados simulados claramente identificados.
Organize a resposta em: objetivo, páginas, comportamentos, limites
e critérios de aceitação visual.
Antes do prompt final, aponte lacunas ou contradições.

Papel: Analista de requisitos senior.
contexto: uma pessoa organiza estudos.
Objetivo: especificar um mvp de tarefas.
Escopo: CRUD, status e filtro simples.
Restrições: sem login nem funções extras.
Saida: lista de requisitos + testes.
Componentes essenciais: cabeçalho e contexto, formulario de nova tarefa, lista e ações por item, filtro por situação, mensagens de feedback.

estados: vazio, carregando, erro, sucesso.
design: simples, responsivo, acessivel.



# PROMPT PARA LOVABLE — MVP DE LISTA DE TAREFAS DE ESTUDOS

## 1. OBJETIVO

Desenvolva exclusivamente o FRONT-END de uma aplicação web de lista de tarefas para organização de estudos.

### Usuário

O sistema será utilizado por uma pessoa que deseja organizar suas atividades de estudo, acompanhar tarefas pendentes e identificar aquelas que já foram concluídas.

### Problema

Pessoas que organizam seus estudos precisam de uma maneira simples e visual de registrar atividades, acompanhar seu andamento, editar informações e excluir tarefas que não são mais necessárias.

### Solução

Criar uma interface intuitiva, limpa e responsiva que permita:

- Cadastrar novas tarefas.
- Visualizar todas as tarefas cadastradas.
- Editar tarefas existentes.
- Excluir tarefas.
- Alterar o status entre pendente e concluída.
- Filtrar tarefas conforme sua situação.

O sistema deve ser simples, com foco na usabilidade e sem funcionalidades adicionais.

**IMPORTANTE: desenvolver somente o front-end. Não implementar backend, autenticação, banco de dados ou integrações externas.**

Utilizar exclusivamente dados simulados (mock data) e gerenciamento de estado local.

---

## 2. PÁGINAS

### Página principal — Minhas tarefas

Criar uma única página principal, responsável por todas as operações do MVP.

#### 2.1 Cabeçalho e contexto

Apresentar:

- Nome da aplicação: Minhas Tarefas.
- Subtítulo: Organize seus estudos e acompanhe seu progresso.
- Layout simples, organizado e visualmente agradável.

#### 2.2 Formulário de nova tarefa

Disponibilizar um formulário com:

- Campo Título (obrigatório).
- Campo Descrição (opcional).
- Botão Adicionar tarefa.

Comportamentos:
- Não permitir cadastro sem título.
- Exibir mensagem de validação quando o título estiver vazio.
- Limpar os campos após cadastro bem-sucedido.
- Exibir feedback visual de sucesso.

O formulário também deverá ser reutilizado para edição de tarefas.

#### 2.3 Lista de tarefas

Apresentar as tarefas cadastradas em cards ou linhas organizadas.

Cada tarefa deverá apresentar:

- Título.
- Descrição, quando preenchida.
- Situação atual.
- Ação para marcar como concluída ou pendente.
- Ação para editar.
- Ação para excluir.

Utilizar indicadores visuais distintos para tarefas pendentes e concluídas.

Tarefas concluídas devem apresentar uma diferenciação visual discreta, como texto riscado e identificação do status.

#### 2.4 Filtro por situação

Disponibilizar três opções:

- Todas.
- Pendentes.
- Concluídas.

O filtro deverá atualizar a lista imediatamente, sem recarregar a página.

A opção selecionada deve apresentar destaque visual.

---

## 3. COMPORTAMENTOS E FLUXOS

### 3.1 Criar tarefa

1. Usuário acessa a página principal.
2. Preenche o título.
3. Opcionalmente, preenche a descrição.
4. Clica em Adicionar tarefa.
5. A tarefa aparece imediatamente na lista.
6. O sistema apresenta uma mensagem de sucesso.

### 3.2 Consultar tarefas

Ao abrir a aplicação, apresentar uma lista de tarefas simuladas.

Cada tarefa deverá apresentar suas informações e ações disponíveis.

### 3.3 Editar tarefa

1. Usuário seleciona a opção Editar.
2. O formulário é preenchido com os dados atuais.
3. Usuário altera as informações.
4. Clica em Salvar alterações.
5. A lista é atualizada imediatamente.
6. Exibir mensagem de sucesso.

Disponibilizar também uma opção para cancelar a edição.

### 3.4 Excluir tarefa

1. Usuário seleciona Excluir.
2. Apresentar uma confirmação antes da exclusão.
3. Se confirmar, remover a tarefa da lista.
4. Se cancelar, manter a tarefa.
5. Exibir feedback após a exclusão.

### 3.5 Alterar status

Permitir alternar entre:

- Pendente.
- Concluída.

A alteração deverá ser imediata e refletida visualmente no item.

### 3.6 Filtrar tarefas

O usuário poderá selecionar Todas, Pendentes ou Concluídas.

A listagem deverá apresentar somente os itens correspondentes ao filtro selecionado.

### 3.7 Estados da interface

Implementar os seguintes estados visuais:

**Estado vazio**
- Apresentar mensagem informando que nenhuma tarefa foi cadastrada.
- Exibir orientação para adicionar a primeira tarefa.

**Estado de carregamento**
- Apresentar indicador visual de carregamento inicial simulado.
- Não utilizar chamadas de rede.

**Estado de erro**
- Apresentar mensagem amigável de erro simulado.
- Disponibilizar opção visual para tentar novamente.
- Não realizar chamadas a serviços externos.

**Estado de sucesso**
- Exibir feedback visual após cadastro, edição, exclusão e alteração de status.

Esses estados devem ser implementados exclusivamente no front-end.

---

## 4. COMPONENTES

Organizar a interface em componentes reutilizáveis:

1. Header — cabeçalho e identificação da aplicação.
2. TaskForm — formulário de criação e edição.
3. TaskList — listagem das tarefas.
4. TaskItem — representação individual de uma tarefa.
5. TaskFilters — filtros por situação.
6. FeedbackMessage — mensagens de sucesso, erro e validação.
7. EmptyState — apresentação da lista vazia.
8. LoadingState — indicador de carregamento.
9. ConfirmDialog — confirmação de exclusão.

Manter uma estrutura de componentes organizada, evitando duplicação de código.

### Dados simulados

Criar uma lista inicial de tarefas fictícias para demonstrar a aplicação.

Exemplo:

[
  {
    "id": 1,
    "title": "Estudar HTML e CSS",
    "description": "Revisar estrutura e estilização de páginas.",
    "status": "pendente"
  },
  {
    "id": 2,
    "title": "Revisar JavaScript",
    "description": "Estudar variáveis, funções e estruturas condicionais.",
    "status": "concluida"
  },
  {
    "id": 3,
    "title": "Resolver exercícios",
    "description": "Praticar exercícios de programação.",
    "status": "pendente"
  }
]

Identificar claramente os dados como dados demonstrativos.

As operações CRUD deverão atualizar o estado local da aplicação.

Não implementar persistência em banco de dados ou armazenamento externo.

---

## 5. RESPONSIVIDADE

A interface deverá funcionar adequadamente em:

- Desktop.
- Tablets.
- Smartphones.

Requisitos:

- Utilizar layout fluido.
- Adaptar os componentes à largura da tela.
- Manter os formulários confortáveis para utilização em dispositivos móveis.
- Evitar rolagem horizontal.
- Adaptar os botões e ações dos itens para telas menores.
- Manter espaçamentos e alinhamentos consistentes.

Priorizar uma experiência mobile-friendly.

---

## 6. ACESSIBILIDADE

Seguir boas práticas de acessibilidade:

- Utilizar HTML semântico.
- Associar labels aos campos dos formulários.
- Permitir navegação completa pelo teclado.
- Apresentar indicadores visíveis de foco.
- Utilizar contraste adequado entre texto e fundo.
- Não depender exclusivamente de cores para identificar status.
- Utilizar textos acessíveis nos botões e ícones.
- Disponibilizar mensagens de feedback compatíveis com leitores de tela.
- Utilizar atributos ARIA quando necessários.
- Garantir áreas de interação confortáveis em dispositivos móveis.

---

## 7. LIMITES DO ESCOPO

Este projeto deverá implementar exclusivamente o front-end.

### Funcionalidades permitidas

- Criar tarefas.
- Consultar tarefas.
- Editar tarefas.
- Excluir tarefas.
- Alterar status.
- Filtrar por situação.
- Exibir estados visuais.
- Gerenciar dados simulados em memória.

### Funcionalidades proibidas

NÃO implementar:

- Login ou autenticação.
- Cadastro de usuários.
- Recuperação de senha.
- Banco de dados.
- Backend ou APIs.
- Integrações externas.
- Firebase ou Supabase.
- Notificações externas.
- Calendário.
- Controle de horários.
- Categorias ou prioridades.
- Relatórios ou gráficos.
- Compartilhamento de tarefas.
- Funcionalidades adicionais não especificadas.

Não adicionar funcionalidades por iniciativa própria.

### Tecnologias e implementação

Utilizar a estrutura de front-end padrão do Lovable, preferencialmente React e TypeScript.

Manter o gerenciamento de estado local.

Não instalar dependências desnecessárias.

---

## 8. CRITÉRIOS DE ACEITAÇÃO VISUAL

A aplicação será considerada visualmente adequada quando:

1. Apresentar uma interface limpa, moderna e organizada.
2. O cabeçalho identificar claramente a finalidade da aplicação.
3. O formulário de tarefas estiver bem posicionado e fácil de utilizar.
4. Os campos possuírem labels e estados visuais adequados.
5. A lista apresentar tarefas de maneira organizada.
6. Os botões de editar, excluir e alterar status forem facilmente identificáveis.
7. Os filtros estiverem visíveis e apresentarem destaque quando selecionados.
8. Os estados vazio, carregando, erro e sucesso possuírem representações visuais próprias.
9. A interface funcionar corretamente em diferentes tamanhos de tela.
10. Os elementos apresentarem espaçamentos, tipografia e cores consistentes.
11. A aplicação permitir navegação por teclado.
12. Nenhum elemento visual estiver desalinhado, cortado ou sobreposto.

### Diretrizes de design

Adotar um visual minimalista, profissional e agradável.

- Fundo claro.
- Paleta de cores discreta.
- Cards com bordas suaves.
- Cantos levemente arredondados.
- Tipografia legível.
- Ícones simples e consistentes.
- Botões com estados de hover e foco.
- Feedback visual discreto.

Evitar excesso de cores, animações, elementos decorativos e informações desnecessárias.

**RESULTADO ESPERADO: uma aplicação funcional de lista de tarefas para estudos, com CRUD completo no estado local, filtros por situação e interface responsiva e acessível.**

Desenvolver somente o MVP descrito, sem ampliar o escopo.