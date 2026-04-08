/*
 * Design: Corporate Elegance
 * Colors: Navy #1e3a5f, Green #2d5f3f, Gold #d4af37
 * Font: Lora (headings), Poppins (body)
 * Page: Ciclismo de Ruta — Rutas recomendadas del Eje Cafetero
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
  difficulty: "Moderada" | "Alta" | "Muy Alta" | "Accesible";
  difficultyColor: string;
  paragraph1: string;
  paragraph2: string;
}

const routes: RouteData[] = [
  {
    id: "salento",
    name: "Salento",
    subtitle: "La Joya del Quindío",
    distance: "125.97 km",
    elevation: "2,456 m",
    movingTime: "6h 05min",
    estimatedTime: "7–8 horas",
    avgSpeed: "20.7 km/h",
    date: "12 de julio de 2025",
    cities: "Cartago → Pereira → Salento → Pereira → Cartago.",
    difficulty: "Alta",
    difficultyColor: "#d97706",
    paragraph1:
      "Esta ruta es, sin duda, una de las más emblemáticas del Eje Cafetero colombiano. El recorrido parte desde el norte del Valle del Cauca y se adentra en el corazón del Quindío, atravesando paisajes cafeteros declarados Patrimonio de la Humanidad por la UNESCO. El trayecto pasa por La Virginia y Pereira antes de tomar la vía hacia Quimbaya y Circasia, pueblos pintorescos de arquitectura antioqueña donde el aroma del café recién tostado acompaña al ciclista. El ascenso final hacia Salento, con sus calles empedradas y sus casas de colores vibrantes, es una recompensa visual que justifica cada pedaleo.",
    paragraph2:
      "Con 2,456 metros de desnivel acumulado, esta ruta exige una buena preparación física, pero el esfuerzo se compensa con vistas panorámicas del Valle de Cocora, los imponentes cerros quindíanos y extensos cultivos de café y plátano. Para ciclistas recreativos, se recomienda planificar entre 7 y 8 horas incluyendo paradas para hidratación y fotografías. Los tramos entre Quimbaya y Circasia presentan subidas sostenidas que ponen a prueba la resistencia, mientras que el descenso de regreso permite disfrutar de la velocidad con paisajes de ensueño a ambos lados de la carretera.",
  },
  {
    id: "filandia",
    name: "Filandia",
    subtitle: "El Mirador del Quindío",
    distance: "103.39 km",
    elevation: "1,914 m",
    movingTime: "4h 51min",
    estimatedTime: "6–7 horas",
    avgSpeed: "21.3 km/h",
    date: "30 de octubre de 2021",
    cities: "Cartago → Alcalá → Quimbaya → Filandia",
    difficulty: "Alta",
    difficultyColor: "#d97706",
    paragraph1:
      "Filandia es conocida como \"La Colina Iluminada del Quindío\" y esta ruta permite descubrir por qué. El recorrido serpentea por carreteras secundarias rodeadas de fincas cafeteras, guaduales y miradores naturales que ofrecen panorámicas espectaculares del Valle del Cauca y la Cordillera Central. Desde Cartago, la ruta toma dirección sur pasando por Alcalá, un pueblo tranquilo que marca el inicio del ascenso hacia la zona cafetera del Quindío, para luego continuar por Quimbaya hasta llegar a Filandia, uno de los pueblos más encantadores de Colombia.",
    paragraph2:
      "El desnivel de 1,914 metros se distribuye en subidas progresivas que permiten un ritmo constante. Las carreteras están en buen estado y el tráfico vehicular es moderado, lo que hace de esta ruta una opción ideal para ciclistas recreativos que buscan un desafío sin riesgos excesivos. Para quienes pedalean a ritmo tranquilo, se recomienda un tiempo de entre 6 y 7 horas. No olvide detenerse en el mirador de Filandia, desde donde se divisa el Valle del Cauca en toda su extensión, y degustar un café de origen en alguna de las tiendas artesanales del pueblo.",
  },
  {
    id: "alto-de-letras",
    name: "Alto de Letras",
    subtitle: "El Ascenso Legendario",
    distance: "115.97 km",
    elevation: "3,629 m",
    movingTime: "7h 31min",
    estimatedTime: "9–11 horas",
    avgSpeed: "15.4 km/h",
    date: "15 de noviembre de 2020",
    cities: "Cartago → Pereira → Chinchina → Manizales → Alto de Letras",
    difficulty: "Muy Alta",
    difficultyColor: "#dc2626",
    paragraph1:
      "El Alto de Letras es considerado uno de los ascensos en bicicleta más largos del mundo y un verdadero rito de paso para todo ciclista en Colombia. Con 3,629 metros de desnivel acumulado en poco más de 115 kilómetros, esta ruta es la más exigente de toda la colección. El recorrido parte desde Cartago y asciende progresivamente por la vía que conduce a Manizales, pasando por el Peaje Tarapacá y El Jazmín, donde la vegetación cambia dramáticamente de zona cálida a páramo. La carretera, aunque empinada, está bien pavimentada y ofrece vistas que quitan el aliento: cañones profundos, cascadas y la inmensidad de la Cordillera Central.",
    paragraph2:
      "Para ciclistas recreativos, esta ruta requiere una planificación cuidadosa. Se recomienda partir muy temprano (antes de las 5:00 AM) y llevar ropa abrigada para la cumbre, donde la temperatura puede descender considerablemente. El tiempo estimado para completar el recorrido es de 9 a 11 horas a ritmo pausado. Es fundamental llevar suficiente hidratación y alimentación, ya que los puntos de abastecimiento son escasos en los tramos más altos. Sin embargo, la satisfacción de coronar el Alto de Letras es una experiencia que todo ciclista debería vivir al menos una vez en la vida.",
  },
  {
    id: "balboa",
    name: "Balboa",
    subtitle: "El Valle del Risaralda",
    distance: "92.27 km",
    elevation: "977 m",
    movingTime: "3h 55min",
    estimatedTime: "5–6 horas",
    avgSpeed: "23.5 km/h",
    date: "23 de agosto de 2025",
    cities: "Cartago → La Virginia → Viterbo → Balboa",
    difficulty: "Accesible",
    difficultyColor: "#16a34a",
    paragraph1:
      "La ruta hacia Balboa es una de las más accesibles para ciclistas recreativos que desean explorar el departamento de Risaralda sin enfrentar desniveles extremos. Con apenas 977 metros de elevación acumulada en 92 kilómetros, el recorrido discurre en gran parte por el valle del río Risaralda, ofreciendo un terreno relativamente plano con ondulaciones suaves. La vía pasa por La Virginia, ciudad ribereña donde confluyen los ríos Cauca y Risaralda, y continúa hacia Viterbo y Balboa, municipios rodeados de cultivos de caña de azúcar, café y plátano.",
    paragraph2:
      "El buen estado de la carretera y la velocidad promedio alcanzable (23.5 km/h) hacen de esta ruta una excelente opción para quienes se inician en recorridos largos. Para ciclistas recreativos, el tiempo estimado es de 5 a 6 horas con paradas. Balboa, enclavada en las montañas risaraldenses, ofrece un ambiente campesino auténtico y vistas panorámicas del valle que bien merecen una pausa prolongada antes del regreso. Se recomienda llevar protección solar, ya que gran parte del recorrido transcurre a baja altitud con temperaturas que pueden superar los 30°C.",
  },
  {
    id: "belalcazar",
    name: "Belalcázar",
    subtitle: "Entre Montañas Cafeteras",
    distance: "91.08 km",
    elevation: "1,547 m",
    movingTime: "4h 36min",
    estimatedTime: "6–7 horas",
    avgSpeed: "19.8 km/h",
    date: "8 de noviembre de 2025",
    cities: "Cartago → La Virginia → Ansermanuevo → Viterbo → Marsella → Belalcázar",
    difficulty: "Moderada",
    difficultyColor: "#d97706",
    paragraph1:
      "Belalcázar, municipio caldense enclavado en la cordillera, es el destino de esta ruta que combina valles cálidos con ascensos montañosos. El recorrido parte hacia La Virginia y Ansermanuevo antes de tomar la vía hacia Viterbo, donde comienza el ascenso más significativo del día. La carretera serpentea entre fincas cafeteras y bosques de guadua, con tramos que ofrecen vistas panorámicas del cañón del río Risaralda. El paso por Marsella, conocida como \"El Municipio Verde de Colombia\", añade un toque cultural al recorrido con su arquitectura patrimonial bien conservada.",
    paragraph2:
      "Con 1,547 metros de desnivel, esta ruta presenta un desafío moderado-alto que requiere buen manejo de los cambios y una cadencia constante en las subidas. El tiempo estimado para ciclistas recreativos es de 6 a 7 horas. Las carreteras están en condiciones aceptables, aunque algunos tramos entre Viterbo y Belalcázar pueden presentar baches. Se recomienda llevar al menos dos bidones de agua y aprovechar las tiendas de pueblo para reabastecerse. El regreso ofrece descensos gratificantes que permiten recuperar energías mientras se disfruta del paisaje cafetero.",
  },
  {
    id: "belalcazar-san-jose",
    name: "Belalcázar por Morro Azul y San José",
    subtitle: "La Ruta Extendida",
    distance: "110.00 km",
    elevation: "1,778 m",
    movingTime: "5h 35min",
    estimatedTime: "7–8 horas",
    avgSpeed: "19.7 km/h",
    date: "17 de abril de 2025",
    cities: "Cartago → Morro Azul → San José → Chinchiná → Belalcázar → Viterbo",
    difficulty: "Alta",
    difficultyColor: "#d97706",
    paragraph1:
      "Esta variante de la ruta a Belalcázar incorpora el paso por Morro Azul y las partidas hacia San José, añadiendo kilómetros y desnivel a un recorrido ya de por sí exigente. La ruta ofrece una perspectiva diferente del paisaje cafetero caldense, pasando por zonas rurales menos transitadas donde el ciclista puede disfrutar de la soledad del camino y la belleza agreste de la cordillera. El tramo por Morro Azul es particularmente pintoresco, con vistas al valle del río Cauca y plantaciones de café que se extienden hasta donde alcanza la vista.",
    paragraph2:
      "Los 1,778 metros de desnivel se concentran en dos ascensos principales que ponen a prueba la resistencia del ciclista. Para quienes ruedan a ritmo recreativo, se recomienda un tiempo de 7 a 8 horas con paradas estratégicas en San José y Chinchiná para hidratarse y alimentarse. Esta ruta es ideal para ciclistas que ya han completado la versión corta a Belalcázar y buscan un mayor desafío. Las carreteras secundarias por las que transcurre parte del recorrido tienen menor tráfico vehicular, lo que añade tranquilidad a la experiencia.",
  },
  {
    id: "sabanazo",
    name: "Sabanazo",
    subtitle: "El Circuito del Norte",
    distance: "106.49 km",
    elevation: "1,170 m",
    movingTime: "4h 28min",
    estimatedTime: "5–6 horas",
    avgSpeed: "23.8 km/h",
    date: "16 de agosto de 2025",
    cities: "Cartago → Ansermanuevo → Argelia → La Virginia → San Pacho",
    difficulty: "Moderada",
    difficultyColor: "#d97706",
    paragraph1:
      "El Sabanazo es un circuito que recorre la zona norte del Valle del Cauca y el sur de Risaralda, pasando por Ansermanuevo, Argelia y La Virginia. Es una ruta que se caracteriza por su terreno ondulado pero sin ascensos prolongados, lo que permite mantener una velocidad promedio alta y disfrutar del paisaje sin el agotamiento de las grandes subidas. El recorrido atraviesa extensas zonas de cultivo de caña de azúcar y café, con tramos sombreados por árboles centenarios que ofrecen alivio del calor tropical.",
    paragraph2:
      "Con 1,170 metros de desnivel distribuidos uniformemente, esta ruta es perfecta para ciclistas recreativos que buscan distancia sin sufrimiento excesivo. El tiempo estimado para completarla a ritmo tranquilo es de 5 a 6 horas. La carretera principal está en buen estado y el circuito permite regresar al punto de partida sin repetir camino, lo que añade variedad al recorrido. Se recomienda rodar temprano en la mañana para evitar el calor del mediodía, especialmente en los tramos de baja altitud entre Ansermanuevo y Argelia.",
  },
  {
    id: "montenegro",
    name: "Montenegro",
    subtitle: "Corazón Cafetero",
    distance: "87.27 km",
    elevation: "1,676 m",
    movingTime: "4h 14min",
    estimatedTime: "5–6 horas",
    avgSpeed: "20.6 km/h",
    date: "14 de diciembre de 2019",
    cities: "Cartago → Quimbaya → Montenegro → Pereira",
    difficulty: "Moderada",
    difficultyColor: "#d97706",
    paragraph1:
      "Aunque no alcanza los 90 kilómetros, la ruta a Montenegro es una de las más gratificantes del Eje Cafetero por la intensidad de sus paisajes y la riqueza cultural de los pueblos que atraviesa. El recorrido pasa por Quimbaya, cuna de la civilización precolombina del mismo nombre, y llega hasta Montenegro, puerta de entrada al Parque Nacional del Café. Las carreteras serpentean entre cafetales y plataneras, con subidas y bajadas constantes que mantienen al ciclista activo durante todo el trayecto.",
    paragraph2:
      "Los 1,676 metros de desnivel en menos de 90 kilómetros indican un perfil bastante montañoso, con rampas cortas pero intensas. Para ciclistas recreativos, el tiempo estimado es de 5 a 6 horas. Esta ruta es ideal como introducción a los recorridos largos en la región, ya que combina un kilometraje manejable con un desnivel significativo. Se recomienda hacer una parada en Montenegro para visitar alguna finca cafetera y degustar el café quindiano, considerado uno de los mejores del mundo.",
  },
  {
    id: "marsella",
    name: "Marsella",
    subtitle: "El Municipio Verde",
    distance: "111.29 km",
    elevation: "1,850 m",
    movingTime: "5h 09min",
    estimatedTime: "6–7 horas",
    avgSpeed: "21.6 km/h",
    date: "24 de octubre de 2020",
    cities: "Cartago → La Virginia → Belalcázar → Marsella → Pereira",
    difficulty: "Alta",
    difficultyColor: "#d97706",
    paragraph1:
      "Marsella, conocida como \"El Municipio Verde de Colombia\", es el destino estrella de esta ruta que combina el valle cálido del río Cauca con los frescos paisajes montañosos de Risaralda. El recorrido pasa por La Virginia y Belalcázar antes de emprender el ascenso hacia Marsella, un pueblo que conserva intacta su arquitectura antioqueña de balcones floridos y calles empedradas. Declarado parte del Paisaje Cultural Cafetero, Marsella ofrece al ciclista una experiencia que trasciende lo deportivo y se convierte en un viaje cultural.",
    paragraph2:
      "El ascenso a Marsella es el punto más exigente de la ruta, con rampas que alcanzan pendientes considerables en los últimos kilómetros antes del pueblo. Sin embargo, los 1,850 metros de desnivel total se distribuyen de manera que permiten recuperarse en los tramos de valle. Para ciclistas recreativos, se recomienda un tiempo de 6 a 7 horas. No deje de visitar el Jardín Botánico y la Casa de la Cultura de Marsella, dos joyas patrimoniales que justifican una parada prolongada antes de emprender el regreso.",
  },
  {
    id: "chinchina",
    name: "Chinchiná",
    subtitle: "Tierra del Mejor Café",
    distance: "117.53 km",
    elevation: "2,028 m",
    movingTime: "5h 48min",
    estimatedTime: "7–8 horas",
    avgSpeed: "20.2 km/h",
    date: "2 de octubre de 2021",
    cities: "Cartago → La Virginia → Belalcázar → Marsella → Palestina → Chinchiná → Viterbo",
    difficulty: "Alta",
    difficultyColor: "#d97706",
    paragraph1:
      "Esta ruta es un gran circuito que recorre tres departamentos (Valle del Cauca, Risaralda y Caldas) y pasa por algunos de los municipios más emblemáticos de la zona cafetera colombiana. Chinchiná, capital cafetera de Caldas, es el punto más lejano del recorrido y se alcanza después de atravesar La Virginia, Belalcázar, Marsella y Palestina. Cada pueblo aporta su propia personalidad al viaje: desde el calor ribereño de La Virginia hasta el fresco aroma del café en Chinchiná, donde se encuentra la planta de liofilización de café más grande de Colombia.",
    paragraph2:
      "Con 2,028 metros de desnivel y 117 kilómetros, esta ruta es un desafío serio que requiere buena condición física y planificación. El circuito tiene la ventaja de no repetir camino, lo que mantiene el interés visual durante todo el recorrido. Para ciclistas recreativos, el tiempo estimado es de 7 a 8 horas. Se recomienda llevar ropa para cambios de temperatura, ya que la ruta oscila entre los 900 y los 1,600 metros de altitud. Los puntos de abastecimiento son frecuentes gracias a la cantidad de pueblos que se atraviesan.",
  },
  {
    id: "viterbo-pereira",
    name: "Viterbo — Pereira",
    subtitle: "La Ruta Rápida",
    distance: "117.39 km",
    elevation: "797 m",
    movingTime: "4h 04min",
    estimatedTime: "5–6 horas",
    avgSpeed: "28.8 km/h",
    date: "28 de marzo de 2021",
    cities: "Cartago → Viterbo → Pereira",
    difficulty: "Accesible",
    difficultyColor: "#16a34a",
    paragraph1:
      "Esta es la ruta más rápida de toda la colección, con una velocidad promedio de 28.8 km/h que refleja un perfil predominantemente plano con ondulaciones suaves. El recorrido conecta el norte del Valle del Cauca con Pereira a través de Viterbo, siguiendo las vías principales que discurren por el valle del río Cauca y el río La Vieja. Es una ruta ideal para entrenamientos de velocidad y resistencia, donde el ciclista puede mantener un ritmo alto sin las interrupciones de grandes ascensos.",
    paragraph2:
      "Con apenas 797 metros de desnivel en 117 kilómetros, esta ruta es la más accesible para ciclistas recreativos que desean completar una distancia considerable sin el sufrimiento de las montañas. El tiempo estimado a ritmo tranquilo es de 5 a 6 horas. La carretera está en excelente estado y conecta zonas urbanas e industriales con tramos rurales de gran belleza. Se recomienda especial precaución con el tráfico vehicular en las cercanías de Pereira y prestar atención a los vientos cruzados en los tramos abiertos del valle.",
  },
  {
    id: "el-manzano",
    name: "El Manzano",
    subtitle: "Ascenso de Pereira a Armenia.",
    distance: "83.22 km",
    elevation: "1,377 m",
    movingTime: "3h 43min",
    estimatedTime: "4–5 horas",
    avgSpeed: "22.3 km/h",
    date: "21 de marzo de 2021",
    cities: "Cartago → La Virginia → Marsella → El Manzano → Dosquebradas",
    difficulty: "Moderada",
    difficultyColor: "#d97706",
    paragraph1:
      "Aunque es la ruta más corta de la colección, El Manzano ofrece uno de los ascensos más bonitos de la región. El recorrido parte hacia La Virginia y toma la vía hacia Marsella, pero en lugar de subir al pueblo, se desvía hacia El Manzano, una vereda enclavada en la montaña donde los bosques de guadua y los cafetales crean un túnel verde que envuelve al ciclista. El tramo final hacia Dosquebradas ofrece un descenso técnico con curvas cerradas y vistas al valle de Pereira.",
    paragraph2:
      "Los 1,377 metros de desnivel se concentran en el ascenso a El Manzano, lo que significa rampas exigentes pero de duración moderada. Para ciclistas recreativos, el tiempo estimado es de 4 a 5 horas. Esta ruta es perfecta para media jornada y se puede combinar con una visita a Marsella si se desea extender el recorrido. La carretera hacia El Manzano es estrecha y con poco tráfico, lo que la convierte en una de las más seguras y placenteras para rodar en bicicleta.",
  },
  {
    id: "circasia",
    name: "Circasia",
    subtitle: "El Gran Circuito Cafetero",
    distance: "114.98 km",
    elevation: "2,055 m",
    movingTime: "5h 04min",
    estimatedTime: "7–8 horas",
    avgSpeed: "22.6 km/h",
    date: "17 de octubre de 2020",
    cities: "Cartago → La Virginia → Marsella → El Manzano → Quimbaya → Montenegro → Circasia",
    difficulty: "Alta",
    difficultyColor: "#d97706",
    paragraph1:
      "Este gran circuito es quizás el recorrido más completo para conocer el Eje Cafetero sobre dos ruedas. La ruta pasa por La Virginia, sube hacia Marsella y El Manzano, desciende hacia Quimbaya y Montenegro, y culmina en Circasia antes de regresar al punto de partida. Cada tramo ofrece un paisaje diferente: el valle cálido del río Cauca, los bosques montañosos de Risaralda, los cafetales ondulados del Quindío y los pueblos coloridos que son el alma del Eje Cafetero.",
    paragraph2:
      "Con 2,055 metros de desnivel y casi 115 kilómetros, este circuito exige resistencia y buen manejo del esfuerzo. La ventaja es que al ser circular, nunca se repite camino y la variedad de paisajes mantiene la motivación alta. Para ciclistas recreativos, el tiempo estimado es de 7 a 8 horas. Circasia, conocida como \"La Villa del Quindío\", merece una parada para recorrer su cementerio libre (único en Colombia) y disfrutar de su gastronomía local. Se recomienda llevar luces traseras y delanteras por si el recorrido se extiende hasta el atardecer.",
  },
  {
    id: "altagracia-zaragoza",
    name: "Altagracia + Zaragoza",
    subtitle: "Ruta hacia Armenia",
    distance: "124.09 km",
    elevation: "1,998 m",
    movingTime: "~6h (estimado)",
    estimatedTime: "7–9 horas",
    avgSpeed: "~20 km/h",
    date: "Fecha no disponible",
    cities: "Cartago → Pereira → Dosquebradas → Quimbaya → Circasia → Armenia → Altagracia → Zaragoza",
    difficulty: "Alta",
    difficultyColor: "#d97706",
    paragraph1:
      "Esta ruta es una de las más largas y completas, conectando el norte del Valle del Cauca con la capital del Quindío. El recorrido pasa por Pereira y Dosquebradas antes de adentrarse en el corazón cafetero por Quimbaya y Circasia, para finalmente llegar a las inmediaciones de Armenia. Los tramos por Altagracia y Zaragoza añaden variedad al recorrido, con subidas y bajadas que caracterizan la topografía ondulada de la región.",
    paragraph2:
      "Con casi 2,000 metros de desnivel y 124 kilómetros, esta ruta requiere una jornada completa de pedaleo. Para ciclistas recreativos, se estima un tiempo de 7 a 9 horas dependiendo del ritmo y las paradas. La vía hacia Armenia es una de las más transitadas de la región, por lo que se recomienda especial precaución con el tráfico pesado, especialmente en los tramos cercanos al peaje. Sin embargo, las vistas del paisaje cafetero y la satisfacción de conectar dos capitales departamentales sobre la bicicleta hacen de esta ruta una experiencia memorable.",
  },
];

function RouteCard({ route, index }: { route: RouteData; index: number }) {
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
          Foto de la ruta — Próximamente
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
              <p className="text-[10px] text-gray-500 font-[Poppins] uppercase tracking-wider">Distancia</p>
              <p className="text-sm font-semibold text-[#1e3a5f] font-[Poppins]">{route.distance}</p>
            </div>
          </div>
          <div className="bg-[#f5f7fa] rounded-xl p-3 flex items-center gap-2.5">
            <Mountain className="w-4 h-4 text-[#2d5f3f] shrink-0" />
            <div>
              <p className="text-[10px] text-gray-500 font-[Poppins] uppercase tracking-wider">Desnivel</p>
              <p className="text-sm font-semibold text-[#1e3a5f] font-[Poppins]">{route.elevation}</p>
            </div>
          </div>
          <div className="bg-[#f5f7fa] rounded-xl p-3 flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#2d5f3f] shrink-0" />
            <div>
              <p className="text-[10px] text-gray-500 font-[Poppins] uppercase tracking-wider">Tiempo mov.</p>
              <p className="text-sm font-semibold text-[#1e3a5f] font-[Poppins]">{route.movingTime}</p>
            </div>
          </div>
          <div className="bg-[#f5f7fa] rounded-xl p-3 flex items-center gap-2.5">
            <Gauge className="w-4 h-4 text-[#2d5f3f] shrink-0" />
            <div>
              <p className="text-[10px] text-gray-500 font-[Poppins] uppercase tracking-wider">Vel. prom.</p>
              <p className="text-sm font-semibold text-[#1e3a5f] font-[Poppins]">{route.avgSpeed}</p>
            </div>
          </div>
          <div className="bg-[#f5f7fa] rounded-xl p-3 flex items-center gap-2.5">
            <Bike className="w-4 h-4 text-[#2d5f3f] shrink-0" />
            <div>
              <p className="text-[10px] text-gray-500 font-[Poppins] uppercase tracking-wider">Recreativo</p>
              <p className="text-sm font-semibold text-[#1e3a5f] font-[Poppins]">{route.estimatedTime}</p>
            </div>
          </div>
          <div className="bg-[#f5f7fa] rounded-xl p-3 flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-[#2d5f3f] shrink-0" />
            <div>
              <p className="text-[10px] text-gray-500 font-[Poppins] uppercase tracking-wider">Fecha</p>
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
              Ver menos <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Leer descripción completa <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default function CyclingRoutes() {
  // Stats summary — hardcoded to avoid parsing issues with locale-formatted numbers
  const totalKm = 66056;
  const totalElevation = 1271;

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container flex items-center justify-between h-14">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#1e3a5f] hover:text-[#2d5f3f] transition-colors font-[Poppins] text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <a href="/#servicios" className="text-[#4a5568] hover:text-[#1e3a5f] transition-colors text-sm font-[Poppins] font-medium">Servicios</a>
            <a href="/#experiencia" className="text-[#4a5568] hover:text-[#1e3a5f] transition-colors text-sm font-[Poppins] font-medium">Experiencia</a>
            <a href="/#contacto" className="text-[#4a5568] hover:text-[#1e3a5f] transition-colors text-sm font-[Poppins] font-medium">Contacto</a>
            <a href="/#contacto" className="bg-[#1e3a5f] text-white px-4 py-2 rounded-lg text-sm font-[Poppins] font-medium hover:bg-[#162d4a] transition-colors">Agendar Consulta</a>
          </div>
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
      </nav>

      {/* Hero */}
      <header className="relative pt-14">
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={HERO_IMG}
            alt="Ciclismo de ruta en el Eje Cafetero colombiano"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container pb-10 md:pb-14">
              <p className="text-[#d4af37] font-semibold text-sm tracking-widest uppercase mb-3 font-[Poppins]">
                Rutas recomendadas
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[Lora] leading-tight mb-4">
                Ciclismo de Ruta
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl font-[Poppins] leading-relaxed">
                Descubre las mejores rutas para rodar en bicicleta por el norte del Valle del Cauca,
                Risaralda, Caldas y Quindío. Paisajes cafeteros, montañas imponentes y carreteras
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
              <p className="text-sm text-gray-500 mt-1 font-[Poppins]">Kilómetros recorridos</p>
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
            El Eje Cafetero colombiano es un paraíso para el ciclismo de ruta. Sus carreteras
            serpentean entre montañas, valles y pueblos patrimonio, ofreciendo recorridos que
            combinan el desafío deportivo con la belleza del Paisaje Cultural Cafetero, declarado
            Patrimonio de la Humanidad por la UNESCO. A continuación, comparto las rutas que he
            recorrido como ciclista recreativo, con datos reales y recomendaciones para que te
            animes a descubrir esta región sobre dos ruedas.
          </p>
        </div>
      </section>

      {/* Routes list */}
      <section className="container pb-12">
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {routes.map((route, i) => (
            <RouteCard key={route.id} route={route} index={i} />
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
                Además de ciclista recreativo apasionado por las rutas del Eje Cafetero, soy
                <strong className="text-white"> especialista en omnicanalidad y WhatsApp Business API</strong> con
                más de 30 años de experiencia asesorando empresas en transformación digital.
              </p>
              <p className="text-white/80 text-base leading-relaxed font-[Poppins] mb-6">
                Ayudo a empresas a centralizar sus ventas y atención al cliente a través de
                estrategias omnicanal que integran WhatsApp, redes sociales, email y CRM en una
                experiencia unificada. Si buscas escalar tu negocio con comunicación inteligente,
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
                el calor del mediodía, especialmente en los tramos de baja altitud del valle.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#2d5f3f]/10 flex items-center justify-center mb-4">
                <Mountain className="w-5 h-5 text-[#2d5f3f]" />
              </div>
              <h3 className="text-lg font-bold text-[#1e3a5f] font-[Lora] mb-2">Respete su ritmo</h3>
              <p className="text-[#3a4a5c] text-sm leading-relaxed font-[Poppins]">
                Los tiempos indicados son de un ciclista experimentado. Agregue entre 30% y 50%
                más de tiempo si está comenzando. Lo importante es disfrutar, no competir.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#2d5f3f]/10 flex items-center justify-center mb-4">
                <Gauge className="w-5 h-5 text-[#2d5f3f]" />
              </div>
              <h3 className="text-lg font-bold text-[#1e3a5f] font-[Lora] mb-2">Hidratación y nutrición</h3>
              <p className="text-[#3a4a5c] text-sm leading-relaxed font-[Poppins]">
                Lleve al menos dos bidones de agua y snacks energéticos. En rutas largas,
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
            &copy; {new Date().getFullYear()} Alex Murillo — Ciclista recreativo &amp; Consultor de Omnicanalidad
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
