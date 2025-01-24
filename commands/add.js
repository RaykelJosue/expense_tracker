import { loadExpenses, saveExpenses, formatCurrency } from '../utils.js';
import chalk from 'chalk';

export default function addCommand(program, dataFilePath) {
  program
    .command('add')
    .description('Agregar un nuevo gasto')
    .requiredOption('--description <desc>', 'Descripción del gasto')
    .requiredOption('--amount <amount>', 'Monto del gasto')
    .option('--category <category>', 'Categoría del gasto')
    .option('--recurrent', 'Indica si el gasto es recurrente')
    .action((options) => {
      const amount = parseFloat(options.amount);
      if (isNaN(amount) || amount <= 0) {
        console.log(chalk.red('El monto debe ser un número válido mayor que 0.'));
        return;
      }

      const expenses = loadExpenses();
      const newExpense = {
        id: expenses.length > 0 ? Math.max(...expenses.map((e) => e.id)) + 1 : 1,
        description: options.description,
        amount,
        category: options.category || 'General',
        recurrent: options.recurrent || false,
        date: new Date().toISOString(),
      };
      expenses.push(newExpense);
      saveExpenses(expenses);

      console.log(chalk.green(`${newExpense.description}: ${formatCurrency(newExpense.amount)} (Categoría: ${newExpense.category}, Fecha: ${new Date(newExpense.date).toLocaleString()})`));
    });
}
