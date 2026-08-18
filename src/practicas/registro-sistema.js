const chalk = require('chalk');

function ejecutarRegistroSistema() {
  console.log(chalk.cyan.bold('\n=== INICIANDO PRÁCTICA 1: REGISTRO Y DEPURACIÓN ==='));
  
  console.time('Tiempo total de simulación');

  console.log(chalk.green('\n[INFO] Simulando accesos de usuarios...'));
  console.count('Acceso de Carlos');
  console.count('Acceso de Ana');
  console.count('Acceso de Carlos');

  console.warn(chalk.yellow('\n[ADVERTENCIA] El uso de memoria superó el límite recomendado.'));

  console.error(chalk.red('[ERROR] Intento fallido de conexión a la API externa.'));

  console.log(chalk.magenta('\n[TABLA] Historial de eventos recientes:'));
  const eventos = [
    { id: 1, evento: 'Login exitoso', usuario: 'Carlos', ip: '192.168.1.5' },
    { id: 2, evento: 'Intento de hackeo', usuario: 'Anon', ip: '10.0.0.12' },
    { id: 3, evento: 'Actualización perfil', usuario: 'Ana', ip: '192.168.1.8' }
  ];
  console.table(eventos);

  console.timeEnd('Tiempo total de simulación');
  console.log(chalk.cyan.bold('=== FIN DE LA PRÁCTICA 1 ===\n'));
}

module.exports = { ejecutarRegistroSistema };
