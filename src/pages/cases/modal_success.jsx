import React from 'react'
import Modal from 'react-bootstrap/Modal'

import { UilPlaneFly } from '@iconscout/react-unicons'



export const SuccessModal = (props) => {

    return (
        <Modal show={props.show} onHide={props.onHide}>
                    <Modal.Header  closeButton>
        </Modal.Header>
            <Modal.Body>
                <div>
                    <h5>You are all set up!</h5>
                    <p>Good luck with your journey!</p>
                    <div> <UilPlaneFly size="40" /></div>
                </div>
            </Modal.Body>
            <Modal.Footer >
        </Modal.Footer>
        </Modal>
    )
}