import React from 'react';
import {
    Box, Button, Divider, Heading, Text, VStack, SimpleGrid, Avatar, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, Select, Checkbox, Stack, Table, Thead, Tbody, Tr, Th, Td
  } from '@chakra-ui/react';

const ProfileSection = ({ title, children }) => (
  <Box>
    <Heading as="h3" size="md">{title}</Heading>
    {children}
  </Box>
);

const EditModal = ({ isOpen, onClose, title, children }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Edit {title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>
    </ModalContent>
  </Modal>
);

const Profile = () => {
  const { isOpen: isEditUserOpen, onOpen: onEditUserOpen, onClose: onEditUserClose } = useDisclosure();
  const { isOpen: isEditSkinProfileOpen, onOpen: onEditSkinProfileOpen, onClose: onEditSkinProfileClose } = useDisclosure();
  const { isOpen: isEditPreferencesOpen, onOpen: onEditPreferencesOpen, onClose: onEditPreferencesClose } = useDisclosure();
  const { isOpen: isOrderDetailsOpen, onOpen: onOrderDetailsOpen, onClose: onOrderDetailsClose } = useDisclosure();
  
  const orders = [
    { id: '001', date: '2024-04-16', total: '$150.00', status: 'Delivered' },
    { id: '002', date: '2024-04-24', total: '$90.00', status: 'Dispatched' },
    { id: '003', date: '2024-05-02', total: '$120.00', status: 'Processing' },
  ];

  return (
    <Box padding="4" borderWidth="1px" borderRadius="lg" width="50%" mx="auto" my="10">
      <VStack spacing={4} align="stretch">

        {/* User Information */}
        <ProfileSection title="User Information">
          <SimpleGrid columns={2} spacing={10}>
            <Stack spacing={3}>
                <Box marginX="6" marginY="6">
                <Avatar size="xl" name="Kim Fung" />
                </Box>
            </Stack>

            <Stack spacing={3}>
                <Text fontWeight="bold">Kim Fung</Text>
                <Text>kim@example.com</Text>
                <Text>Phone: Optional</Text>
                <Button width="75px" colorScheme="gray" onClick={onEditUserOpen}>Edit</Button>
            </Stack>
          </SimpleGrid>
        </ProfileSection>
        <Divider />

        {/* Skin Profile */}
        <ProfileSection title="Skin Profile">
            <Box marginY="3">
                <Stack spacing={3}>
                    <Text>Skin Type: Combination</Text>
                    <Text>Concerns: Dryness, Acne</Text>
                    <Button width="75px" colorScheme="gray" onClick={onEditSkinProfileOpen}>Edit</Button>
                </Stack>
            </Box>
        </ProfileSection>
        <Divider />

        {/* Preferences */}
        <ProfileSection title="Preferences">
            <Box marginY="3">
                <Stack spacing={3}>
                    <Text>Product Recommendations: On</Text>
                    <Text>Notification Preferences: Email, App</Text>
                    <Text>Language: English</Text>
                    <Text>Currency: USD</Text>
                    <Button width="75px" colorScheme="gray" onClick={onEditPreferencesOpen}>Edit</Button>
                </Stack>
            </Box>
        </ProfileSection>
        <Divider />

        {/* Order History */}
        <ProfileSection title="Order History">
            <Box marginY="3">
            <Table variant="simple">
                <Thead>
                <Tr>
                    <Th>Order ID</Th>
                    <Th>Date</Th>
                    <Th>Total</Th>
                    <Th>Status</Th>
                    <Th isNumeric>Actions</Th>
                </Tr>
                </Thead>
                <Tbody>
                {orders.map(order => (
                    <Tr key={order.id}>
                    <Td>{order.id}</Td>
                    <Td>{order.date}</Td>
                    <Td>{order.total}</Td>
                    <Td>{order.status}</Td>
                    <Td isNumeric>
                        <Button size="sm" colorScheme="gray" onClick={onOrderDetailsOpen}>Details</Button>
                    </Td>
                    </Tr>
                ))}
                </Tbody>
            </Table>
            </Box>
        </ProfileSection>
        {/* <Divider /> */}

        {/* Edit Modal for User Information */}
        <EditModal isOpen={isEditUserOpen} onClose={onEditUserClose} title="User Information">
            <Stack spacing={4}>
                <FormControl>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Enter Your Name" />
                </FormControl>
                <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder="123-456-7890" />
                </FormControl>
            </Stack>
        </EditModal>

        {/* Edit Modal for Skin Profile */}
        <EditModal isOpen={isEditSkinProfileOpen} onClose={onEditSkinProfileClose} title="Skin Profile">
            <Stack spacing={4}>
                <FormControl>
                <FormLabel>Skin Type</FormLabel>
                <Select placeholder="Select skin type">
                <option>Oily</option>
                <option>Dry</option>
                <option>Combination</option>
                <option>Balanced</option>
                <option>Sensitive</option>
                </Select>
                </FormControl>
                <FormControl>
                <FormLabel>Concerns</FormLabel>
                    <VStack align="stretch" spacing={4}>
                        <Checkbox size="md" isChecked>Acne</Checkbox>
                        <Checkbox size="md">Aging</Checkbox>
                        <Checkbox size="md">Dark Spots</Checkbox>
                        <Checkbox size="md" isChecked>Dryness</Checkbox>
                        <Checkbox size="md">Dullness</Checkbox>
                        <Checkbox size="md">Pores</Checkbox>
                        <Checkbox size="md">Redness</Checkbox>
                        <Checkbox size="md">Wrinkles</Checkbox>
                    </VStack>
                </FormControl>
            </Stack>
        </EditModal>

        {/* Edit Modal for Preferences */}
        <EditModal isOpen={isEditPreferencesOpen} onClose={onEditPreferencesClose} title="Preferences">
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Recommendations</FormLabel>
                <Checkbox size="md" isChecked>Enable Product Recommendations</Checkbox>
            </FormControl>
            <FormControl>
              <FormLabel>Notifications</FormLabel>
                <Checkbox size="md" isChecked>Receive Email Notifications</Checkbox>
                <Checkbox size="md" isChecked>Receive App Notifications</Checkbox>
            </FormControl>
            <FormControl>
              <FormLabel>Language</FormLabel>
              <Select defaultValue="English">
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Chinese">Chinese</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Currency</FormLabel>
              <Select defaultValue="USD">
                <option value="USD">USD</option>
                <option value="EUR">Euro</option>
                <option value="HKD">Hong Kong Dollar</option>
              </Select>
            </FormControl>
          </Stack>
        </EditModal>

        {/* Modal for Viewing Order Details */}
        <Modal isOpen={isOrderDetailsOpen} onClose={onOrderDetailsClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Order Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Thank You For Ordering</Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </VStack>
    </Box>
  );
};

export default Profile;