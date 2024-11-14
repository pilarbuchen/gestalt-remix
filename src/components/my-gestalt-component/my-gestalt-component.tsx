import React, { useState } from 'react';
import {
  Box,
  ActivationCard,
  Button,
  Text,
  Avatar,
  IconButton,
  SearchField,
  Modal,
  TextField,
  Dropdown,
  Heading,
  Badge,
  TapArea,
  Flex,
  Container,
} from 'gestalt';
import 'gestalt/dist/gestalt.css';

interface StatData {
  label: string;
  value: string;
}

interface Activity {
  action: string;
  time: string;
  status: 'ok' | 'warning' | 'error';
}

const MyGestaltComponent: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const statsData: StatData[] = [
    { label: 'Total Pins', value: '2,345' },
    { label: 'Monthly Views', value: '45.2K' },
    { label: 'Followers', value: '1,234' },
  ];

  const recentActivities: Activity[] = [
    { action: 'New pin created', time: '2 mins ago', status: 'ok' },
    { action: 'Board shared', time: '1 hour ago', status: 'ok' },
    { action: 'Comment received', time: '3 hours ago', status: 'warning' },
  ];

  return (
    <Box height="100vh" color="default">
      {/* Header */}
      <Box padding={4}>
        <Flex justifyContent="between" alignItems="center" gap={4}>
          <Heading size="400">Pinterest Dashboard</Heading>
          <Flex gap={4} alignItems="center">
            <SearchField
              accessibilityLabel="Search field"
              id="searchField"
              onChange={({ value }: { value: string }) => setSearchQuery(value)}
              placeholder="Search"
              value={searchQuery}
              size="lg"
            />
            <IconButton
              accessibilityLabel="Notifications"
              icon="bell"
              size="md"
            />
            <Avatar name="User Name" size="md" />
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box padding={4}>
        {/* Stats Cards */}
        <Box marginBottom={8}>
          <Heading size="400" accessibilityLevel={2}>Overview</Heading>
          <Flex gap={4} wrap justifyContent="between">
            {statsData.map((stat: StatData, index: number) => (
              <Container key={index}>
                <Box padding={4}>
                  <Flex direction="column" gap={2}>
                    <Text weight="bold" size="400">{stat.value}</Text>
                    <Text color="subtle">{stat.label}</Text>
                  </Flex>
                </Box>
              </Container>
            ))}
          </Flex>
        </Box>

        <Flex gap={4}>
          <Box flex="grow">
            {/* Website Claim Card */}
            <Box marginBottom={4}>
              <ActivationCard
                dismissButton={{
                  accessibilityLabel: 'Dismiss card',
                  onDismiss: () => {},
                }}
                link={{
                  href: '#',
                  label: 'Learn more',
                  accessibilityLabel: 'Learn more about website claim',
                }}
                message="We will notify you via email as soon as your site has been successfully claimed."
                status="pending"
                statusMessage="Pending"
                title="Claim your website"
              />
            </Box>

            {/* Recent Activities */}
            <Container>
              <Box padding={4}>
                <Flex direction="column" gap={4}>
                  <Heading size="400">Recent Activities</Heading>
                  {recentActivities.map((activity: Activity, index: number) => (
                    <TapArea key={index}>
                      <Flex justifyContent="between" alignItems="center">
                        <Flex direction="column" gap={1}>
                          <Text weight="bold">{activity.action}</Text>
                          <Text color="subtle" size="100">{activity.time}</Text>
                        </Flex>
                        <Badge
                          text={activity.status}
                          type={activity.status === 'ok' ? 'success' : 'warning'}
                        />
                      </Flex>
                    </TapArea>
                  ))}
                </Flex>
              </Box>
            </Container>
          </Box>

          {/* Quick Actions Sidebar */}
          <Container>
            <Box padding={4}>
              <Flex direction="column" gap={4}>
                <Heading size="400">Quick Actions</Heading>
                <Flex direction="column" gap={2}>
                  <Button
                    color="red"
                    text="Create New Pin"
                    onClick={() => setShowModal(true)}
                    fullWidth
                  />
                  <Button
                    color="gray"
                    text="Create Board"
                    fullWidth
                  />
                  <Button
                    color="gray"
                    text="Invite Friends"
                    fullWidth
                  />
                </Flex>
              </Flex>
            </Box>
          </Container>
        </Flex>
      </Box>

      {/* Create Pin Modal */}
      {showModal && (
        <Modal
          accessibilityModalLabel="Create new pin"
          heading="Create New Pin"
          onDismiss={() => setShowModal(false)}
          footer={
            <Flex justifyContent="end" gap={2}>
              <Button
                text="Cancel"
                onClick={() => setShowModal(false)}
                color="gray"
              />
              <Button
                color="red"
                text="Create Pin"
                onClick={() => setShowModal(false)}
              />
            </Flex>
          }
        >
          <Box padding={4}>
            <Flex direction="column" gap={4}>
              <TextField
                id="pin-title"
                label="Pin Title"
                onChange={() => {}}
                placeholder="Enter pin title"
              />
              <TextField
                id="pin-description"
                label="Description"
                onChange={() => {}}
                placeholder="Tell everyone what your Pin is about"

              />
            </Flex>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default MyGestaltComponent;
