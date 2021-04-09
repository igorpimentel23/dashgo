import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Igor Pimentel</Text>
        <Text color="gray.300" fontSize="small">
          igorpimentel@id.uff.br
        </Text>
      </Box>
      <Avatar size="md" name="Igor Pimentel" />
    </Flex>
  );
}
