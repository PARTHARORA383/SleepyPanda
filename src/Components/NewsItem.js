import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let{title,description,urlToImage,totalResuls,newsUrl}=this.props;
    return (
      <div>
       <div className="col-lg-15 d-flex align-items-stretch h-100">
       <div className="card my-4 mx-3 text-center " style ={{width:"18rem"}}>
  <img src={urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} className="btn btn-dark">Read more</a>
  </div>
        </div>
 
</div>
      </div>
    )
  }
}
