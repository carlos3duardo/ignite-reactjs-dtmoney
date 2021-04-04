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
          title: 'Website - Padaria do Joaquim',
          amount: 3600,
          type: 'deposit',
          category: 'Freelance',
          createdAt: new Date('2021-01-06 10:42:00')
        },{
          id: 2,
          title: 'Almoços',
          amount: 440,
          type: 'withdraw',
          category: 'Alimentação',
          createdAt: new Date('2021-01-10 13:44:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
