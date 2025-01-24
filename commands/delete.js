import { loadExpenses, saveExpenses } from '../utils.js';
import chalk from 'chalk';

export default function deleteCommand(program, dataFilePath) {
  program
    .command('delete')
    .description('Eliminar un gasto por su ID')
    .requiredOption('--id <id>', 'ID del gasto a eliminar')
    .action((options) => {
      const expenses = loadExpenses();
      const updatedExpenses = expenses.filter((expense) => expense.id !== parseInt(options.id, 10));

      if (updatedExpenses.length === expenses.length) {
        console.log(chalk.red('No se encontró ningún gasto con ese ID.'));
      } else {
        saveExpenses(updatedExpenses);
        console.log(chalk.green(`Gasto con ID ${options.id} eliminado exitosamente.`));
      }
    });
}
