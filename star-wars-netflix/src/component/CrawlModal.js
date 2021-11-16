import React from 'react';
import { Modal, Typography } from '@mui/material'
import { Box } from '@mui/system';

function CrawlModal(props){


    return(
        <div>
            <Modal
                open={props.open}
                onClose={props.close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box>
                <Typography className="ModalTypo"> {props.crawl} </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default CrawlModal;