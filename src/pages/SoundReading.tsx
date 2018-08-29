import * as React from 'react';
import {
  Table,
  Form,
  Input,
} from 'antd';

const FormItem = Form.Item;

import Operate from '../components/Operate/Operate';

import ItemData from '../interfaces/ItemData';
import { ColumnProps } from 'antd/lib/table';

interface IProps {
  list: ItemData[];
}

interface IState {
  listData: ItemData[];
  columns: ColumnProps<ItemData>[];
}

class SoundReading extends React.Component<IProps, IState> {

  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {
      listData: [
        {
          id: 0,
          albumId: '2233',
          picture: 'string',
          title: '格林童话全集',
          titlePlay: '格林童话',
          type: 1,
          status: 2,
          modifiedDate: '2018-09-20',
        },
        {
          id: 1,
          albumId: '2233',
          picture: 'string',
          title: '格林童话全集',
          titlePlay: '格林童话',
          type: 1,
          status: 2,
          modifiedDate: '2018-09-20',
        },
      ],
      columns: [
        {
          title: '编号',
          dataIndex: 'name',
          key: 'name',
          align: 'center',
          render: (text, recoder, index) => {
            return index + 1;
          },
        },
        {
          title: '专辑ID',
          dataIndex: 'albumId',
          key: 'albumId',
          align: 'center',
        },
        {
          title: '专辑图片',
          dataIndex: 'picture',
          key: 'picture',
          align: 'center',
        },
        {
          title: '专辑名称',
          dataIndex: 'title',
          key: 'title',
          align: 'center',
        },
        {
          title: '专辑展示名称',
          dataIndex: 'titlePlay',
          key: 'titlePlay',
          align: 'center',
        },
        {
          title: '分类列表',
          dataIndex: 'type',
          key: 'type',
          align: 'center',
        },
        {
          title: '更新时间',
          dataIndex: 'modifiedDate',
          key: 'modifiedDate',
          align: 'center',
        },
        {
          title: '当前状态',
          dataIndex: 'status',
          key: 'status',
          align: 'center',
        },
        {
          align: 'center',
          dataIndex: 'operate',
          key: 'operate',
          title: '操作',
          render: (text, record, index) => {
            return (
              <React.Fragment>
                {/* <Operate<ItemData> /> */}
                <Operate<ItemData>
                  record={record}
                  editerCallBack={this.editerCallBack}
                  deleteCallBack={this.deleteCallBack}
                  onlineCallBack={this.onlineCallBack}
                  delContent={
                    <div style={{ fontSize: '12px' }}>
                      删除后 App端不在推荐展示风格电台
                      <span style={{ color:'#f5222d' }}>
                      "{record.title}"</span>
                      ，确定要删除吗？
                    </div>}
                  delTitle={'删除推荐场景电台'}
                />
              </React.Fragment>
            );
          },
        },
      ],
    };
  }
  public render() {
    const { listData, columns } = this.state;
    return (
      <div>
        <div className="filterForm">
          <h3 className="pmTit">筛选区</h3>
          <Form>
            <FormItem>
              <Input type="password" placeholder="Password" />
            </FormItem>
            <FormItem>
              <Input type="password" placeholder="Password" />
            </FormItem>
            <FormItem>
              <Input type="password" placeholder="Password" />
            </FormItem>
          </Form>
        </div>
        <Table
          rowKey="id"
          size={'middle'}
          dataSource={listData}
          columns={columns}
          bordered={true}
          pagination={false}
          locale={{ emptyText:'暂无数据' }}
        />
      </div>
    );
  }

  private editerCallBack = (record: ItemData) => {
    console.log('editerCallBack');
  }

  private deleteCallBack = (record: ItemData) => {
    console.log('editerCallBack');
  }

  private onlineCallBack = (record: ItemData) => {
    console.log('editerCallBack');
  }
}

export default SoundReading;
