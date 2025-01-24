import { loadExpenses, formatDate, formatCurrency } from '../utils.js';
import chalk from 'chalk';

export default function filterCommand(program, dataFilePath) {
  program
    .command('filter')
    .description('Filtrar gastos por rango de fechas')
    .requiredOption('--from <fromDate>', 'Fecha de inicio (YYYY-MM-DD)')
    .requiredOption('--to <toDate>', 'Fecha de fin (YYYY-MM-DD)')
    .action((options) => {
      const expenses = loadExpenses();
      const fromDate = new Date(options.from);
      const toDate = new Date(options.to);

      if (isNaN(fromDate) || isNaN(toDate)) {
        console.log(chalk.red('Las fechas ingresadas no son válidas.'));
        return;
      }

      const filteredExpenses = expenses.filter((expense) => {
        const expenseDate = new Date(expense.date);
        return expenseDate >= fromDate && expenseDate <= toDate;
      });

      if (filteredExpenses.length === 0) {
        console.log(chalk.yellow('No se encontraron gastos en el rango de fechas especificado.'));
      } else {
        console.log(chalk.blue('Gastos en el rango de fechas especificado:'));
        filteredExpenses.forEach((expense) => {
          console.log(
            chalk.cyan(
              `ID: ${expense.id} | Fecha: ${formatDate(expense.date)} | Descripción: ${expense.description} | Monto: ${formatCurrency(expense.amount)}`
            )
          );
        });
      }
    });
}
