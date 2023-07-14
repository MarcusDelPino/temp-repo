// import React, { Component } from "react"
// import "./App.css"

// class App extends Component {
//   // constructor(props){
//   //   super(props)
//   //   // this.clicked = this.clicked.bind(this)

//   //   this.
//   state = {
//     counter: 0,
//     posts: [
//       {
//                 id: 1,
//                 title: "Titulo 1",
//                 body: "Corpo 1",
//               },
//               {
//                 id: 2,
//                 title: "Titulo 2",
//                 body: "Corpo 2",
//               },
//               {
//                 id: 3,
//                 title: "Titulo 3",
//                 body: "Corpo 3",
//               }
//     ],
//   }

//   // componentDidMount() {
//   //   this.setState({
//   //     posts: [
//   //       {
//   //         id: 1,
//   //         title: "Titulo 1",
//   //         body: "Corpo 1",
//   //       },
//   //       {
//   //         id: 2,
//   //         title: "Titulo 2",
//   //         body: "Corpo 2",
//   //       },
//   //       {
//   //         id: 3,
//   //         title: "Titulo 3",
//   //         body: "Corpo 3",
//   //       },
//   //     ],
//   //   })
//   // }

//   // componentDidMount(){
//   //   setTimeout(() => {
//   //     this.setState({
//   //           posts: [
//   //             {
//   //               id: 1,
//   //               title: "Titulo 1",
//   //               body: "Corpo 1",
//   //             },
//   //             {
//   //               id: 2,
//   //               title: "Titulo 2",
//   //               body: "Corpo 2",
//   //             },
//   //             {
//   //               id: 3,
//   //               title: "Titulo 3",
//   //               body: "Corpo 3",
//   //             },
//   //           ],
//   //         })
//   //   }, 3000)
//   // }

//   timeoutUP = null

//   handleTimeOut = () => {
//     const { posts, counter } = this.state
//     posts[0].title = 'O Titulo alterou'
    

//     this.timeoutUP = setTimeout(() => {
//       this.setState({ counter: counter + 1 })
//       this.setState({ posts })
//     }, 5000)
//   }

//   componentDidMount(){
//     this.handleTimeOut()
//   }

//   componentWillUnmount(){
//     clearTimeout(this.timeoutUP)
//   }

//   componentDidUpdate(){
//     this.handleTimeOut()
   
//   }

//   render() {
//     const { posts, counter } = this.state
 
//     return (
//       <div className="App">
//         <h1>{counter}</h1>
//         {posts.map((post) => (
//           <div key={post.id}>
//             <h1>{post.title}</h1>
//             <p>{post.title}</p>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

// export default App
