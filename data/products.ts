import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Açai no copo",
    description: "Açaí gelado, cremoso e refrescante, perfeito para qualquer momento.!",
    price: 8.00,
    category: "Açais",
    image: "/images/açai/01_açai.png",
    tags: ["açai", "gelado", "roxo"],
    destaque: true,
    maisVendidos: true,
    tipos: [
      { id: 1, name: "Copo 180", price: 8 },
      { id: 2, name: "Copo 250", price: 10 },
      { id: 3, name: "Copo 300", price: 12 },
      { id: 4, name: "Copo 400", price: 18 },
      { id: 5, name: "Copo 500", price: 22 },
      { id: 6, name: "Copo 700", price: 28 },
    ],
    additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 3,
        items: [
          { id: 101, name: "Leite em pó", price: 0, icon: "🥛" },
          { id: 102, name: "Paçoca", price: 0, icon: "🥜" },
          { id: 103, name: "Leite condensado", price: 0, icon: "🍶" },
          { id: 104, name: "Granola", price: 0, icon: "🌾" },
          { id: 105, name: "Banana", price: 0, icon: "🍌" }
        ]
      },
      
      {
        type: "pago",
        title: "Adicionais Pagos",
        max: 3,
        items: [
          { id: 3, name: "Ovomaltine", price: 5.0, icon: "🍫" },
          { id: 4, name: "Nutella", price: 5.0, icon: "🍫" },
          { id: 5, name: "Creme de Amendoim", price: 5.0, icon: "🥜" },
          { id: 6, name: "Creme de Avelã", price: 5.0, icon: "🌰" },
          { id: 7, name: "Creme de ninho", price: 5.0, icon: "🥛" },
          { id: 8, name: "Creme de morango", price: 5.0, icon: "🍓" },
          { id: 9, name: "Creme de ovomaltine", price: 5.0, icon: "🍫" },
          { id: 10, name: "Chantilly", price: 5.0, icon: "🍦" },
          { id: 11, name: "Disquete", price: 2.0, icon: "🍬" },
          { id: 12, name: "Gotas de chocolate", price: 2.0, icon: "🍫" },
          { id: 13, name: "Granulado", price: 2.0, icon: "🍫" },
          { id: 14, name: "Choco ball", price: 2.0, icon: "🍫" },
          { id: 15, name: "Jujuba", price: 2.0, icon: "🍬" },
          { id: 16, name: "Marshmallow", price: 2.0, icon: "🍡" },
          { id: 17, name: "Biz", price: 2.0, icon: "🍫" }
        ]
      },
      {
        type: "pago",
        title: "Frutas",
        max: 1,
        items: [
          { id: 201, name: "Morango", price: 5.0, icon: "🍓" },
          { id: 202, name: "Kiwi", price: 2.0, icon: "🥝" },
          { id: 203, name: "Uva", price: 2.0, icon: "🍇" }
        ]
      }
    ],
  },
  {
    id: 2,
    name: "Açai Casadinho de Iogurte Grego",
    description: "Açaí cremoso no estilo casadinho, combinado com iogurte grego, trazendo leveza e um contraste suave e refrescante.",
    price: 8.00,
    category: "Açais",
    image: "/images/açai/02_acai_casadinho.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: true,
    maisVendidos: true,
    tipos: [
      { id: 1, name: "Copo 180", price: 8 },
      { id: 2, name: "Copo 250", price: 10 },
      { id: 3, name: "Copo 300", price: 12 },
      { id: 4, name: "Copo 400", price: 18 },
      { id: 5, name: "Copo 500", price: 22 },
      { id: 6, name: "Copo 700", price: 28 },
    ],
    
    additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 3,
        items: [
          { id: 101, name: "Leite em pó", price: 0, icon: "🥛" },
          { id: 102, name: "Paçoca", price: 0, icon: "🥜" },
          { id: 103, name: "Leite condensado", price: 0, icon: "🍶" },
          { id: 104, name: "Granola", price: 0, icon: "🌾" },
          { id: 105, name: "Banana", price: 0, icon: "🍌" }
        ]
      },

      {
        type: "pago",
        title: "Adicionais Pagos",
        max: 3,
        items: [
          { id: 3, name: "Ovomaltine", price: 5.0, icon: "🍫" },
          { id: 4, name: "Nutella", price: 5.0, icon: "🍫" },
          { id: 5, name: "Creme de Amendoim", price: 5.0, icon: "🥜" },
          { id: 6, name: "Creme de Avelã", price: 5.0, icon: "🌰" },
          { id: 7, name: "Creme de ninho", price: 5.0, icon: "🥛" },
          { id: 8, name: "Creme de morango", price: 5.0, icon: "🍓" },
          { id: 9, name: "Creme de ovomaltine", price: 5.0, icon: "🍫" },
          { id: 10, name: "Chantilly", price: 5.0, icon: "🍦" },
          { id: 11, name: "Disquete", price: 2.0, icon: "🍬" },
          { id: 12, name: "Gotas de chocolate", price: 2.0, icon: "🍫" },
          { id: 13, name: "Granulado", price: 2.0, icon: "🍫" },
          { id: 14, name: "Choco ball", price: 2.0, icon: "🍫" },
          { id: 15, name: "Jujuba", price: 2.0, icon: "🍬" },
          { id: 16, name: "Marshmallow", price: 2.0, icon: "🍡" },
          { id: 17, name: "Biz", price: 2.0, icon: "🍫" }
        ]
      },
      {
        type: "pago",
        title: "Frutas",
        max: 1,
        items: [
          { id: 201, name: "Morango", price: 5.0, icon: "🍓" },
          { id: 202, name: "Kiwi", price: 2.0, icon: "🥝" },
          { id: 203, name: "Uva", price: 2.0, icon: "🍇" }
        ]
      }
    ],
  },
  {
    id: 3,
    name: "Açai Casadinho de Cupuaçu",
    description: "Açaí cremoso no estilo casadinho, combinado com creme de cupuaçu, com um toque tropical levemente ácido e irresistível.",
    price: 8.00,
    category: "Açais",
    image: "/images/açai/02_acai_casadinho.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: true,
    maisVendidos: true,
    tipos: [
      { id: 1, name: "Copo 180", price: 8 },
      { id: 2, name: "Copo 250", price: 10 },
      { id: 3, name: "Copo 300", price: 12 },
      { id: 4, name: "Copo 400", price: 18 },
      { id: 5, name: "Copo 500", price: 22 },
      { id: 6, name: "Copo 700", price: 28 },
    ],
    
    additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 3,
        items: [
          { id: 101, name: "Leite em pó", price: 0, icon: "🥛" },
          { id: 102, name: "Paçoca", price: 0, icon: "🥜" },
          { id: 103, name: "Leite condensado", price: 0, icon: "🍶" },
          { id: 104, name: "Granola", price: 0, icon: "🌾" },
          { id: 105, name: "Banana", price: 0, icon: "🍌" }
        ]
      },

      {
        type: "pago",
        title: "Adicionais Pagos",
        max: 3,
        items: [
          { id: 3, name: "Ovomaltine", price: 5.0, icon: "🍫" },
          { id: 4, name: "Nutella", price: 5.0, icon: "🍫" },
          { id: 5, name: "Creme de Amendoim", price: 5.0, icon: "🥜" },
          { id: 6, name: "Creme de Avelã", price: 5.0, icon: "🌰" },
          { id: 7, name: "Creme de ninho", price: 5.0, icon: "🥛" },
          { id: 8, name: "Creme de morango", price: 5.0, icon: "🍓" },
          { id: 9, name: "Creme de ovomaltine", price: 5.0, icon: "🍫" },
          { id: 10, name: "Chantilly", price: 5.0, icon: "🍦" },
          { id: 11, name: "Disquete", price: 2.0, icon: "🍬" },
          { id: 12, name: "Gotas de chocolate", price: 2.0, icon: "🍫" },
          { id: 13, name: "Granulado", price: 2.0, icon: "🍫" },
          { id: 14, name: "Choco ball", price: 2.0, icon: "🍫" },
          { id: 15, name: "Jujuba", price: 2.0, icon: "🍬" },
          { id: 16, name: "Marshmallow", price: 2.0, icon: "🍡" },
          { id: 17, name: "Biz", price: 2.0, icon: "🍫" }
        ]
      },
      {
        type: "pago",
        title: "Frutas",
        max: 1,
        items: [
          { id: 201, name: "Morango", price: 5.0, icon: "🍓" },
          { id: 202, name: "Kiwi", price: 2.0, icon: "🥝" },
          { id: 203, name: "Uva", price: 2.0, icon: "🍇" }
        ]
      }
    ],
  },
    {
    id: 4,
    name: "Milkshake Chocolate",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: true,
    maisVendidos: true,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  }, {
    id: 5,
    name: "Milkshake Cappuccino",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: false,
    maisVendidos: false,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 6,
    name: "Milkshake Leite Condensado",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: true,
    maisVendidos: true,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 7,
    name: "Milkshake Chiclete",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: false,
    maisVendidos: false,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 8,
    name: "Milkshake Céu Azul",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: false,
    maisVendidos: false,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 9,
    name: "Milkshake Morango",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: true,
    maisVendidos: true,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 10,
    name: "Milkshake Maracujá",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: true,
    maisVendidos: true,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 11,
    name: "Milkshake Menta",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: false,
    maisVendidos: false,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 12,
    name: "Milkshake Flocos",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: true,
    maisVendidos: true,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 13,
    name: "Milkshake Banana",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: true,
    maisVendidos: true,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 14,
    name: "Milkshake Napolitano",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: false,
    maisVendidos: false,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 15,
    name: "Milkshake Limão",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: false,
    maisVendidos: false,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 16,
    name: "Milkshake Sonho de Valsa",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: false,
    maisVendidos: false,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 18,
    name: "Milkshake Chocolate branco",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: false,
    maisVendidos: false,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 19,
    name: "Milkshake Frutas Tropicais",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/01_milkshake.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: false,
    maisVendidos: false,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 20,
    name: "Milkshake Açaí",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/milkaçai.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: true,
    maisVendidos: true,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },{
    id: 21,
    name: "Milkshake Ninho Trufado",
    description: "O Milkshake é uma bebida gelada e cremosa, preparada à base de leite e sorvete, podendo receber diversos sabores e coberturas. Refrescante e saboroso, é uma ótima opção para acompanhar refeições ou servir como sobremesa.",
    price: 12.00,
    category: "Milkshakes",
    image: "/images/Milkshake/ninhotrufado.jpg",
    tags: ["açai", "gelado", "roxo"],
    destaque: true,
    maisVendidos: true,
    tipos: [
      { id: 3, name: "Copo 300 ML", price: 12 },
      { id: 4, name: "Copo 400 ML", price: 16 },
      { id: 5, name: "Copo 500 ML", price: 20 },
    ],
        additionals: [
      { 
        type: "free",
        title: "Adicionais Grátis",
        max: 1,
        items: [
          { id: 101, name: "Ovomaltine", price: 0, icon: "🍫" },
        ]
      },
      { 
        type: "pago",
        title: "Adicionais Pagos",
        max: 1,
        items: [
            { id: 102, name: "Geleia de morango", price: 5, icon: "🍓" },
            { id: 103, name: "Geleia de maracujá", price: 5, icon: "🍈" },
            { id: 104, name: "Nutella", price: 5, icon: "🍫" },
            { id: 105, name: "Creme de amendoim", price: 5, icon: "🥜" },
            { id: 106, name: "Creme de avelã", price: 5, icon: "🌰" },
            { id: 107, name: "Creme de ninho", price: 5, icon: "🥛" },
            { id: 108, name: "Creme de morango", price: 5, icon: "🍓" },
            { id: 109, name: "Creme de Ovomaltine", price: 5, icon: "🍫" },
            { id: 110, name: "Chantilly", price: 5, icon: "🍦" },

        ]
      },
       {
      type: "combo",
        title: "Cobertura",
        max: 1,
items: [
        {
          id: 201232,
          name: "Frutas vermelhas",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 2022423,
          name: "Menta",
          price: 0.0,
          icon: "🌿",
        },
        {
          id: 20224233,
          name: "Céu azul",
          price: 0.0,
          icon: "💙",
        },
        {
          id: 202242,
          name: "Açaí",
          price: 0.0,
          icon: "🫐",
        },
        {
          id: 202242232,
          name: "Maracujá",
          price: 0.0,
          icon: "🥭",
        },
        {
          id: 2023435,
          name: "Limão",
          price: 0.0,
          icon: "🍋",
        },
        {
          id: 2453454,
          name: "Groselha",
          price: 0.0,
          icon: "🍒",
        },
        {
          id: 234542,
          name: "Leite condensado",
          price: 0.0,
          icon: "🍶",
        },
        {
          id: 3454,
          name: "Chocolate",
          price: 0.0,
          icon: "🍫",
        },
        {
          id: 2553245,
          name: "Caramelo",
          price: 0.0,
          icon: "🍯",
        },
        {
          id: 23423,
          name: "Morango",
          price: 0.0,
          icon: "🍓",
        },
        {
          id: 13123,
          name: "Chiclete",
          price: 0.0,
          icon: "🍬",
        },
        {
          id: 23245,
          name: "Uva",
          price: 0.0,
          icon: "🍇",
        }
      ]
    },
    ]
  },
  
];