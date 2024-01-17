import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";

const MyApi = ({ data, setData }) => {
    const getData = async () => {
        try {
            const res = await fetch("https://www.feriadosapp.com/api/holidays-2019.json");
            const json = await res.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
            <Table striped bordered hover className="Table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fecha</th>
                        <th>Nombre</th>
                        <th>Religioso/Civil/Irrenunciable </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.date}</td>
                            <td>{item.title}</td>
                            <td>{item.extra}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default MyApi;
