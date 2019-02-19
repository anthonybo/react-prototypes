import React, {Component} from 'react';
import Field from './field';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }

        }
    }

    reset = () => {
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        })
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        const { form } = this.state;

        form[name] = value;

        this.setState({
            form: {...form}
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.form);

        this.props.add(this.state.form);
        this.reset();
    }

    render() {
        const {firstName, lastName, phone, email} = this.state.form;
        return(
            <form onSubmit={this.handleSubmit}>
                <Field name='firstName' label='First Name' type='text' value={firstName} onChange={this.handleInputChange}/>
                <Field name='lastName' label='Last Name' type='text' value={lastName} onChange={this.handleInputChange}/>
                <Field name='phone' label='Phone Number' type='tel' value={phone} onChange={this.handleInputChange}/>
                <Field name='email' label='Email' type='email' value={email} onChange={this.handleInputChange}/>
                <button className='btn btn-success'>Add Contact</button>
                <button onClick={this.reset} className='btn btn-danger' type='button'>Clear Form</button>
            </form>
        )
    }
}

export default ContactForm;