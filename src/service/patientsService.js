const { Patient, Plan } = require('../models');

const getAllPatientsPlans = async () => {
  const listOfPatients = await Patient.findAll({ include: { model: Plan, as: 'plan' } });
  
  if (!listOfPatients.length) {
    return ({ message: 'Nenhum paciente encontrado' });
  }

  return listOfPatients;
};

module.exports = {
  getAllPatientsPlans,
};