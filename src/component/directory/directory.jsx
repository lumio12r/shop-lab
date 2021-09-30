import React from "react";

import Menu from "../menu/menu";

import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'hats',
                img: 'https://i.ibb.co/ZVYcBMM/hat.jpg',
                id: 1,
                link: 'hats'
            },
            {
                title: 'jackets',
                img: 'https://i.ibb.co/ZVYcBMM/hat.jpg',
                id: 2,
                link: ''
            },
            {
                title: 'sneakers',
                img: 'https://i.ibb.co/ZVYcBMM/hat.jpg',
                id: 3,
                link: ''
            },
            {
                title: 'womens',
                img: 'https://i.ibb.co/ZVYcBMM/hat.jpg',
                size: 'large',
                id: 4,
                link: ''
            },
            {
                title: 'mens',
                img: 'https://i.ibb.co/ZVYcBMM/hat.jpg',
                size: 'large',
                id: 5,
                link: ''
            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
            {
                this.state.sections.map(({ id, ...SectionsProps}) => (
                    <Menu key={id} {...SectionsProps} />
                ))
            }
            </div>
        )
    }
}

export default Directory;