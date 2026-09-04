# Kombucha Pirá — Linktree

Site estático (HTML/CSS/JS puro, sem build step) pronto para hospedar em cPanel. Baseado no linktree do Seu Artesão, com paleta própria da Kombucha Pirá (dourado, azul e roxo, extraídos do favicon real da marca).

## Estrutura

```
index.html        página principal
css/style.css      estilos (tema escuro + dourado/azul/roxo da marca)
js/script.js       botão de compartilhar
favicon.svg        ícone da marca (círculo dourado + ondas azul/roxo)
assets/            foto de fundo (opcional)
```

## Conteúdo atual — TUDO AINDA É PLACEHOLDER

Só uma informação é real até agora:
- Nosso site: `https://kombuchapira.com.br/`

O resto é placeholder, esperando os dados reais:
- WhatsApp: `https://wa.me/5500000000000` (número de exemplo)
- Instagram: `https://instagram.com/kombuchapira` (handle de exemplo, confirmar)
- E-mail: `contato@kombuchapira.com.br` (exemplo, confirmar)
- Tagline: "Kombucha artesanal, viva e borbulhante" (frase genérica)
- Avatar: usa o próprio ícone/favicon da marca (círculo dourado + ondas) — trocar por uma foto/logo real se tiverem uma

## O que trocar

Em `index.html`:
- `Kombucha Pirá` — nome/marca (`<title>`, meta description, `.name`, rodapé)
- `.tagline` — frase curta
- Links dos botões: WhatsApp, Instagram, Nosso site
- `mailto:contato@kombuchapira.com.br` — e-mail de contato
- O bloco `<div class="avatar">` — se tiverem uma foto/logo própria, trocar o SVG por `<img src="assets/logo.png" ...>` (mesmo padrão usado no linktree do Seu Artesão)

Em `css/style.css`:
- `background-image: url("../assets/background.jpg")` — foto de fundo (adicione `assets/background.jpg`; enquanto não existir, o site usa a cor `--bg-dark` sólida)
- Cores no topo do arquivo (`--gold`, `--blue`, `--purple`, `--bg-dark`, etc.) para ajustar a paleta

## Publicar no cPanel

1. Crie o subdomínio ou pasta onde o site vai ficar (ex: `links.kombuchapira.com.br` ou uma pasta em `public_html`).
2. No Gerenciador de Arquivos (ou via FTP), envie todo o conteúdo deste repositório **exceto o `README.md`** (`index.html`, `favicon.svg`, `css/`, `js/`, `assets/`) direto na raiz dessa pasta — sem subpasta extra.
3. Nenhuma instalação ou build é necessária — é só HTML/CSS/JS estático.
