import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Post } from './Post'
import { fetchPosts } from '../redux'

const PostsPage =({ dispatch, loading, posts, hasErrors }) =>{
    const renderPosts = () =>{
        if(loading) return <p>Loading Posts...</p>
        if(hasErrors) return <p>Unable to display posts.</p>
        return posts.map((post) =><Post key={post.id} post={post} />)
    }
    useEffect(()=>{
      //  alert('post called');
      //  debugger;
dispatch(fetchPosts());
    },[dispatch])
    return(
        <section>
            <h1>Posts</h1>
            {renderPosts()}
        </section>
    )
}

const mapStateToProps = (state) =>(
    {
        loading:state.posts.loading,
        posts:state.posts.posts,
        hasErrors:state.posts.hasErrors
    }
)
// const mapDispatchToProps = dispatch =>{
//     return{
//         fetchPosts: () => dispatch(fetchPosts)
//     }
// }



export default connect(mapStateToProps)(PostsPage)