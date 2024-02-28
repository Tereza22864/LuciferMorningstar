import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    const [selectedTab, setSelectedTab] = useState('First');
    const [randomIndex, setRandomIndex] = useState(0); 
    
    const characters = [
        {
            name: "Lucifer Morningstar",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslsTjzW-EE7RaDjGsXQx_gECKqWNptM6FnA&usqp=CAU",
            description: "Lucifer opustil svůj post vládce pekla, aby se usadil v Los Angeles, kde provozuje noční klub s démonem Mazikeen.Lidem dělá služby za protislužby."
        },
        {
            name: "Chloe Decker",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7v4-E2ejiFDCDUJHvjsiVV7zDbgSuU6wYpw&usqp=CAU",
            description: "Chloe Decker je detektivka LAPD a Lucifrova partnerka. Řeší zločiny s Luciferem poté, co se o ní začal zajímat, protože se zdálo, že je imunní vůči jeho schopnostem."
        },
        {
            name: "Amenadiel",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9jEwRNgK-qQIif5mdEBPsk7lhULVdNctJQQ&usqp=CAU",
            description: "Amenadiel je Luciferův bratr a nejstarší z andělů. Je loajální a oddaný syn Boha, který navštěvuje Lucifera v Los Angeles, aby ho přesvědčil, aby se vrátil do pekla."
        },
        {
            name: "Mazikeen",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvd4sI0OQSo4bhBoFTV8_4FYfTMXFrBERwA&usqp=CAU",
            description: "Mazikeen, často nazývaná Maze, je démon a Lucifrova pravá ruka. Maze je strážkyní pekla a nejlepší bojovnicí v pekle. Je také velmi schopná stopařka a lovec odměn."
        }
    ];

    const texts = [ 
        "První text Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        "Druhý text Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
        "Třetí text Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia."
    ];

    useEffect(() => { 
        const random = Math.floor(Math.random() * 3); 
        setRandomIndex(random); 
    }, []);

    const tabsContent = {
        'First': <p><strong>First</strong> <br/><br/> Lucifer Morningstar Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt esse dignissimos et natus nulla doloribus dolore atque, mollitia alias hic dolorem quam, praesentium ad. Nostrum odio dignissimos inventore soluta eius.
        Reiciendis ratione quasi unde dolores nihil molestias harum tempore voluptas dignissimos, eos ut similique tenetur.
        Corporis doloremque inventore iusto fugiat accusamus expedita? Molestiae iure.</p>,

        'Second': <p><strong>Second</strong> <br/><br/> Chloe Decker Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt esse dignissimos et natus nulla doloribus dolore atque, mollitia alias hic dolorem quam, praesentium ad. Nostrum odio dignissimos inventore soluta eius.
        Reiciendis ratione quasi unde dolores nihil molestias harum tempore voluptas dignissimos, eos ut similique tenetur. Exercitationem impedit eum et! Similique laudantium est culpa itaque praesentium ratione delectus voluptates veritatis ducimus.
        </p>,

        'Third': <p><strong>Third</strong> <br/><br/> Amenadiel Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt esse dignissimos et natus nulla doloribus dolore atque, mollitia alias hic dolorem quam, praesentium ad. Nostrum odio dignissimos inventore soluta eius.
        Reiciendis ratione quasi unde dolores nihil molestias harum tempore voluptas dignissimos, eos ut similique tenetur. Exercitationem impedit eum et! Similique laudantium est culpa itaque praesentium ratione delectus voluptates veritatis ducimus. Reiciendis ratione quasi unde dolores nihil molestias harum tempore voluptas dignissimos, eos ut similique tenetur. 
        </p>,
       
        'Fourth': <p><strong>Fourth</strong> <br/><br/> Mazikeen Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt esse dignissimos et natus nulla doloribus dolore atque, mollitia alias hic dolorem quam, praesentium ad. Nostrum odio dignissimos inventore soluta eius.
        Reiciendis ratione quasi unde dolores nihil molestias harum tempore voluptas dignissimos, eos ut similique tenetur. Exercitationem impedit eum et! Similique laudantium est culpa itaque praesentium ratione delectus voluptates veritatis ducimus.
        Corporis doloremque inventore iusto fugiat accusamus expedita? Molestiae iure, voluptate magnam sequi libero et accusamus cupiditate at accusantium quasi, sit vero iste nemo! Amet debitis dolores magnam dolorum mollitia natus.
        </p>
    };

    return (
        <section>
            <h1>Lucifer Morningstar</h1> 
            <p><span className="highlight">{texts[randomIndex].split(' ')[0]} {texts[randomIndex].split(' ')[1]}</span> {texts[randomIndex].split(' ').slice(2).join(' ')}</p> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="image-container">
                {characters.map((character, i) => (
                    <div className="image-card" key={i}>
                        <img src={character.imageUrl} alt={`Image ${i+1}`} />
                        <h2>{character.name}</h2>
                        <p>{character.description}</p>
                    </div>
                ))}
            </div>

            <div className="tabs">
                {['First', 'Second', 'Third', 'Fourth'].map(tab => (
                    <button 
                        key={tab} 
                        className={selectedTab === tab ? 'active' : ''} 
                        onClick={() => setSelectedTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="tab-content">
                {tabsContent[selectedTab]}
            </div>
        </section>
    );
}

export default Home;