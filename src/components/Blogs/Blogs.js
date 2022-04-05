import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-3xl text-purple-900 uppercase my-5'>Read Some Blogs</h1>
            <div className='text-left grid grid-cols-1 gap-10'>
                <div className='bg-purple-100 mx-20 p-10 rounded-lg'>
                    <h1 className='text-xl text-purple-700'>1. Purpose of Context API?</h1>
                    <p>Context API makes it simple and easy to exchange state across
                        a complete program (or a portion of one). We had some troubles
                        with props drill in the past. Context API is the greatest way
                        for avoiding these issues. If you need to create a library or
                        widget system, building on top of the Context API will provide
                        you with the majority of the functionality you want. Because
                        it's already incorporated into React, you also get the benefit
                        of a smaller bundle size. This isn't only for libraries you're
                        planning to publish. In a big application, maintaining internal
                        tooling will pay off in the long term.</p>
                </div>
                <div className='bg-purple-100 mx-20 p-10 rounded-lg'>
                    <h1 className='text-xl text-purple-700'>2. What are Semantic Elements?</h1>
                    <p>Semantic HTML elements are those that express their meaning in a
                        way that is both human and machine understandable. It's a lot
                        simpler to read now. When you look at the first piece of code
                        that uses semantic components, this is typically the first thing
                        you'll notice. It is more easily accessible. Search engines and
                        assistive technology (such as screen readers for visually impaired
                        people) can better grasp the context and content of your website,
                        resulting in a better user experience. Additionally, semantic aspects c
                        ontribute to more uniform code.</p>
                </div>
                <div className='bg-purple-100 mx-20 p-10 rounded-lg'>
                    <h1 className='text-xl text-purple-700'>3. Difference between Inline Block and Inline Elements?</h1>
                    <p><strong>Inline-Block: </strong>The element creates a block element box that flows with the
                        surrounding content like a single inline box . Block level elements take up as much space
                        as possible by default. But Inline block elements behave like block when it's inline.<br />
                        <strong>Inline-Elements: </strong>Inline elements can be found in the
                        HTML page's body. It can include data as well as
                        other inline elements. Inline items do not start on
                        new lines by default. Shorter structures are created by
                        using inline elements (than block level elements).</p>
                </div>
            </div>
        </div>

    );
};

export default Blogs;