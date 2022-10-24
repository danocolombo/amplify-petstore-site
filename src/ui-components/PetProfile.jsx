/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { Pet } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function PetProfile(props) {
  const { pet, overrides, ...rest } = props;
  const buttonThreeFourFiveTwoTwoSixNineSixOnClick = useDataStoreDeleteAction({
    id: pet?.id,
    model: Pet,
    schema: schema,
  });
  return (
    <Flex
      gap="24px"
      direction="column"
      width="320px"
      height="623px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="25px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(169,180,193,1)"
      {...rest}
      {...getOverrideProps(overrides, "PetProfile")}
    >
      <Button
        display="flex"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="8px 16px 8px 16px"
        size="large"
        isDisabled={false}
        variation="link"
        children="Delete"
        onClick={() => {
          buttonThreeFourFiveTwoTwoSixNineSixOnClick();
        }}
        {...getOverrideProps(overrides, "Button34522696")}
      ></Button>
      <Image
        width="160px"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={pet?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name29766901")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={pet?.name}
          {...getOverrideProps(overrides, "Name29766902")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={pet?.breed}
          {...getOverrideProps(overrides, "Breed")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={pet?.about}
          {...getOverrideProps(overrides, "About:")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Age:"}${pet?.age}`}
          {...getOverrideProps(overrides, "Age: 5")}
        ></Text>
      </Flex>
      <View
        width="unset"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="272px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="0px"
          left="0px"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Details"
          {...getOverrideProps(overrides, "Button29766907")}
        ></Button>
      </View>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Profile"
        {...getOverrideProps(overrides, "Button34522689")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Update"
        {...getOverrideProps(overrides, "Button34552709")}
      ></Button>
    </Flex>
  );
}
