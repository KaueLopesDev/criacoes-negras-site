# CRIAÇÕES — Inventado por mãos negras

Site escolar de Consciência Negra que apresenta **criações feitas por pessoas negras e quem as criou**, no formato de **demonstração de produto** (como uma página de lançamento): cada criação tem palco de lançamento, ficha técnica, “como funciona”, perfil do criador e impacto.

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
index.html            página única (hero, coleção, 3 demonstrações, comparativo, linha do tempo, QR, fontes)
qr.html               página imprimível do QR Code
assets/css/styles.css estilos (mobile first)
assets/js/app.js      animações suaves, contadores, parallax leve e QR dinâmico
assets/img/           6 imagens do Wikimedia Commons + manifest.json com licença e fonte de cada uma
```

## Design
- Direção: “vitrine de museu / lançamento de produto” — palco escuro para cada criação (referência: páginas de produto premiadas no Awwwards, como Apple AirPods Pro — narrativa por scroll, produto como herói, ficha técnica como especificação), paleta papel/areia com um acento por criação (terracota, lápis-lazúli, verde-Nilo), tipografia editorial Fraunces + Archivo.
- Mobile first: pensado para quem chega pelo QR no celular (360–390 px), com navegação fixa inferior, animações suaves com `prefers-reduced-motion` respeitado e imagens otimizadas (~1,2 MB no total).

## Fontes do conteúdo
Listadas na seção “Fontes e créditos” do próprio site (World History Encyclopedia, Purdue University, Wikipedia e Met Museum/Wikimedia Commons para as imagens).
