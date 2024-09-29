import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const RobotDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [robot, setRobot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/robots/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(t('error'));
        }
        return response.json();
      })
      .then((data) => {
        setRobot(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id, t]);

  if (loading) {
    return <p>{t('loadingDetails')}</p>;
  }

  if (error) {
    return <p className="text-danger">{t('error')}: {error}</p>;
  }

  if (!robot) {
    return <p>{t('noRobotFound')}</p>;
  }

  return (
    <div className="robot-detail">
      <h2>{robot.name}</h2>
      <img src={robot.imagen} alt={robot.name} style={{ width: '100%' }} />
      <p>{t('yearOfManufacture')}: {robot.añoFabricacion}</p>
      <p>{t('processingCapacity')}: {robot.capacidadProcesamiento}</p>
      <p>{t('humor')}: {robot.humor}</p>
    </div>
  );
};

export default RobotDetail;
