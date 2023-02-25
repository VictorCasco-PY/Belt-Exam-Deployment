const { Pet } = require("../models/pet.model");

//Crear una nueva mascota
module.exports.createPet = async (request, response) => {
  try {
    request.body;
    const pet = await Pet.create(request.body);
    response.json(pet);
  } catch (error) {
    response.json(error);
  }
};

//Listar todas las mascotas
module.exports.findAllPets = async (request, response) => {
  try {
    const petList = await Pet.find({}).sort({ type: 1 });
    response.json(petList);
  } catch (error) {
    response.json(error);
  }
};

//Mostrar una mascota por su ID
module.exports.getPet = async (request, response) => {
  try {
    const petId = await Pet.findOne({ _id: request.params.id });
    response.json(petId);
  } catch (error) {
    response.json(error);
  }
};

//Actualizar una mascota
module.exports.updatePet = async (request, response) => {
  try {
    const updatedPet = await Pet.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    );
    response.json(updatedPet);
  } catch (error) {
    response.json(error);
  }
};

//Eliminar mascota
module.exports.deletePet = async (request, response) => {
  try {
    const deletedConfirmation = await Pet.deleteOne({
      _id: request.params.id,
    });
    response.json(deletedConfirmation);
  } catch (error) {
    response.json(error);
  }
};
