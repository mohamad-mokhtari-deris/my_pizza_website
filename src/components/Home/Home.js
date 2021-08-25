import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';
import { useState } from 'react';

function Home(props) {
    const [keyword, setKeyword] = useState('');
    const pizzas = [
        {
            id: '1',
            name: "pizza 1",
            slug: "pizza-1",
            description:"dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil",
            toppings: ['sausage', 'tomato', 'olive'],
            image: "./assets/images/pizza1.webp",
            price: 20
        },
        {
            id: '2',
            name: "pizza 2",
            slug: "pizza-2",
            description:"oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked",
            toppings: ['egg', 'potatos', 'olive'],
            image: "./assets/images/pizza2.webp",
            price: 13.56
        },
        {
            id: '3',
            name: "pizza 3",
            slug: "pizza-3",
            description:"mozzarella, and basil. Popular legend relates that it was named for Queen Margherita",
            toppings: ['sausage', 'tomato', 'olive'],
            image: "./assets/images/pizza3.webp",
            price: 14.58
        },
        {
            id: '4',
            name: "pizza 4",
            slug: "pizza-4",
            description:"quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
            toppings: ['bief', 'tomato', 'olive'],
            image: "./assets/images/pizza4.webp",
            price: 9.99
        },
        {
            id: '5',
            name: "pizza 5",
            slug: "pizza-5",
            description:"One of the simplest and most traditional pizzas is the Margherita, which is topped with tomatoes or tomato sauce,",
            toppings: ['sausage', 'tomato', 'olive'],
            image: "./assets/images/pizza5.webp",
            price: 10.2
        },
        {
            id: '6',
            name: "pizza 6",
            slug: "pizza-6",
            description:"wife of Umberto I, who was said to have liked its mild fresh flavour and to have also noted that its topping colours—green, white, and red—were those of the Italian flag.", 
            toppings: ['kichen', 'tomato', 'olive'],
            image: "./assets/images/pizza6.webp",
            price: 55
        }
    ]

    const filterPizzas = pizzas.filter(
        pizza =>
            pizza.name.toLowerCase().includes(keyword) || pizza.toppings.includes(keyword)
    )


    const onInputChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    }

    return (
        <>
            <div className={styles.searchWrapper}>
                <input placeholder='Search for pizza pr toppings' className={styles.searchBar} onChange={onInputChange} />
            </div>
            <div className={styles.pizzaContainer}>
                {filterPizzas < 1 ?
                    (<div className={styles.nopeContainer}>There is no pizza or topping with that.</div>)
                    :
                    (
                        filterPizzas.map(pizza => {
                            return (
                                <div className={styles.pizzaItem} key={pizza.id}>
                                    <Link href={`/${pizza.slug}`}>
                                        <a className={styles.pizzaImageBox}>
                                            <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
                                        </a>
                                    </Link>
                                    <div className={styles.pizzaText}>
                                        <p className={styles.pizzaHeader}>{pizza.name}</p>
                                        <p className={styles.pizzaToppingd}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                                        <p className={styles.pizzaPrice}>🍕{pizza.price}¢</p>
                                    </div>
                                </div>
                            );
                        })
                    )
                }
            </div>
        </>
    );
}

export default Home;


/*

 https://unsplash.com/

 */