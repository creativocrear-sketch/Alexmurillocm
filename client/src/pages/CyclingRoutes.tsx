/*
 * Design: Corporate Elegance
 * Colors: Navy #1e3a5f, Green #2d5f3f, Gold #d4af37
 * Font: Lora (headings), Poppins (body)
 * Page: {content.heroTitle} â€” {content.heroBadge} del Eje Cafetero
 */
import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  Mountain,
  Route as RouteIcon,
  Clock,
  Gauge,
  MapPin,
  Calendar,
  ImageIcon,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Bike,
} from "lucide-react";
import ShareButton from "@/components/ShareButton";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663365918901/jjoDBNCgYAYakwHEFwWF2j/cycling-hero-PY2raeZhX7QEo5gi3PvJRN.webp";

interface RouteData {
  id: string;
  name: string;
  subtitle: string;
  distance: string;
  elevation: string;
  movingTime: string;
  estimatedTime: string;
  avgSpeed: string;
  date: string;
  cities: string;
  difficulty: string;
  difficultyColor: string;
  paragraph1: string;
  paragraph2: string;
}

const routesEs: RouteData[] = [
  {
    id: "salento",
    name: "Salento",
    subtitle: "La Joya del QuindÃ­o",
    distance: "125.97 km",
    elevation: "2,456 m",
    movingTime: "6h 05min",
    estimatedTime: "7â€“8 horas",
    avgSpeed: "20.7 km/h",
    date: "12 de julio de 2025",
    cities: "Cartago â†’ Pereira â†’ Salento â†’ Pereira â†’ Cartago.",
    difficulty: "Alta",
    difficultyColor: "#d97706",
    paragraph1:
      "Esta ruta es, sin duda, una de las mÃ¡s emblemÃ¡ticas del Eje Cafetero colombiano. El recorrido parte desde el norte del Valle del Cauca y se adentra en el corazÃ³n del QuindÃ­o, atravesando paisajes cafeteros declarados Patrimonio de la Humanidad por la UNESCO. El trayecto pasa por La Virginia y Pereira antes de tomar la vÃ­a hacia Quimbaya y Circasia, pueblos pintorescos de arquitectura antioqueÃ±a donde el aroma del cafÃ© reciÃ©n tostado acompaÃ±a al ciclista. El ascenso final hacia Salento, con sus calles empedradas y sus casas de colores vibrantes, es una recompensa visual que justifica cada pedaleo.",
    paragraph2:
      "Con 2,456 metros de desnivel acumulado, esta ruta exige una buena preparaciÃ³n fÃ­sica, pero el esfuerzo se compensa con vistas panorÃ¡micas del Valle de Cocora, los imponentes cerros quindÃ­anos y extensos cultivos de cafÃ© y plÃ¡tano. Para ciclistas recreativos, se recomienda planificar entre 7 y 8 horas incluyendo paradas para hidrataciÃ³n y fotografÃ­as. Los tramos entre Quimbaya y Circasia presentan subidas sostenidas que ponen a prueba la resistencia, mientras que el descenso de regreso permite disfrutar de la velocidad con paisajes de ensueÃ±o a ambos lados de la carretera.",
  },
  {
    id: "filandia",
    name: "Filandia",
    subtitle: "El Mirador del QuindÃ­o",
    distance: "103.39 km",
    elevation: "1,914 m",
    movingTime: "4h 51min",
    estimatedTime: "6â€“7 horas",
    avgSpeed: "21.3 km/h",
    date: "30 de octubre de 2021",
    cities: "Cartago â†’ AlcalÃ¡ â†’ Quimbaya â†’ Filandia",
    difficulty: "Alta",
    difficultyColor: "#d97706",
    paragraph1:
      "Filandia es conocida como \"La Colina Iluminada del QuindÃ­o\" y esta ruta permite descubrir por quÃ©. El recorrido serpentea por carreteras secundarias rodeadas de fincas cafeteras, guaduales y miradores naturales que ofrecen panorÃ¡micas espectaculares del Valle del Cauca y la Cordillera Central. Desde Cartago, la ruta toma direcciÃ³n sur pasando por AlcalÃ¡, un pueblo tranquilo que marca el inicio del ascenso hacia la zona cafetera del QuindÃ­o, para luego continuar por Quimbaya hasta llegar a Filandia, uno de los pueblos mÃ¡s encantadores de Colombia.",
    paragraph2:
      "El desnivel de 1,914 metros se distribuye en subidas progresivas que permiten un ritmo constante. Las carreteras estÃ¡n en buen estado y el trÃ¡fico vehicular es moderado, lo que hace de esta ruta una opciÃ³n ideal para ciclistas recreativos que buscan un desafÃ­o sin riesgos excesivos. Para quienes pedalean a ritmo tranquilo, se recomienda un tiempo de entre 6 y 7 horas. No olvide detenerse en el mirador de Filandia, desde donde se divisa el Valle del Cauca en toda su extensiÃ³n, y degustar un cafÃ© de origen en alguna de las tiendas artesanales del pueblo.",
  },
  {
    id: "alto-de-letras",
    name: "Alto de Letras",
    subtitle: "El Ascenso Legendario",
    distance: "115.97 km",
    elevation: "3,629 m",
    movingTime: "7h 31min",
    estimatedTime: "9â€“11 horas",
    avgSpeed: "15.4 km/h",
    date: "15 de noviembre de 2020",
    cities: "Cartago â†’ Pereira â†’ Chinchina â†’ Manizales â†’ Alto de Letras",
    difficulty: "Muy Alta",
    difficultyColor: "#dc2626",
    paragraph1:
      "El Alto de Letras es considerado uno de los ascensos en bicicleta mÃ¡s largos del mundo y un verdadero rito de paso para todo ciclista en Colombia. Con 3,629 metros de desnivel acumulado en poco mÃ¡s de 115 kilÃ³metros, esta ruta es la mÃ¡s exigente de toda la colecciÃ³n. El recorrido parte desde Cartago y asciende progresivamente por la vÃ­a que conduce a Manizales, pasando por el Peaje TarapacÃ¡ y El JazmÃ­n, donde la vegetaciÃ³n cambia dramÃ¡ticamente de zona cÃ¡lida a pÃ¡ramo. La carretera, aunque empinada, estÃ¡ bien pavimentada y ofrece vistas que quitan el aliento: caÃ±ones profundos, cascadas y la inmensidad de la Cordillera Central.",
    paragraph2:
      "Para ciclistas recreativos, esta ruta requiere una planificaciÃ³n cuidadosa. Se recomienda partir muy temprano (antes de las 5:00 AM) y llevar ropa abrigada para la cumbre, donde la temperatura puede descender considerablemente. El tiempo estimado para completar el recorrido es de 9 a 11 horas a ritmo pausado. Es fundamental llevar suficiente hidrataciÃ³n y alimentaciÃ³n, ya que los puntos de abastecimiento son escasos en los tramos mÃ¡s altos. Sin embargo, la satisfacciÃ³n de coronar el Alto de Letras es una experiencia que todo ciclista deberÃ­a vivir al menos una vez en la vida.",
  },
  {
    id: "balboa",
    name: "Balboa",
    subtitle: "El Valle del Risaralda",
    distance: "92.27 km",
    elevation: "977 m",
    movingTime: "3h 55min",
    estimatedTime: "5â€“6 horas",
    avgSpeed: "23.5 km/h",
    date: "23 de agosto de 2025",
    cities: "Cartago â†’ La Virginia â†’ Viterbo â†’ Balboa",
    difficulty: "Accesible",
    difficultyColor: "#16a34a",
    paragraph1:
      "La ruta hacia Balboa es una de las mÃ¡s accesibles para ciclistas recreativos que desean explorar el departamento de Risaralda sin enfrentar desniveles extremos. Con apenas 977 metros de elevaciÃ³n acumulada en 92 kilÃ³metros, el recorrido discurre en gran parte por el valle del rÃ­o Risaralda, ofreciendo un terreno relativamente plano con ondulaciones suaves. La vÃ­a pasa por La Virginia, ciudad ribereÃ±a donde confluyen los rÃ­os Cauca y Risaralda, y continÃºa hacia Viterbo y Balboa, municipios rodeados de cultivos de caÃ±a de azÃºcar, cafÃ© y plÃ¡tano.",
    paragraph2:
      "El buen estado de la carretera y la velocidad promedio alcanzable (23.5 km/h) hacen de esta ruta una excelente opciÃ³n para quienes se inician en recorridos largos. Para ciclistas recreativos, el tiempo estimado es de 5 a 6 horas con paradas. Balboa, enclavada en las montaÃ±as risaraldenses, ofrece un ambiente campesino autÃ©ntico y vistas panorÃ¡micas del valle que bien merecen una pausa prolongada antes del regreso. Se recomienda llevar protecciÃ³n solar, ya que gran parte del recorrido transcurre a baja altitud con temperaturas que pueden superar los 30Â°C.",
  },
  {
    id: "belalcazar",
    name: "BelalcÃ¡zar",
    subtitle: "Entre MontaÃ±as Cafeteras",
    distance: "91.08 km",
    elevation: "1,547 m",
    movingTime: "4h 36min",
    estimatedTime: "6â€“7 horas",
    avgSpeed: "19.8 km/h",
    date: "8 de noviembre de 2025",
    cities: "Cartago â†’ La Virginia â†’ Ansermanuevo â†’ Viterbo â†’ Marsella â†’ BelalcÃ¡zar",
    difficulty: "Moderada",
    difficultyColor: "#d97706",
    paragraph1:
      "BelalcÃ¡zar, municipio caldense enclavado en la cordillera, es el destino de esta ruta que combina valles cÃ¡lidos con ascensos montaÃ±osos. El recorrido parte hacia La Virginia y Ansermanuevo antes de tomar la vÃ­a hacia Viterbo, donde comienza el ascenso mÃ¡s significativo del dÃ­a. La carretera serpentea entre fincas cafeteras y bosques de guadua, con tramos que ofrecen vistas panorÃ¡micas del caÃ±Ã³n del rÃ­o Risaralda. El paso por Marsella, conocida como \"El Municipio Verde de Colombia\", aÃ±ade un toque cultural al recorrido con su arquitectura patrimonial bien conservada.",
    paragraph2:
      "Con 1,547 metros de desnivel, esta ruta presenta un desafÃ­o moderado-alto que requiere buen manejo de los cambios y una cadencia constante en las subidas. El tiempo estimado para ciclistas recreativos es de 6 a 7 horas. Las carreteras estÃ¡n en condiciones aceptables, aunque algunos tramos entre Viterbo y BelalcÃ¡zar pueden presentar baches. Se recomienda llevar al menos dos bidones de agua y aprovechar las tiendas de pueblo para reabastecerse. El regreso ofrece descensos gratificantes que permiten recuperar energÃ­as mientras se disfruta del paisaje cafetero.",
  },
  {
    id: "belalcazar-san-jose",
    name: "BelalcÃ¡zar por Morro Azul y San JosÃ©",
    subtitle: "La Ruta Extendida",
    distance: "110.00 km",
    elevation: "1,778 m",
    movingTime: "5h 35min",
    estimatedTime: "7â€“8 horas",
    avgSpeed: "19.7 km/h",
    date: "17 de abril de 2025",
    cities: "Cartago â†’ Morro Azul â†’ San JosÃ© â†’ ChinchinÃ¡ â†’ BelalcÃ¡zar â†’ Viterbo",
    difficulty: "Alta",
    difficultyColor: "#d97706",
    paragraph1:
      "Esta variante de la ruta a BelalcÃ¡zar incorpora el paso por Morro Azul y las partidas hacia San JosÃ©, aÃ±adiendo kilÃ³metros y desnivel a un recorrido ya de por sÃ­ exigente. La ruta ofrece una perspectiva diferente del paisaje cafetero caldense, pasando por zonas rurales menos transitadas donde el ciclista puede disfrutar de la soledad del camino y la belleza agreste de la cordillera. El tramo por Morro Azul es particularmente pintoresco, con vistas al valle del rÃ­o Cauca y plantaciones de cafÃ© que se extienden hasta donde alcanza la vista.",
    paragraph2:
      "Los 1,778 metros de desnivel se concentran en dos ascensos principales que ponen a prueba la resistencia del ciclista. Para quienes ruedan a ritmo recreativo, se recomienda un tiempo de 7 a 8 horas con paradas estratÃ©gicas en San JosÃ© y ChinchinÃ¡ para hidratarse y alimentarse. Esta ruta es ideal para ciclistas que ya han completado la versiÃ³n corta a BelalcÃ¡zar y buscan un mayor desafÃ­o. Las carreteras secundarias por las que transcurre parte del recorrido tienen menor trÃ¡fico vehicular, lo que aÃ±ade tranquilidad a la experiencia.",
  },
  {
    id: "sabanazo",
    name: "Sabanazo",
    subtitle: "El Circuito del Norte",
    distance: "106.49 km",
    elevation: "1,170 m",
    movingTime: "4h 28min",
    estimatedTime: "5â€“6 horas",
    avgSpeed: "23.8 km/h",
    date: "16 de agosto de 2025",
    cities: "Cartago â†’ Ansermanuevo â†’ Argelia â†’ La Virginia â†’ San Pacho",
    difficulty: "Moderada",
    difficultyColor: "#d97706",
    paragraph1:
      "El Sabanazo es un circuito que recorre la zona norte del Valle del Cauca y el sur de Risaralda, pasando por Ansermanuevo, Argelia y La Virginia. Es una ruta que se caracteriza por su terreno ondulado pero sin ascensos prolongados, lo que permite mantener una velocidad promedio alta y disfrutar del paisaje sin el agotamiento de las grandes subidas. El recorrido atraviesa extensas zonas de cultivo de caÃ±a de azÃºcar y cafÃ©, con tramos sombreados por Ã¡rboles centenarios que ofrecen alivio del calor tropical.",
    paragraph2:
      "Con 1,170 metros de desnivel distribuidos uniformemente, esta ruta es perfecta para ciclistas recreativos que buscan distancia sin sufrimiento excesivo. El tiempo estimado para completarla a ritmo tranquilo es de 5 a 6 horas. La carretera principal estÃ¡ en buen estado y el circuito permite regresar al punto de partida sin repetir camino, lo que aÃ±ade variedad al recorrido. Se recomienda rodar temprano en la maÃ±ana para evitar el calor del mediodÃ­a, especialmente en los tramos de baja altitud entre Ansermanuevo y Argelia.",
  },
  {
    id: "montenegro",
    name: "Montenegro",
    subtitle: "CorazÃ³n Cafetero",
    distance: "87.27 km",
    elevation: "1,676 m",
    movingTime: "4h 14min",
    estimatedTime: "5â€“6 horas",
    avgSpeed: "20.6 km/h",
    date: "14 de diciembre de 2019",
    cities: "Cartago â†’ Quimbaya â†’ Montenegro â†’ Pereira",
    difficulty: "Moderada",
    difficultyColor: "#d97706",
    paragraph1:
      "Aunque no alcanza los 90 kilÃ³metros, la ruta a Montenegro es una de las mÃ¡s gratificantes del Eje Cafetero por la intensidad de sus paisajes y la riqueza cultural de los pueblos que atraviesa. El recorrido pasa por Quimbaya, cuna de la civilizaciÃ³n precolombina del mismo nombre, y llega hasta Montenegro, puerta de entrada al Parque Nacional del CafÃ©. Las carreteras serpentean entre cafetales y plataneras, con subidas y bajadas constantes que mantienen al ciclista activo durante todo el trayecto.",
    paragraph2:
      "Los 1,676 metros de desnivel en menos de 90 kilÃ³metros indican un perfil bastante montaÃ±oso, con rampas cortas pero intensas. Para ciclistas recreativos, el tiempo estimado es de 5 a 6 horas. Esta ruta es ideal como introducciÃ³n a los recorridos largos en la regiÃ³n, ya que combina un kilometraje manejable con un desnivel significativo. Se recomienda hacer una parada en Montenegro para visitar alguna finca cafetera y degustar el cafÃ© quindiano, considerado uno de los mejores del mundo.",
  },
  {
    id: "marsella",
    name: "Marsella",
    subtitle: "El Municipio Verde",
    distance: "111.29 km",
    elevation: "1,850 m",
    movingTime: "5h 09min",
    estimatedTime: "6â€“7 horas",
    avgSpeed: "21.6 km/h",
    date: "24 de octubre de 2020",
    cities: "Cartago â†’ La Virginia â†’ BelalcÃ¡zar â†’ Marsella â†’ Pereira",
    difficulty: "Alta",
    difficultyColor: "#d97706",
    paragraph1:
      "Marsella, conocida como \"El Municipio Verde de Colombia\", es el destino estrella de esta ruta que combina el valle cÃ¡lido del rÃ­o Cauca con los frescos paisajes montaÃ±osos de Risaralda. El recorrido pasa por La Virginia y BelalcÃ¡zar antes de emprender el ascenso hacia Marsella, un pueblo que conserva intacta su arquitectura antioqueÃ±a de balcones floridos y calles empedradas. Declarado parte del Paisaje Cultural Cafetero, Marsella ofrece al ciclista una experiencia que trasciende lo deportivo y se convierte en un viaje cultural.",
    paragraph2:
      "El ascenso a Marsella es el punto mÃ¡s exigente de la ruta, con rampas que alcanzan pendientes considerables en los Ãºltimos kilÃ³metros antes del pueblo. Sin embargo, los 1,850 metros de desnivel total se distribuyen de manera que permiten recuperarse en los tramos de valle. Para ciclistas recreativos, se recomienda un tiempo de 6 a 7 horas. No deje de visitar el JardÃ­n BotÃ¡nico y la Casa de la Cultura de Marsella, dos joyas patrimoniales que justifican una parada prolongada antes de emprender el regreso.",
  },
  {
    id: "chinchina",
    name: "ChinchinÃ¡",
    subtitle: "Tierra del Mejor CafÃ©",
    distance: "117.53 km",
    elevation: "2,028 m",
    movingTime: "5h 48min",
    estimatedTime: "7â€“8 horas",
    avgSpeed: "20.2 km/h",
    date: "2 de octubre de 2021",
    cities: "Cartago â†’ La Virginia â†’ BelalcÃ¡zar â†’ Marsella â†’ Palestina â†’ ChinchinÃ¡ â†’ Viterbo",
    difficulty: "Alta",
    difficultyColor: "#d97706",
    paragraph1:
      "Esta ruta es un gran circuito que recorre tres departamentos (Valle del Cauca, Risaralda y Caldas) y pasa por algunos de los municipios mÃ¡s emblemÃ¡ticos de la zona cafetera colombiana. ChinchinÃ¡, capital cafetera de Caldas, es el punto mÃ¡s lejano del recorrido y se alcanza despuÃ©s de atravesar La Virginia, BelalcÃ¡zar, Marsella y Palestina. Cada pueblo aporta su propia personalidad al viaje: desde el calor ribereÃ±o de La Virginia hasta el fresco aroma del cafÃ© en ChinchinÃ¡, donde se encuentra la planta de liofilizaciÃ³n de cafÃ© mÃ¡s grande de Colombia.",
    paragraph2:
      "Con 2,028 metros de desnivel y 117 kilÃ³metros, esta ruta es un desafÃ­o serio que requiere buena condiciÃ³n fÃ­sica y planificaciÃ³n. El circuito tiene la ventaja de no repetir camino, lo que mantiene el interÃ©s visual durante todo el recorrido. Para ciclistas recreativos, el tiempo estimado es de 7 a 8 horas. Se recomienda llevar ropa para cambios de temperatura, ya que la ruta oscila entre los 900 y los 1,600 metros de altitud. Los puntos de abastecimiento son frecuentes gracias a la cantidad de pueblos que se atraviesan.",
  },
  {
    id: "viterbo-pereira",
    name: "Viterbo â€” Pereira",
    subtitle: "La Ruta RÃ¡pida",
    distance: "117.39 km",
    elevation: "797 m",
    movingTime: "4h 04min",
    estimatedTime: "5â€“6 horas",
    avgSpeed: "28.8 km/h",
    date: "28 de marzo de 2021",
    cities: "Cartago â†’ Viterbo â†’ Pereira",
    difficulty: "Accesible",
    difficultyColor: "#16a34a",
    paragraph1:
      "Esta es la ruta mÃ¡s rÃ¡pida de toda la colecciÃ³n, con una velocidad promedio de 28.8 km/h que refleja un perfil predominantemente plano con ondulaciones suaves. El recorrido conecta el norte del Valle del Cauca con Pereira a travÃ©s de Viterbo, siguiendo las vÃ­as principales que discurren por el valle del rÃ­o Cauca y el rÃ­o La Vieja. Es una ruta ideal para entrenamientos de velocidad y resistencia, donde el ciclista puede mantener un ritmo alto sin las interrupciones de grandes ascensos.",
    paragraph2:
      "Con apenas 797 metros de desnivel en 117 kilÃ³metros, esta ruta es la mÃ¡s accesible para ciclistas recreativos que desean completar una distancia considerable sin el sufrimiento de las montaÃ±as. El tiempo estimado a ritmo tranquilo es de 5 a 6 horas. La carretera estÃ¡ en excelente estado y conecta zonas urbanas e industriales con tramos rurales de gran belleza. Se recomienda especial precauciÃ³n con el trÃ¡fico vehicular en las cercanÃ­as de Pereira y prestar atenciÃ³n a los vientos cruzados en los tramos abiertos del valle.",
  },
  {
    id: "el-manzano",
    name: "El Manzano",
    subtitle: "Ascenso de Pereira a Armenia.",
    distance: "83.22 km",
    elevation: "1,377 m",
    movingTime: "3h 43min",
    estimatedTime: "4â€“5 horas",
    avgSpeed: "22.3 km/h",
    date: "21 de marzo de 2021",
    cities: "Cartago â†’ La Virginia â†’ Marsella â†’ El Manzano â†’ Dosquebradas",
    difficulty: "Moderada",
    difficultyColor: "#d97706",
    paragraph1:
      "Aunque es la ruta mÃ¡s corta de la colecciÃ³n, El Manzano ofrece uno de los ascensos mÃ¡s bonitos de la regiÃ³n. El recorrido parte hacia La Virginia y toma la vÃ­a hacia Marsella, pero en lugar de subir al pueblo, se desvÃ­a hacia El Manzano, una vereda enclavada en la montaÃ±a donde los bosques de guadua y los cafetales crean un tÃºnel verde que envuelve al ciclista. El tramo final hacia Dosquebradas ofrece un descenso tÃ©cnico con curvas cerradas y vistas al valle de Pereira.",
    paragraph2:
      "Los 1,377 metros de desnivel se concentran en el ascenso a El Manzano, lo que significa rampas exigentes pero de duraciÃ³n moderada. Para ciclistas recreativos, el tiempo estimado es de 4 a 5 horas. Esta ruta es perfecta para media jornada y se puede combinar con una visita a Marsella si se desea extender el recorrido. La carretera hacia El Manzano es estrecha y con poco trÃ¡fico, lo que la convierte en una de las mÃ¡s seguras y placenteras para rodar en bicicleta.",
  },
  {
    id: "circasia",
    name: "Circasia",
    subtitle: "El Gran Circuito Cafetero",
    distance: "114.98 km",
    elevation: "2,055 m",
    movingTime: "5h 04min",
    estimatedTime: "7â€“8 horas",
    avgSpeed: "22.6 km/h",
    date: "17 de octubre de 2020",
    cities: "Cartago â†’ La Virginia â†’ Marsella â†’ El Manzano â†’ Quimbaya â†’ Montenegro â†’ Circasia",
    difficulty: "Alta",
    difficultyColor: "#d97706",
    paragraph1:
      "Este gran circuito es quizÃ¡s el recorrido mÃ¡s completo para conocer el Eje Cafetero sobre dos ruedas. La ruta pasa por La Virginia, sube hacia Marsella y El Manzano, desciende hacia Quimbaya y Montenegro, y culmina en Circasia antes de regresar al punto de partida. Cada tramo ofrece un paisaje diferente: el valle cÃ¡lido del rÃ­o Cauca, los bosques montaÃ±osos de Risaralda, los cafetales ondulados del QuindÃ­o y los pueblos coloridos que son el alma del Eje Cafetero.",
    paragraph2:
      "Con 2,055 metros de desnivel y casi 115 kilÃ³metros, este circuito exige resistencia y buen manejo del esfuerzo. La ventaja es que al ser circular, nunca se repite camino y la variedad de paisajes mantiene la motivaciÃ³n alta. Para ciclistas recreativos, el tiempo estimado es de 7 a 8 horas. Circasia, conocida como \"La Villa del QuindÃ­o\", merece una parada para recorrer su cementerio libre (Ãºnico en Colombia) y disfrutar de su gastronomÃ­a local. Se recomienda llevar luces traseras y delanteras por si el recorrido se extiende hasta el atardecer.",
  },
  {
    id: "altagracia-zaragoza",
    name: "Altagracia + Zaragoza",
    subtitle: "Ruta hacia Armenia",
    distance: "124.09 km",
    elevation: "1,998 m",
    movingTime: "~6h (estimado)",
    estimatedTime: "7â€“9 horas",
    avgSpeed: "~20 km/h",
    date: "Fecha no disponible",
    cities: "Cartago â†’ Pereira â†’ Dosquebradas â†’ Quimbaya â†’ Circasia â†’ Armenia â†’ Altagracia â†’ Zaragoza",
    difficulty: "Alta",
    difficultyColor: "#d97706",
    paragraph1:
      "Esta ruta es una de las mÃ¡s largas y completas, conectando el norte del Valle del Cauca con la capital del QuindÃ­o. El recorrido pasa por Pereira y Dosquebradas antes de adentrarse en el corazÃ³n cafetero por Quimbaya y Circasia, para finalmente llegar a las inmediaciones de Armenia. Los tramos por Altagracia y Zaragoza aÃ±aden variedad al recorrido, con subidas y bajadas que caracterizan la topografÃ­a ondulada de la regiÃ³n.",
    paragraph2:
      "Con casi 2,000 metros de desnivel y 124 kilÃ³metros, esta ruta requiere una jornada completa de pedaleo. Para ciclistas recreativos, se estima un tiempo de 7 a 9 horas dependiendo del ritmo y las paradas. La vÃ­a hacia Armenia es una de las mÃ¡s transitadas de la regiÃ³n, por lo que se recomienda especial precauciÃ³n con el trÃ¡fico pesado, especialmente en los tramos cercanos al peaje. Sin embargo, las vistas del paisaje cafetero y la satisfacciÃ³n de conectar dos capitales departamentales sobre la bicicleta hacen de esta ruta una experiencia memorable.",
  },
];

const routeTranslationsEn: Record<
  string,
  Omit<RouteData, "id" | "distance" | "elevation" | "movingTime" | "avgSpeed" | "difficultyColor">
> = {
  salento: {
    name: "Salento",
    subtitle: "The Jewel of Quindio",
    estimatedTime: "7-8 hours",
    date: "July 12, 2025",
    cities: "Cartago -> Pereira -> Salento -> Pereira -> Cartago.",
    difficulty: "High",
    paragraph1:
      "This is one of the most iconic routes in Colombia's Coffee Region. It leaves northern Valle del Cauca and heads into the heart of Quindio through UNESCO-listed coffee landscapes, colorful towns, and the final climb into beautiful Salento.",
    paragraph2:
      "With 2,456 meters of climbing, it demands solid fitness, but the reward is outstanding: views toward Cocora Valley, Quindio's green ridges, and endless coffee fields. Recreational riders should plan for 7 to 8 hours including food, hydration, and photo stops.",
  },
  filandia: {
    name: "Filandia",
    subtitle: "The Viewpoint of Quindio",
    estimatedTime: "6-7 hours",
    date: "October 30, 2021",
    cities: "Cartago -> Alcala -> Quimbaya -> Filandia",
    difficulty: "High",
    paragraph1:
      "Filandia is known as the illuminated hill of Quindio, and this route explains why. Secondary roads, coffee farms, bamboo groves, and natural viewpoints create a scenic climb toward one of Colombia's most charming towns.",
    paragraph2:
      "The elevation gain is steady rather than brutal, which makes it ideal for recreational cyclists looking for a real challenge without extreme risk. A relaxed pace usually means 6 to 7 hours, with a required stop at the Filandia lookout and at least one specialty coffee shop.",
  },
  "alto-de-letras": {
    name: "Alto de Letras",
    subtitle: "The Legendary Climb",
    estimatedTime: "9-11 hours",
    date: "November 15, 2020",
    cities: "Cartago -> Pereira -> Chinchina -> Manizales -> Alto de Letras",
    difficulty: "Very High",
    paragraph1:
      "Alto de Letras is considered one of the longest road-bike climbs in the world and a true rite of passage for cyclists in Colombia. The road climbs relentlessly from warm valley conditions into high-altitude terrain with huge canyon views and dramatic scenery.",
    paragraph2:
      "This route requires early departure, careful pacing, warm clothing for the summit, and enough nutrition for a very long day. Recreational riders should expect 9 to 11 hours, but reaching the top is an unforgettable experience.",
  },
  balboa: {
    name: "Balboa",
    subtitle: "The Risaralda Valley",
    estimatedTime: "5-6 hours",
    date: "August 23, 2025",
    cities: "Cartago -> La Virginia -> Viterbo -> Balboa",
    difficulty: "Accessible",
    paragraph1:
      "Balboa is one of the friendliest options for recreational cyclists who want to explore Risaralda without severe gradients. Much of the route follows the river valley, so the terrain stays fairly smooth with soft rollers and warm-weather scenery.",
    paragraph2:
      "Because the road is in good condition and the elevation gain is modest, this is an excellent long-distance entry route. A relaxed ride takes around 5 to 6 hours, and Balboa itself is worth a long break for its valley views and quiet rural atmosphere.",
  },
  belalcazar: {
    name: "Belalcazar",
    subtitle: "Between Coffee-Growing Mountains",
    estimatedTime: "6-7 hours",
    date: "November 8, 2025",
    cities: "Cartago -> La Virginia -> Ansermanuevo -> Viterbo -> Marsella -> Belalcazar",
    difficulty: "Moderate",
    paragraph1:
      "This route mixes warm valley roads with meaningful mountain climbing on the way to Belalcazar in Caldas. It winds through coffee farms and bamboo forest while opening broad views over the Risaralda river canyon.",
    paragraph2:
      "With 1,547 meters of climbing, it sits in the moderate-to-hard range and rewards steady cadence and smart gear choice. The return includes enjoyable descents, making the overall route challenging but very satisfying.",
  },
  "belalcazar-san-jose": {
    name: "Belalcazar via Morro Azul and San Jose",
    subtitle: "The Extended Route",
    estimatedTime: "7-8 hours",
    date: "April 17, 2025",
    cities: "Cartago -> Morro Azul -> San Jose -> Chinchina -> Belalcazar -> Viterbo",
    difficulty: "High",
    paragraph1:
      "This longer Belalcazar variant adds Morro Azul and San Jose, increasing both distance and climbing while offering a quieter look at rural Caldas. The Morro Azul section is especially scenic, with sweeping views over the Cauca valley and surrounding coffee fields.",
    paragraph2:
      "Two main climbs shape the ride, so it suits cyclists who have already done the shorter Belalcazar route and want something harder. The lighter traffic on secondary roads adds calm and makes the whole ride feel more immersive.",
  },
  sabanazo: {
    name: "Sabanazo",
    subtitle: "The Northern Circuit",
    estimatedTime: "5-6 hours",
    date: "August 16, 2025",
    cities: "Cartago -> Ansermanuevo -> Argelia -> La Virginia -> San Pacho",
    difficulty: "Moderate",
    paragraph1:
      "Sabanazo is a northern loop through Valle del Cauca and southern Risaralda with rolling terrain and no long sustained climb. That makes it a great route for holding good speed while still enjoying farmland, coffee plantations, and shaded stretches.",
    paragraph2:
      "Its 1,170 meters of elevation are spread evenly, so the route feels approachable even over long distance. The best plan is to start early before the valley heat builds up, especially between Ansermanuevo and Argelia.",
  },
  montenegro: {
    name: "Montenegro",
    subtitle: "Coffee Country Heartland",
    estimatedTime: "5-6 hours",
    date: "December 14, 2019",
    cities: "Cartago -> Quimbaya -> Montenegro -> Pereira",
    difficulty: "Moderate",
    paragraph1:
      "Although it stays under 90 kilometers, this route is one of the most rewarding in the region thanks to the intensity of its scenery and the cultural richness of the towns along the way. Coffee farms, plantain fields, and constant rollers keep the ride lively from start to finish.",
    paragraph2:
      "The 1,676 meters of climbing packed into a shorter route create a punchy mountain profile. It works well as an introduction to longer rides in the Coffee Region, especially if you pair it with a stop for local coffee in Montenegro.",
  },
  marsella: {
    name: "Marsella",
    subtitle: "The Green Municipality",
    estimatedTime: "6-7 hours",
    date: "October 24, 2020",
    cities: "Cartago -> La Virginia -> Belalcazar -> Marsella -> Pereira",
    difficulty: "High",
    paragraph1:
      "Marsella combines the warm Cauca river valley with the cool mountain landscapes of Risaralda. The town itself is a highlight, with preserved Antioquian architecture, flowered balconies, and a strong cultural identity.",
    paragraph2:
      "The final climb is the hardest section, but the overall route distributes its elevation well enough to stay manageable for strong recreational riders. A longer stop in town is worth it before beginning the return.",
  },
  chinchina: {
    name: "Chinchina",
    subtitle: "Land of Great Coffee",
    estimatedTime: "7-8 hours",
    date: "October 2, 2021",
    cities: "Cartago -> La Virginia -> Belalcazar -> Marsella -> Palestina -> Chinchina -> Viterbo",
    difficulty: "High",
    paragraph1:
      "This large loop crosses three departments and links several of the most representative towns in Colombia's coffee region. Chinchina, one of Caldas' coffee capitals, gives the ride a strong agricultural and industrial coffee identity.",
    paragraph2:
      "At 117 kilometers and just over 2,000 meters of climbing, it is a serious endurance day that requires planning and steady pacing. The advantage is constant variety and frequent resupply points thanks to the number of towns on the route.",
  },
  "viterbo-pereira": {
    name: "Viterbo - Pereira",
    subtitle: "The Fast Route",
    estimatedTime: "5-6 hours",
    date: "March 28, 2021",
    cities: "Cartago -> Viterbo -> Pereira",
    difficulty: "Accessible",
    paragraph1:
      "This is the fastest route in the collection, built around flat terrain and gentle undulation that let riders hold speed for long stretches. It works especially well as a steady endurance or tempo ride without major climbing interruptions.",
    paragraph2:
      "With only 797 meters of elevation over a long distance, it is one of the most approachable routes for recreational cyclists. Just stay alert near Pereira, where traffic increases and crosswinds can appear on exposed valley sections.",
  },
  "el-manzano": {
    name: "El Manzano",
    subtitle: "Climb from Pereira toward Armenia",
    estimatedTime: "4-5 hours",
    date: "March 21, 2021",
    cities: "Cartago -> La Virginia -> Marsella -> El Manzano -> Dosquebradas",
    difficulty: "Moderate",
    paragraph1:
      "Even though it is the shortest route in the set, El Manzano offers one of the prettiest climbs in the region. Bamboo forest, coffee fields, and a green tunnel effect make the ascent feel intimate before the technical descent toward Dosquebradas.",
    paragraph2:
      "The elevation is concentrated in the climb itself, so the route feels demanding but compact. It is ideal for a half-day ride and stands out as one of the safer and more pleasant roads to ride thanks to lighter traffic.",
  },
  circasia: {
    name: "Circasia",
    subtitle: "The Great Coffee Circuit",
    estimatedTime: "7-8 hours",
    date: "October 17, 2020",
    cities: "Cartago -> La Virginia -> Marsella -> El Manzano -> Quimbaya -> Montenegro -> Circasia",
    difficulty: "High",
    paragraph1:
      "This may be the most complete loop for discovering the Coffee Region by bike. Warm valley roads, forested climbs, rolling plantations, and colorful towns all appear in one route, which keeps the experience fresh the entire way.",
    paragraph2:
      "Because it combines 114.98 kilometers with 2,055 meters of climbing, it asks for endurance and disciplined pacing. The big advantage is that the route stays circular and never repeats terrain, so motivation remains high until the finish.",
  },
  "altagracia-zaragoza": {
    name: "Altagracia + Zaragoza",
    subtitle: "Route toward Armenia",
    estimatedTime: "7-9 hours",
    date: "Date unavailable",
    cities: "Cartago -> Pereira -> Dosquebradas -> Quimbaya -> Circasia -> Armenia -> Altagracia -> Zaragoza",
    difficulty: "High",
    paragraph1:
      "This is one of the longest and most complete rides in the collection, linking northern Valle del Cauca with the capital of Quindio. The additional Altagracia and Zaragoza segments bring extra variety with rolling terrain and changing scenery.",
    paragraph2:
      "Nearly 2,000 meters of climbing over 124 kilometers make this a full-day effort for recreational cyclists. Traffic can be heavy near Armenia, but the sense of linking major regional hubs by bike makes the ride especially memorable.",
  },
};

const routesEn = routesEs.map((route) => ({
  ...route,
  ...routeTranslationsEn[route.id],
}));

function RouteCard({
  route,
  index,
  labels,
}: {
  route: RouteData;
  index: number;
  labels: {
    photo: string;
    distance: string;
    elevation: string;
    moving: string;
    speed: string;
    recreational: string;
    date: string;
    showLess: string;
    showMore: string;
  };
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
      id={route.id}
    >
      {/* Photo placeholder */}
      <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-[#e8f0e8] to-[#d4e4d4] flex flex-col items-center justify-center gap-3">
        <div className="w-16 h-16 rounded-full bg-white/60 flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-[#2d5f3f]/50" />
        </div>
        <p className="text-[#2d5f3f]/60 text-sm font-[Poppins] font-medium">
          {labels.photo}
        </p>
        {/* Route number badge */}
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center font-bold text-sm font-[Poppins]">
          {index + 1}
        </div>
        {/* Difficulty badge */}
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-semibold font-[Poppins]"
          style={{ backgroundColor: route.difficultyColor }}
        >
          {route.difficulty}
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] font-[Lora]">
            {route.name}
          </h3>
          <p className="text-[#2d5f3f] font-medium text-base mt-1 font-[Poppins]">
            {route.subtitle}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-[#f5f7fa] rounded-xl p-3 flex items-center gap-2.5">
            <RouteIcon className="w-4 h-4 text-[#2d5f3f] shrink-0" />
            <div>
              <p className="text-[10px] text-gray-500 font-[Poppins] uppercase tracking-wider">{labels.distance}</p>
              <p className="text-sm font-semibold text-[#1e3a5f] font-[Poppins]">{route.distance}</p>
            </div>
          </div>
          <div className="bg-[#f5f7fa] rounded-xl p-3 flex items-center gap-2.5">
            <Mountain className="w-4 h-4 text-[#2d5f3f] shrink-0" />
            <div>
              <p className="text-[10px] text-gray-500 font-[Poppins] uppercase tracking-wider">{labels.elevation}</p>
              <p className="text-sm font-semibold text-[#1e3a5f] font-[Poppins]">{route.elevation}</p>
            </div>
          </div>
          <div className="bg-[#f5f7fa] rounded-xl p-3 flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#2d5f3f] shrink-0" />
            <div>
              <p className="text-[10px] text-gray-500 font-[Poppins] uppercase tracking-wider">{labels.moving}</p>
              <p className="text-sm font-semibold text-[#1e3a5f] font-[Poppins]">{route.movingTime}</p>
            </div>
          </div>
          <div className="bg-[#f5f7fa] rounded-xl p-3 flex items-center gap-2.5">
            <Gauge className="w-4 h-4 text-[#2d5f3f] shrink-0" />
            <div>
              <p className="text-[10px] text-gray-500 font-[Poppins] uppercase tracking-wider">{labels.speed}</p>
              <p className="text-sm font-semibold text-[#1e3a5f] font-[Poppins]">{route.avgSpeed}</p>
            </div>
          </div>
          <div className="bg-[#f5f7fa] rounded-xl p-3 flex items-center gap-2.5">
            <Bike className="w-4 h-4 text-[#2d5f3f] shrink-0" />
            <div>
              <p className="text-[10px] text-gray-500 font-[Poppins] uppercase tracking-wider">{labels.recreational}</p>
              <p className="text-sm font-semibold text-[#1e3a5f] font-[Poppins]">{route.estimatedTime}</p>
            </div>
          </div>
          <div className="bg-[#f5f7fa] rounded-xl p-3 flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-[#2d5f3f] shrink-0" />
            <div>
              <p className="text-[10px] text-gray-500 font-[Poppins] uppercase tracking-wider">{labels.date}</p>
              <p className="text-sm font-semibold text-[#1e3a5f] font-[Poppins] truncate">{route.date}</p>
            </div>
          </div>
        </div>

        {/* Cities */}
        <div className="flex items-start gap-2 mb-5 bg-[#faf8f0] rounded-xl p-3">
          <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
          <p className="text-sm text-[#1e3a5f] font-[Poppins] leading-relaxed">
            {route.cities}
          </p>
        </div>

        {/* Description */}
        <div className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[1000px]" : "max-h-[120px]"}`}>
          <p className="text-[#3a4a5c] text-[15px] leading-relaxed font-[Poppins] mb-4">
            {route.paragraph1}
          </p>
          <p className="text-[#3a4a5c] text-[15px] leading-relaxed font-[Poppins]">
            {route.paragraph2}
          </p>
        </div>

        {/* Expand/collapse */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1.5 text-[#2d5f3f] font-medium text-sm hover:text-[#1e3a5f] transition-colors font-[Poppins]"
        >
          {expanded ? (
            <>
              {labels.showLess} <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              {labels.showMore} <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default function CyclingRoutes() {
  // Stats summary â€” hardcoded to avoid parsing issues with locale-formatted numbers
  const totalKm = 66056;
  const totalElevation = 1271;
  const { language } = useLanguage();
  const routes = language === "es" ? routesEs : routesEn;
  const content =
    language === "es"
      ? {
          back: "Volver",
          services: "Servicios",
          experience: "Experiencia",
          contact: "Contacto",
          schedule: "Agendar Consulta",
          heroAlt: "Ciclismo de ruta en el Eje Cafetero colombiano",
          heroBadge: "{content.heroBadge}",
          heroTitle: "{content.heroTitle}",
          heroDescription:
            "Descubre las mejores rutas para rodar en bicicleta por el norte del Valle del Cauca, Risaralda, Caldas y Quindio. Paisajes cafeteros, montanas imponentes y carreteras que invitan a pedalear.",
          documented: "Rutas documentadas",
          kilometers: "Kilometros recorridos",
          trainings: "Entrenamientos",
          departments: "Departamentos",
          intro:
            "El Eje Cafetero colombiano es un paraiso para el ciclismo de ruta. Sus carreteras serpentean entre montanas, valles y pueblos patrimonio, ofreciendo recorridos que combinan el desafio deportivo con la belleza del Paisaje Cultural Cafetero. A continuacion comparto rutas reales y recomendaciones para recorrer la region sobre dos ruedas.",
          aboutBadge: "Sobre el autor",
          aboutCta: "Conoce mis servicios",
          aboutParagraph1:
            "Ademas de ciclista recreativo apasionado por las rutas del Eje Cafetero, soy especialista en omnicanalidad y WhatsApp Business API con mas de 30 anos de experiencia asesorando empresas en transformacion digital.",
          aboutParagraph2:
            "Ayudo a empresas a centralizar sus ventas y atencion al cliente a traves de estrategias omnicanal que integran WhatsApp, redes sociales, email y CRM en una experiencia unificada. Si buscas escalar tu negocio con comunicacion inteligente, hablemos.",
          profileLabel: "Ciclista y Consultor",
          tipsTitle: "Consejos para Ciclistas Recreativos",
          footerCopy: "Ciclista recreativo y Consultor de Omnicanalidad",
          home: "Inicio",
          routeCard: {
            photo: "Foto de la ruta",
            distance: "Distancia",
            elevation: "Desnivel",
            moving: "Tiempo mov.",
            speed: "Vel. prom.",
            recreational: "Recreativo",
            date: "Fecha",
            showLess: "Ver menos",
            showMore: "Leer descripcion completa",
          },
        }
      : {
          back: "Back",
          services: "Services",
          experience: "Experience",
          contact: "Contact",
          schedule: "Book a Consultation",
          heroAlt: "Road cycling in Colombia's Coffee Region",
          heroBadge: "Recommended routes",
          heroTitle: "Road Cycling",
          heroDescription:
            "Discover great cycling routes across northern Valle del Cauca, Risaralda, Caldas, and Quindio. Coffee landscapes, steep mountains, and roads made for long days on the bike.",
          documented: "Documented routes",
          kilometers: "Kilometers ridden",
          trainings: "Training rides",
          departments: "Departments",
          intro:
            "Colombia's Coffee Region is a paradise for road cycling. Its roads wind through mountains, valleys, and heritage towns, combining a real sporting challenge with remarkable scenery. Below are routes I have personally ridden as a recreational cyclist, together with practical notes for planning your own ride.",
          aboutBadge: "About the author",
          aboutCta: "Explore My Services",
          aboutParagraph1:
            "In addition to being a recreational cyclist who loves the routes of the Coffee Region, I am an omnichannel and WhatsApp Business API specialist with more than 30 years of experience advising companies on digital transformation.",
          aboutParagraph2:
            "I help companies centralize sales and customer support through omnichannel strategies that connect WhatsApp, social media, email, and CRM into one unified experience. If you want to scale your business with smarter communication, let's talk.",
          profileLabel: "Cyclist and Consultant",
          tipsTitle: "Tips for Recreational Cyclists",
          footerCopy: "Recreational cyclist and Omnichannel Consultant",
          home: "Home",
          routeCard: {
            photo: "Route photo",
            distance: "Distance",
            elevation: "Elevation",
            moving: "Moving time",
            speed: "Avg. speed",
            recreational: "Recreational",
            date: "Date",
            showLess: "Show less",
            showMore: "Read full description",
          },
        };

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container flex items-center justify-between h-14 gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#1e3a5f] hover:text-[#2d5f3f] transition-colors font-[Poppins] text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            {content.back}
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <a href="/#servicios" className="text-[#4a5568] hover:text-[#1e3a5f] transition-colors text-sm font-[Poppins] font-medium">{content.services}</a>
            <a href="/#experiencia" className="text-[#4a5568] hover:text-[#1e3a5f] transition-colors text-sm font-[Poppins] font-medium">{content.experience}</a>
            <a href="/#contacto" className="text-[#4a5568] hover:text-[#1e3a5f] transition-colors text-sm font-[Poppins] font-medium">{content.contact}</a>
            <a href="/#contacto" className="bg-[#1e3a5f] text-white px-4 py-2 rounded-lg text-sm font-[Poppins] font-medium hover:bg-[#162d4a] transition-colors">{content.schedule}</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="flex items-center gap-2 group"
            >
              <span className="w-8 h-8 rounded-lg bg-[#1e3a5f] text-white flex items-center justify-center font-bold text-xs font-[Poppins]">
                AM
              </span>
              <span className="text-[#1e3a5f] font-semibold text-sm font-[Poppins] hidden sm:block">
                Alex Murillo
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-14">
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={HERO_IMG}
            alt={content.heroAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container pb-10 md:pb-14">
              <p className="text-[#d4af37] font-semibold text-sm tracking-widest uppercase mb-3 font-[Poppins]">
                {content.heroBadge}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[Lora] leading-tight mb-4">
                {content.heroTitle}
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl font-[Poppins] leading-relaxed">
                Descubre las mejores rutas para rodar en bicicleta por el norte del Valle del Cauca,
                Risaralda, Caldas y QuindÃ­o. Paisajes cafeteros, montaÃ±as imponentes y carreteras
                que invitan a pedalear.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Summary stats */}
      <section className="relative -mt-8 z-10">
        <div className="container">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#1e3a5f] font-[Lora]">{routes.length}</p>
              <p className="text-sm text-gray-500 mt-1 font-[Poppins]">Rutas documentadas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#2d5f3f] font-[Lora]">
                {Math.round(totalKm).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mt-1 font-[Poppins]">KilÃ³metros recorridos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#d4af37] font-[Lora]">
                {Math.round(totalElevation).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mt-1 font-[Poppins]">Entrenamientos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#1e3a5f] font-[Lora]">4</p>
              <p className="text-sm text-gray-500 mt-1 font-[Poppins]">Departamentos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro text */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#3a4a5c] text-base md:text-lg leading-relaxed font-[Poppins]">
            El Eje Cafetero colombiano es un paraÃ­so para el ciclismo de ruta. Sus carreteras
            serpentean entre montaÃ±as, valles y pueblos patrimonio, ofreciendo recorridos que
            combinan el desafÃ­o deportivo con la belleza del Paisaje Cultural Cafetero, declarado
            Patrimonio de la Humanidad por la UNESCO. A continuaciÃ³n, comparto las rutas que he
            recorrido como ciclista recreativo, con datos reales y recomendaciones para que te
            animes a descubrir esta regiÃ³n sobre dos ruedas.
          </p>
        </div>
      </section>

      {/* Routes list */}
      <section className="container pb-12">
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {routes.map((route, i) => (
            <RouteCard key={route.id} route={route} index={i} labels={content.routeCard} />
          ))}
        </div>
      </section>

      {/* Services promo banner */}
      <section className="bg-[#1e3a5f] py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <p className="text-[#d4af37] font-semibold text-sm tracking-widest uppercase mb-3 font-[Poppins]">
                Sobre el autor
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-[Lora] mb-4">
                Alex Murillo
              </h2>
              <p className="text-white/80 text-base leading-relaxed font-[Poppins] mb-3">
                AdemÃ¡s de ciclista recreativo apasionado por las rutas del Eje Cafetero, soy
                <strong className="text-white"> especialista en omnicanalidad y WhatsApp Business API</strong> con
                mÃ¡s de 30 aÃ±os de experiencia asesorando empresas en transformaciÃ³n digital.
              </p>
              <p className="text-white/80 text-base leading-relaxed font-[Poppins] mb-6">
                Ayudo a empresas a centralizar sus ventas y atenciÃ³n al cliente a travÃ©s de
                estrategias omnicanal que integran WhatsApp, redes sociales, email y CRM en una
                experiencia unificada. Si buscas escalar tu negocio con comunicaciÃ³n inteligente,
                hablemos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-[#d4af37] text-[#1e3a5f] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#c9a432] transition-colors font-[Poppins]"
                >
                  Conoce mis servicios
                </a>
                <a
                  href="https://wa.me/573103882759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors font-[Poppins]"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-[#2a4f7a] flex items-center justify-center shrink-0">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#d4af37]/20 flex items-center justify-center mx-auto mb-3">
                  <Bike className="w-10 h-10 text-[#d4af37]" />
                </div>
                <p className="text-white/60 text-xs font-[Poppins]">Ciclista &amp; Consultor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips section */}
      <section className="container py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] font-[Lora] text-center mb-10">
            Consejos para Ciclistas Recreativos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#2d5f3f]/10 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-[#2d5f3f]" />
              </div>
              <h3 className="text-lg font-bold text-[#1e3a5f] font-[Lora] mb-2">Salga temprano</h3>
              <p className="text-[#3a4a5c] text-sm leading-relaxed font-[Poppins]">
                Inicie su rodada antes de las 6:00 AM para aprovechar las horas frescas y evitar
                el calor del mediodÃ­a, especialmente en los tramos de baja altitud del valle.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#2d5f3f]/10 flex items-center justify-center mb-4">
                <Mountain className="w-5 h-5 text-[#2d5f3f]" />
              </div>
              <h3 className="text-lg font-bold text-[#1e3a5f] font-[Lora] mb-2">Respete su ritmo</h3>
              <p className="text-[#3a4a5c] text-sm leading-relaxed font-[Poppins]">
                Los tiempos indicados son de un ciclista experimentado. Agregue entre 30% y 50%
                mÃ¡s de tiempo si estÃ¡ comenzando. Lo importante es disfrutar, no competir.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#2d5f3f]/10 flex items-center justify-center mb-4">
                <Gauge className="w-5 h-5 text-[#2d5f3f]" />
              </div>
              <h3 className="text-lg font-bold text-[#1e3a5f] font-[Lora] mb-2">HidrataciÃ³n y nutriciÃ³n</h3>
              <p className="text-[#3a4a5c] text-sm leading-relaxed font-[Poppins]">
                Lleve al menos dos bidones de agua y snacks energÃ©ticos. En rutas largas,
                aproveche las tiendas de los pueblos para reabastecerse con frutas, panela y agua.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#2d5f3f]/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[#2d5f3f]" />
              </div>
              <h3 className="text-lg font-bold text-[#1e3a5f] font-[Lora] mb-2">Seguridad vial</h3>
              <p className="text-[#3a4a5c] text-sm leading-relaxed font-[Poppins]">
                Use siempre casco, luces y chaleco reflectivo. Ruede en grupo cuando sea posible
                y avise a alguien su ruta planificada antes de salir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1f30] py-8">
        <div className="container text-center">
          <p className="text-white/50 text-sm font-[Poppins]">
            &copy; {new Date().getFullYear()} Alex Murillo â€” Ciclista recreativo &amp; Consultor de Omnicanalidad
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <Link href="/" className="text-white/40 text-sm hover:text-white/70 transition-colors font-[Poppins]">
              Inicio
            </Link>
            <span className="text-white/20">|</span>
            <a href="/#contacto" className="text-white/40 text-sm hover:text-white/70 transition-colors font-[Poppins]">
              Contacto
            </a>
          </div>
        </div>
      </footer>

      <ShareButton />
    </div>
  );
}

