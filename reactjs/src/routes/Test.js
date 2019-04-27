import React from 'react';
import { connect } from 'dva';

function Test() {
  return (
    <div >
     hello world1
    </div>
  );
}

Test.propTypes = {
};

export default connect()(Test);
