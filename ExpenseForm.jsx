import { useState } from 'react';

function ExpenseForm({ onAdd }) {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text || !amount) {
            alert('Te rog adaugă o descriere și o sumă!');
            return;
        }

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: parseFloat(amount)
        };

        onAdd(newTransaction);
        setText('');
        setAmount('');
    };

    return (
        <form onSubmit={onSubmit} style={{ marginTop: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Ex: Salariu sau Cumpărături"
                    style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Sumă (ex: -150 sau 3000)"
                    style={{ width: '100%', padding: '8px' }}
                />
            </div>
            <button
                type="submit"
                style={{ width: '100%', padding: '10px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
                Adaugă Tranzacție
            </button>
        </form>
    );
}

export default ExpenseForm;