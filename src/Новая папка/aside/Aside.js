import React from "react";
import myClass from "./Aside.module.css";
import Items from "../components/Navbar/Navbar";
import Friends from "./Friends/Friends";




const Aside =(props)=> {
        return (
            <aside className={myClass.aside}>
                <Items menuItem={props.state.menuItem} />
                <Friends friends={props.state.friends}/>
            </aside>
        )

}

export default Aside;
// const Aside = () =>{
//     return(
//         <aside className={myClass.aside}>
//             <nav className='nav'>
//                 <ul>
//                     <li>
//                         <a className={`${myClass.AppLink} ${myClass.active}`}>Profile</a>
//                     </li>
//                     <li>
//                         <a className={myClass.AppLink}>Messages</a>
//                     </li>
//                     <li>
//                         <a className={myClass.AppLink}>News</a>
//                     </li>
//                     <li>
//                         <a className={myClass.AppLink}>Music</a>
//                     </li>
//                     <li>
//                         <a className={myClass.AppLink}>settings</a>
//                     </li>
//                 </ul>
//             </nav>
//         </aside>
//
//
//     );
// }
//
// export default Aside;