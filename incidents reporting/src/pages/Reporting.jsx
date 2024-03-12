import { useState } from "react";

function Reporting() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [region, setRegion] = useState('');
    const [district, setDistrict] = useState('');
    const [ward, setWard] = useState('');
    const [category, setCategory] = useState('');
    const [incident, setIncident] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        setPhoneNumber('');
        setRegion('');
        setDistrict('');
        setWard('');
        setCategory('');
        setIncident('');
    }

    return (
        <div className="m-8">
            <form className="max-w-md mx-auto" action="" onSubmit={handleClick}>
                <div className="mb-4">
                    <label htmlFor="phone_number" className="block">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="region" className="block">Region:</label>
                    <input
                        type="text"
                        id="region"
                        name="region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="District" className="block">District:</label>
                    <input
                        type="text"
                        id="District"
                        name="District"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="ward" className="block">Ward:</label>
                    <input
                        type="text"
                        id="ward"
                        name="ward"
                        value={ward}
                        onChange={(e) => setWard(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block">Category:</label>
                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        <option value="small">Small incident</option>
                        <option value="medium">Medium incident</option>
                        <option value="large">Large incident</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="type_of_incidents" className="block">Report the incident:</label>
                    <input
                        type="text"
                        id="type_of_incidents"
                        value={incident}
                        onChange={(e) => setIncident(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Reporting;
