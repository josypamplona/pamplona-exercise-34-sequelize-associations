const service = require('../service/patientsService');

const getAllPatientsPlans = async (_req, res) => {
  try {
    const listOfPatients = await service.getAllPatientsPlans();

    if (listOfPatients.message) return res.status(404).send(listOfPatients);

    return res.status(200).json(listOfPatients);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAllPatientsPlans,
};
