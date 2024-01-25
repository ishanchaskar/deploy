import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:false,
      page:1,
      totalResults : 0
    }
    document.title = this.props.category;
  }
  async UpdateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f69e692872f4b768ab7316b611c2cc7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    console.log(data);
    let ParsedData = await data.json();
    this.setState({articles: ParsedData.articles , totalResults:ParsedData.totalResults, loading: false})
  }
  async componentDidMount() {
    this.UpdateNews();
  }
  
  // handlePrevClick = async () => {
  //   this.setState({
  //     page:this.state.page- 1
  //   })
  // this.UpdateNews();
  // }


  // handleNextClick= async() => {
  // this.setState({
  //   page:this.state.page+ 1
  // })
  // this.UpdateNews();
  // }

    fetchMoreData = async() => {
    this.setState({page : this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f69e692872f4b768ab7316b611c2cc7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    console.log(data);
    let ParsedData = await data.json();
    this.setState({articles: this.state.articles.concat(ParsedData.articles) , totalResults:ParsedData.totalResults})
  };

  render() {
    return (
      <>
        <h2>Top Headlines of NewsMonkey</h2>
        {/* {this.state.loading && <Spinner/>}? */}
        <InfiniteScroll 
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className='container'>
        <div className='row'>      
        <h2 style={{textAlign:"center" , margin:"20px"}}>Top Headlines of NewsMonkey</h2>
         {this.state.articles.map((element) =>{
      return  <div className='col-md-4'  key={element.url}>
      <NewsItem title={element.title? element.title.slice(0,45): ""} description={ element.description? element.description.slice(0,88): ""} url={element.urlToImage}  NewsUrl={element.url} author={element.author} date = {element.publishedAt} source = {element.source.name}/>
    </div>
         })}
        </div>
        </div>
        </InfiniteScroll>      
      </>
    )
  }
}
export default News 