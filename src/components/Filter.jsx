import React, { useState } from "react";

const Filter = ({ data, setFilteredData }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleFilter = () => {
        const filteredData = data.filter((item) => {
            const lowerSearchInput = searchInput.toLowerCase();
            return (
                item.title.toLowerCase().includes(lowerSearchInput) ||
                item.date.toLowerCase().includes(lowerSearchInput) ||
                item.extra.toLowerCase().includes(lowerSearchInput)
            );
        });
        setFilteredData(filteredData);
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <div className="container2">
            <div className="input">
                <input
                    type="text"
                    className="search"
                    placeholder="Busca un feriado por su nombre, fecha o tipo"
                    value={searchInput}
                    onChange={handleInputChange}
                />
                <button onClick={handleFilter} className="btn">
                    Mostrar{" "}
                </button>
            </div>
        </div>
    );
};

export default Filter;
