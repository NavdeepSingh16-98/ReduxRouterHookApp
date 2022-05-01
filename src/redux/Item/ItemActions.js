import axios from 'axios'
export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export const getPosts = () =>({
    type:GET_POSTS
})
export const getPostsSuccess = (posts) =>({
    type:GET_POSTS_SUCCESS,
    payload:posts
})
export const getPostsFailure = () =>({
type:GET_POSTS_FAILURE
})

export function fetchPosts() {
    return async (dispatch) => {
      dispatch(getPosts())
  
     // try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data = await response.json()
//   console.log(response)
return new Promise((resolve,reject) =>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        debugger
                        console.log('response',response);
                        const data = response.data;
                        dispatch(getPostsSuccess(data))
               resolve(response)
                   }).catch(error =>{
                    dispatch(getPostsFailure())
                    reject(error)
                   })
})

     //   dispatch(getPostsSuccess(data))
     // } catch (error) {
    //    dispatch(getPostsFailure())
     // }
    }
  }

// export const fetchPosts = () =>{


//     return async (dispatch) =>{

        
//     }
// }
// export const fetchPosts = () =>{
//     debugger
//     return (dispatch) =>{
//       //  dispatch(fetchUsersRequest)
//         axios.get('https://jsonplaceholder.typicode.com/users').then(response =>{
//           //  const users = response.data
//            // dispatch(fetchUsersSuccess(users))
//            debugger
//            alert(JSON.stringify(response));

//         }).catch(error =>{
//            // const errorMsg = error.message
//          //   dispatch(fetchUsersFailure(errorMsg))
//         })
//     }
// }
// // export const fetchPosts = ()=>{
//     debugger
//     return  (dispatch) =>{
//       //  dispatch(getPosts)
//         axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
// debugger
//                 console.log('response',response);
//                // resolve(response)
//             })
//         // dispatch(getPosts())
//         // return new Promise((resolve,reject)=>{
//         //     axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
//         //         console.log('response',response);
//         //         resolve(response)
//         //     })
//         // })
//     }
// }