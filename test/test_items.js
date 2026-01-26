const fetch = require('node-fetch'); // v2
const BASE_URL = 'http://localhost:3000/api/v1/items';

const sampleItems = [
    { name: 'Item 1', price: 100 },
    { name: 'Item 2', price: 200 },
    { name: 'Item 3', price: 300 },
    { name: 'Item 4', price: 400 },
    { name: 'Item 5', price: 500 }
];

async function createItem(item) {
    try {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    });
    const data = await res.json();
    console.log('Created:', data);
    } catch (err) {
    console.error('Error creating item:', err);
    }
}

async function getAllItems() {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        console.log('\n=== ALL ITEMS ===');
        console.table(data.data.data || []); // print empty array safely
    } catch (err) {
        console.error('Error fetching items:', err);
    }
}

async function test() {
    for (const item of sampleItems) {
        await createItem(item);
    }

    await getAllItems();
}

test();
