import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        {showProfileData && (
          <>
            <Text>Igor Pimentel</Text>
            <Text color="gray.300" fontSize="small">
              igorpimentel@id.uff.br
            </Text>
          </>
        )}
      </Box>
      <Avatar size="md" name="Igor Pimentel" />
    </Flex>
  );
}
