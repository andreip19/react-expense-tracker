# 💰 React Expense Tracker

O aplicație interactivă pentru gestionarea cheltuielilor și veniturilor, dezvoltată cu **React** și **Vite**. Proiectul demonstrează utilizarea conceptelor esențiale de Frontend modern, inclusiv State Management, Data Persistence și vizualizarea dinamică a datelor.

---

## ✨ Funcționalități Principale (Key Features)

* **Adăugare & Ștergere Rapidă:** Utilizatorii pot adăuga cu ușurință noi tranzacții, specificând o descriere și o sumă (pozitivă pentru venituri, negativă pentru cheltuieli).
* **Calcul Dinamic (Live Balance):** Balanța totală, precum și totalul veniturilor și cheltuielilor, se actualizează instantaneu la fiecare modificare a listei.
* **Vizualizare Grafică (Doughnut Chart):** Integrare cu `chart.js` pentru a afișa o reprezentare vizuală, ușor de înțeles, a proporției dintre venituri și cheltuieli.
* **Persistența Datelor (LocalStorage):** Toate tranzacțiile sunt salvate automat în `localStorage`-ul browserului. Datele supraviețuiesc chiar și după închiderea sau reîncărcarea tab-ului.
* **Filtrare Istoric:** Un meniu drop-down permite utilizatorului să filtreze tranzacțiile afișate ("Toate", "Doar Venituri", "Doar Cheltuieli").

---

## 🛠️ Tehnologii Folosite (Tech Stack)

* **Framework:** React.js (generat cu Vite pentru performanță optimă)
* **Gestiunea Stării:** React Hooks (`useState`, `useEffect`)
* **Grafice:** `react-chartjs-2` & `chart.js`
* **Stocare:** Browser LocalStorage
* **Stilizare:** CSS pur, cu un design curat și responsiv.

---

## 📸 Previziualizare (Screenshot)
*(Înlocuiește textul acesta cu o imagine reală a aplicației tale, la fel cum ai făcut la Movie Recommender)*
---

## 🚀 Cum să rulezi proiectul local

Dacă dorești să testezi aplicația pe calculatorul tău, urmează acești pași:

1. Clonează repository-ul:
   ```bash
   git clone [https://github.com/andreip19/react-expense-tracker.git](https://github.com/andreip19/react-expense-tracker.git)
Navighează în folderul proiectului:


cd react-expense-tracker
Instalează dependențele necesare:

npm install
Pornește serverul local de dezvoltare:


npm run dev
Deschide browserul la adresa http://localhost:5173/.
