import { Usuario } from "../app/models/usuario.models.js";
import { Tutor } from "../app/models/tutor.model.js";
import { Materia } from "../app/models/materia.model.js";
import { TutorMateria } from "../app/models/tutor.materia.model.js";
import { Rol } from "../app/models/rol.model.js";

export const initData = async () => {
  try {
    // Crear usuarios por defecto

    const roles = await Rol.bulkCreate([
      { id_rol: "Administrador" },
      { id_rol: "Tutor" },
      { id_rol: "Estudiantes" },
    ]);

    const usuarios = await Usuario.bulkCreate([
      {
        nombre: "Ronal",
        apellido: "Sánchez",
        email: "estudiante1@gmail.com",
        password: "$2a$12$EKAgd/iefidUk.0dfF5g.e.vfQcpdGgnTisa1PH5cW/3tMBg1Gg9S",
        id_rol: 3,
        telefono: "3202910719",
        preferencias: {
          tipo_modalidad: "Virtual",
          intereses: ["Nodejs", "Javascript"],
        },
      },
      {
        nombre: "Vannesa",
        apellido: "Perez",
        email: "estudiante3@gmail.com",
        password: "$2a$12$EKAgd/iefidUk.0dfF5g.e.vfQcpdGgnTisa1PH5cW/3tMBg1Gg9S",
        id_rol: 3,
        telefono: "1234567",
        preferencias: {
          tipo_modalidad: "Presencial",
          intereses: ["Frances", "Ingles"],
        },
      },
      {
        nombre: "Dilan",
        apellido: "Perez",
        email: "estudiante4@gmail.com",
        password: "$2a$12$EKAgd/iefidUk.0dfF5g.e.vfQcpdGgnTisa1PH5cW/3tMBg1Gg9S",
        id_rol: 3,
        telefono: "1234567",
        preferencias: {
          tipo_modalidad: "Virtual",
          intereses: ["Matematicas", "Ingles"],
        },
      },
      {
        nombre: "Luisa",
        apellido: "Perez",
        email: "tutor@gmail.com",
        password: "$2a$12$EKAgd/iefidUk.0dfF5g.e.vfQcpdGgnTisa1PH5cW/3tMBg1Gg9S",
        id_rol: 2,
        telefono: "1234567",
        preferencias: {
          tipo_modalidad: "Presencial",
          intereses: ["Frances", "Ingles"],
        },
      },
      {
        nombre: "Jorge",
        apellido: "Perez",
        email: "tutor1@gmail.com",
        password: "$2a$12$EKAgd/iefidUk.0dfF5g.e.vfQcpdGgnTisa1PH5cW/3tMBg1Gg9S",
        id_rol: 2,
        telefono: "1234567",
        preferencias: {
          tipo_modalidad: "Presencial",
          intereses: ["Frances", "Ingles"],
        },
      },

      {
        nombre: "Jorge",
        apellido: "Perez",
        email: "tutor1@gmail.com",
        password: "$2a$12$EKAgd/iefidUk.0dfF5g.e.vfQcpdGgnTisa1PH5cW/3tMBg1Gg9S",
        id_rol: 2,
        telefono: "1234567",
        preferencias: {
          tipo_modalidad: "Presencial",
          intereses: ["Frances", "Ingles"],
        },
      },
    ]);

    // Crear tutores por defecto
    const tutores = await Tutor.bulkCreate([
      { id_usuario: usuarios[4].id, ubicacion: "Bogota" },
      { id_usuario: usuarios[3].id, ubicacion: "Medellin" },
    ]);

    // Crear materias por defecto
    const materias = await Materia.bulkCreate([
      {
        nombre: "Algebra",
        duracion: 3,
        unidadDuracion: "Mes",
        descripcion: "Clase de Matematicas para nivelacion",
      },
      {
        nombre: "Fisica Basica",
        duracion: 4,
        unidadDuracion: "Mes",
        descripcion: "Clase introductoria a la Fisica",
      },
      {
        nombre: "Quimica",
        duracion: 5,
        unidadDuracion: "Mes",
        descripcion: "Clase de Quimica para principiantes",
      },
      {
        nombre: "Historia",
        duracion: 6,
        unidadDuracion: "Mes",
        descripcion: "Clase de Historia Universal",
      },
      {
        nombre: "Literatura",
        duracion: 3,
        unidadDuracion: "Mes",
        descripcion: "Clase de Literatura Clásica",
      },
      {
        nombre: "Biologia",
        duracion: 4,
        unidadDuracion: "Mes",
        descripcion: "Clase de Biologia General",
      },
      {
        nombre: "Geografia",
        duracion: 2,
        unidadDuracion: "Mes",
        descripcion: "Clase de Geografia Mundial",
      },
      {
        nombre: "Programacion",
        duracion: 8,
        unidadDuracion: "Mes",
        descripcion: "Clase de Programacion en Python",
      },
      {
        nombre: "Calculo",
        duracion: 7,
        unidadDuracion: "Mes",
        descripcion: "Clase de Calculo Diferencial e Integral",
      },
      {
        nombre: "Economia",
        duracion: 5,
        unidadDuracion: "Mes",
        descripcion: "Clase de Economia Básica",
      },
      {
        nombre: "Filosofia",
        duracion: 3,
        unidadDuracion: "Mes",
        descripcion: "Clase de Filosofia Moderna",
      },
      {
        nombre: "Ingles",
        duracion: 6,
        unidadDuracion: "Mes",
        descripcion: "Clase de Ingles Intermedio",
      },
      {
        nombre: "Quimica Organica",
        duracion: 4,
        unidadDuracion: "Mes",
        descripcion: "Clase de Quimica Organica",
      },
      {
        nombre: "Algebra Lineal",
        duracion: 5,
        unidadDuracion: "Mes",
        descripcion: "Clase de Algebra Lineal Avanzada",
      },
      {
        nombre: "Geometria",
        duracion: 3,
        unidadDuracion: "Mes",
        descripcion: "Clase de Geometria Euclidiana",
      },
      {
        nombre: "Estadistica",
        duracion: 7,
        unidadDuracion: "Mes",
        descripcion: "Clase de Estadistica Aplicada",
      },
      {
        nombre: "Fisica Cuantica",
        duracion: 9,
        unidadDuracion: "Mes",
        descripcion: "Clase de Fisica Cuantica",
      },
      {
        nombre: "Inteligencia Artificial",
        duracion: 10,
        unidadDuracion: "Mes",
        descripcion: "Clase de IA y Aprendizaje Automático",
      },
      {
        nombre: "Redes",
        duracion: 6,
        unidadDuracion: "Mes",
        descripcion: "Clase de Redes y Comunicaciones",
      },
      {
        nombre: "Bases de Datos",
        duracion: 4,
        unidadDuracion: "Mes",
        descripcion: "Clase de Bases de Datos Relacionales",
      },
    ]);

    // Crear relaciones Tutor-Materia por defecto
    await TutorMateria.bulkCreate([
      { tutorId: tutores[0].id, materiaId: materias[0].id },
      { tutorId: tutores[1].id, materiaId: materias[1].id },
    ]);

    console.log("Datos por defecto insertados correctamente");
  } catch (error) {
    console.error("Error al insertar datos por defecto:", error);
  }
};
