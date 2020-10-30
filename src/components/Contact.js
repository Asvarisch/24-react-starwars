import React, { Component } from 'react';
import styles from '../css_modules/contact.module.css';
import { lettersFromUsers } from '../utils/Constants';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            planets: []
        }
    }

    componentDidMount() {
        let planetsInfo = localStorage.getItem('planets');
        const now = new Date();
        if (planetsInfo && !(now.getDate() > planetsInfo.expDate)) {
            planetsInfo = JSON.parse(planetsInfo);
            this.setState({
                isLoading: false,
                planets: planetsInfo.planets
            })
        } else {

            fetch("https://sw-info-api.herokuapp.com/v1/planets")
                .then(response => response.json())
                .then(planets => {
                    this.setState({
                        isLoading: false,
                        planets: planets
                    });
                    const expDate = new Date();
                    expDate.setDate(expDate.getDate() + 30);
                    localStorage.setItem('planets', JSON.stringify({ planets, expDate }));

                })
        }

    }

    handleSendContactForm = (event) => {
        event.preventDefault();
        const firstName = event.currentTarget.firstname.value.trim();
        const lastName = event.currentTarget.lastname.value.trim();
        const planet = event.currentTarget.planet.value.trim();
        const message = event.currentTarget.subject.value.trim();
        lettersFromUsers.push(
            {
                id: lettersFromUsers.length + 1,
                form: {
                    firstName: firstName,
                    lastName: lastName,
                    planet: planet,
                    message: message
                }
            })
        console.log(lettersFromUsers); // toSend somewhere
        event.target.reset();

    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className='spinner-border'></div>
            );
        } else
            return (
                <div className={styles.contact} className="container mb-4">
                    <form onSubmit={this.handleSendContactForm}>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <label htmlFor="planet">Planet</label>
                        <select id="planet" name="planet">
                            {this.state.planets.map((item, index) => (
                                <option
                                    key={index}
                                    value={item.name}>{item.name}</option>))}
                        </select>

                        <label htmlFor="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                        <button type="submit" className="btn btn-danger">Submit</button>
                        {/* <input type="submit" value="Submit" /> */}
                    </form>
                </div>
            );
    }
}


export default Contact;