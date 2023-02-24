import express       from 'express';
import cors          from 'cors';
import { Low }       from 'lowdb';
import { JSONFile }  from 'lowdb/node';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded( { extended: false} ));
app.use(express.json());
app.use(express.static('public'));

//initializing local file as db 
const adapter       = new JSONFile('blogPosts.json');
const db            = new Low(adapter);
await db.read(); 

//setting up the default data inside the .json file
db.data ||= { blogPosts: [] };

//destructuring to manipulate array inside db
const { blogPosts } = db.data;

app.get('/posts', (req, res) => {
  //res.send('I am working');
  res.send(blogPosts);
});

app.get('/post', (req, res) => {
  res.send('I posted something');
});

app.post('/post', async (req, res) => {
  const clientData = req.body;
  const post = blogPosts.push(clientData);
  await db.write();
  console.log('I posted this', clientData);
  res.send(clientData);
});

app.delete('/posts', (req, res) => {
  console.log('Deleting a post... please wait');

});

app.listen(PORT, () => {
  console.log('Server running in port 3000');
});



