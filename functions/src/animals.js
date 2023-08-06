
import db from "./dbConnect.js"

const coll = db.collection("animals")

export async function getAnimalForms(req, res) {
  const animalForms = await coll.get();

  const animalFormsArray = animalForms.docs.map(doc => ({
    id:
      doc.id, ...doc.data()
      //  doc.data() returns object containing; spread operator merges properties and values into new object.
  }))

  res.send(animalFormsArray);
}

//add
export async function addAnimalForms(req, res) {
  const { tag, name, imageURL, location, temperament, description, address, zip, state, city} = req.body

  if (!tag || !name || !temperament || !description) {
    res.status(400).send({ error: "Incomplete Request." })
    return;
  }
  const newAnimalForm = { tag, name, imageURL, location, temperament, description, address, zip, state, city }

  await coll.add(newAnimalForm); //promise returned
  getAnimalForms(req, res);
}

