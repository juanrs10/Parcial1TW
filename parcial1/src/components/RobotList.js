import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const RobotList = () => {
    const { t } = useTranslation();
    const [robots, setRobots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/robots')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(t('error'));
                }
                return response.json();
            })
            .then((data) => {
                setRobots(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [t]); // Include t in the dependency array to re-run useEffect when language changes

    if (loading) {
        return <p>{t('loading')}</p>;
    }

    if (error) {
        return <p className="text-danger">{t('error')}: {error}</p>;
    }

    return (
        <div className="robot-list">
            <h2>{t('robotListHeader')}</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>{t('id')}</th>
                        <th>{t('name')}</th>
                        <th>{t('model')}</th>
                        <th>{t('manufacturer')}</th>
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
