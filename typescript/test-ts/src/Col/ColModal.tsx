import { Row } from 'antd/es';
import { Col } from 'antd/es';
import React,{Component} from 'react';
import Button from 'antd/es/button';

interface IProps {
     msg?: any
     MakeMoney?:any
     GETState?: any  //主要这段代码
     click?: any
}

class ColModal extends Component<IProps> {
    render() {
      return (
        <div className="gutter-example">
            <Row gutter={16}>
            <Col className="gutter-row" span={6}>
                <div className="gutter-box">{this.props.msg}</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
                <Button type="primary" onClick={this.props.click.bind(this,"666")}>Button</Button>
            </Col>
            </Row>
        </div>
      );
    }
  }
  
  export default ColModal;