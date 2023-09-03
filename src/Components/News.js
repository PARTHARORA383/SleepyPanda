import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {

  constructor() {
    super();
    console.log("hello")
    this.state = {
      articles: [],
      page:1
    }
  }
    static defaultProps={
      q:"bitcoin",
      pageSize:8
    }
    static propTypes = {
    q:PropTypes.string,
    pageSize:PropTypes.number
    
   }

  async UpdataData(){
    const url = `https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=374ac3d36c914b79940b789d95bee6ca&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults:this.totalResults,
 
    })
  }

componentDidMount() {
    this.UpdataData();
  }

  fetchMoreData=async()=>{
    let url = `https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=374ac3d36c914b79940b789d95bee6ca&pageSize=${this.props.pageSize}&page=${this.state.page+1}`
    this.setState({page:this.state.page+1})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResults:this.totalResults,
    })

  };
  render() {
    return (
      <div>
        <h2 className='text-center'style={{paddingTop:'80px'}}>News Headlines</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<h4>{<Spinner/>}</h4>}
        > 
          {/* {this.state.articles.map((i, index) => (
            <div  key={index}>
            
            </div>
          ))} */}
      
      <div className='container'>
        <div className='row my-3'>
          {this.state.articles.map((element) => {
            return  <div className='col mx-3' key={element.url}><NewsItem title={element.title}  description={element.description} urlToImage={element.urlToImage} newsUrl={element.url} />
            </div>
          })
        }
        </div>
        </div>
         </InfiniteScroll>
      </div>
    )
  }
}
