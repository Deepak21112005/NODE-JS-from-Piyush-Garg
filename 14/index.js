const fs = require("fs");
const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;


//Middleware - Plugin
app.use(express.urlencoded({ extended : false}));


//Routes
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map(user => `<li>${user.first_name}</li>`)
      .join('')}
    </ul>
  `;
  res.send(html);
});

/*
app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    return res.json(user);
  } else {
    res.end(`User wih ID : ${id} doesn't exist`);
  }
  });



  app.post('/api/users', (req, res) => {
    // TODO : Create new user
    return res.json({ status : "pending" });
  });

  app.post('/api/users/:id', (req, res) => {
    // TODO : Edit the user with id
    return res.json({ status : "pending" });
  });

  app.delete('/api/users/:id', (req, res) => {
    // TODO : Delete the user with id
    return res.json({ status : "pending" });
  });

*/

// --- Grouping routes for a specific user ID ---
app.route('/api/users/:id')
  .get((req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      return res.json(user);
    } else {
      // It's better to send a proper 404 status
      res.status(404).json({ error: `User with ID: ${id} doesn't exist` });
    }
  })

  .patch((req, res) => {
    // TODO : Edit the user with id
    const id = req.params.id;
    return res.json({ status: "pending", action: `User ${id} updated` });
  })
  
  .delete((req, res) => {
    // TODO : Delete the user with id
    const id = req.params.id;
    return res.json({ status: "pending", action: `User ${id} deleted` });
  });

// --- Route for creating a new user ---
// Note: This route is /api/users, NOT /api/users/:id
app.post('/api/users', (req, res) => {
    // TODO : Create new user
    // You would need express.urlencoded() or express.json() middleware to read req.body
    const body = req.body;
    console.log("Body : ", body);
    console.log(`Body : ${body}`);

    const newUser = {...req.body, id : users.length + 1};
    users.push(newUser);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, res) => {
      return res.json({ status : "success", id : users.length + 1});
    });
});


app.listen(PORT, () => {
  console.log(`Server started at PORT : ${PORT}`);
});