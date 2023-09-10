
import React from "react"
import Cat from './cat.png'
import Cat2 from './cat2.png'
import Cat3 from './cat3.png'
import Cat4 from './cat4.png'
import Cat5 from './gift.png'
import Cat6 from './music.png'
import Cat7 from './beauty.png'
import Cat8 from './pet.png'
import Cat9 from './toys.png'
import Cat10 from './groceries.png'
import Cat11 from './books.png'



const Categories = () => {
  const data = [
    {
      cateImg: Cat,
      cateName: "Fashion",
    },
    {
      cateImg: Cat2,
      cateName: "Electronic",
    },
    {
      cateImg: Cat3,
      cateName: "Cars",
    },
    {
      cateImg: Cat4,
      cateName: "Home & Garden",
    },
    {
      cateImg: Cat5,
      cateName: "Gifts",
    },
    {
      cateImg: Cat6,
      cateName: "Music",
    },
    {
      cateImg: Cat7,
      cateName: "Health & Beauty",
    },
    {
      cateImg: Cat8,
      cateName: "Pets",
    },
    {
      cateImg: Cat9,
      cateName: "Baby Toys",
    },
    {
      cateImg: Cat10,
      cateName: "Groceries",
    },
    {
      cateImg: Cat11,
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories