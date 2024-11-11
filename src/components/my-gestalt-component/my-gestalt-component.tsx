import React from 'react';
import { Box, ActivationCard } from 'gestalt';
import 'gestalt/dist/gestalt.css';

const MyGestaltComponent = () => {
    return (
        <div>
            <Box
                alignItems="center"
                display="flex"
                height="100%"
                justifyContent="center"
                padding={8}
            >
                <ActivationCard
                    dismissButton={{
                        accessibilityLabel: 'Dismiss card',
                        onDismiss: () => {},
                    }}
                    link={{
                        href: 'https://pinterest.com',
                        label: 'Learn more',
                        accessibilityLabel: 'Learn more: website claim status',
                    }}
                    message="We will notify you via email as soon as your site has been successfully claimed."
                    status="pending"
                    statusMessage="Pending"
                    title="Claim your website"
                />
            </Box>
        </div>
    );
};

export default MyGestaltComponent;
