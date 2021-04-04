import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
      // return [
      //   {
      //     id: 1,
      //     title: 'Transaction 1',
      //     amount: 400,
      //     type: 'deposit',
      //     category: 'Freelance Job'
      //   },{
      //     id: 2,
      //     title: 'Transaction 2',
      //     amount: 80,
      //     type: 'withdraw',
      //     category: 'Food'
      //   }
      // ]
    })

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
