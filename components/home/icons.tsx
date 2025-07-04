// Importamos los tipos y los componentes de icono que usaremos.
// IconType es el tipo base que describe las props de cualquier icono de react-icons.
import { IconType } from "react-icons";
// si -> Simple Icons (ideal para logos de marcas), fa -> Font Awesome (iconos generales).
import { SiReact, SiTailwindcss, SiHeroku } from "react-icons/si";
import { FaListAlt } from "react-icons/fa";

// Definimos las props que nuestro componente MyIcon aceptará.
export type IconProps = IconType & {
  // Usamos una intersección (&) para combinar:
  // 1. Todas las props estándar de un icono de react-icons (size, color, title, etc.).
  name: string; // 2. Nuestra prop 'name', que es obligatoria para saber qué icono mostrar.
  className?: string; // 3. Nuestra prop 'className', que es opcional para estilos personalizados.
};

/**
 * Este es un componente "Selector" o "Resolvedor".
 * Recibe un 'name' y devuelve el componente de icono correspondiente.
 * Es una capa de abstracción para mantener nuestro código limpio.
 */
export const MyIcon = ({ name, className, ...props }: IconProps) => {
  // Desestructuramos las props: separamos 'name' y 'className' del resto ('...props').
  // '...props' agrupa todas las demás props (como size, color, etc.) para poder pasarlas después.

  // Usamos un 'switch' para decidir qué icono renderizar basado en el 'name' recibido.
  switch (name) {
    case "HeroUI":
      // Si 'name' es "HeroUI", devolvemos el icono SiHeroku.
      // Le pasamos la className y el resto de las props (...props) al icono final.
      return <SiHeroku className={className} {...props} />;

    case "Tailwind":
      return <SiTailwindcss className={className} {...props} />;

    case "CheatSheet":
      return <FaListAlt className={className} {...props} />;

    case "React":
      return <SiReact className={className} {...props} />;

    default:
      return null;
  }
};
