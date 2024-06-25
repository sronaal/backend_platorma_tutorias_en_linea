import path from "path";
import env from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // esta linea es para obtener la ruta del archivo actual
const __dirname = path.dirname(__filename); // esta linea es para obtener la ruta del directorio actual

env.configDotenv({
  path: path.resolve(__dirname, ".env")
});

console.log(__dirname);

export default {
  port: 8080,
  configuraciones_server: {
    ruta: "/api/v1",
    secret_key_dev: "DFA2z7j29k0X6HbH7b4TyBfc4FlFDsDd09GYP2VvuRE800m3Zw",
  },

  database: {
    host: process.env.ipDB,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
  },
};
