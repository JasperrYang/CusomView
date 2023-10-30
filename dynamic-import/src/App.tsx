import React, { useState } from 'react';
import { SysComponent } from './plugins/SysComponent'


const App = () => {
  const [count, setCount] = useState<number>(0);
  const [url, setUrl] = useState<string>('');
  fetch('http://localhost:3000/plugin')
    .then(async (res) => {
      const body = await res.json();
      setUrl(body?.module);
    })
  return (
    <div id="app">
      <SysComponent
        url={url}
        props={{
          count,
          onClick: () => setCount(count+1),
          comp: (<h1>测试</h1>)
        }}
      />
    </div>
  )
}

export default App