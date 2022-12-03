import React from 'react';
import quote from '../../../../assets/icons/quote.svg';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: "John Wick",
            img: people1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi architecto molestiae necessitatibus eum. Quae maiores perferendis error cum animi",
            location: "California"
        },
        {
            _id: 2,
            name: "Tom Hank",
            img: people2,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi architecto molestiae necessitatibus eum. Quae maiores perferendis error cum animi",
            location: "Texas"
        },
        {
            _id: 3,
            name: "Sakib Khan",
            img: people3,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi architecto molestiae necessitatibus eum. Quae maiores perferendis error cum animi",
            location: "Dhaka"
        },
    ]
    return (
        <section className='mt-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h1 className='text-4xl'>What our patients say!!</h1>
                </div>
                <figure>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;