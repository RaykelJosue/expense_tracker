import { loadExpenses, saveExpenses } from '../utils.js';
import chalk from 'chalk';

export default function setRecurrentCommand(program, dataFilePath) {
  program
    .command('set-recurrent')
    .description('Establecer un gasto recurrente')
    .requiredOption('--id <id>', 'ID del gasto recurrente')
    .requiredOption('--interval <interval>', 'Intervalo en meses para el gasto recurrente')
    .action((options) => {
      const expenses = loadExpenses();
      const expense = expenses.find((exp) => exp.id === parseInt(options.id, 10));

      if (!expense) {
        console.log(chalk.red('No se encontró el gasto con ese ID.'));
        return;
      }

      const interval = parseInt(options.interval, 10);
      expense.recurrent = true;
      expense.interval = interval;

      saveExpenses(expenses);

      const intervalText = interval === 1 ? 'mes' : 'meses';
      console.log(chalk.green(`El gasto con ID ${options.id} ahora es recurrente cada ${interval} ${intervalText}.`));
    });
}
