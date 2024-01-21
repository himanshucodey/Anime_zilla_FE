import React from 'react'

export const AnimeList= ({AnimeList})=> {
  return (
    <>
    {
      AnimeList?(
        AnimeList.map((anime,index)=>{
          return(
            <div className="card" key={index}>
            <img src="https://cdn.myanimelist.net/images/anime/13/17405l.jpg" alt="animeImage" />
     <div className="anime-info">
        <h4>{animeData}</h4>
     </div>
        </div>
          )
        })
      ):"not found"
    }

    </>
  )
}
