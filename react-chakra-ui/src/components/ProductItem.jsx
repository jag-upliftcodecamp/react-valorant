import style from './ProductItem.module.css';
import {
  AspectRatio,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';

function ProductItem({ title, price, images, description }) {
  const defaultImage = 'https://placehold.co/1800.png';
  let image = images;

  // state: check if the images[0] is valid or not
  const onImageError = (e) => {
    image = defaultImage;
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <AspectRatio ratio={1}>
          <Image
            src={image}
            alt="product-item"
            borderRadius="lg"
            style={{ objectFit: 'contain' }}
          />
        </AspectRatio>
        <Stack mt="6" spacing="3">
          <Heading noOfLines={{ base: 0, lg: 1 }}>{title}</Heading>
          <Text noOfLines={2}>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProductItem;
