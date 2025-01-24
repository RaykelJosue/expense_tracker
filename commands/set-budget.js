import { loadExpenses, formatCurrency } from '../utils.js';
import chalk from 'chalk';

export default function setBudgetCommand(program, dataFilePath) {
  program
    .command('set-budget')
    .description('Establecer un presupuesto mensual')
    .requiredOption('--amount <amount>', 'Monto del presupuesto mensual')
    .action((options) => {
      const budget = parseFloat(options.amount);
      if (isNaN(budget) || budget <= 0) {
        console.log(chalk.red('El monto del presupuesto debe ser un número válido mayor que 0.'));
        return;
      }

      const expenses = loadExpenses();
      const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
      const remaining = budget - total;

      console.log(chalk.green(`Presupuesto mensual: ${formatCurrency(budget)}`));
      console.log(chalk.green(`Gastos totales: ${formatCurrency(total)}`));
      console.log(chalk.green(`Presupuesto restante: ${formatCurrency(remaining)}`));
    });
}
