# Kombucha Pirá — Linktree

Site estático (HTML/CSS/JS puro, sem build step) pronto para hospedar em cPanel. Baseado no linktree do Seu Artesão (mesma estrutura/mecânica), com visual seguindo o próprio site da Kombucha Pirá: fundo em gradiente dourado/âmbar e botões em pílulas coloridas sólidas (verde do WhatsApp, gradiente do Instagram, roxo, vermelho, etc.), igual ao padrão usado em kombuchapira.com.br.

## Estrutura

```
index.html        página principal
css/style.css      estilos (fundo dourado + pílulas coloridas, no padrão do site da marca)
js/script.js       botão de compartilhar
favicon.svg        ícone da marca (círculo dourado + ondas azul/roxo — favicon real fornecido pelo cliente)
assets/logo.png     logo "KOMBUCHA PIRÁ" (recortada de logo-kombucha-pira.png do site oficial)
```

## Conteúdo atual

- Logo: `assets/logo.png` — recortada direto de `logo-kombucha-pira.png` do repositório oficial do site (`kombucha_pira_site`), a mesma logo usada no cabeçalho de kombuchapira.com.br. Removi só a tag "Beba Gelada!" (canto superior); mantive "KOMBUCHA PIRÁ" + "Chá fermentado não alcóolico" + "Penedo-AL"
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
- Cores no topo do arquivo (`--bg-top`, `--bg-bottom`, `--purple`, `--navy`, `--red`, `--green`, `--pink`) para ajustar a paleta
- Cada botão tem sua própria classe de cor (`.whatsapp`, `.instagram`, `.site`, `.review`, `.partners`, `.location`) — mude a cor de um botão específico editando a regra correspondente

## Publicar no cPanel

1. Crie o subdomínio ou pasta onde o site vai ficar (ex: `links.kombuchapira.com.br` ou uma pasta em `public_html`).
2. No Gerenciador de Arquivos (ou via FTP), envie todo o conteúdo deste repositório **exceto o `README.md`** (`index.html`, `favicon.svg`, `css/`, `js/`, `assets/`) direto na raiz dessa pasta — sem subpasta extra.
3. Nenhuma instalação ou build é necessária — é só HTML/CSS/JS estático.
