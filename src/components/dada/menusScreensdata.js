import HomeScreen from "../pages/inicio-registro/home";
import InicioSesion from "./../pages/inicio-registro/inicioSecion";
import OlvidoContrasena from "../pages/inicio-registro/OlvidoContraseña";
import Registro from "../pages/inicio-registro/registro";
import Gastos from "../pages/gastos/gastos";
import Ingresos from "../pages/ingresos/ingresos";
import Reportes from "../pages/reports/reportes";
import Perfil from "../pages/Usuario/Perfil";


const screens = [
  { name: "Bienvenido", component: InicioSesion },
  { name: "Home", component: HomeScreen },
  { name: "Recuperar Contraseña", component: OlvidoContrasena },
  { name: "Registrate", component: Registro },
  { name: "Gastos", component: Gastos },
  { name: "Ingresos", component: Ingresos },
  { name: "Reportes", component: Reportes },
  { name: "Perfil", component: Perfil },
];
const screenInicio = [
  { name: "Bienvenido", component: InicioSesion },
  { name: "Recuperar Contraseña", component: OlvidoContrasena },
  { name: "Registrate", component: Registro },
];
const screenMedio = [
  { name: "Gastos", component: Gastos },
  { name: "Ingresos", component: Ingresos },
  { name: "Reportes", component: Reportes },
  { name: "Perfil", component: Perfil },
];
export { screens, screenInicio, screenMedio };
