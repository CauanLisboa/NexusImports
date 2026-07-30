## Objetivo

Um site de loja com a mesma linguagem visual da referência: fundo preto profundo, luz vermelha dramática, produtos "flutuando" em palco escuro, tipografia condensada em caixa alta, navegação lateral entre produtos.

## Estrutura (site completo)

```text
/            Vitrine cinematográfica (hero com 3 produtos em destaque)
/produtos    Catálogo com filtros por categoria
/produtos/:id  Página de produto (foto grande + detalhes)
/sobre       História da marca
/contato     Formulário + dados de contato
```

## Categorias

Perfumes, Drones e Periféricos Gamer — cada uma com sua cor de destaque dentro da paleta (vermelho principal, variações de brilho).

## Look & feel

- Paleta: preto (#0A0A0A / #141414), vermelho neon (#E1121C) e off-white
- Tipografia condensada em caixa alta com espaçamento largo para títulos e labels
- Palco escuro com reflexo no "chão", faixa vertical de luz vermelha atrás do produto central
- Navegação entre produtos no rodapé/laterais, tipo "Navegar para →", igual à referência
- Cursor/hover com brilho vermelho, transições suaves, sem excesso de animação
- Rodapé minimalista com links legais

## Imagens

Coloco placeholders no estilo do palco escuro nas posições certas. Quando você mandar as fotos dos produtos, eu troco uma a uma (o ideal é foto com fundo escuro ou PNG sem fundo, para encaixar no palco).

## Detalhes técnicos

- Rotas TanStack, uma por seção, cada uma com título/descrição própria para SEO
- Tokens de cor, gradientes e sombras definidos em `src/styles.css` (nada de cor fixa nos componentes)
- Catálogo em dados locais por enquanto; se depois quiser carrinho, pedidos ou painel admin, ativamos o backend (Lovable Cloud)
- Layout responsivo: no celular o palco vira uma coluna com scroll horizontal entre produtos
