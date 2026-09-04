# Kombucha Pirá — Linktree

Site estático (HTML/CSS/JS puro, sem build step) pronto para hospedar em cPanel. Baseado no linktree do Seu Artesão (mesma estrutura/mecânica), com paleta própria da Kombucha Pirá — rosa, roxo, coral e azul, extraídos da logo real da marca.

## Estrutura

```
index.html        página principal
css/style.css      estilos (tema escuro + paleta rosa/roxo/coral/azul da marca)
js/script.js       botão de compartilhar
favicon.svg        ícone da marca (círculo dourado + ondas azul/roxo — favicon real fornecido pelo cliente)
assets/logo.png     logo "KOMBUCHA · PIRÁ" (recortada da arte colorida fornecida pelo cliente)
assets/            foto de fundo (opcional)
```

## Conteúdo atual

- Logo: `assets/logo.png` (recortada da arte "LOGO COLORIDA SEM FUNDO" fornecida pelo cliente — removi o texto lateral "Chá fermentado não alcóolico" e a linha de redes sociais/handle do rodapé da arte original, que já aparecem como botões próprios no linktree)
- WhatsApp: `(82) 99831-3717` (mesmo número do Seu Artesão) — mensagem pré-preenchida própria da Kombucha Pirá
- Instagram: `https://www.instagram.com/kombuchapira/`
- Nosso site: `https://kombuchapira.com.br/`
- Avalie no Google: link direto pra tela de avaliação (fornecido pelo cliente)
- Onde nos encontrar: `https://kombuchapira.com.br/parceiros` — **atenção:** essa URL é uma suposição (aba de parceiros do site, seguindo o padrão do domínio); confirme o caminho exato assim que a página existir/for confirmada
- Localização: link do Google Maps da fábrica (fornecido pelo cliente)
- E-mail: `jayandersonamorim@gmail.com` (mesmo e-mail do Seu Artesão)
- Tagline: frase genérica ("Kombucha artesanal, viva e borbulhante") — trocar quando tiver o texto definitivo

## O que trocar

Em `index.html`:
- `Kombucha Pirá` — nome/marca (`<title>`, meta description, `alt` da logo, rodapé)
- `.tagline` — frase curta
- `assets/logo.png` — logo (substitua o arquivo para trocar a marca)
- Links dos botões e o `mailto:` de e-mail

Em `css/style.css`:
- `background-image: url("../assets/background.jpg")` — foto de fundo (adicione `assets/background.jpg`; enquanto não existir, o site usa a cor `--bg-dark` sólida)
- Cores no topo do arquivo (`--blue`, `--purple`, `--coral`, `--pink`, `--bg-dark`, etc.) para ajustar a paleta

## Publicar no cPanel

1. Crie o subdomínio ou pasta onde o site vai ficar (ex: `links.kombuchapira.com.br` ou uma pasta em `public_html`).
2. No Gerenciador de Arquivos (ou via FTP), envie todo o conteúdo deste repositório **exceto o `README.md`** (`index.html`, `favicon.svg`, `css/`, `js/`, `assets/`) direto na raiz dessa pasta — sem subpasta extra.
3. Nenhuma instalação ou build é necessária — é só HTML/CSS/JS estático.
