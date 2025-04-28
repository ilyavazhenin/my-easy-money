import Dexie from 'dexie';

export const db = new Dexie('MoneyDataBase');
db.version(1).stores({
    transactions: '++id, name, date, category, amount',
});