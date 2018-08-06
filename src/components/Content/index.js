import React from 'react';
import './style.css';
import {IconList} from "../IconList";
import {Link} from "../Link";

// TODO: иконки в отдельный компонент
const Content = () => {
    return (
        <div>
        <h1>A Post with Everything In It</h1>

            <IconList/>

    <img alt="Flower and butterfly" className="content-img" src="/img/20160329105513-bf3f94fb.jpg"/>
        <p className="content-text-style">Pellentesque habitant morbi tristeque senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
        Donec eu libero sit amet guam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Lorem ipsum
    dolor sit amet, consectetuer adipiscing elit. Curabitur quam augue, vechicula quis, tincidunt vel, varius vitae,nulla.
        Sed convallis orci. Duis libero orci, pretium a,<Link href="#link3">convallis quis</Link>, pellentesque a, dolor.
        Curabitur vitae nisi non dolor vestibulum consequat.</p>
            {/* TODO: переделать на h1-6*/}
    <div className="heads">
        <h1>Level 1 Heading</h1>
        <h2>Level 2 Heading</h2>
        <h3>Level 3 Heading</h3>
        <h4>Level 4 Heading</h4>
        <h5>Level 5 Heading</h5>
        <h6>Level 6 Heading</h6>
    </div>
    <p className="content-text-style">Pellentesque habitant morbi tristigue senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
        Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
        Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum,
        eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.
        Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam
    erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,metus
    </p>
    <h2>An Unordered List</h2>
    <ul className="content-list-squares">
        <li className="content-list-item-squares">Vestibulum in mauris semper tortor interdum ultrices.</li>
    <li className="content-list-item-squares">Sed vel lorem et justo laoreet bibendum. Donec dictum</li>
    <li className="content-list-item-squares">Etiam massa libero, lacinia at, commodo in, tincidunt a, purus.</li>
    <li className="content-list-item-squares">Prasent volutpat eros quis enim blandit tincidunt.</li>
    <li className="content-list-item-squares">Aenean eu libero nec lectus ultricies laoreet. Donec rutrum, nisi
    vel egestas ultrices, ipsum urna sagittis libero, vitae vestibulum dui dolor vel velit.</li>
</ul>
    <h2>Image with no alignment</h2>
    <div>
        <img className="content-img" alt="Girl and phone" src="/img/Optimized-Contact-me-1030x686.jpg"/>
        </div>
        <p className="fonts">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <h2>Image with left alignment</h2>

        <div>
            <img className="content-img content-img-float" alt="Girl" src="/img/photo10.jpg"/>
            <p className="content-text-style">Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat. Quisgue metus enim, venenatis fermentum,
                mollis in, porta et, nibh. Duis vulputate elit in elit. Mauris dictum libero id justo. Fusce in est. Sed nec diam.
                Pellentesque habitent morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque semper nibh
                eget nibh. Set tempor. Fusce erat. Lorem ipsum dolor crunk amizzle, consectetuer adipiscing elit. Nullam funky fresh fizzle,
                owned volutpizzle, brizzle quizzle, qravida vizzle, arcu. Pellentesque away tortizzle. Sizzle sheezy. Shit at fizzle
                tempus tempor. Dizzle rizzle nibh et fo shizzle. Pimpin' izzle tortor. Gizzle gizzle phat shiz.</p>
        </div>
            <div className="clear-div"/>
        <h2>An Ordered List</h2>
        <ol className="content-list" >
            <li className="content-list-item">Vestibulum in mauris semper tortor interdum ultrices.</li>
            <li className="content-list-item">Sed vel lorem et justo laoreet bibendum. Donec dictum.</li>
            <li className="content-list-item">Etiam massa libero, lacinia at, commodo in, tincidunt a,purus.</li>
            <li className="content-list-item">Praesent volutpat eros quis enim blandit tincidunt.</li>
            <li className="content-list-item">Aenean eu libero nec lectus ultricies laoreet. Donec rutrum, nisi vel egestas ultrices, ipsum urna sagitties libero,
                vitae vestibulum dui dolor vel velit.
            </li>
        </ol>
        <p className="content-tags-link">Tags: <Link href="#link4">featured</Link>, <Link href="#link5">Tag 2</Link></p>
        <h3>5 Comments</h3>
        </div>
    )
}
 export {Content}