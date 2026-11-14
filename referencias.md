# Referências de design pesquisadas — CRIAÇÕES

Pesquisa feita em inglês, como pedido (ex.: “product showcase website design”, “ancient Egypt exhibition design”, “Awwwards product page scroll”), no Pinterest e no Awwwards.

## Fórmula de demonstração de produto (a espinha do site)
- **Apple AirPods Pro — Awwwards (Site of the Month, jan/2020)**: página de produto em narrativa contínua por scroll — o produto é o herói, o movimento é guiado pela rolagem e a ficha técnica entra como “especificação”, não como texto corrido. No CRIAÇÕES: cada criação ganha um **palco de lançamento escuro**, pitch curto, faixa de números, ficha técnica e “como funciona” em passos.
- **Opal Tadpole — Awwwards Site of the Year 2024 (eCommerce)**: “product-first storytelling” — o objeto conta a história por revelações sequenciadas no scroll, em vez de tabela de especificações. No CRIAÇÕES: revelação suave por seção (fade + subida), imagem grande com parallax leve e selo de índice (001/002/003) como linha de produtos.
- **Padrões de hero de produto (pesquisa no Pinterest: “product showcase website design hero section big typography”)**: hero “cinematic product” (fundo escuro, objeto em destaque, texto mínimo) e hero “masthead” (tipografia gigante editorial). No CRIAÇÕES: hero claro em papel/areia com tipografia Fraunces gigante + foto de Gizé emoldurada com selo, e palcos escuros para cada produto.

## Arquitetura e clima visual
- **Grand Egyptian Museum — campanha no Behance**: identidade de museu premium — luz dourada quente, tons terrosos, tipografia elegante e cada artefato como centro da composição. No CRIAÇÕES: paleta papel/areia + tinta, um acento por criação (terracota, azul lápis-lazúli, verde-Nilo) e legendas de museu com crédito em todas as fotos.
- **Gallery of the Kings, Museo Egizio (OMA, Turim)**: percurso da escuridão para a luz, estátuas monumentais guiando o visitante como num templo. No CRIAÇÕES: alternância claro (contexto) → escuro (palco do produto) → claro (detalhes), como salas de exposição.
- **Awwwards — padrões vencedores atuais**: storytelling dirigido por scroll, títulos que se revelam em sequência, movimento com propósito (não decoração), 60 fps e respeito a `prefers-reduced-motion`. Tudo aplicado com CSS/JS próprios, sem biblioteca pesada, para o site ficar leve no celular.

## Decisões que ficaram de fora (de propósito)
- 3D/WebGL e scroll “sequestrado” (Lenis/GSAP pesados): bonito no desktop, mas o público chega pelo QR no celular — prioridade foi carregar rápido (site inteiro: ~1,2 MB) e nunca travar a rolagem.
- Fundo dark total: o projeto anterior já foi dark/editorial; este é a “vitrine clara de museu” com palcos escuros, para os dois trabalhos não ficarem com a mesma cara.
