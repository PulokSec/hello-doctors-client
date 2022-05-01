import React, { useEffect, useState } from 'react';
import '../../App.css';
import Sidebar from '../../Components/Dashboard/Sidebar';

const AddAdmin = () => {
    useEffect(() => {
		window.scrollTo(0, 0);
    }, []);

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        console.log(user)
        fetch('https://hello-doctors.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }

	return (
		<section className="container-fluid row" style={{ backgroundColor: '#F4FDFB' }}>
			<Sidebar />
			<div id="responsive-dashboard" className="col-md-10 p-4 doctorForm" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
				<h5 className="text-brand mb-4">Add a Admin</h5>
				<form onSubmit={handleAdminSubmit}>
					<div className="form-group col-6">
						<label htmlFor="exampleInputEmail1">New Admin</label>
						<input
							onBlur={handleOnBlur}
							type="email"
							className="form-control"
							name="email"
							placeholder="Enter Admin Email"
							required={true}
						/>
					</div>					
					<button type="submit" className="btn btn-primary mt-2 ml-3">
						Submit
					</button>
				</form>
                {success && <span className="text-success mt-2">Made Admin successfully!</span>}
			</div>
		</section>
	);
};

export default AddAdmin;