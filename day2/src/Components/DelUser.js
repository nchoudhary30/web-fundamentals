import React, { PureComponent } from 'react';
import { Button } from 'antd';

class DelUser extends PureComponent {

    render() {
        return (
            <div>
                <Button onClick={() => {
                    this.props.deleteuser(this.props.id)
                }}>Delete</Button>
            </div>
        )
    }
}

export default DelUser;