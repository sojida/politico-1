import express from 'express';
import { urlencoded, json } from 'body-parser';
import partyRouter from './server/route/partyRouter';
import officeRouter from './server/route/officeRouter';

const app = express();
const port = process.env.PORT || 5051;

app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/', (req, res) => {
  res.send('Official App for Politico API');
});

app.use('/api/v1/parties', partyRouter);
app.use('/api/v1/offices', officeRouter);

if (!module.parent) {
  app.listen(port, () => {
    console.log(`Politico API is running on port ${port}`);
  });
}
export default app;
