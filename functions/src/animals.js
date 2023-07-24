import db from "./dbConnect.js"

const coll = db.collection("animals")

export async function getAnimalForms(req,res) {
  const animalForms = await coll.get();

  const animalFormsArray = animalForms.docs.map(doc => ({ id:
    doc.id, ...doc.data() }))

    res.send(animalFormsArray);
}