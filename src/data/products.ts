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

import drone1 from "@/assets/images/dji_mini_drone_1785378353169.jpg";
import drone2 from "@/assets/images/vortex_fpv_drone_1785378710674.jpg";
import keyboard1 from "@/assets/images/strike_tkl_keyboard_1785378719043.jpg";
import headset1 from "@/assets/images/echo_hx_headset_1785378673510.jpg";

export type CategoryId = "perfumes" | "drones" | "perifericos";

export const categories: { id: CategoryId; label: string; blurb: string }[] = [
  { id: "perfumes", label: "Perfumes", blurb: "Fragrâncias originais e de alta fixação" },
  { id: "drones", label: "Drones", blurb: "Voo estável, imagem cinematográfica" },
  { id: "perifericos", label: "Periféricos Gamer", blurb: "Resposta rápida, zero atraso" },
];

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  gender?: "masculino" | "feminino";
  tagline: string;
  price: number;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  featured?: boolean;
};

export const products: Product[] = [
  // Perfumes Masculinos
  {
    id: "lattafa-asad",
    name: "Lattafa Asad EDP 100ml",
    category: "perfumes",
    gender: "masculino",
    tagline: "Amadeirado / Especiado",
    price: 230,
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
    price: 480,
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
    price: 380,
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
    price: 380,
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
    price: 220,
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
    price: 420,
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
    price: 480,
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
    price: 450,
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
    price: 380,
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
    price: 450,
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
    price: 480,
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
    price: 490,
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
    price: 480,
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
    price: 480,
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
    price: 490,
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
    price: 480,
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
    price: 450,
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
    price: 470,
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

  // Drones
  {
    id: "dji-mini-3-pro",
    name: "DJI Mini 3 Pro",
    category: "drones",
    tagline: "Cinema / 4K HDR",
    price: 8990,
    image: drone1,
    featured: true,
    description:
      "Drone compacto abaixo de 249 g com gimbal de três eixos, sensor de 1/1.3 polegada e detecção de obstáculos tri-direcional. Acompanha o controle DJI RC-N1.",
    specs: [
      { label: "Câmera", value: "4K/60 fps HDR" },
      { label: "Autonomia", value: "34 minutos" },
      { label: "Alcance", value: "12 km" },
      { label: "Peso", value: "249 g" },
    ],
  },
  {
    id: "vortex-fpv",
    name: "Vortex FPV",
    category: "drones",
    tagline: "Racing / Freestyle",
    price: 4290,
    image: drone2,
    description:
      "Chassi em fibra de carbono, motores de alto torque e transmissão digital de baixa latência. Para quem voa no limite.",
    specs: [
      { label: "Velocidade", value: "160 km/h" },
      { label: "Latência", value: "28 ms" },
      { label: "Autonomia", value: "18 minutos" },
      { label: "Peso", value: "650 g" },
    ],
  },

  // Periféricos
  {
    id: "strike-tkl",
    name: "Strike TKL",
    category: "perifericos",
    tagline: "Mecânico / Hot-swap",
    price: 749,
    image: keyboard1,
    featured: true,
    description:
      "Teclado tenkeyless com switches hot-swap, estrutura de alumínio e espuma interna. Digitação firme, som fechado.",
    specs: [
      { label: "Layout", value: "TKL ABNT2" },
      { label: "Switches", value: "Lineares hot-swap" },
      { label: "Polling", value: "8000 Hz" },
      { label: "Conexão", value: "USB-C destacável" },
    ],
  },
  {
    id: "echo-hx",
    name: "Echo HX",
    category: "perifericos",
    tagline: "Headset / Wireless",
    price: 899,
    image: headset1,
    description:
      "Drivers de 50 mm, áudio espacial e microfone com cancelamento de ruído. Conexão sem fio de 2,4 GHz com latência imperceptível.",
    specs: [
      { label: "Drivers", value: "50 mm" },
      { label: "Bateria", value: "70 horas" },
      { label: "Conexão", value: "2,4 GHz + Bluetooth" },
      { label: "Microfone", value: "Removível com ANC" },
    ],
  },
];

export const featured = products.filter((p) => p.featured);

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });
}
