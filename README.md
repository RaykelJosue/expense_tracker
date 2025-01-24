# Expense Tracker

Expense Tracker es una aplicación de línea de comandos para gestionar tus finanzas. Permite a los usuarios agregar, eliminar y ver sus gastos, así como obtener un resumen de los mismos.

## Requisitos
- Node.js v22.11.0 o superior
- npm (Node Package Manager)

## Características del proyecto
```bash
- Agregar un gasto con descripción y monto.
- Actualizar un gasto.
- Eliminar un gasto.
- Ver todos los gastos.
- Ver un resumen de todos los gastos.
- Ver un resumen de los gastos de un mes específico (del año actual).
- Filtrar gastos por categoría.
- Establecer un presupuesto mensual y mostrar una advertencia cuando se exceda.
- Exportar gastos a un archivo CSV.
```

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/RaykelJosue/expense_tracker.git
    cd expense-tracker
    ```

2. Instala las dependencias necesarias:
    ```bash
    npm install commander chalk fs-extra
    ```

## Uso

### Agregar un nuevo gasto
```bash
node expense-tracker.js add --description "Almuerzo" --amount 20 --category "Comida"
```

### Listar todos los gastos
```bash
node expense-tracker.js list
```

### Eliminar un gasto por su ID
```bash
node expense-tracker.js delete --id {numberID}
```

### Filtrar gastos por rango de fechas
```bash
node expense-tracker.js filter --from YYYY-MM-DD --to YYYY-MM-DD
```

### Exportar gastos a un archivo CSV
```bash
node expense-tracker.js export --file name_of_the_file.csv
```

### Mostrar un resumen de los gastos totales
```bash
node expense-tracker.js summary
```

### Establecer un presupuesto mensual
```bash
node expense-tracker.js set-budget --amount {number}

Example : node expense-tracker.js set-budget --amount 500
```

### Establecer un gasto recurrente
```bash
node expense-tracker.js set-recurrent --id {idNumber} --interval {MonthNumber}

Example: node expense-tracker.js set-recurrent --id 2 --interval 1
```

### Ver un gasto por su ID
```bash
node expense-tracker.js view --id {idNumber}

Example: node expense-tracker.js view --id 2
```

# Estructura del proyecto:
expense-tracker/
├── commands/
│   ├── add.js
│   ├── delete.js
│   ├── export.js
│   ├── filter.js
│   ├── list.js
│   ├── set-budget.js
│   ├── set-recurrent.js
│   ├── summary.js
│   └── view.js
├── utils.js
├── expenses.json
├── expense-tracker.js


Link del proyecto acorde a lo solicitado: https://roadmap.sh/projects/expense-tracker