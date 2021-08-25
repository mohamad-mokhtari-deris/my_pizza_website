import React from 'react';
import styles from './../styles/Pizza.module.css';
import Head from 'next/head';
import Link from 'next/link';

function slug({ pizza, otherPizzas }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pizza.name}</title>
      </Head>
      <div className={styles.pizzaContainer}>
        <div className={styles.pizzaWrapperLeft}>
          <img src={pizza.image} ali={pizza.name} className={styles.pizzaImage} />
        </div>
        <div className={styles.pizzaWrapperRight}>
          <div className={styles.pizzaInfo}>
            <p className={styles.pizzaTitle}>{pizza.name}</p>
            <p className={styles.pizzaDescription}>{pizza.description}</p>
            <p className={styles.pizzaPrice}>$ {pizza.price}</p>
            <p className={styles.pizzaToppings}>{pizza.toppings.map((topping) => topping).join(', ')}</p>
          </div>
          <div className={styles.otherPizzasWrapper}>
            {otherPizzas.map(otherPizza => {
              return (
                <div className={styles.otherPizzas} key={otherPizza.id}>
                  <Link href={"/" + otherPizza.slug}><a>
                    <img src={otherPizza.image} alt={otherPizza.name} />
                    <p>{otherPizza.name}</p>
                  </a></Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default slug;


export const getStaticPaths = async () => {
  const pizzas = [
    {
      id: '1',
      name: "pizza 1",
      slug: "pizza-1",
      description: "dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil",
      toppings: ['sausage', 'tomato', 'olive'],
      image: "./assets/images/pizza1.webp",
      price: 20
    },
    {
      id: '2',
      name: "pizza 2",
      slug: "pizza-2",
      description: "oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked",
      toppings: ['egg', 'potatos', 'olive'],
      image: "./assets/images/pizza2.webp",
      price: 13.56
    },
    {
      id: '3',
      name: "pizza 3",
      slug: "pizza-3",
      description: "mozzarella, and basil. Popular legend relates that it was named for Queen Margherita",
      toppings: ['sausage', 'tomato', 'olive'],
      image: "./assets/images/pizza3.webp",
      price: 14.58
    },
    {
      id: '4',
      name: "pizza 4",
      slug: "pizza-4",
      description: "quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
      toppings: ['bief', 'tomato', 'olive'],
      image: "./assets/images/pizza4.webp",
      price: 9.99
    },
    {
      id: '5',
      name: "pizza 5",
      slug: "pizza-5",
      description: "One of the simplest and most traditional pizzas is the Margherita, which is topped with tomatoes or tomato sauce,",
      toppings: ['sausage', 'tomato', 'olive'],
      image: "./assets/images/pizza5.webp",
      price: 10.2
    },
    {
      id: '6',
      name: "pizza 6",
      slug: "pizza-6",
      description: "wife of Umberto I, who was said to have liked its mild fresh flavour and to have also noted that its topping colours—green, white, and red—were those of the Italian flag.",
      toppings: ['kichen', 'tomato', 'olive'],
      image: "./assets/images/pizza6.webp",
      price: 55
    }
  ]

  const paths = pizzas.map(pizza => ({
    params: { slug: `${pizza.slug}` }
  }));
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const pizzas = [
    {
      id: '1',
      name: "pizza 1",
      slug: "pizza-1",
      description: "dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil",
      toppings: ['sausage', 'tomato', 'olive'],
      image: "./assets/images/pizza1.webp",
      price: 20
    },
    {
      id: '2',
      name: "pizza 2",
      slug: "pizza-2",
      description: "oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked",
      toppings: ['egg', 'potatos', 'olive'],
      image: "./assets/images/pizza2.webp",
      price: 13.56
    },
    {
      id: '3',
      name: "pizza 3",
      slug: "pizza-3",
      description: "mozzarella, and basil. Popular legend relates that it was named for Queen Margherita",
      toppings: ['sausage', 'tomato', 'olive'],
      image: "./assets/images/pizza3.webp",
      price: 14.58
    },
    {
      id: '4',
      name: "pizza 4",
      slug: "pizza-4",
      description: "quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
      toppings: ['bief', 'tomato', 'olive'],
      image: "./assets/images/pizza4.webp",
      price: 9.99
    },
    {
      id: '5',
      name: "pizza 5",
      slug: "pizza-5",
      description: "One of the simplest and most traditional pizzas is the Margherita, which is topped with tomatoes or tomato sauce,",
      toppings: ['sausage', 'tomato', 'olive'],
      image: "./assets/images/pizza5.webp",
      price: 10.2
    },
    {
      id: '6',
      name: "pizza 6",
      slug: "pizza-6",
      description: "wife of Umberto I, who was said to have liked its mild fresh flavour and to have also noted that its topping colours—green, white, and red—were those of the Italian flag.",
      toppings: ['kichen', 'tomato', 'olive'],
      image: "./assets/images/pizza6.webp",
      price: 55
    }
  ]

  const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
  const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);
  return {
    props: {
      pizza: pizza[0],
      otherPizzas: otherPizzas.sort(() => Math.random() - Math.random()).slice(0, 3),
    }
  }
}