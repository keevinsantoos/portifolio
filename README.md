# Portfólio de Kevin Santos

O portfólio usa uma única versão estática, mantida em `src/`. `index.html` é a
página principal; `services.html`, `contact.html` e `404.html` são páginas
complementares. O visual e as interações ficam em `src/styles.css` e
`src/script.js`.

## Executar localmente

Para servir os arquivos-fonte durante o desenvolvimento:

```powershell
py -m http.server 4173 --directory src
```

Acesse `http://localhost:4173/`. Para gerar a pasta de publicação localmente:

```powershell
npm run build
```

O build copia as páginas e os assets de `src/` para `dist/`. A Vercel publica
essa pasta, com o site atualizado como página principal. Os assets
compartilhados ficam em `src/public/`.
