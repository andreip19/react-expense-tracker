import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ transactions }) {
    // Calculam totalul veniturilor si cheltuielilor pozitive
    const income = transactions.filter(t => t.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
    const expense = Math.abs(transactions.filter(t => t.amount < 0).reduce((acc, curr) => acc + curr.amount, 0));

    const data = {
        labels: ['Venituri', 'Cheltuieli'],
        datasets: [
            {
                data: [income, expense],
                backgroundColor: ['#2ecc71', '#e74c3c'],
                hoverBackgroundColor: ['#27ae60', '#c0392b'],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        cutout: '70%',
        plugins: {
            legend: {
                display: false, // Ascundem legenda implicita ca sa o desenam noi frumos
            }
        }
    };

    // Daca nu avem deloc date, nu afisam graficul gol
    if (income === 0 && expense === 0) return null;

    return (
        <div style={{ width: '200px', margin: '0 auto 20px' }}>
            <Doughnut data={data} options={options} />
        </div>
    );
}

export default ExpenseChart;