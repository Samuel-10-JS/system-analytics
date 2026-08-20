// Importación de la librería 'chalk' para aplicar estilos y colores al texto en la consola
const chalk = require('chalk');

/*
  Simula y ejecuta un sistema de registro de eventos y depuración avanzada en la consola.
  Utiliza diferentes métodos del objeto global 'console' y estilos visuales con 'chalk'.
 */
function ejecutarRegistroSistema() {

  console.log(chalk.cyan.bold('\n=== INICIANDO PRÁCTICA 1: REGISTRO Y DEPURACIÓN ==='));
  

  console.time('Tiempo total de simulación');

  // Imprime un mensaje informativo estilizado en color verde
  console.log(chalk.green('\n[INFO] Simulando accesos de usuarios...'));
  
  // console.count: Registra y muestra cuántas veces se ha ejecutado esta etiqueta específica en el programa
  console.count('Acceso de Carlos'); 
  console.count('Acceso de Ana');    
  console.count('Acceso de Carlos');


  console.warn(chalk.yellow('\n[ADVERTENCIA] El uso de memoria superó el límite recomendado.'));


  console.error(chalk.red('[ERROR] Intento fallido de conexión a la API externa.'));


  console.log(chalk.magenta('\n[TABLA] Historial de eventos recientes:'));
  
  // Arreglo de objetos que simula los datos que se van a estructurar en la consola
  const eventos = [
    { id: 1, evento: 'Login exitoso', usuario: 'Carlos', ip: '192.168.1.5' },
    { id: 2, evento: 'Intento de hackeo', usuario: 'Anon', ip: '10.0.0.12' },
    { id: 3, evento: 'Actualización perfil', usuario: 'Ana', ip: '192.168.1.8' }
  ];
  
  // console.table: Toma el arreglo de objetos y lo dibuja automáticamente como una tabla con filas y columnas
  console.table(eventos);

  console.timeEnd('Tiempo total de simulación');
  

  console.log(chalk.cyan.bold('=== FIN DE LA PRÁCTICA 1 ===\n'));
}

// Exporta la función bajo la sintaxis CommonJS para que pueda ser requerida (importada) en otros archivos del proyecto
module.exports = { ejecutarRegistroSistema };
