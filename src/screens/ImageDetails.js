import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  FlatList,
  Divider,
  Spinner,
  Image,
  Container,
} from "native-base";

export const ImageDetailsScreen = ({ navigation, route }) => {
  return (
    <Container>
      <Box px={2}>
        <Text>Name of the image author is {route.params.name}</Text>
      </Box>
    </Container>
  );
};
