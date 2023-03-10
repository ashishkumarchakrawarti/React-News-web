import React from 'react'

const NewsItem=(props)=>{


   let {title, description, imageUrl, newsUrl, author, date, source}= props;
    return (
      <div className="my-3">
         <div>
            <div className="card">
               <div style={{
                  display:'flex',
                  justifyContent: 'flex-end',
                  position:'absolute',
                  right:'0'
               }}>
                    <span className= 'badge rounded-pill bg-warning text-dark'>{source}</span>
               </div>
                <img src={!imageUrl ? "https://images.livemint.com/img/2023/02/04/600x338/ff_max_1662000070768_1675485623038_1675485623038.jpg" : imageUrl} className="card-img-top" alt="..."/>
               <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author ? "unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-warning"><b>Read more</b></a>
               </div>
            </div>
         </div>
      </div>  
    )
  }


export default NewsItem
