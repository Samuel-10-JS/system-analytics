const os = require("os");
const chalk = require("chalk");

// Variable global para controlar el estado del temporizador (bucle de monitoreo)
let monitorIntervalo = null;

/**
 * MÓDULO DE INICIO DEL MONITOR
 
 * Activa un bucle continuo que consulta las métricas de hardware de la máquina
 * cada 3 segundos utilizando el módulo 'os' y las imprime formateadas con 'chalk'.
 */
function iniciarMonitor() {
  // Bloque de seguridad: Evita duplicar el temporizador si ya se está ejecutando
  if (monitorIntervalo) {
    console.log(chalk.yellow("\n[!] El monitor ya se está ejecutando."));
    return;
  }

  console.log(
    chalk.cyan.bold(
      "\n=== MONITOREO ACTIVO (Presiona Ctrl+C para salir por completo) ===",
    ),
  );

  // Bloque del Temporizador: Escanea e imprime las estadísticas del sistema operativo
  monitorIntervalo = setInterval(() => {
    console.log(chalk.blue.bold("🖥️  Monitor de Sistema"));
    console.log(chalk.blue("========================"));

    // Consultas de Sistema Operativo y Hardware (Plataforma, CPU y Núcleos)
    console.log(`${chalk.cyan("Sistema:")} ${os.platform()} (${os.arch()})`);
    console.log(`${chalk.cyan("CPU:")} ${os.cpus()[0].model}`);
    console.log(`${chalk.cyan("Cores:")} ${os.cpus().length}`);

    // Consultas de Memoria RAM (Conversión automática de Bytes a Gigabytes)
    console.log(
      `${chalk.cyan("Memoria Libre:")} ${(os.freemem() / 1024 ** 3).toFixed(2)} GB`,
    );
    console.log(
      `${chalk.cyan("Memoria Total:")} ${(os.totalmem() / 1024 ** 3).toFixed(2)} GB`,
    );

    // Métricas de Tiempo de Actividad (Minutos) y Datos del Usuario de Sesión
    console.log(
      `${chalk.cyan("Uptime:")} ${(os.uptime() / 60).toFixed(2)} minutos`,
    );
    console.log(
      `${chalk.cyan("Usuario:")} ${chalk.green(os.userInfo().username)}`,
    );

    console.log(chalk.blue("========================\n"));
    console.log(
      chalk.dim(
        'Escribe "detener" para pausar el monitor y volver a los comandos.',
      ),
    );
  }, 3000);
}

/**
 * MÓDULO DE DETENCIÓN DEL MONITOR
 *
 * Apaga el temporizador activo en segundo plano usando su identificador único
 * y resetea las variables de control para liberar memoria del sistema.
 */
function detenerMonitor() {
  if (monitorIntervalo) {
    clearInterval(monitorIntervalo);
    monitorIntervalo = null;
    console.log(
      chalk.green("\n[✔] Monitor del sistema detenido de forma segura."),
    );
  } else {
    console.log(chalk.yellow("\n[!] El monitor no estaba activo."));
  }
}

// Exportación modular bajo el estándar CommonJS
module.exports = { iniciarMonitor, detenerMonitor };
