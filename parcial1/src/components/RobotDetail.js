// src/components/RobotDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RobotDetail = () => {
    const { id } = useParams();
    const [robot, setRobot] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/robots/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch robot details');
                }
                return response.json();
            })
            .then((data) => {
                setRobot(data); // Update state with fetched robot details
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]); // Dependency array with id ensures this runs when the id changes

    if (loading) {
        return <p>Cargando detalles del robot...</p>;
    }

    if (error) {
        return <p className="text-danger">Error: {error}</p>;
    }

    if (!robot) {
        return <p>No se encontró el robot solicitado.</p>;
    }

    return (
        <div className="robot-detail">
            <h2>{robot.name}</h2>
            <img src={robot.imagen} alt={robot.name} style={{ width: '100%' }} />
            <p>Año de fabricación: {robot.añoFabricacion}</p>
            <p>Capacidad de procesamiento: {robot.capacidadProcesamiento}</p>
            <p>Humor: {robot.humor}</p>
        </div>  
    );
};

export default RobotDetail;
