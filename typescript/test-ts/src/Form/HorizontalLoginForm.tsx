import React, { PureComponent } from 'react'
import { Form } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form' //获取form表单的interface

interface IProps { //定义所需的相应接口
  // onSave : any,
  // onEdit : any,
  // handlevisible : any
}

class HorizontalLoginForm extends PureComponent<IProps & FormComponentProps> {

   render () {
    return (
      <Form layout="vertical">1111</Form>
    )
  }
}

export default Form.create<IProps & FormComponentProps>()(HorizontalLoginForm)