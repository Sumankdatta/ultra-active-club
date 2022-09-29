import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
           <div>
            <h1>1. How does react work?</h1>
            <p>
            ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.

Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.
            </p>
           </div>
           <div>
            <h1>2. what is the difference between props and state?</h1>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event.Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components.</p>
           </div>
           <div>
            <h1>
           3. How the useEffect Hook Works except data load?
            </h1>
            <p>The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.

Pretty much anything you want to “do” in a React component other than return JSX (any sort of side effect), will go into a useEffect. (and you can have more than one useEffect per component, too)

All this power comes with a tradeoff: useEffect can be confusing until you understand how it works.</p>
           </div>
            
        </div>
    );
};

export default Blog;