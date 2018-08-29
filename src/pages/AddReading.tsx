import * as React from 'react';

class AddReading extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      current: '',
    };
  }
  public render() {
    return (
      <div>
        <h1>新建有声阅读</h1>
      </div>
    );
  }
}

export default AddReading;
