import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Bolo de cenoura com Chocolate",
    description: "Fofinho, saboroso e coberto com uma camada generosa de chocolate. O clássico que todo mundo ama!",
    price: 25.00,
    category: "Bolos",
    image: "/images/bolos/bolo_de_cenoura-com_chocolate.png",
    tags: ["cenoura", "chocolate", "bolo"],
    destaque: true,
    maisVendidos: true,
  },
  {
    id: 2,
    name: "Bolo de chocolate",
    description: "Fofinho, úmido e feito com cacau de verdade. Sabor intenso e irresistível para qualquer momento!",
    price: 25.00,
    category: "Bolos",
    image: "/images/bolos/bolo_de_chocolate.png",
    tags: ["chocolate", "bolo"],
    destaque: true,
    maisVendidos: true,
  },
   {
  id: 3,
  name: "Bolo Formigueiro",
  description:
    "Fofinho, leve e recheado de granulados. Um clássico simples e irresistível!",
  category:"Bolos",
  price: 25.00,
  image: "/images/bolos/bolo_formigueiro.png",
  tags:["chocolate", "bolo"],
  destaque: false,
  maisVendidos: false,
},
{
  id: 4,
  name: "Bolo de Fuba",
  description:
    "Tradicional, fofinho e com sabor caseiro que lembra bolo de roça. Simples e irresistível!",
  category:"Bolos",
  price: 25.00,
  image: "/images/bolos/bolo_de_fuba.png",
  tags:["fuba", "bolo"],
  destaque: false,
  maisVendidos: false,
},
{
  id: 5,
  name: "Bolo de Arroz",
  description:
    "Leve, macio e com sabor caseiro. Feito com arroz de verdade, perfeito para quem ama uma opção diferente e deliciosa!",
  category:"Bolos",
  price: 25.00,
  image: "/images/bolos/bolo_de_arroz.png",
  tags:["arroz", "bolo"],
  destaque: false,
  maisVendidos: false,
},
{
  id: 6,
  name: "Tapioca Granulada",
  description:
    "Macio, leve e com aquela textura única da tapioca granulada. Sabor caseiro que agrada todo mundo!",
  category:"Bolos",
  price: 30.00,
  image: "/images/bolos/bolo_de_goma.png",
  tags:["tapioca", "bolo"],
  destaque: false,
  maisVendidos: true,
},
{
  id: 7,
  name: "Fuba com Goiabada",
  description:
    "Fofinho e saboroso, com pedaços de goiabada derretendo na massa. Um clássico caipira irresistível!",
  category:"Bolos",
  price: 25.00,
  image: "/images/bolos/bolo_fuba_goiabada.png",
  tags:["Goiabada", "bolo"],
  destaque: false,
  maisVendidos: false,
},
{
  id: 8,
  name: "Bolo de Milho",
  description:
    "Sabor caseiro, macio e cremoso. Milho fresco com o toque especial do requeijão!",
  category:"Bolos",
  price: 30.00,
  image: "/images/bolos/bolo_de_milho.png",
  tags:["milho", "bolo"],
  destaque: true,
  maisVendidos: true,
},
{
  id: 9,
  name: "Bolo de Polvilho com Queijo",
  description:
    "Macio, leve e com aquele sabor delicioso de queijo. Perfeito para quem ama um toque salgado e caseiro!",
  category:"Bolos",
  price: 25.00,
  image: "/images/bolos/bolo_de_polvilho_com_queijo.png",
tags:["queijo", "bolo", "polvilho"],
  destaque: false,
  maisVendidos: true,
},
{
  id: 10,
  name: "Bolo de Lranja",
  description:
    "Fofinho, aromático e feito com suco de laranja natural. Frescor e sabor em cada pedaço",
  category:"Bolos",
  price: 25.00,
  image: "/images/bolos/bolo_de_laranja.png",
  tags:["laranja", "bolo"],
  destaque: false,
  maisVendidos: true,
},

{
  id: 11,
  name: "Bolo de Coco",
  description:
    "Fofinho, úmido e cheio de sabor. Coco de verdade em cada pedaço!",
  category:"Bolos",
  price: 25.00,
  image: "/images/bolos/bolo_de_coco.png",
  tags:["coco", "bolo"],
  destaque: false,
  maisVendidos: true,
},
//temperos
{
  id: 12,
  name: "Tempero Apimentado",
  description:
    "Para quem gosta de intensidade! Pimentão, cebola, ervas finas e tempero baiano criam uma mistura levemente picante e muito saborosa. Ideal para dar personalidade a carnes, frangos e molhos.",
  category:"Temperos",
  price: 25.00,
  image: "/images/temperos/tempero_apimentado.png",
  tags:["pimenta", "tempero"],
  destaque: false,
  maisVendidos: true,
},
{
  id: 13,
  name: "Tempero com Pimenta de Cheiro",
  description:
    "Fresco e aromático, esse tempero combina alho, cebola, cheiro-verde, orégano e chimichurri, com o toque especial da pimenta de cheiro. Sabor marcante sem exagerar na ardência. Excelente para peixes, aves e pratos caseiros.",
  category:"Temperos",
  price: 25.00,
  image: "/images/temperos/tempero_com_pimenta_de_cheiro.png",
  tags:["pimenta", "tempero, pimenta de cheiro"],
  destaque: false,
  maisVendidos: true,
},
{
  id: 14,
  name: "Tempero Completo",
  description:
    "Um mix completo para o dia a dia na cozinha. A união de chimichurri, orégano, cebola, alho e coloral entrega sabor marcante, cor vibrante e aroma irresistível. Perfeito para temperar carnes, arroz, feijão e refogados.",
  category:"Temperos",
  price: 25.00,
  image: "/images/temperos/tempero_completo.png",
  tags:["pimenta", "tempero", "tempero completo"],
  destaque: false,
  maisVendidos: true,
},

{
  id: 15,
  name: "Tempero Seco",
  description:
    "Uma combinação aromática e defumada que realça o sabor natural dos alimentos. A páprica defumada traz um toque especial, enquanto o chimichurri, orégano e tempero baiano garantem um equilíbrio perfeito entre ervas e especiarias. Ideal para carnes, legumes e grelhados.",
  category:"Temperos",
  price: 25.00,
  image: "/images/temperos/tempero_seco.png",
  tags:["pimenta", "tempero", "tempero seco"],
  destaque: false,
  maisVendidos: true,
},
{
  id: 16,
  name: "Tempero de Alho",
  description:
    "Sabor caseiro e irresistível em cada colher! Feito com alho selecionado e ervas aromáticas, esse tempero realça o gosto do arroz soltinho e do feijão encorpado, trazendo aquele toque tradicional da cozinha brasileira. Prático, versátil e indispensável no dia a dia.",
  category:"Temperos",
  price: 10.00,
  image: "/images/temperos/tempero_de_alho.png",
  tags:["pimenta", "tempero", "tempero de alho"],
  destaque: false,
  maisVendidos: true,
  tipos: [
  { id: 1, name: "Pote 250", price: 10 },
  { id: 2, name: "Pote de 500", price: 18 },
  ]
},

];