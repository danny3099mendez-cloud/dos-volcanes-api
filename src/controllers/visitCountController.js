 import { getVisitCount, incrementVisitCount } from '../models/visitCountModel.js';

export const getVisits = async (req, res) => {
  try {
    const visits = await getVisitCount();
    res.status(200).json({ visits });
  } catch (error) {
    console.error(' Error al obtener visitas:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const addVisit = async (req, res) => {
  try {
    const visits = await incrementVisitCount();
    res.status(200).json({ message: 'Visita registrada', visits });
  } catch (error) {
    console.error(' Error al incrementar visitas:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
