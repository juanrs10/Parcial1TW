import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RobotList = () => {
    const [robots, setRobots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch robots data from the backend
        fetch('http://localhost:3001/robots')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch robots');
                }
                return response.json();
            })
            .then((data) => {
                setRobots(data); // Update state with fetched robots
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []); // Empty dependency array ensures this runs once when the component mounts

    if (loading) {
        return <p>Cargando robots...</p>;
    }

    if (error) {
        return <p className="text-danger">Error: {error}</p>;
    }

    return (
        <div className="robot-list">
            <h2>Lista de Robots</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Modelo</th>
                        <th>Empresa Fabricante</th>
                    </tr>
                </thead>
                <tbody>
                    {robots.map((robot) => (
                        <tr key={robot.id}>
                            <td>{robot.id}</td>
                            <td><Link to={`/robots/${robot.id}`}>{robot.nombre}</Link></td>
                            <td>{robot.modelo}</td>
                            <td>{robot.empresaFabricante}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RobotList;
