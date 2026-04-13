// Initialize Data from LocalStorage or Defaults
let books = JSON.parse(localStorage.getItem('books')) || [
    { id:1, title:"Clean Code", author:"Robert Martin", genre:"Technology", price:499, stock:5 },
    { id:2, title:"Atomic Habits", author:"James Clear", genre:"Self-Help", price:349, stock:8 },
    { id:3, title:"Sapiens", author:"Yuval Harari", genre:"History", price:399, stock:3 },
    { id:4, title:"The Alchemist", author:"Paulo Coelho", genre:"Fiction", price:199, stock:12 },
    { id:5, title:"Deep Work", author:"Cal Newport", genre:"Self-Help", price:299, stock:6 },
    { id:6, title:"Cosmos", author:"Carl Sagan", genre:"Science", price:449, stock:4 },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let currentRole = localStorage.getItem('currentRole') || 'user';
let loginAttempts = parseInt(localStorage.getItem('loginAttempts')) || 3;

const USERS = { user: 'user123', admin: 'admin123' };

function saveData() {
    localStorage.setItem('books', JSON.stringify(books));
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('loginAttempts', loginAttempts);
}

// Global UI Helper
function showAlert(elId, msg, type) {
    const el = document.getElementById(elId);
    if(!el) return;
    el.innerHTML = `<div class="alert alert-${type}">${msg}</div>`;
    setTimeout(() => { if(el) el.innerHTML=''; }, 4000);
}

function logout() {
    localStorage.removeItem('currentRole');
    localStorage.setItem('cart', JSON.stringify([]));
    window.location.href = 'index.html';
}

// Formatters
function formatCard(input) {
    let v = input.value.replace(/\D/g,'').substring(0,16);
    input.value = v.replace(/(.{4})/g,'$1 ').trim();
}