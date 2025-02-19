import React from "react"
import "./product.css"
import { ProductCart } from "./ProductCart"

const product = [
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

export const Product = () => {
  return (
    <>
      <section className="product">
        <div className="container grid3">
          {product.map((item) => (
            <ProductCart
              key={item.id}
              id={item.id}
              cover={item.cover}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </>
  )
}
