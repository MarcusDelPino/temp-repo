import React, { Component } from "react"

import "./style.css"

import { loadPosts } from "../../utils/load-posts"
import { InputSearch } from "../../components/InputSearch"
import { Posts } from "../../components/posts"
import { Button } from "../../components/Button"



export class Home extends Component {
  state = {
    counter: 0,
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 2,
    searchValue: ''
  }

  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state
    const postAndPhotos = await loadPosts()
    this.setState({
      posts: postAndPhotos.slice(page, postPerPage),
      allPosts: postAndPhotos,
    })
  }

  loadMorePosts = () => {
    const { 
      postPerPage,
      posts, 
      allPosts, 
      page 
    } = this.state
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);
    console.log(nextPage, nextPosts);
    this.setState({ posts, page: nextPage });
  }

  handleChange = (e) => {
    const { value } = e.target
    // const { searchValue } = this.state
    this.setState({ searchValue:value })

  }

  render() {
    const { posts, page, postPerPage, allPosts, searchValue } = this.state
    const noMorePosts = page + postPerPage >= allPosts.length

    const filterPosts = !!searchValue ? 
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      )
    }) 
    : posts


    return (
      <section className="container">
        <div className="search-container">

        {!!searchValue &&(
          
          <h1>Search:{searchValue}</h1>

        )}
        <InputSearch 
          onChange={this.handleChange}
          value={searchValue}
        />
        </div>
        
        {filterPosts.length > 0 && (
          <Posts posts={filterPosts} />
        )} 
        {filterPosts.length === 0 && (
          <p>Não existem posts com {searchValue}</p>
        )}

        <div className="button-container"> 
          {!searchValue && (

            <Button 
            text={"Load More Posts"} 
            onClick={this.loadMorePosts} 
            disabled={noMorePosts}

          />
          )}

        </div>

      </section>
    )
  }
}
