import { loadExpenses, formatDate, formatCurrency } from '../utils.js';
import chalk from 'chalk';

export default function summaryCommand(program, dataFilePath) {
  program
    .command('summary')
    .description('Mostrar un resumen de los gastos totales')
    .action(() => {
      const expenses = loadExpenses();
      const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
      console.log(chalk.green('Resumen de Gastos:'));
      console.log(chalk.green('------------------'));
      expenses.forEach(expense => {
        console.log(chalk.green(`${expense.description}: ${formatCurrency(expense.amount)} (Fecha: ${expense.date})`));
      });
      console.log(chalk.green('------------------'));
      console.log(chalk.green(`Gastos totales: ${formatCurrency(total)}`));
    });
}
