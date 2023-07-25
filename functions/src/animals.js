
import db from "./dbConnect.js"

const coll = db.collection("animals")

export async function getAnimalForms(req,res) {
  const animalForms = await coll.get();

  const animalFormsArray = animalForms.docs.map(doc => ({ id:
    doc.id, ...doc.data() }))

    res.send(animalFormsArray);
}

//add
export async function addAnimal(req,res){
  const {tag, name, imageURL,location, temperament, description } = req.body

  const newAnimalForm = { tag, name, imageURL,location, temperament, description }

  await coll.add(newAnimalForm); 
  getAnimalForms(req, res);
}