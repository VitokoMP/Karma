 
import { useUsuario } from '../context/UserContext';

export const HomeScreen = () => {
  const { usuario } = useUsuario(); // Utiliza el hook para acceder al contexto

  if (usuario) {
    console.log(usuario.nombre);
  } else {
    console.log("No hay usuarios logeados");
  }

  return (
    <div>HomeScreen</div>
  );
};
