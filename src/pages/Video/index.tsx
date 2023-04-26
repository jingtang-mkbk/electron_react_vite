import { useCreation, useUpdate } from '@/hooks';
import { Button } from 'antd';
import React, { useState } from 'react';

const Video: React.FC = () => {
  const [_, setFlag] = useState<boolean>(false)

  const update = useUpdate();

  const getNowData = () => {
    return Math.random()
  }

  const nowData = useCreation(() => getNowData(), []);

  return (
    <>
    <div style={{padding: 50}}>
      <div>正常的函数： {getNowData()}</div>
      <div>useCreation包裹后的： {nowData}</div>
      <Button type='primary' onClick={() => {setFlag(v => !v)}}> 渲染</Button>
    </div>
    <hr />
    <div style={{padding: 50}}>
      <div>时间：{Date.now()}</div>
      <Button color='primary' onClick={update}>更新时间</Button>
    </div>
    </>
  )
}

export default Video;
