//      IMPORTACIÓN DE MÓDULOS Y PRÁCTICAS
const chalk = require('chalk');
const { ejecutarRegistroSistema } = require('./registro-sistema');
const { iniciarMonitor, detenerMonitor } = require('./system-monitor');

/*
  CONFIGURACIÓN E INICIALIZACIÓN DE LA CLI
  
  Prepara los canales de comunicación estándar (stdin/stdout),
 */
function iniciarCLI() {
  // Configura la entrada para procesar caracteres legibles (letras/números humanos)
  process.stdin.setEncoding('utf-8');

  // Bloque de impresión del Banner de bienvenida inicial
  process.stdout.write(chalk.magenta.bold('\n=========================================\n'));
  process.stdout.write(chalk.magenta.bold('      SISTEMA CLI - SYSTEM ANALYTICS     \n'));
  process.stdout.write(chalk.magenta.bold('=========================================\n'));
  mostrarMenu();

  // Bloque del Lector de Eventos: Escucha activamente lo que el usuario escribe y da Enter
  process.stdin.on('data', (data) => {
    // Limpia espacios en blanco, saltos de línea y convierte el texto a minúsculas
    const comando = data.trim().toLowerCase();

    // Evaluador de opciones
    switch (comando) {
      case 'hola':
        process.stdout.write(chalk.green('\n[CLI] ¡Hola! Bienvenido a las herramientas analíticas del sistema.\n'));
        mostrarMenu();
        break;

      case 'tiempo':
        process.stdout.write(chalk.blue(`\n[CLI] Fecha y hora del servidor: ${new Date().toString()}\n`));
        mostrarMenu();
        break;

      case 'practica1':
        ejecutarRegistroSistema(); // Dispara la práctica 1 de logs avanzados y tablas
        mostrarMenu();
        break;

      case 'monitor':
        iniciarMonitor(); // Enciende el temporizador del monitor en tiempo real (cada 3s)
        break;

      case 'detener':
        detenerMonitor(); // Apaga el temporizador del monitor de sistema operativo
        mostrarMenu();
        break;

      case 'salir':
        process.stdout.write(chalk.red.bold('\n[CLI] Saliendo del programa... ¡Hasta luego!\n\n'));
        process.exit(0); // Cierra formalmente el programa
        break;

      default:
        // Bloque de manejo de errores si el comando escrito no existe
        process.stdout.write(chalk.red(`\n[Error] Comando "${comando}" no reconocido.\n`));
        mostrarMenu();
        break;
    }
  });
}

/**
 * INTERFAZ VISUAL DEL MENÚ
  
  Dibuja de manera exacta en la terminal la lista de instrucciones
  y comandos disponibles utilizando 'process.stdout.write' para un control estricto.
 */
function mostrarMenu() {
  process.stdout.write(`\nEscribe un comando del menú:\n`);
  process.stdout.write(` > ${chalk.yellow('hola')}        : Recibe un saludo.\n`);
  process.stdout.write(` > ${chalk.yellow('tiempo')}      : Muestra la hora local.\n`);
  process.stdout.write(` > ${chalk.yellow('practica1')}   : Corre logs, tablas y tiempos.\n`);
  process.stdout.write(` > ${chalk.yellow('monitor')}     : Activa monitor en vivo cada 3s.\n`);
  process.stdout.write(` > ${chalk.yellow('detener')}     : Pausa el monitor activo.\n`);
  process.stdout.write(` > ${chalk.yellow('salir')}       : Cierra la herramienta.\n\n`);
  process.stdout.write(chalk.cyan('Ingresa un comando: '));
}

// Exportación del punto de inicio de la CLI para el archivo app.js
module.exports = { iniciarCLI };
