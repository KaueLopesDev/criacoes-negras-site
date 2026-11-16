# CRIAÇÕES — Inventado por mãos negras

Site escolar de Consciência Negra que apresenta **criações feitas por pessoas negras e quem as criou**. Cada criação é um **dossiê de 8 perguntas** (fluxo definido para o projeto): O que é? · Perspectiva agrícola · Contexto histórico · Para que serve? (com o “como funciona” dentro) · Curiosidade · Quem criou? · Origem · Sobre o inventor. Antes dos dossiês, a seção “Um continente, muitos povos” abre o mapa além do Egito: Timbuktu (Mali), Grande Zimbábue, Bronzes do Benin (Nigéria) e o café (Etiópia).

## As 3 criações
1. **As Pirâmides do Egito** — criador em destaque: **Imhotep** (arquiteto da Pirâmide de Degraus de Djoser, c. 2650 a.C.) + os arquitetos, engenheiros e trabalhadores egípcios.
2. **O Tear** — criação coletiva das **tecelãs e tecelões do Nilo** (primeiro registro: Egito, c. 4400 a.C.).
3. **O Arado** — criação coletiva dos **agricultores do Nilo** (entre os primeiros do mundo, c. 4000 a.C.; tração por bois c. 2000 a.C.).

## Como usar
- Abra `index.html` no navegador (ou publique a pasta inteira no GitHub Pages, como o projeto anterior).
- `qr.html` é a página do **QR Code para imprimir no cartaz**: o QR é gerado automaticamente a partir do endereço onde o site estiver publicado, então funciona em qualquer hospedagem, sem precisar trocar nada.
- Não precisa de servidor nem de internet para o conteúdo — só as fontes do Google Fonts e a geração do QR usam rede (com alternativas locais se estiver offline).

## Estrutura
```
index.html            página única (capa, "Um continente, muitos povos", 3 dossiês de 8 perguntas, comparativo, linha do tempo, QR, fontes)
qr.html               página imprimível do QR Code
assets/css/styles.css estilos (mobile first)
assets/js/app.js      animações suaves de revelação e QR dinâmico
assets/img/           6 imagens do Wikimedia Commons + manifest.json com licença e fonte de cada uma
```

## Design (v6 — disciplina editorial, linguagem têxtil pan-africana)
Na v6 saíram os dispositivos egípcios do design (grade de proporção da capa, linha
de chão de tumba): a espinha visual é a faixa de tecido com geometria do bogolan
(Mali) em duotone, a seção dos povos virou faixa escura emoldurada pelo tecido, e
segue valendo o sistema abaixo.
UM acento (vermelho-ocre `#B3401E`), dourado só em filetes, papel `#F4ECDC` e tinta
`#221607`, duas fontes, índice em linhas, etiqueta de objeto, faixa tecida duotônica
(máx. 4 aparições), a digital como assinatura única de "Quem criou?" e o Sankofa
explicado em texto. Cada dossiê responde às 8 perguntas na ordem: O que é? ·
Perspectiva Agrícola · Contexto histórico · Para que serve? (com os passos) ·
Curiosidade · Quem criou? · Origem · Sobre o inventor. Justificativas e referências
no arquivo `referencias.md`.

## Fontes do conteúdo
Listadas na seção “Fontes e créditos” do próprio site (World History Encyclopedia, Purdue University, Wikipedia e Met Museum/Wikimedia Commons para as imagens).
