import { useState, useEffect } from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseChart from './ExpenseChart'
import './App.css'

function App() {
    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem('transactions')
        if (saved) {
            return JSON.parse(saved)
        }
        return []
    })

    // State pentru filtru: 'all', 'income', sau 'expense'
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions))
    }, [transactions])

    const addTransaction = (transaction) => {
        setTransactions([transaction, ...transactions])
    }

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(t => t.id !== id))
    }

    const balance = transactions.reduce((acc, curr) => acc + curr.amount, 0)
    const income = transactions.filter(t => t.amount > 0).reduce((acc, curr) => acc + curr.amount, 0)
    const expense = transactions.filter(t => t.amount < 0).reduce((acc, curr) => acc + curr.amount, 0)

    // Logica pentru filtrare inainte de afisare
    const filteredTransactions = transactions.filter(t => {
        if (filter === 'income') return t.amount > 0;
        if (filter === 'expense') return t.amount < 0;
        return true; // Daca e 'all', arata-le pe toate
    });

    return (
        <div className="container">
            <h1>Tracker de Cheltuieli</h1>

            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <h2>Balanță: {balance.toFixed(2)} lei</h2>

                <ExpenseChart transactions={transactions} />

                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                    <div>
                        <h4>Venituri</h4>
                        <p style={{ color: '#2ecc71', fontWeight: 'bold' }}>+{income.toFixed(2)} lei</p>
                    </div>
                    <div>
                        <h4>Cheltuieli</h4>
                        <p style={{ color: '#e74c3c', fontWeight: 'bold' }}>{expense.toFixed(2)} lei</p>
                    </div>
                </div>
            </div>

            <ExpenseForm onAdd={addTransaction} />

            <div style={{ marginTop: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Istoric</h3>

                    {/* Dropdown pentru Filtru */}
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
                    >
                        <option value="all">Toate</option>
                        <option value="income">Doar Venituri</option>
                        <option value="expense">Doar Cheltuieli</option>
                    </select>
                </div>

                {filteredTransactions.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#7f8c8d' }}>Nu există tranzacții pentru această categorie.</p>
                ) : (
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {filteredTransactions.map((t) => (
                            <li key={t.id} style={{
                                background: '#fff',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                                margin: '10px 0',
                                padding: '10px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderRight: t.amount < 0 ? '5px solid #e74c3c' : '5px solid #2ecc71'
                            }}>
                                <span style={{ flex: 1 }}>{t.text}</span>
                                <span style={{ marginRight: '15px' }}>{t.amount} lei</span>
                                <button
                                    onClick={() => deleteTransaction(t.id)}
                                    style={{
                                        background: '#e74c3c',
                                        color: 'white',
                                        border: 'none',
                                        padding: '5px 10px',
                                        borderRadius: '3px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    X
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default App