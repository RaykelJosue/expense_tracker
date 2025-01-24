// Dependencias principales
import { Command } from 'commander'; // Para manejar los comandos CLI
import chalk from 'chalk'; // Para manejar colores en la consola
import path from 'path'; // Para trabajar con rutas de archivos
import { fileURLToPath } from 'url'; // Para convertir URL a rutas
import * as fs from 'fs-extra'; // Para manejar archivos y directorios

// Importar utilidades y comandos
import { loadExpenses, saveExpenses, formatDate, formatCurrency } from './utils.js';
import addCommand from './commands/add.js';
import listCommand from './commands/list.js';
import deleteCommand from './commands/delete.js';
import filterCommand from './commands/filter.js';
import exportCommand from './commands/export.js';
import summaryCommand from './commands/summary.js';
import setBudgetCommand from './commands/set-budget.js';
import setRecurrentCommand from './commands/set-recurrent.js';
import viewCommand from './commands/view.js';

// Configuración para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear una instancia de Commander para manejar los comandos
const program = new Command();

// Ruta para almacenar los datos (puedes usar JSON como base)
const dataFilePath = path.join(__dirname, 'expenses.json');
fs.ensureFileSync(dataFilePath); // Asegurarse de que el archivo existe

// Registrar los comandos desde los archivos separados
addCommand(program, dataFilePath);
listCommand(program, dataFilePath);
deleteCommand(program, dataFilePath);
filterCommand(program, dataFilePath);
exportCommand(program, dataFilePath);
summaryCommand(program, dataFilePath);
setBudgetCommand(program, dataFilePath);
setRecurrentCommand(program, dataFilePath);
viewCommand(program, dataFilePath);

// Procesar los argumentos de línea de comandos
program.parse(process.argv);
