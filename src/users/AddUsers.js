import React from 'react'

export default function AddUsers() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className='text-center m-4'>Register User</h2>
           
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Name</label>
                <input type={"text"} className='form-control' placeholder='Enter Your name' name='name'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Username</label>
                <input type={"text"} className='form-control' placeholder='Enter Your username' name='username'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Email</label>
                <input type={"text"} className='form-control' placeholder='Enter Your email address' name='email'/>
            </div>

            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <button type='submit' className='btn btn-outline-danger'>Cancel</button>
            </div>
        </div>
    </div>
  )
}
