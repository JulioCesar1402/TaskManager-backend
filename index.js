const express = require('express');
const cors = require('cors');
const tasksRoutes = require('./routes/tasksRoutes');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

// .. Importando Rotas
app.use('/tasks', tasksRoutes);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
