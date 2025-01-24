import { loadExpenses, formatDate, formatCurrency } from '../utils.js';
import chalk from 'chalk';

export default function listCommand(program, dataFilePath) {
  program
    .command('list')
    .description('Mostrar todos los gastos registrados')
    .action(() => {
      const expenses = loadExpenses();
      if (expenses.length === 0) {
        console.log(chalk.yellow('No hay gastos registrados.'));
      } else {
        console.log(chalk.blue('Gastos registrados:'));
        expenses.forEach((expense) => {
          console.log(
            chalk.cyan(
              `ID: ${expense.id} | Fecha: ${formatDate(expense.date)} | Descripción: ${expense.description} | Monto: ${formatCurrency(expense.amount)} | Categoría: ${expense.category}`
            )
          );
        });
      }
    });
}
