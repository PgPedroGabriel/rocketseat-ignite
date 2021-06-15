import express from 'express';
import { v4 as uuid } from 'uuid';
import { customers } from './database.js';
import { verifyIfExistAccount } from './middleware.js';
const app = express();
app.use(express.json());

app.post('/account', (req, res) => {
  const { 
    cpf,
    name,
  } = req.body;

  const customerExists = customers.some(customer => customer.cpf === cpf);
  if(customerExists) {
    return res.status(400).send({error: 'CPF existente'});
  }

  customers.push({cpf, name, id: uuid(), statement: []});

  return res.status(201).send(customers);
});

app.get('/statement', verifyIfExistAccount, (req, res) => {
  const { customer } = req; 
  return res.json(customer.statement);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running at port http://localhost:${port}`));