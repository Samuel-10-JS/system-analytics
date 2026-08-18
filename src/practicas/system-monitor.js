const os = require('os');
const chalk = require('chalk');

let monitorIntervalo = null;

function iniciarMonitor() {
  if (monitorIntervalo) {
    console.log(chalk.yellow('\n[!] El monitor ya se está ejecutando.'));
    return;
  }

  console.log(chalk.cyan.bold('\n=== MONITOREO ACTIVO (Presiona Ctrl+C para salir por completo) ==='));
  
  monitorIntervalo = setInterval(() => {
    const memoriaLibreGB = (os.freemem() / (1024 ** 3)).toFixed(2);
    const memoriaTotalGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
    const tiempoActivoHoras = (os.uptime() / 3600).toFixed(2);

    console.log(chalk.blue(`\n[${new Date().toLocaleTimeString()}] --- Estado del OS ---`));
    console.log(`Sistema Operativo: ${os.type()} (${os.arch()})`);
    console.log(`Memoria RAM: ${memoriaLibreGB} GB libres de ${memoriaTotalGB} GB totales`);
    console.log(`Tiempo activo del equipo: ${tiempoActivoHoras} horas`);
    console.log(chalk.dim('Escribe "detener" para pausar el monitor y volver a los comandos.'));
  }, 3000);
}

function detenerMonitor() {
  if (monitorIntervalo) {
    clearInterval(monitorIntervalo);
    monitorIntervalo = null;
    console.log(chalk.green('\n[✔] Monitor del sistema detenido de forma segura.'));
  } else {
    console.log(chalk.yellow('\n[!] El monitor no estaba activo.'));
  }
}

module.exports = { iniciarMonitor, detenerMonitor };
