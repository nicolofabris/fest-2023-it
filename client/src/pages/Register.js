import { useState, useEffect } from 'react';
import { Logo } from '../components';


const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}

const Register = () => {
    const [values, setValues] = useState(initialState)

    const handleChange = (e) => {
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className="full-page">
        <form className="form" onSubmit={handleSubmit}>
            <Logo/>
            <h3>Login</h3>
            <div className="form-row">
                <label htmlFor="name" className='form-label'>name</label>
                <input type="text" value={values.name} onChange={handleChange} name='name' className='form-input'/>
            </div>
            <button type='submit' className='btn btn-block'>Submit</button>
        </form>
    </div>
  )
}

export default Register