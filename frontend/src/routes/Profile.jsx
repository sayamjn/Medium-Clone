import React, {useContext} from 'react'
import AuthContext from '../utils/AuthProvider'
import { Link } from 'react-router-dom'

// import {deletePost } from '../server/server'
// function handleDelete(e,i) {
// const {currentUser} = useContext(AuthContext)

//     currentUser.posts.map((e,i) =>{
//         deletePost(e._id, data).then((res) => {
//             if (res.success) {
//               const updatedData = data.filter((e) => e.id !== id);
//               setData(updatedData);
//             }
//           }); 


//     } 
// )

//   };
  
  
function Articles({heading, postId}){

    // console.log(postId);

    return(
        <div className="card mb-3">
            <div className="card-body d-flex justify-content-between">
                <h5 className="card-title">{heading}</h5>
      <Link className="w-25 btn btn-dark" to={`/delete/${postId}`}>Delete</Link>
            </div>
        </div>
    )
}


export default function Profile() {

    const {currentUser} = useContext(AuthContext)
  return (
    <div className="container mt-5 my-5 p-5">
    <div className="row profile p-3">
		<div className="col-md-3">
			<div className="profile-sidebar p-2">
				
				<div className="profile-userpic">
                <img src="https://via.placeholder.com/64" className="mr-3" alt="Dummy Profile Avatar" />
				</div>
                <h5 className="mt-0">{currentUser.username}</h5>
                            <p>Followers: {currentUser.following}</p>
                            <p>Follows: {currentUser.followers}</p>
                            <p>Articles: {currentUser.posts.length}</p>
				<div className="profile-usertitle">
					<div className="profile-usertitle-name">
                    {currentUser.username}
					</div>
				</div>
				<div className="profile-userbuttons">
					<button type="button" className="btn btn-success btn-sm">Follow</button>
					<button type="button" className="btn btn-danger btn-sm">Message</button>
				</div>
			                    
                                           
        
        
			</div>
		</div>
		<div className="col-md-9">
            <div className="profile-content">
			   
            <div className="card mb-3">
                <div className="card-header">
                    <h3>Articles</h3>
                </div>
                <div className="card-body">
                {
                    currentUser.posts.map((e,i) => <Articles key={'Something+' + i} heading={e.heading} postId={e._id}  />)
                }
                
                </div>
            </div>
            </div>
		</div>
	</div>
</div>
   
  )
}
