import Card from "./Card";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const commentsList = [
    {
        title: 'Best decision I made',
        author: 'olga_33',
        description: 'Choosing this travel agency was the best decision I made for my vacation. The attention to detail in planning my cultural tour was exceptional. From historic landmarks to hidden gems, every moment was unforgettable. I can\'t wait to book my next adventure with them!'
    },
    {
        title: 'Great cultural tour in Kyoto!',
        author: 'amir_ragrini',
        description: 'he guides were passionate about sharing the history, and the local experiences were fantastic. The only improvement could be more flexibility in the schedule.'
    },
    {
        title: 'Exceeded all expectations',
        author: 'ririji_fan',
        description: 'he adventure tour I booked through this agency exceeded all expectations.The thrill of the Amazon Rainforest was matched by the seamless organization of activities. The guides were knowledgeable, and the overall experience left me with memories I\'ll cherish forever.'
    }
];

const allComments = commentsList.map((comment, index) => <Card key={index} title={comment.title} author={comment.author} description={comment.description}/>)

export default function Comments(){
    return(
        <section className="card_section">
        <div className="container">
        <div className="cards">
            { allComments }
        </div>
    </div>
    </section>
    )
}