# Brasa Sal (React + TypeScript + Vite)

## 🚀 Project overview

Brasa Sal is a responsive single-page restaurant landing site built with React + TypeScript + Vite. It includes:

- navigation bar
- hero section
- about section (`Sobre`)
- menu section (`Cardapio`)
- reservation section (`Reserva`)
- footer
- scroll reveal animations

The app is ideal as a portfolio or for local restaurant showcase.

---

## 🧩 Features

- Responsive design for mobile, tablet, desktop
- Smooth scrolling and section reveal on scroll (`useScrollReveal` hook)
- Clean component structure
- Minimal fast setup using Vite

---

## 🛠️ Tech stack

- `React` (functional components)
- `TypeScript`
- `Vite` (bundler/dev server)
- CSS (global styles in `src/style/global.css`)

---

## 📁 Project structure

- `src/main.tsx` – React app bootstrap
- `src/App.tsx` – root layout (Navbar, Hero, Sobre, Cardapio, Reserva, Footer)
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/Sobre.tsx`
- `src/components/sections/Cardapio.tsx`
- `src/components/sections/Reserva.tsx`
- `src/hooks/useScrollReveal.ts`
- `src/style/global.css`

---

## ▶️ How to run (english)

1. Clone repository

```bash
git clone https://github.com/<your-user>/brasa-sal.git
cd brasa-sal
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open

- http://localhost:5173
- https://sal-brasa-landingpage.vercel.app/

---

## 🧪 Scripts

- `npm run dev` - start local server
- `npm run build` - production build in `dist/`
- `npm run serve` - preview production build (requires `npm run build`)
- `npm run lint` - check lint (if configured via template and ESLint)

---

## 📦 Build for production

```bash
npm run build
```

Then preview:

```bash
npm run serve
```

---

## ☁️ Deployment

Deploy to Netlify/Vercel/GitHub Pages by connecting the repository and using `npm run build` as build command, output directory `dist`.

---

## 🧰 Customize

- Change content in `src/components/sections/*`
- Adjust layout in `src/components/layout/*`
- Add new sections or navigation items in `App.tsx` and `Navbar.tsx`
- Update styles in `src/style/global.css`

---

## 🤝 Contributing

1. Fork repository
2. Create branch `feature/<your-feature>`
3. Commit changes
4. Push branch
5. Open pull request

---

## 📄 License

MIT (ou outra licença que desejar)

---

# README (Português)

## 🚀 Visão geral do projeto

Brasa Sal é um site de landing page de restaurante de página única, responsivo, construído com React + TypeScript + Vite. Inclui:

- barra de navegação
- seção hero
- seção sobre (`Sobre`)
- seção cardápio (`Cardapio`)
- seção reserva (`Reserva`)
- rodapé
- animações de revelação ao rolar

---

## 🧩 Funcionalidades

- Responsividade (mobile/tablet/desktop)
- Scroll suave e revelação de seções (`useScrollReveal`)
- Estrutura de componentes organizada
- Setup rápido com Vite

---

## 🛠️ Stack tecnológica

- `React` (componentes funcionais)
- `TypeScript`
- `Vite`
- CSS em `src/style/global.css`

---

## 📁 Estrutura do projeto

- `src/main.tsx` – bootstrap do app
- `src/App.tsx` – layout principal (Navbar, Hero, Sobre, Cardapio, Reserva, Footer)
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/Sobre.tsx`
- `src/components/sections/Cardapio.tsx`
- `src/components/sections/Reserva.tsx`
- `src/hooks/useScrollReveal.ts`
- `src/style/global.css`

---

## ▶️ Como executar

1. Clone o repositório

```bash
git clone https://github.com/<your-user>/brasa-sal.git
cd brasa-sal
```

2. Instale dependências

```bash
npm install
```

3. Inicie o servidor

```bash
npm run dev
```

4. Abra

- http://localhost:5173
- https://sal-brasa-landingpage.vercel.app/

---

## 🧪 Scripts

- `npm run dev` - servidor local
- `npm run build` - build de produção em `dist/`
- `npm run serve` - pré-visualizar build (após `npm run build`)
- `npm run lint` - lint (se configurado)

---

## 📦 Build de produção

```bash
npm run build
```

Pré-visualizar:

```bash
npm run serve
```

---

## ☁️ Deploy

Use Netlify/Vercel/GitHub Pages. Comando de build: `npm run build`; pasta de saída: `dist`.

---

## 🧰 Personalização

- Edite `src/components/sections/*` para mudar conteúdos
- Edite `src/components/layout/*` para layout de header/footer
- Atualize `App.tsx` e `Navbar.tsx` para novas seções
- Modifique `src/style/global.css` para estilo

---

## 🤝 Contribuições

1. Fork
2. branch `feature/<nome>`
3. commit + push
4. PR

---

## 📄 Licença

MIT (ou outra)

