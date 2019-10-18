import React from 'react'
import InStructModal from '@material-ui/core/Modal'

export default function Modal() {

    return (
        <div>
            <InStructModal 
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}>
                <div style={{
                            color: 'white',
                            textAlign: 'center',
                        }}>
                <button onClick = {this.handleClose}>X</button>
                <div>
                    Please read the whole descripiton and install the app
                </div>
                </div>
            </InStructModal>
        </div>
    )
}
