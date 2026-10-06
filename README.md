# Portfólio de Kevin Santos

O portfólio usa uma única versão estática. `index.html` é a página principal;
`services.html`, `contact.html` e `404.html` são páginas complementares. O
visual e as interações ficam em `styles.css` e `script.js`.

## Executar localmente

Na raiz do projeto, inicie um servidor de arquivos estáticos:

```powershell
py -m http.server 4173
```

Acesse `http://localhost:4173/`. Para gerar a pasta de publicação localmente:

```powershell
npm run build
```

O build gera o site em `dist/`. A Vercel publica essa pasta, com o site
atualizado como página principal. Os assets compartilhados ficam em `public/`.
