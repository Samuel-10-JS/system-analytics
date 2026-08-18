const chalk = require('chalk');
const { ejecutarRegistroSistema } = require('./registro-sistema');
const { iniciarMonitor, detenerMonitor } = require('./system-monitor');

function iniciarCLI() {
  process.stdin.setEncoding('utf-8');

  process.stdout.write(chalk.magenta.bold('\n=========================================\n'));
  process.stdout.write(chalk.magenta.bold('      SISTEMA CLI - SYSTEM ANALYTICS     \n'));
  process.stdout.write(chalk.magenta.bold('=========================================\n'));
  mostrarMenu();

  process.stdin.on('data', (data) => {
    const comando = data.trim().toLowerCase();

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
        ejecutarRegistroSistema();
        mostrarMenu();
        break;

      case 'monitor':
        iniciarMonitor();
        break;

      case 'detener':
        detenerMonitor();
        mostrarMenu();
        break;

      case 'salir':
        process.stdout.write(chalk.red.bold('\n[CLI] Saliendo del programa... ¡Hasta luego!\n\n'));
        process.exit(0);
        break;

      default:
        process.stdout.write(chalk.red(`\n[Error] Comando "${comando}" no reconocido.\n`));
        mostrarMenu();
        break;
    }
  });
}

function mostrarMenu() {
  process.stdout.write(`\nEscribe un comando del menú:\n`);
  process.stdout.write(` > ${chalk.yellow('hola')}        : Recibe un saludo.\n`);
  process.stdout.write(` > ${chalk.yellow('tiempo')}      : Muestra la hora local.\n`);
  process.stdout.write(` > ${chalk.yellow('practica1')}   : Corre logs, tablas y tiempos (Práctica 1).\n`);
  process.stdout.write(` > ${chalk.yellow('monitor')}     : Activa monitor en vivo cada 3s (Práctica 3).\n`);
  process.stdout.write(` > ${chalk.yellow('detener')}     : Pausa el monitor activo.\n`);
  process.stdout.write(` > ${chalk.yellow('salir')}       : Cierra la herramienta.\n\n`);
  process.stdout.write(chalk.cyan('Ingresa un comando: '));
}

module.exports = { iniciarCLI };
