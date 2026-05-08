function UserList(props){
let {user}=props;
    return <div className="text-center p-5 shadow-2xl rounded-2xl shadow-black-50 ">
        <h2 className="text-3xl text-amber-300">{user.name}</h2>
        <p className="text-bold mt-5">{user.email}</p>
           <img src={user.image} alt="" className="block m-auto rounded-3xl mt-5" />
    </div>
}
export default UserList