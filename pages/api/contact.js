import { MongoClient } from 'mongodb';

async function handlers(req, res){
 
  if(req.method === 'POST'){
    const {email, name, msg} = JSON.parse(req.body);
    const data = {
      email, name, msg
    }
    if(email.trim() === '' || !email.includes('@') || name.trim() === '' || msg.trim() === ''){
      res.status(422).json({message: 'Bad Input. Try again.'});
      return;
    }
    let client
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.nked2uh.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    try{
       client = await MongoClient.connect(connectionString);
    }catch (e) {
          res.status(500).json({error: 'Could not connect to database!'});
          return;
    }
    const db = client.db();
    try {
      const newMessage = await db.collection('Messages').insertOne(data);
        data._id =  newMessage.insertedId;
      client.close();
      res.status(201).json({status: 'success', data: data});
    } catch (error) {
      client.close();
        res.status(500).json({status: 'error', error: 'Something went wrong!'});
    }

  }
}

export default handlers;