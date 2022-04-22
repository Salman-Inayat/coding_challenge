import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  FlatList,
  Divider,
  Spinner,
  Image,
  Container,
  Button,
  Icon,
} from "native-base";

export const HomeScreen = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);
  let onEndReachedCalledDuringMomentum = true;

  useEffect(() => {
    fetchImages(page);
  }, []);

  const fetchImages = (page) => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setImages([...images, ...data]);
        setIsLoaded(true);
      });
  };

  const loadMore = () => {
    setPage(page + 1);
    fetchImages(page + 1);
    console.log("load more images", page);
  };

  const renderSpinner = () => {
    return <Spinner color="emerald.500" size="lg" />;
  };

  const keyExtractor = (item, index) => {
    return index.toString();
  };

  const renderData = (item) => {
    return (
      <Box
        mb={5}
        backgroundColor="red"
        border="1"
        borderRadius=""
        p={2}
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _light={{
          backgroundColor: "gray.200",
        }}
      >
        <Image
          source={{
            uri: item.item.download_url,
          }}
          alt="Alternate Text"
          size="xl"
          mb={3}
          borderRadius={7}
          width={300}
          height={200}
        />
        <Text mb={3}>{item.item.author} </Text>
        <Button
          onPress={() => {
            navigation.navigate("ImageDetails", { name: item.item.author });
          }}
        >
          More
        </Button>
      </Box>
    );
  };

  return !loaded ? (
    <Box
      flex={1}
      backgroundColor="white"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner color="emerald.500" size="lg" />
    </Box>
  ) : (
    // <Box p={3} flex={1} safeAreaTop backgroundColor="white" >
    <Container centerContent={true} p={2} mx={10}>
      <FlatList
        data={images.map((img) => img)}
        keyExtractor={keyExtractor}
        renderItem={renderData}
        onEndReachedThreshold={0.1}
        onEndReached={({ distanceFromEnd }) => {
          if (distanceFromEnd >= 0) {
            loadMore();
          }
        }}
        width="100%"
      />
    </Container>
    // </Box>
  );
};
