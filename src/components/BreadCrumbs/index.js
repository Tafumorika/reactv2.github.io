import React from 'react';
import './style.css';
import {Link} from "../Link";

// TODO ссылки принимать из props
const BreadCrumbs = () => {
    return(
        <div className="breadCrumbs">
            <p className="bread-crumbs"><Link href="#link1">Home</Link>»<Link href="#link2">featured</Link>» A Post with Everything in it</p>
        </div>
    )
}
export {BreadCrumbs}