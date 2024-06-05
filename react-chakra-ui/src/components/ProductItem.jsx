import { useContext } from 'react';
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
import StoreContext from '../contexts/StoreContext';

function ProductItem({ title, price, images, description, id }) {
  const defaultImage = 'https://placehold.co/1800.png';
  let image = images;
  const { dispatch } = useContext(StoreContext);

  // state: check if the images[0] is valid or not
  const onImageError = (e) => {
    image = defaultImage;
  };

  const onAddToCart = () => {
    // DISPATCH type: 'ADD_TO_CART', payload: product object
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        title,
        price,
        images,
        description,
        id,
      },
    });
  };

  return (
    <Card maxW="sm">
      <CardBody>
        <AspectRatio ratio={1}>
          {/* Chakra UI has a fallbackSrc incase an error */}
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
          <Button variant="ghost" colorScheme="blue" onClick={onAddToCart}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProductItem;
