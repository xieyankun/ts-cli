import * as React from 'react';

class Broadcasting extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      current: '',
    };
  }
  public render() {
    return (
      <div>
        有声阅读
      </div>
    );
  }
}

export default Broadcasting;
