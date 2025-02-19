import React from "react"
import "./slider.css"

const order = [
  {
    id: 1,
    title: "Your Order",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
  {
    id: 2,
    title: "Ready Your Order",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
  {
    id: 3,
    title: "Packing Your Order",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
  {
    id: 4,
    title: "And Deliver",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
]
export const category = [
  {
    id: 1,
    title: "face & skin care",
    cover: "../images/category/ca1.png",
  },
  {
    id: 2,
    title: "baby care",
    cover: "../images/category/ca2.png",
  },
  {
    id: 3,
    title: "beauty care",
    cover: "../images/category/ca3.png",
  },
  {
    id: 4,
    title: "contraceptive",
    cover: "../images/category/ca4.png",
  },
  {
    id: 5,
    title: "feminine hygiene",
    cover: "../images/category/ca5.png",
  },
  {
    id: 6,
    title: "health & protein",
    cover: "../images/category/ca6.png",
  },
  {
    id: 7,
    title: "health & wellness",
    cover: "../images/category/ca7.png",
  },
  {
    id: 8,
    title: "medicine & first aid",
    cover: "../images/category/ca8.png",
  },
  {
    id: 9,
    title: "oral care",
    cover: "../images/category/ca9.png",
  },
  {
    id: 10,
    title: "pregnacy",
    cover: "../images/category/ca10.png",
  },
  {
    id: 11,
    title: "sexual well-being",
    cover: "../images/category/ca11.png",
  },
  {
    id: 12,
    title: "Household",
    cover: "../images/category/ca12.jpg",
  },
]
export const product = [
  {
    id: 1,
    name: "ACM Sebionex Hydra",
    price: 3.0,
    qty: 1,
    category: "face & skin care",
    cover: "../images/product/product1.jpg",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 2,
    name: "Acne Free Blackhead Removing Scrub",
    price: 4.99,
    qty: 1,
    category: "beauty care",
    cover: "../images/product/product2.jpg",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 3,
    name: "Adori Energizer",
    price: 40.0,
    qty: 1,
    category: "Pregnancy",
    cover: "../images/product/product3.jpg",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 4,
    name: "Agnesia Natural Feminine Hygiene Wash",
    price: 15.0,
    qty: 1,
    category: "Feminine Hygiene",
    cover: "../images/product/product4.jpg",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 5,
    name: "Betadine Feminine Wash",
    price: 18.0,
    qty: 1,
    category: "Feminine Hygiene",
    cover: "../images/product/product5.png",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 6,
    name: "Better Man Bladder Control",
    price: 10.0,
    qty: 1,
    category: "Sexual Well-Being",
    cover: "../images/product/product6.jpg",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 7,
    name: "Biore Baking Soda Acne Scrub",
    price: 6.99,
    qty: 1,
    category: "Beauty Care",
    cover: "../images/product/product7.jpg",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 8,
    name: "CBD Hemp Extract",
    price: 89.95,
    qty: 1,
    category: "Oral Care",
    cover: "../images/product/product8.png",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 9,
    name: "Dial Spring Water Body Wash",
    price: 8.0,
    qty: 1,
    category: "Household",
    cover: "../images/product/product9.png",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 10,
    name: "Durex – Extra Sensitive Condoms",
    price: 2.0,
    qty: 1,
    category: "Sexual Well-Being",
    cover: "../images/product/product10.png",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 11,
    name: "Ecover Rinse Aid",
    price: 4.0,
    qty: 1,
    category: "Household",
    cover: "../images/product/product11.png",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 12,
    name: "First Aid Bag",
    price: 50.0,
    qty: 1,
    category: "Medicine & First Aid",
    cover: "../images/product/product12.jpg",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 13,
    name: "First Aid Box",
    price: 15.0,
    qty: 1,
    category: "Medicine & First Aid",
    cover: "../images/product/product13.jpg",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 14,
    name: "First Response Multivitamin Gummy",
    price: 9.99,
    qty: 1,
    category: "Contraceptive",
    cover: "../images/product/product14.png",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 15,
    name: "Himalaya For Moms",
    price: 8.0,
    qty: 1,
    category: "Pregnancy",
    cover: "../images/product/product15.png",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 16,
    name: "Huggies Wonder Pants – 56Pcs",
    price: 27.0,
    qty: 1,
    category: "Baby Care",
    cover: "../images/product/product16.png",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 17,
    name: "I-Pill Emergency Contraceptive Pill",
    price: 2.99,
    qty: 1,
    category: "Contraceptive",
    cover: "../images/product/product17.png",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 18,
    name: "Innermost The Recover Capsules",
    price: 15.95,
    qty: 1,
    category: "Medicine & First Aid",
    cover: "../images/product/product18.png",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 19,
    name: "Innermost The Tone Capsules",
    price: 15.0,
    qty: 1,
    category: "Medicine & First Aid",
    cover: "../images/product/product19.png",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 20,
    name: "Johnson’s Baby Bath",
    price: 25.0,
    qty: 1,
    category: "Baby Care",
    cover: "../images/product/product20.png",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 21,
    name: "Jolly Care",
    price: 15.0,
    qty: 1,
    category: "Feminine Hygiene",
    cover: "../images/product/product21.jpg",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 22,
    name: "Kodomo Baby Bath",
    price: 15.0,
    qty: 1,
    category: "Baby Care",
    cover: "../images/product/product22.png",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 23,
    name: "La Roche-Posay Hydraphase Intense Masque",
    price: 12.0,
    qty: 1,
    category: "Beauty Care",
    cover: "../images/product/product23.jpg",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
  {
    id: 24,
    name: "Liposomal D Supreme",
    price: 15.0,
    qty: 1,
    category: "Medicine & First Aid",
    cover: "../images/product/product24.png",
    desc: "The term cleanser refers to a product that cleans or removes dirt or other substances. A cleanser could be a detergent, and there are many types of cleansers that are produced with a specific objective or focus.",
  },
]

export const Order = () => {
  return (
    <section className="order">
      <div className="container grid boxItems">
        {order.map((item) => (
          <div className="box flexCenter" key={item.id}>
            <div className="num">
              <h1>{item.id}</h1>
            </div>
            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
