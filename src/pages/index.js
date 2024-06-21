import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

const Home = () => {
    const form = useRef();
    const [products, setProducts] = useState([]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tvgsbax', 'template_xkihorl', form.current, 'n1vYhA5-e7lNRwgRt')
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset(); 
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/media');
                const shuffled = response.data.sort(() => 0.5 - Math.random());
                const selectedProducts = shuffled.slice(0, 10);
                setProducts(selectedProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, []);

    return (
        <div className='Home_home'>
            <div className='Home_poizon'>
                <div className='Home_imageContainer'>
                    <img src='images/home.jpg' className='Home_image' alt='Home' />
                    <h1 className='Home_text'>
                        WHAT IS POIZON AND WHY TO BUY <br/>
                        <span className='Home_text2'>IT IS RELIABLE AND PROFITABLE WITH US</span>
                    </h1>
                </div>
            </div>
            <div className='Home_text3'>
                <p>Poizon is an international marketplace specializing in the sale of original sneakers, clothing, bags, watches and accessories of popular brands.</p>
                <p id='support'>Poizon differs from other marketplaces in that the goods from suppliers do not go directly to the buyer, but first pass through its own authentication laboratory, where the quality and originality of the goods are manually checked.</p>
            </div>
            <div className='Support_support'>
                <form ref={form} onSubmit={sendEmail} className='Support_form'>
                    <h1 className='Support_text1'>Any questions? Ask me!</h1>
                    <div className='Support_data'>
                        <input type='text' name='user_name' className='Support_name Support_input' placeholder='Name' required />
                        <input type='email' name='user_email' className='Support_mail Support_input' placeholder='E-mail' required />
                        <input type='text' name='user_phone' className='Support_phone Support_input' placeholder='Phone' required />
                    </div>
                    <div className='Support_area'>
                        <p className='Support_message'>Message</p>
                        <textarea name='message' rows='5' placeholder='Write your message...' required></textarea>
                    </div>
                    <div className='Support_send'>
                        <button type='submit' className='Support_sendBtn'>Send</button>
                    </div>
                </form>
            </div>
            <div className='Products_section'>
                <h2 style={{ fontSize: 32 }}>Our products</h2>
                <div className='Products_list'>
                    {products.map(product => (
                        <div key={product.id} className='Product_item'>
                            <img src={product.image} alt={product.name} className='Product_image'/>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;