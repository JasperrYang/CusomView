import { get } from 'lodash';
import { useState, useEffect } from 'react';
import { Loading } from 'tdesign-react';
import event from '../event';

export const SysComponent = ({ url, props = {} }: { url: string; props: any; }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [SysCom, setSysCom] = useState<any>();

  useEffect(() => {
    event.addListener('eventMsg', val => {
      console.log('eventMsg',val);
    })
  }, []);

  useEffect(() => {
    if (!url) return;
    console.log(System);

    // eslint-disable-next-line
    System.import(url)
      .then((Com: any) => {
        const Component = get(Com, 'default');

        // 这里需要注意的是，res 因为是组件，所以类型是 function
        // 而如果直接 setSysCom 可以接受函数或者值，如果直接传递 setSysCom(Com)，则内部会先执行这个函数，则会报错
        // 所以值为函数的场景下，必须是 如下写法
        if (Component) {
          setSysCom(() => Component);
        } else {
          throw new Error('未找到组件');
        }
      })
      .catch((error: any) => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  if (!url) return null;
  if (error) return <div>error!!!</div>;

  return (
    <Loading loading={loading}>
      {SysCom && <SysCom {...props} event={event} />}
    </Loading>
  );
};
