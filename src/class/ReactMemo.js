import React from 'react';
import memo from './../images/react-memo.jpg'

const ReactMemo = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px' }}>
            <h1>React Memo</h1>
            <p>When deciding to update DOM, React first renders your component, then compares the result with the previous render. If the render results are different, React updates the DOM.

                Current vs previous render results comparison is fast. But you can speed up the process under some circumstances.

                When a component is wrapped in React.memo(), React renders the component and memoizes the result. Before the next render, if the new props are the same, React reuses the memoized result skipping the next rendering</p>

            <img src={memo} alt="" style={{ height: '400px', width: '250px' }} />

            <h3>Example: How to use Memo()</h3>
            <p style={{ marginLeft: '20px' }}>
                <ol>
                    <li>
                        const ReactMemo = memo(()=&gt; &#123;
                         return &lt;div&gt; ... &lt;div&gt;
                        &#125;)
                    </li>
                    or
                    <li>
                        export default memo ( ReactMemo )
                    </li>
                </ol>
            </p>
        </div>
    );
};

export default ReactMemo;