# Catálogo Digital - Painel Administrativo

Sistema completo de painel administrativo para um SaaS de catálogo digital, desenvolvido com Next.js (App Router), TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

### Painel Administrativo
- **Dashboard**: Visão geral com estatísticas e insights do catálogo
- **Gerenciamento de Produtos**: Criar, editar, deletar e listar produtos
- **Estatísticas e Analytics**: Análise detalhada de visualizações, cliques e conversões
- **Configurações do Catálogo**: Personalização de cores, logo, redes sociais e informações da loja
- **Perfil do Usuário**: Gerenciamento de informações pessoais e alteração de senha
- **Link Público**: Gerenciamento e compartilhamento do link público do catálogo
- **Upload de Imagens**: Sistema completo para upload de imagens de produtos e logo

## 📁 Estrutura do Projeto

```
├── app/
│   ├── admin/              # Painel administrativo
│   │   ├── layout.tsx      # Layout do painel admin
│   │   ├── page.tsx        # Dashboard
│   │   ├── products/       # Gerenciamento de produtos
│   │   ├── analytics/      # Estatísticas
│   │   ├── catalog-settings/ # Configurações
│   │   ├── profile/        # Perfil do usuário
│   │   └── public-link/   # Link público
│   └── catalog/            # Catálogo público
├── components/
│   └── admin/              # Componentes do painel admin
│       ├── Sidebar.tsx     # Barra lateral de navegação
│       ├── Header.tsx      # Cabeçalho do painel
│       └── ProductForm.tsx # Formulário de produtos
└── types/                  # Tipos TypeScript
    ├── Product.ts
    ├── User.ts
    ├── Catalog.ts
    └── Dashboard.ts
```

## 🛠️ Tecnologias

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Lucide React** (Ícones)

## 📦 Instalação

1. Instale as dependências:

```bash
npm install
```

2. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse o painel administrativo:

```
http://localhost:3000/admin
```

## 🎯 Rotas do Painel Admin

- `/admin` - Dashboard principal
- `/admin/products` - Lista de produtos
- `/admin/products/new` - Criar novo produto
- `/admin/products/[id]` - Editar produto
- `/admin/analytics` - Estatísticas e analytics
- `/admin/catalog-settings` - Configurações do catálogo
- `/admin/profile` - Perfil do usuário
- `/admin/public-link` - Gerenciar link público

## 🎨 Características do Design

- Interface moderna e responsiva
- Sidebar colapsável para mobile
- Design system consistente com Tailwind CSS
- Cores personalizáveis (verde como padrão)
- Componentes reutilizáveis
- Feedback visual em todas as ações

## 📝 Próximos Passos

Para integrar com backend, você precisará:

1. Criar APIs em `app/api/` para:
   - CRUD de produtos
   - Autenticação de usuários
   - Upload de imagens
   - Estatísticas e analytics
   - Configurações do catálogo

2. Implementar autenticação (ex: NextAuth.js)

3. Conectar com banco de dados (ex: PostgreSQL, MongoDB)

4. Implementar upload real de imagens (ex: Cloudinary, AWS S3)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
