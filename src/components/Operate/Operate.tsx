import * as React from 'react';

import { Modal } from 'antd';
import './Operate.css';

interface IPorps<T> {
  record: T;
  delTitle: string | React.ReactNode;
  delContent: string | React.ReactNode;
  editerCallBack: (porps: T) => void;
  deleteCallBack: (porps: T) => void;
  onlineCallBack: (porps: T) => void;
}

class Operate<T> extends React.Component<IPorps<T>, {}> {
  constructor(porps: IPorps<T>) {
    super(porps);
  }
  public render() {
    return (
      <div className="operate">
        <span
          className="item operate-editer"
          onClick={this.editerItem.bind(this, this.props)}
        >
        编辑
        </span>
        |
        <span
          className="item operate-del"
          onClick={this.deleteItem.bind(this, this.props)}
        >
          删除
        </span>
        |
        <span
          className="item operate-del"
          onClick={this.onlineItem.bind(this, this.props)}
        >
        上线
        </span>
      </div>
    );
  }

  private editerItem(porps: IPorps<T>) {
    porps.editerCallBack(porps.record);
  }

  private deleteItem(props: IPorps<T>) {
    console.log(props.record);
    Modal.confirm({
      title: props.delTitle,
      content: props.delContent,
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        props.deleteCallBack(props.record);
      },
    });
  }

  private onlineItem(props: IPorps<T>) {
    console.log('onlineItem');
    props.onlineCallBack(props.record);
  }

  // private downlineItem(props: IPorps<T>) {
  //   console.log('Downline')
  // }
}

export default Operate;
