import React from 'react';
import './style.css';


// TODO классы переименовать
const Comment = (props) =>{
    const {img, name, text, date}=props;
    return(<div className="comment">
        <img alt="avatar" src={img} className="avatar"/>
        <p className="name-comment"><a href="#link5" className="color-text">{name}</a></p>
        <p className="text-comment">{text}</p>
        <p className="date-comment">{date}<a href="#link6" className="color-text">Reply</a></p>
        </div>
    );

}
export {Comment}





// class Comment extends React.Component{
    // render() {
    //     const newComment = this.props.data.map(function (item) {
    //     return (
            {/*<div key={item.id}>*/}
                //
                {/*<img alt="avatar" src={item.img} className="avatar"/>*/}
                {/*<p className="name-comment"><a href="#link5" className="color-text">{item.name}</a></p>*/}
                {/*<p className="text-comment">{item.text}</p>*/}
                //
                {/*<p className="data-comment">{item.data}<a href="#link6" className="color-text">Reply</a></p>*/}
            // </div>
        // )
        // })
        // return (
            {/*<div>{newComment}</div>*/}
        // )
    // }
// }
