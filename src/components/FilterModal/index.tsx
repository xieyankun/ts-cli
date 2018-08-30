import * as React from 'react';

import { Row, Col } from 'antd';

import './main.less';

class FilterModal extends React.Component<any> {

  constructor(porps: any) {
    super(porps);
  }

  componentDidMount() {
  }

  public render() {

    return (
      <div className="filter-modal">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
          <h2>筛选区</h2>
          </Col>
          <Col className="gutter-row" span={18}>
            <div className="gutter-box">col-6</div>
            {this.props.children}
          </Col>
        </Row>
        {/* <div className="fm-title">
          <h2>筛选区</h2>
        </div>
        <div className="fm-content">
          {this.props.children}
        </div> */}
      </div>
    );
  }

}

export default FilterModal;
