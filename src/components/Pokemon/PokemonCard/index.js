import React from 'react';
import {
  Box,
  Card,
  Flex,
  OverlayTrigger,
  Modal,
  Button,
} from '@procore/core-react';

import PokemonPopup from '../PokemonPopup';

const PokemonCard = ({ name, image, classification }) => (
  <Box margin="md">
    <Card variant="hoverable" style={{ width: '200px' }}>
      <OverlayTrigger
        trigger="hover"
        overlay={<PokemonPopup classification={classification} />}
      >
        <Box padding="md">
          <Flex direction="column">
            <Modal.State>
              {({ isShowing, show, hide }) => (
                <div>
                  <img
                    alt={name}
                    src={image}
                    style={{ height: 75, width: 75, marginBottom: 10 }}
                    onClick={show}
                  />
                  <h4 className="capitalize">{name}</h4>
                  <Modal open={isShowing} onClickOverlay={hide} placement="top">
                    <Modal.Header onClose={hide}>{name}</Modal.Header>
                    <Modal.Body>
                      <Flex direction="column">
                        <img
                          alt={name}
                          src={image}
                          style={{
                            height: 100,
                            width: 100,
                          }}
                        />
                      </Flex>
                    </Modal.Body>
                    <Modal.Footer>
                      <Modal.FooterButtons>
                        <Button variant="tertiary" onClick={hide}>
                          Cancel
                        </Button>
                        <Button variant="primary" onClick={hide}>
                          Add To Team
                        </Button>
                      </Modal.FooterButtons>
                    </Modal.Footer>
                  </Modal>
                </div>
              )}
            </Modal.State>
          </Flex>
        </Box>
      </OverlayTrigger>
    </Card>
  </Box>
);

export default PokemonCard;
