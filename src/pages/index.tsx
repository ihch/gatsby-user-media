import * as React from 'react';

const IndexPage: React.FC = () => {
  const [toggle, setToggle] = React.useState(false);
  const [stream, setStream] = React.useState<MediaStream>();

  React.useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true
    }).then(r => {
      setStream(r);
      console.log(r);
    });
  }, [toggle]);

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => setToggle(!toggle)}>button</button>
    </div>
  );
};

export default IndexPage;
