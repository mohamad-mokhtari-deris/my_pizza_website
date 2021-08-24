import React from 'react';
import styles from './Home.module.css';
import Link from 'next/link';

function Home(props) {
    const pizzas = [
        {
            id: '1',
            name: "pizza 1",
            slug: "pizza-1",
            toppings: ['sausage', 'tomato', 'olive'],
            image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: 20
        },
        {
            id: '2',
            name: "pizza 2",
            slug: "pizza-2",
            toppings: ['egg', 'potatos', 'olive'],
            image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: 13.56
        },
        {
            id: '3',
            name: "pizza 3",
            slug: "pizza-3",
            toppings: ['sausage', 'tomato', 'olive'],
            image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: 14.58
        },
        {
            id: '4',
            name: "pizza 4",
            slug: "pizza-4",
            toppings: ['bief', 'tomato', 'olive'],
            image: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: 9.99
        },
        {
            id: '5',
            name: "pizza 5",
            slug: "pizza-5",
            toppings: ['sausage', 'tomato', 'olive'],
            image: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: 10.2
        },
        {
            id: '6',
            name: "pizza 6",
            slug: "pizza-6",
            toppings: ['kichen', 'tomato', 'olive'],
            image: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: 55
        }
    ]
    return (
        <>
            <div className={styles.searchWrapper}>
                <input placeholder='Search for pizza pr toppings' className={styles.searchBar} />
            </div>
            <div className={styles.pizzaContainer}>
                {pizzas.map(pizza => {
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
                })}
            </div>
        </>
    );
}

export default Home;


/*

 https://unsplash.com/

 */