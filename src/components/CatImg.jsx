import React, { useState } from 'react'
import Cat1 from "../assets/cat1.jpg"
import Cat2 from "../assets/cat2.jpg"
import Cat3 from "../assets/cat3.jpg"
import Cat4 from "../assets/cat4.jpg"
import Cat5 from "../assets/cat5.jpg"

const CatImg = ({fn}) => {
    const [catImg, setCatImg] = useState(Cat1)

    const cats = [
        {
            id: 1,
            name: "riyanto",
            img: Cat1,
        },

        {
            id: 2,
            name: "shadow",
            img: Cat5,
        },

        {
            id: 3,
            name: "charlie",
            img: Cat3,
        },
    ]

    const catImgSelector = (id) => {
        let filteredCat = cats.filter((cat) => cat.id == id)
        setCatImg(filteredCat[0].img)

        fn(id)

    }

    return (
        <div className='container'>
            <div className='image-and-name flex justify-center items-center flex-col'>
                <div className='image-container flex justify-center items-center mb-6 w-28'>
                    <img className="rounded-[50%] w-[100px]  h-[100px]" style={{border:"4px solid white"}} src={catImg} alt="cat image"/>
                </div>

                <div className='name-container'>
                    <select className='bg-none border-0 tracking-widest' style={{background: "none", border:"none" , outline:"none"}} onChange={(e) => catImgSelector(e.target.value)}>
                        {cats.map((cat, index) => (
                            <option style={{background:"transparent", border:"none" }} value={index+1} key={index}>{cat.name.toUpperCase()}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default CatImg