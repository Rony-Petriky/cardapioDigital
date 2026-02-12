import { Cliente } from "@/types/UserCatolog";

export const userCatalog : Cliente[] = [{
    id: 1,
    nome: "Neide Mnedes",
    endereco: "Rua das Flores, 123 - Centro",
    telefone: "65996934486",
    nomeLoja: "Delicias da Neide",
    descricaoLoja: "As Melhores Receitas Caseiras da cidade, oferecendo bolos e temperos fresquinhos todos os dias. produtos apneas por encomenda",
    horarioFuncionamento: "Segunda a Sexta: 7h - 19h, sexta: 8h - 14h",
    sobreLoja: {
        titulo:"Bem-vindo à nossa cozinha!",
        texto :`SAqui, cada receita nasce com um toque especial: o amor. Somos uma pequena empresa que une duas paixões – bolos fofinhos que abraçam a alma e temperos que despertam memórias afetivas.
                    Acreditamos que cozinhar é um ato de carinho. Por isso, cada bolo é preparado como se fosse para a casa da gente: com ingredientes selecionados, paciência e um pedacinho do coração. E cada tempero é pensado para transformar o simples em extraordinário, trazendo mais sabor e aconchego para o seu dia a dia.
                    Seja para adoçar um momento ou dar aquele toque especial no almoço em família, queremos fazer parte da sua história – com sabor, afeto e simplicidade.
                    Feito com amor, servido com alegria`},
    valorEntrega: 3,
    logoLoja: "/images/logo/logo.png", 
    
}];