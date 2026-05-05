Projeto básico onde o intuito é aprender a utilizar o slug para rotas dinamicas no site.

Para iniciar o projeto é preciso executar os seguintes comandos

Instalar as dependencias que estão sendo usadas.
"npm install"

Rodar o site
"npm run dev"

Projeto também foi utilizado para outra atividade com o objetivo de otimizar o site da melhor maneira possível.

O projeto inicialmente não apresentava quaisquer problemas para rodar então foi adicionado algumas imagens para testar seu corpotamento e feito os testes de performance em conexões mais lentas
Com isso foi identificado que as imagens estarem em .png poderiam estar causando lentidão na hora de carrega-las, com isso foi feito a conversão das imagens para formato .webp e também passado a usar o componente <Image> do nextjs para aproveitar de otimizações padrões do componente, como o lazy load.
Com essas melhorias ganhamos cerca de 100ms em conexões mais rápidas e para conexões mais lentas, saimos de mais de 3 minutos de espera para carregar as imagens para pouco mais de 2 minutos.

Também foi identificado que o arquivo de estilos do tailwindcss esta tendo uma certa demora, já o mesmo carregava todos os estilos que o tailwincss tem e não somente o que estava sendo usado, com isso foi alterado a versão do tailwincdd para o tailwindcss/CLI, com isso ganhamos cerca de 10 a 15ms no carregamento do arquivo de estilização.

Como ultima melhoria feita, foi adicionado um sistema de cache, onde deixa os arquivos mais pesados salvos no navegador para melhorar a performance e experiencia do usuário ao navegar no site.

Caso queira ver os comparativos de antes e depois da otimização
Junto a este projeto, está também dois arquivos PDF, tendo o antes e depois com algumas imagens e um pouco mais de detalhes do que foi feito.