import { loadExpenses, formatDate } from '../utils.js';
import fs from 'fs-extra';
import chalk from 'chalk';

export default function exportCommand(program, dataFilePath) {
  program
    .command('export')
    .description('Exportar gastos a un archivo CSV')
    .requiredOption('--file <filePath>', 'Ruta del archivo CSV de salida')
    .action((options) => {
      const expenses = loadExpenses();
      const csvLines = [
        'ID,Descripción,Monto,Categoría,Recurrente,Fecha', // Encabezados
        ...expenses.map((expense) => `${expense.id},"${expense.description}",${expense.amount},"${expense.category}",${expense.recurrent},${formatDate(expense.date)}`),
      ];

      try {
        fs.writeFileSync(options.file, csvLines.join('\n'), 'utf8');
        console.log(chalk.green(`Gastos exportados exitosamente a ${options.file}`));
      } catch (error) {
        console.error(chalk.red('Error al exportar los datos:'), error.message);
      }
    });
}
