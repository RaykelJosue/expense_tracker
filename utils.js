import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, 'expenses.json');

// Asegurarse de que el archivo existe
fs.ensureFileSync(dataFilePath);

export function loadExpenses() {
  try {
    if (fs.existsSync(dataFilePath)) {
      return fs.readJSONSync(dataFilePath);
    } else {
      return [];
    }
  } catch (error) {
    console.error(chalk.red('Error al cargar los datos:'), error.message);
    return [];
  }
}

export function saveExpenses(expenses) {
  try {
    fs.writeJSONSync(dataFilePath, expenses, { spaces: 2 });
    console.log(chalk.green('Datos guardados correctamente.'));
  } catch (error) {
    console.error(chalk.red('Error al guardar los datos:'), error.message);
  }
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function formatCurrency(amount) {
  return amount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
}
