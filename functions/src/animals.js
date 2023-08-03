
import db from "./dbConnect.js"

const coll = db.collection("animals")


// getAnimalForms function is an async request handler that retrieves data. It transforms the retrieved data into an array of objects, where each object represents a document, including id and data. the function then sends this array of objects as a response back to the client making the API request.

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
  const { tag, name, imageURL, location, temperament, description } = req.body

  if (!tag || !name || !location || !temperament || !description) {
    res.status(400).send({ error: "Incomplete Request." })
    return;
  }

  const newAnimalForm = { tag, name, imageURL, location, temperament, description }

  await coll.add(newAnimalForm); //promise returned
  getAnimalForms(req, res);
}

// // delete
// export async function deleteAnimal(req, res) {
//   const {id}  = req.params

//   try {
//     await coll.doc(id).delete();
//     await getAnimals(req, res);
//   } catch (error) {

//     console.error("Error deleting animal:", error);
//     res.status(500).json({ error: "Failed to delete animal or retrieve data." });
//   }
// }
