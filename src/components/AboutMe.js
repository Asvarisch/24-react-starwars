import React from 'react';

class AboutMe extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        let heroInfo = localStorage.getItem('heroInfo');
        const now = new Date();
        if (heroInfo && !(now.getDate() > heroInfo.expDate)) {
            heroInfo = JSON.parse(heroInfo);
            this.setState({
                isLoading: false,
                name: heroInfo.data.name,
                height: heroInfo.data.height,
                birthYear: heroInfo.data.birth_year,
                gender: heroInfo.data.gender,
                mass: heroInfo.data.mass,
                hairColor: heroInfo.data.hair_color,
                skinColor: heroInfo.data.skin_color,
                eyeColor: heroInfo.data.eye_color
            });

        } else {
            fetch("https://sw-info-api.herokuapp.com/v1/peoples/1")
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        isLoading: false,
                        name: data.name,
                        height: data.height,
                        birthYear: data.birth_year,
                        gender: data.gender,
                        mass: data.mass,
                        hairColor: data.hair_color,
                        skinColor: data.skin_color,
                        eyeColor: data.eye_color
                    });
                    const expDate = new Date();
                    expDate.setDate(expDate.getDate() + 30);
                    localStorage.setItem('heroInfo', JSON.stringify({ data, expDate }));

                })
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className='spinner-border'></div>
            );
        } else
            return (
                <div>
                    <p>name: {this.state.name}</p>
                    <p>height: {this.state.height}</p>
                    <p>birth year: {this.state.birthYear}</p>
                    <p>gender: {this.state.gender}</p>
                    <p>mass: {this.state.mass}</p>
                    <p>hair color: {this.state.hairColor}</p>
                    <p>skin color: {this.state.skinColor}</p>
                    <p>eye color: {this.state.eyeColor}</p>
                </div>
            )

    }


};

export default AboutMe;