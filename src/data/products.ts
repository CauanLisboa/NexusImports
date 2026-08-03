import perfumeAsad from "@/assets/images/lattafa_asad_perfume_1785378366146.jpg";
import perfumeSauvage from "@/assets/images/sauvage_dior_perfume_1785378972704.jpg";
import perfumeOneMillion from "@/assets/images/one_million_perfume_1785378984131.jpg";
import perfumeInvictus from "@/assets/images/invictus_perfume_1785378995495.jpg";
import perfumeVipBlack from "@/assets/images/vip_black_perfume_1785379007004.jpg";
import perfumeFerrariBlack from "@/assets/images/ferrari_black_perfume_1785379018051.jpg";
import perfumeLibre from "@/assets/images/libre_ysl_perfume_1785379028270.jpg";
import perfumeVipRose from "@/assets/images/vip_rose_perfume_1785379040932.jpg";
import perfumeLaVieEstBelle from "@/assets/images/la_vie_est_belle_1785379052024.jpg";
import perfumePhantom from "@/assets/images/phantom_perfume_1785379062965.jpg";

import mouseRazerStudio from "@/assets/images/razer_mouse_v4pro_1785538555375.jpg";
import mouseRazerViper from "@/assets/images/razer_viper_v3_pro_1785539971167.jpg";
import mouseRazerCobra from "@/assets/images/razer_cobra_pro_1785539947496.jpg";
import mouseRazerDeathadder from "@/assets/images/razer_deathadder_v3_1785539959612.jpg";
import keyboardRedragonElfPro from "@/assets/images/redragon_elf_pro_1785547581342.jpg";
import keyboardRedragonS136 from "@/assets/images/redragon_s136_combo_1785547593851.jpg";
import keyboardRazerOrnataV3 from "@/assets/images/razer_ornata_v3_tkl_1785547603685.jpg";
import iphone14ProMax from "@/assets/images/iphone_14_pro_max_1785623308837.jpg";
import iphone16ProMax from "@/assets/images/iphone_16_pro_max_1785628153288.jpg";
import iphone15ProMax from "@/assets/images/iphone_15_pro_max_black_1785628891357.jpg";
import iphone17ProMax from "@/assets/images/iphone_17_pro_max_dark_1785721576739.jpg";
import iphone17SilverClean from "@/assets/images/iphone17_silver_user_1785722796174.jpg";
import iphone17OrangeClean from "@/assets/images/iphone17_orange_user_1785722771538.jpg";
import iphone17BlueClean from "@/assets/images/iphone17_blue_user_1785722783921.jpg";
import redmiWatch5Black from "@/assets/images/redmi_watch5_black_1785723122660.jpg";
import redmiWatch5Silver from "@/assets/images/redmi_watch5_silver_1785723132238.jpg";
import garminForerunner165Black from "@/assets/images/garmin_forerunner_165_black_1785723267787.jpg";

export type CategoryId = "perfumes" | "medicamentos" | "perifericos" | "eletronicos";

export const categories: { id: CategoryId; label: string; blurb: string }[] = [
  { id: "perfumes", label: "Perfumes", blurb: "Fragrâncias originais e de alta fixação" },
  {
    id: "medicamentos",
    label: "Medicamentos",
    blurb: "Medicamentos importados e cuidados de saúde",
  },
  {
    id: "perifericos",
    label: "Periféricos Gamer",
    blurb: "Mouses, teclados e headsets de alta performance",
  },
  {
    id: "eletronicos",
    label: "Eletrônicos & Celulares",
    blurb: "Smartphones e dispositivos de última geração",
  },
];

export type ProductColor = {
  name: string;
  hex: string;
  image: string;
  code?: string;
};

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  gender?: "masculino" | "feminino";
  condition?: "novo" | "recondicionado";
  brand?: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors?: ProductColor[];
  description: string;
  specs: { label: string; value: string }[];
  featured?: boolean;
};

const rawProducts: Product[] = [
  // Perfumes Masculinos
  {
    id: "lattafa-asad",
    name: "Lattafa Asad EDP 100ml",
    category: "perfumes",
    gender: "masculino",
    tagline: "Amadeirado / Especiado",
    price: 276,
    image: perfumeAsad,
    featured: true,
    description:
      "Lattafa Asad Eau de Parfum masculino, 100 ml. Abertura de pimenta preta e bergamota sobre um coração de tabaco e café, com base amadeirada de âmbar e baunilha. Presença marcante e alta fixação.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Parfum" },
      { label: "Fixação", value: "10 a 12 horas" },
      { label: "Gênero", value: "Masculino" },
    ],
  },
  {
    id: "garmin-forerunner-165",
    name: "Smartwatch Garmin Forerunner 165 010-02863-20",
    category: "eletronicos",
    brand: "garmin",
    condition: "novo",
    tagline: "42MM / Tela AMOLED / 4GB / Bluetooth - Black/Slate",
    price: 2000,
    originalPrice: 2200,
    image: garminForerunner165Black,
    colors: [
      {
        name: "Preto (Black / Slate)",
        hex: "#1e2229",
        image: garminForerunner165Black,
        code: "49351",
      },
    ],
    featured: false,
    description:
      "Smartwatch Garmin Forerunner 165 (010-02863-20) com caixa de 42mm, tela AMOLED vibrante, 4GB de memória interna, conectividade Bluetooth e rastreamento avançado de corrida e saúde com GPS de alta precisão.",
    specs: [
      { label: "Modelo", value: "Garmin Forerunner 165 (010-02863-20)" },
      { label: "Caixa / Tela", value: '42mm / Tela AMOLED 1.2"' },
      { label: "Memória Interna", value: "4 GB" },
      { label: "Conectividade", value: "Bluetooth, ANT+, GPS/GLONASS" },
      { label: "Cor", value: "Black / Slate (Código: 49351)" },
      { label: "Preço em Dólar", value: "US$ 237,00" },
      { label: "Resistência à Água", value: "5 ATM (50 metros)" },
    ],
  },
  {
    id: "redmi-watch-5-active",
    name: "Smartwatch Xiaomi Redmi Watch 5 Active M2351W1",
    category: "eletronicos",
    brand: "xiaomi",
    condition: "novo",
    tagline: "Xiaomi / Bluetooth / À Prova D'Água",
    price: 336,
    originalPrice: 360,
    image: redmiWatch5Black,
    colors: [
      {
        name: "Preto (Black)",
        hex: "#1e1e24",
        image: redmiWatch5Black,
        code: "970051",
      },
      {
        name: "Prata (Silver)",
        hex: "#e2e8f0",
        image: redmiWatch5Silver,
        code: "970068",
      },
    ],
    featured: true,
    description:
      "Smartwatch Xiaomi Redmi Watch 5 Active M2351W1 completo com conectividade Bluetooth e resistência À Prova D'Água. Tela de alta definição, monitoramento de saúde, rastreamento esportivo e bateria de longa duração. Disponível nas cores Preto e Prata.",
    specs: [
      { label: "Modelo", value: "Redmi Watch 5 Active (M2351W1)" },
      { label: "Conectividade", value: "Bluetooth 5.3" },
      { label: "Resistência", value: "À Prova D'Água (5 ATM)" },
      { label: "Cores Disponíveis", value: "Preto, Prata / Branco" },
      { label: "Bateria", value: "Até 18 dias de uso" },
      { label: "Compatibilidade", value: "Android & iOS" },
    ],
  },
  {
    id: "iphone-17-pro-max-256gb",
    name: "Celular Apple iPhone 17 Pro Max 256GB",
    category: "eletronicos",
    brand: "apple",
    condition: "novo",
    tagline: "Apple / 256GB / 100% Novo Lacrado",
    price: 7800,
    image: iphone17SilverClean,
    colors: [
      {
        name: "Prateado (Silver)",
        hex: "#e8eaee",
        image: iphone17SilverClean,
        code: "174145",
      },
      {
        name: "Laranja (Orange)",
        hex: "#ea6020",
        image: iphone17OrangeClean,
        code: "174121",
      },
      {
        name: "Azul Escuro (Blue)",
        hex: "#343c4c",
        image: iphone17BlueClean,
        code: "174138",
      },
    ],
    featured: true,
    description:
      "Apresentamos o iPhone 17 Pro Max 256GB totalmente NOVO e lacrado de fábrica. Projetado com acabamento premium em titânio, tela Super Retina XDR ProMotion de 6,9 polegadas, chip de altíssima performance A19 Pro e sistema avançado de câmeras com controle intuitivo.",
    specs: [
      { label: "Condição", value: "100% Novo (Lacre de fábrica / Apple)" },
      { label: "Capacidade", value: "256 GB" },
      { label: "Modelos / Cores", value: "Prateado, Laranja, Azul Escuro" },
      { label: "Garantia", value: "1 ano de Garantia Oficial Apple" },
      { label: "Tela", value: '6.9" Super Retina XDR ProMotion' },
      { label: "Processador", value: "Apple A19 Pro Chip" },
      { label: "Câmera", value: "Sistema Triplo Pro 48MP com Telefoto e controle avançado" },
    ],
  },
  {
    id: "iphone-14-pro-max-256gb",
    name: "Celular Apple iPhone 14 Pro Max 256GB Recondicionado",
    category: "eletronicos",
    brand: "apple",
    condition: "recondicionado",
    tagline: "Apple / 256GB / Recondicionado Grade A",
    price: 3700,
    image: iphone14ProMax,
    description:
      "Uma nova forma de interação no iPhone. Tela Super Retina XDR de 6,7 polegadas com ProMotion e Always-On, Dynamic Island e câmera principal de 48 MP.",
    specs: [
      { label: "Capacidade", value: "256 GB" },
      { label: "Condição", value: "Recondicionado Grade A Premium" },
      { label: "Tela", value: '6.7" Super Retina XDR com Dynamic Island' },
      { label: "Câmera", value: "Tripla 48MP + 12MP + 12MP" },
      { label: "Processador", value: "A16 Bionic" },
    ],
  },
  {
    id: "iphone-15-pro-max-256gb",
    name: "Celular Apple iPhone 15 Pro Max 256GB Recondicionado",
    category: "eletronicos",
    brand: "apple",
    condition: "recondicionado",
    tagline: "Apple / 256GB / Recondicionado Grade A",
    price: 4500,
    originalPrice: 4650,
    image: iphone15ProMax,
    description:
      "Apple iPhone 15 Pro Max 256GB recondicionado em oferta imperdível. Design robusto e leve em titânio, Dynamic Island, botão de Ação personalizável, câmera de 48 MP com telefoto de 5x e porta USB-C.",
    specs: [
      { label: "Capacidade", value: "256 GB" },
      { label: "Condição", value: "Recondicionado Grade A Premium" },
      { label: "Preço Promocional", value: "R$ 4.500 (De R$ 4.650)" },
      { label: "Acabamento", value: "Titânio Preto (Black Titanium)" },
      { label: "Tela", value: '6.7" Super Retina XDR ProMotion' },
      { label: "Câmera", value: "Tripla 48MP + 12MP Ultrawide + 12MP Telefoto 5x" },
      { label: "Processador", value: "A17 Pro" },
    ],
  },
  {
    id: "iphone-16-pro-max-256gb",
    name: "Celular Apple iPhone 16 Pro Max 256GB Recondicionado",
    category: "eletronicos",
    brand: "apple",
    condition: "recondicionado",
    tagline: "Apple / 256GB / Recondicionado Grade A",
    price: 5100,
    originalPrice: 5300,
    image: iphone16ProMax,
    featured: true,
    description:
      "O topo de linha da Apple recondicionado em oferta especial. Bateria em excelente estado com 97% de saúde. Tela Super Retina XDR de 6,9 polegadas com ProMotion, botão Controle da Câmera, gravação 4K a 120 fps e chip A18 Pro.",
    specs: [
      { label: "Capacidade", value: "256 GB" },
      { label: "Condição", value: "Recondicionado Grade A Premium" },
      { label: "Saúde da Bateria", value: "97%" },
      { label: "Preço Promocional", value: "R$ 5.100 (De R$ 5.300)" },
      { label: "Tela", value: '6.9" Super Retina XDR ProMotion' },
      { label: "Câmera", value: "Tripla 48MP + 48MP Ultrawide + 12MP Telefoto 5x" },
      { label: "Processador", value: "A18 Pro" },
    ],
  },
  {
    id: "dior-sauvage",
    name: "Dior Sauvage EDT 100ml",
    category: "perfumes",
    gender: "masculino",
    tagline: "Cítrico / Amadeirado",
    price: 580,
    image: perfumeSauvage,
    description:
      "Dior Sauvage 100ml. Uma composição radicalmente fresca, ditada por uma matéria-prima de origem natural rigorosamente selecionada. Notas de bergamota de Reggio di Calabria e ambroxan.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Toilette" },
      { label: "Marca", value: "Dior" },
      { label: "Gênero", value: "Masculino" },
    ],
  },
  {
    id: "212-vip-black",
    name: "212 VIP Black Carolina Herrera 100ml",
    category: "perfumes",
    gender: "masculino",
    tagline: "Aromático / Fougère",
    price: 576,
    image: perfumeVipBlack,
    description:
      "212 VIP Black Carolina Herrera 100ml. Fragrância amadeirada e picante com notas de absinto, lavanda, casca de baunilha negra e almíscar.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Parfum" },
      { label: "Marca", value: "Carolina Herrera" },
      { label: "Gênero", value: "Masculino" },
    ],
  },
  {
    id: "1-million-paco-rabanne",
    name: "1 Million Paco Rabanne 100ml",
    category: "perfumes",
    gender: "masculino",
    tagline: "Amadeirado / Especiado",
    price: 456,
    image: perfumeOneMillion,
    description:
      "1 Million Paco Rabanne 100ml. Ícone da perfumaria em frasco barra de ouro. Notas de tangerina sanguínea, hortelã, canela, rosa e couro aveludado.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Toilette" },
      { label: "Marca", value: "Paco Rabanne" },
      { label: "Gênero", value: "Masculino" },
    ],
  },
  {
    id: "invictus-rabanne",
    name: "Invictus Rabanne 100ml",
    category: "perfumes",
    gender: "masculino",
    tagline: "Aquático / Amadeirado",
    price: 456,
    image: perfumeInvictus,
    description:
      "Invictus Rabanne 100ml. O perfume da vitória. Combinação refrescante de notas marinhas, casca de toranja, folha de louro, madeira de guaiaco e âmbar cinzento.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Toilette" },
      { label: "Marca", value: "Paco Rabanne" },
      { label: "Gênero", value: "Masculino" },
    ],
  },
  {
    id: "phantom-paco-rabanne",
    name: "Phantom Paco Rabanne 100ml",
    category: "perfumes",
    gender: "masculino",
    tagline: "Aromático / Futurista",
    price: 520,
    image: perfumePhantom,
    description:
      "Phantom Paco Rabanne 100ml. Fragrância futurista com lavanda energética, limão cremoso e baunilha fascinante.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Toilette" },
      { label: "Marca", value: "Paco Rabanne" },
      { label: "Gênero", value: "Masculino" },
    ],
  },
  {
    id: "scuderia-ferrari-black",
    name: "Scuderia Ferrari Black 100ml",
    category: "perfumes",
    gender: "masculino",
    tagline: "Cítrico / Amadeirado",
    price: 264,
    image: perfumeFerrariBlack,
    description:
      "Scuderia Ferrari Black 100ml. Fragrância marcante e envolvente com notas de maçã vermelha, ameixa, canela, jasmim, cedro e baunilha.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Toilette" },
      { label: "Marca", value: "Ferrari" },
      { label: "Gênero", value: "Masculino" },
    ],
  },
  {
    id: "212-vip-men",
    name: "212 VIP Men Carolina Herrera 100ml",
    category: "perfumes",
    gender: "masculino",
    tagline: "Amadeirado / Oriental",
    price: 504,
    image: perfumeVipBlack,
    description:
      "212 VIP Men Carolina Herrera 100ml. Inspirado na energia das noites de Nova York. Notas de lima caviar, pimenta preta, vodca de hortelã e madeira de rei.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Toilette" },
      { label: "Marca", value: "Carolina Herrera" },
      { label: "Gênero", value: "Masculino" },
    ],
  },
  {
    id: "scandal-pour-homme",
    name: "Scandal Pour Homme JPG 100ml",
    category: "perfumes",
    gender: "masculino",
    tagline: "Oriental / Caramelizado",
    price: 576,
    image: perfumePhantom,
    description:
      "Scandal Pour Homme Jean Paul Gaultier 100ml. Elegância masculina atrevida. Clássico caramelo sensual contrastado com sálvia e fava tonka.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Toilette" },
      { label: "Marca", value: "Jean Paul Gaultier" },
      { label: "Gênero", value: "Masculino" },
    ],
  },
  {
    id: "212-men-nyc",
    name: "212 Men NYC Carolina Herrera 100ml",
    category: "perfumes",
    gender: "masculino",
    tagline: "Amadeirado / Floral",
    price: 540,
    image: perfumeVipBlack,
    description:
      "212 Men NYC Carolina Herrera 100ml. Perfume fresco urbano. Notas de especiarias, bergamota, gengibre, violeta e incenso.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Toilette" },
      { label: "Marca", value: "Carolina Herrera" },
      { label: "Gênero", value: "Masculino" },
    ],
  },
  {
    id: "pure-xs-paco-rabanne",
    name: "Pure XS Paco Rabanne 100ml",
    category: "perfumes",
    gender: "masculino",
    tagline: "Oriental / Especiado",
    price: 456,
    image: perfumeFerrariBlack,
    description:
      "Pure XS Paco Rabanne 100ml. Fragrância magnética com sensação de quente e frio: gengibre, seiva vegetal, tomilho e baunilha.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Toilette" },
      { label: "Marca", value: "Paco Rabanne" },
      { label: "Gênero", value: "Masculino" },
    ],
  },
  {
    id: "212-men-heroes",
    name: "212 Men Heroes Carolina Herrera 90ml",
    category: "perfumes",
    gender: "masculino",
    tagline: "Fougère / Frutado",
    price: 540,
    image: perfumeVipBlack,
    description:
      "212 Men Heroes Carolina Herrera 90ml. Celebrando a juventude e a liberdade em frasco formato de skate. Notas de gengibre, pera e gerânio.",
    specs: [
      { label: "Volume", value: "90 ml" },
      { label: "Concentração", value: "Eau de Toilette" },
      { label: "Marca", value: "Carolina Herrera" },
      { label: "Gênero", value: "Masculino" },
    ],
  },

  // Perfumes Femininos
  {
    id: "libre-ysl",
    name: "Libre Yves Saint Laurent 100ml",
    category: "perfumes",
    gender: "feminino",
    tagline: "Floral / Lavanda",
    price: 670,
    image: perfumeLibre,
    description:
      "Libre Yves Saint Laurent 100ml. O perfume da mulher livre e audaciosa. Lavanda de França combinada com a sensualidade da flor de laranjeira do Marrocos e flor de jasmim.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Parfum" },
      { label: "Marca", value: "Yves Saint Laurent" },
      { label: "Gênero", value: "Feminino" },
    ],
  },
  {
    id: "212-vip-rose",
    name: "212 VIP Rosé Carolina Herrera 100ml",
    category: "perfumes",
    gender: "feminino",
    tagline: "Floral / Frutado",
    price: 576,
    image: perfumeVipRose,
    description:
      "212 VIP Rosé Carolina Herrera 100ml. Uma fragrância alegre e sedutora com acorde de champanhe rosé, flor de pêssego e notas amadeiradas.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Parfum" },
      { label: "Marca", value: "Carolina Herrera" },
      { label: "Gênero", value: "Feminino" },
    ],
  },
  {
    id: "la-vie-est-belle",
    name: "La Vie Est Belle Lancôme 100ml",
    category: "perfumes",
    gender: "feminino",
    tagline: "Floral / Gourmand",
    price: 588,
    image: perfumeLaVieEstBelle,
    description:
      "La Vie Est Belle Lancôme 100ml. Um manifesto de felicidade. Íris de Florença, jasmim Sambac, flor de laranjeira e essência de patchouli com um toque gourmand.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Parfum" },
      { label: "Marca", value: "Lancôme" },
      { label: "Gênero", value: "Feminino" },
    ],
  },
  {
    id: "scandal-femme",
    name: "Scandal Jean Paul Gaultier 100ml",
    category: "perfumes",
    gender: "feminino",
    tagline: "Chypre / Mel",
    price: 576,
    image: perfumeLaVieEstBelle,
    description:
      "Scandal Jean Paul Gaultier 100ml. Elegância e audácia extrema com notas viciantes de mel de gardênia, gardênia e patchouli.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Parfum" },
      { label: "Marca", value: "Jean Paul Gaultier" },
      { label: "Gênero", value: "Feminino" },
    ],
  },
  {
    id: "olympea-paco-rabanne",
    name: "Olympéa Paco Rabanne 100ml",
    category: "perfumes",
    gender: "feminino",
    tagline: "Oriental / Baunilha Salgada",
    price: 576,
    image: perfumeLibre,
    description:
      "Olympéa Paco Rabanne 100ml. A deusa moderna. Encontro sensual entre a baunilha salgada, flor de gengibre e jasmim aquático.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Parfum" },
      { label: "Marca", value: "Paco Rabanne" },
      { label: "Gênero", value: "Feminino" },
    ],
  },
  {
    id: "my-way-giorgio-armani",
    name: "My Way Giorgio Armani 100ml",
    category: "perfumes",
    gender: "feminino",
    tagline: "Floral / Madeira",
    price: 830,
    image: perfumeLaVieEstBelle,
    description:
      "My Way Giorgio Armani 100ml. Fragrância de descobertas e conexões. Flor de laranjeira do Egito, nardo da Índia, baunilha de Madagascar e cedro da Virgínia.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Parfum" },
      { label: "Marca", value: "Giorgio Armani" },
      { label: "Gênero", value: "Feminino" },
    ],
  },
  {
    id: "lady-million-paco-rabanne",
    name: "Lady Million Paco Rabanne 100ml",
    category: "perfumes",
    gender: "feminino",
    tagline: "Floral / Amadeirado",
    price: 588,
    image: perfumeOneMillion,
    description:
      "Lady Million Paco Rabanne 100ml. Glamour e sedução em frasco diamante dourado. Néroli, flor de laranjeira, jasmim e mel.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Parfum" },
      { label: "Marca", value: "Paco Rabanne" },
      { label: "Gênero", value: "Feminino" },
    ],
  },
  {
    id: "miss-dior",
    name: "Miss Dior Eau de Parfum 100ml",
    category: "perfumes",
    gender: "feminino",
    tagline: "Floral / Rosa Centifolia",
    price: 690,
    image: perfumeLaVieEstBelle,
    description:
      "Miss Dior Eau de Parfum 100ml. Bouquet floral aveludado e bordado com mil cores. Rosa de Grasse, lírio do vale e peônia fresca.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Parfum" },
      { label: "Marca", value: "Dior" },
      { label: "Gênero", value: "Feminino" },
    ],
  },
  {
    id: "black-xs-femme",
    name: "Black XS For Her Paco Rabanne 100ml",
    category: "perfumes",
    gender: "feminino",
    tagline: "Oriental / Amadeirado",
    price: 576,
    image: perfumeFerrariBlack,
    description:
      "Black XS Paco Rabanne 100ml. Misterioso e rebelde. Flor de cacau, pimenta rosa, heléboro e madeira de moscada.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Parfum" },
      { label: "Marca", value: "Paco Rabanne" },
      { label: "Gênero", value: "Feminino" },
    ],
  },
  {
    id: "light-blue-dolce-gabbana",
    name: "Light Blue Dolce & Gabbana 100ml",
    category: "perfumes",
    gender: "feminino",
    tagline: "Cítrico / Floral",
    price: 540,
    image: perfumeLibre,
    description:
      "Light Blue Dolce & Gabbana 100ml. O espírito do verão mediterrâneo. Maçã verde, cedro siciliano, jasmim e bambu.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Toilette" },
      { label: "Marca", value: "Dolce & Gabbana" },
      { label: "Gênero", value: "Feminino" },
    ],
  },
  {
    id: "linterdit-givenchy",
    name: "L'Interdit Givenchy 100ml",
    category: "perfumes",
    gender: "feminino",
    tagline: "Floral Branco / Amadeirado",
    price: 600,
    image: perfumeLaVieEstBelle,
    description:
      "L'Interdit Givenchy 100ml. Tributo à feminilidade audaciosa. Contraste entre flores brancas radiantes (nardo, jasmim) e notas escuras amadeiradas (patchouli, vetiver).",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Parfum" },
      { label: "Marca", value: "Givenchy" },
      { label: "Gênero", value: "Feminino" },
    ],
  },
  {
    id: "classique-jpg",
    name: "Classique Jean Paul Gaultier 100ml",
    category: "perfumes",
    gender: "feminino",
    tagline: "Floral / Oriental",
    price: 564,
    image: perfumeVipRose,
    description:
      "Classique Jean Paul Gaultier 100ml. Ícone no corpete de vidro. Flor de laranjeira, gengibre tentador e baunilha carnal.",
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "Concentração", value: "Eau de Toilette" },
      { label: "Marca", value: "Jean Paul Gaultier" },
      { label: "Gênero", value: "Feminino" },
    ],
  },

  // Periféricos Gamer (Mouses, Teclados, Headsets)
  {
    id: "razer-viper-v4-pro",
    name: "Mouse Razer Viper V4 Pro",
    category: "perifericos",
    tagline: "Wireless / 35K DPI Ultra-leve",
    price: 1100,
    originalPrice: 1300,
    image: mouseRazerStudio,
    featured: true,
    description:
      "Mouse sem fio de altíssima performance Razer Viper V4 Pro. Design simétrico ultra-leve com sensor óptico Focus Pro 35K, switches de 3ª geração e transmissão sem fio 8000 Hz HyperPolling.",
    specs: [
      { label: "Sensor", value: "Focus Pro 35K DPI" },
      { label: "Peso", value: "54 g (Ultra-leve)" },
      { label: "Switches", value: "Ópticos Razer Gen-3" },
      { label: "Polling Rate", value: "Até 8000 Hz HyperPolling" },
      { label: "Conexão", value: "Razer HyperSpeed / USB-C" },
    ],
  },
  {
    id: "razer-cobra-pro",
    name: "Mouse Razer Cobra Pro Óptico Bluetooth",
    category: "perifericos",
    tagline: "Chroma RGB / Wireless & Bluetooth",
    price: 972,
    image: mouseRazerCobra,
    description:
      "Reduza a concorrência e deslumbre a todos com o Razer Cobra Pro — um mouse sem fio compacto com iluminação Chroma RGB de 11 zonas e conectividade Bluetooth / HyperSpeed.",
    specs: [
      { label: "Sensor", value: "Focus Pro 30K DPI" },
      { label: "Iluminação", value: "Razer Chroma RGB (11 Zonas)" },
      { label: "Conexão", value: "HyperSpeed Wireless / Bluetooth / USB-C" },
      { label: "Peso", value: "77 g" },
    ],
  },
  {
    id: "razer-deathadder-v3-pro-usb",
    name: "Mouse Razer Deathadder V3 Pro Óptico USB",
    category: "perifericos",
    tagline: "Ergonômico / E-Sports Ultra-leve",
    price: 1021.4,
    image: mouseRazerDeathadder,
    description:
      "A vitória ganha um novo formato com o Razer DeathAdder V3 Pro. Reprojetado com a ajuda dos maiores profissionais de eSports, conta com formato ergonômico icônico e sensor óptico Focus Pro 30K.",
    specs: [
      { label: "Sensor", value: "Focus Pro 30K DPI" },
      { label: "Peso", value: "63 g (Ergonômico)" },
      { label: "Bateria", value: "Até 90 horas" },
      { label: "Conexão", value: "Razer HyperSpeed Wireless / USB-C" },
    ],
  },
  {
    id: "razer-viper-v3-pro-wireless",
    name: "Mouse Razer Viper V3 Pro Óptico Wireless",
    category: "perifericos",
    tagline: "Wireless / E-Sports 8K HyperPolling",
    price: 900,
    image: mouseRazerViper,
    description:
      "O maior mouse sem fio para eSports de todos os tempos está de volta para redefinir o cenário competitivo. Design simétrico focado em performance pura com sensor Focus Pro 35K Gen-2 e taxa de atualização de até 8000 Hz.",
    specs: [
      { label: "Sensor", value: "Focus Pro 35K DPI Gen-2" },
      { label: "Peso", value: "54 g (Ultra-leve)" },
      { label: "Polling Rate", value: "Até 8000 Hz HyperPolling" },
      { label: "Conexão", value: "Razer HyperSpeed Wireless" },
    ],
  },

  // Periféricos
  {
    id: "redragon-elf-pro-k649ct",
    name: "Teclado Redragon Elf Pro K649CT-RGB Bluetooth",
    category: "perifericos",
    tagline: "Mecânico / Bluetooth / Transparente",
    price: 718,
    image: keyboardRedragonElfPro,
    description:
      "Transforme cada videogame em uma experiência épica graças ao teclado mecânico Redragon Elf Pro K649CT com iluminação RGB e tripla conexão Bluetooth / 2.4Ghz / USB-C.",
    specs: [
      { label: "Conexão", value: "Bluetooth / 2.4 GHz / USB-C" },
      { label: "Iluminação", value: "RGB Customizável" },
      { label: "Design", value: "Acrílico Transparente" },
    ],
  },
  {
    id: "redragon-s136-rgb-combo",
    name: "Teclado Redragon S136 RGB USB Com Mouse",
    category: "perifericos",
    tagline: "Combo Teclado RGB + Mouse Gamer",
    price: 665,
    image: keyboardRedragonS136,
    description:
      "Eleve sua experiência em jogos graças ao combo Redragon S136. Teclado compacto com iluminação RGB e mouse ergonômico de alta precisão.",
    specs: [
      { label: "Tipo", value: "Combo Teclado + Mouse Gamer" },
      { label: "Iluminação", value: "RGB Chroma" },
      { label: "Conexão", value: "USB Plug & Play" },
    ],
  },
  {
    id: "razer-ornata-v3-tkl",
    name: "Teclado Razer Ornata V3 Tenkeyless USB",
    category: "perifericos",
    tagline: "Ergonômico TKL / Mecha-Membrana",
    price: 770,
    image: keyboardRazerOrnataV3,
    featured: true,
    description:
      "Domine os dois mundos com o Razer Ornata V3 TKL – um teclado ergonômico sem fio tenkeyless de perfil baixo, alimentado por Razer Chroma RGB.",
    specs: [
      { label: "Switches", value: "Mecha-Membrana de Perfil Baixo" },
      { label: "Layout", value: "Tenkeyless (TKL)" },
      { label: "Acessório", value: "Apoio magnético para pulsos" },
      { label: "Iluminação", value: "Razer Chroma RGB" },
    ],
  },
];

export const products: Product[] = rawProducts.map((p) => ({
  ...p,
  specs: [
    ...p.specs,
    { label: "Disponibilidade", value: "Consultar por WhatsApp" },
    ...(p.category !== "perfumes"
      ? [{ label: "Cor Disponível", value: "Consultar por contato" }]
      : []),
  ],
}));

export const featured = products.filter((p) => p.featured);

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
}
