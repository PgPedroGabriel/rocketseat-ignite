import { customers } from './database.js';
export const verifyIfExistAccount = (req, res, next) => {
  const { 
    cpf,
  } = req.headers;

  const customer = customers.find(customer => customer.cpf === cpf);

  if(!customer) {
    return res.status(404).send({error: 'customer not found'});
  }

  req.customer = customer;

  return next();
}