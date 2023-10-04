import React from 'react'
import Movies from "@/components/Movies";
import {useSearchParams} from "next/navigation";

export const metadata = {
    title: 'MovieApp',
}
const Page = async ({searchParams}) => {


    const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=633176bfe6ba148117bba059045ce768&language=en-US&page=1 `,
        {next: {revalidate: 10000}})

    const data = await res.json();
    console.log(data)
    return (
        <div className="flex items-center justify-center flex-wrap gap-3">
            {
                data?.results?.map((dt, i) => (
                    <Movies key={i} dt={dt}/>

                ))
            }
        </div>
    )
}
export default Page
