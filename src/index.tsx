import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website freelance',
          type: 'deposit',
          category: 'Development',
          amount: 5500,
          createdAt: new Date('2021-02-02 08:21:05'),
        },
        {
          id: 2,
          title: 'Work station upgrade',
          type: 'withdraw',
          category: 'Work cost',
          amount: 1500,
          createdAt: new Date('2021-03-02 18:02:05'),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);