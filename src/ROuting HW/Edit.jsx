import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {


    return (
        <div>
            <h1>Edit Item</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Age: <input type="number" name="age" value={formData.age} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Location: <input type="text" name="loc" value={formData.loc} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Department: <input type="text" name="dept" value={formData.dept} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Edit;
