# Portfolio Pessoal - Mateus Moller

Portfolio profissional desenvolvido com foco em tecnologia aplicada ao ambiente industrial.

## Stack

- React 19 + Vite
- Tailwind CSS
- React Icons + Lucide React

## Como rodar localmente

1. Instale dependencias:

```bash
npm install
```

2. Inicie ambiente de desenvolvimento:

```bash
npm run dev
```

3. Gere build de producao:

```bash
npm run build
```

4. Visualize build local:

```bash
npm run preview
```

## Estrutura principal

```text
src/
  components/
    AboutSection.jsx
    ContactSection.jsx
    Footer.jsx
    HeroSection.jsx
    Navbar.jsx
    ProfileSection.jsx
    ProjectsSection.jsx
    Reveal.jsx
    SectionHeader.jsx
    SkillsSection.jsx
  data/
    portfolioData.js
  utils/
    skillIconMap.jsx
  App.jsx
  index.css
```

## Onde editar o conteudo

Todo o conteudo principal esta centralizado em:

- `src/data/portfolioData.js`

Edite nesse arquivo:

- dados pessoais (`personal`)
- links (`links`)
- navegacao (`navigation`)
- destaques (`highlights`)
- texto de sobre (`about`)
- habilidades (`skills`)
- projetos (`projects`)
- perfil profissional (`professionalProfile`)
- contato (`contact`)

## Atualizar e-mail e curriculo

No arquivo `src/data/portfolioData.js`:

- Preencha `personal.email` para habilitar botao de e-mail.
- Preencha `personal.resumeUrl` para habilitar botao de download de curriculo.

## SEO e compartilhamento

As metatags estao no arquivo:

- `index.html`

Imagem de compartilhamento:

- `public/og-image.svg`

Favicon:

- `public/favicon.svg`

## Fonte dos dados de projetos

Os textos e cards de projeto foram montados com base nos dados publicos do GitHub de `MateusMoller`:

- `Consulta-Imagens-Rech`
- `Painel-de-Controle-Para-Galvonoplastia-Est-tica`
- `MateusMoller`

Observacao: o LinkedIn nao expoe dados estruturados via acesso automatico sem autenticacao, entao a secao esta pronta para receber ajustes manuais de experiencia e resumo quando voce quiser.
