"use client"
import React, {useState} from 'react'
import {BiSearch} from "react-icons/bi"
import MenuItem from "@/components/MenuItem"
import ThemeComp from "@/components/ThemeComp";
import {useRouter} from "next/navigation";
import Link from "next/link";

const Header = () => {
    const [keyword, setKeyword] =useState('')
    const router= useRouter()
    const searchFunc = (e)=>{
        if(e.key ==='Enter' && keyword.length >=3){
            router.push(`search/${keyword}`)
            setKeyword('')
        }


    }
    const menu = [
        {
            name:"About",
            url : "/about"
        },
        {
            name:"Sing In",
            url : "/login"
        }
    ]
    return (
        <div className="flex items-center gap-3 h-20 p-5">
            <Link href="/" className="bg-amber-600 rounded-lg p-3 text-2xl font-bold">MovieApp</Link>
            <div className="flex flex-1 items-center gap-3 border p-3 rounded-lg">
                <input value={keyword} onKeyDown={searchFunc} onChange={(e)=> setKeyword(e.target.value)} placeholder="Arama Yapınız !!!" className="outline-none flex-1 bg-transparent" type="text"/>
                <BiSearch size={25}/>
            </div>
            <ThemeComp/>
            {
                menu.map((mn,i) =>(
                    <MenuItem  mn={mn} key={i}/>

                ))
            }
        </div>
    )
}
export default Header
