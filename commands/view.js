import { loadExpenses, formatDate, formatCurrency } from '../utils.js';
import chalk from 'chalk';

export default function viewCommand(program, dataFilePath) {
  program
    .command('view')
    .description('Ver un gasto por su ID')
    .requiredOption('--id <id>', 'ID del gasto a ver')
    .action((options) => {
      const expenses = loadExpenses();
      const expense = expenses.find((exp) => exp.id === parseInt(options.id, 10));

      if (!expense) {
        console.log(chalk.red('No se encontró el gasto con ese ID.'));
      } else {
        console.log(chalk.blue(`Detalles del Gasto con ID ${options.id}:`));
        console.log(chalk.cyan(`Descripción: ${expense.description}`));
        console.log(chalk.cyan(`Monto: ${formatCurrency(expense.amount)}`));
        console.log(chalk.cyan(`Categoría: ${expense.category}`));
        console.log(chalk.cyan(`Recurrente: ${expense.recurrent ? 'Sí' : 'No'}`));
        console.log(chalk.cyan(`Fecha: ${formatDate(expense.date)}`));
      }
    });
}
