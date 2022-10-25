/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Pet } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function EditPet(props) {
  const { overrides, ...rest } = props;
  const [nameGroupValue, setNameGroupValue] = useStateMutationAction("");
  const [ageGroupValue, setAgeGroupValue] = useStateMutationAction("");
  const [breedGroupValue, setBreedGroupValue] = useStateMutationAction("");
  const [aboutGroupValue, setAboutGroupValue] = useStateMutationAction("");
  const [imageGroupValue, setImageGroupValue] = useStateMutationAction("");
  const [colorGroupValue, setColorGroupValue] = useStateMutationAction("");
  const buttonTwoNineSevenSixSixNineTwoSixOnClick = useDataStoreCreateAction({
    fields: {
      name: nameGroupValue,
      age: ageGroupValue,
      breed: breedGroupValue,
      about: aboutGroupValue,
      image: imageGroupValue,
      color: colorGroupValue,
    },
    model: Pet,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="35px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(169,180,193,1)"
      {...rest}
      {...getOverrideProps(overrides, "EditPet")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
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
            children="Add Pet"
            {...getOverrideProps(overrides, "Add Pet")}
          ></Text>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="5px 5px 5px 5px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </Flex>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(4,125,149,1)"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766917")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9nfHx8fHx8MTY2NjY2NDY2MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Name"
            placeholder="BowWow"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={nameGroupValue}
            onChange={(event) => {
              setNameGroupValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "NameGroup")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Age"
            placeholder="3"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={ageGroupValue}
            onChange={(event) => {
              setAgeGroupValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "AgeGroup")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Breed"
            placeholder="Beagle"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={breedGroupValue}
            onChange={(event) => {
              setBreedGroupValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "BreedGroup")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            label="About"
            placeholder="Small, loyal"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={aboutGroupValue}
            onChange={(event) => {
              setAboutGroupValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "AboutGroup")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Color"
            placeholder="white and spots"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={colorGroupValue}
            onChange={(event) => {
              setColorGroupValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "ColorGroup")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Image URL"
            placeholder="http://my-picture.com/bowwow"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={imageGroupValue}
            onChange={(event) => {
              setImageGroupValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "ImageGroup")}
          ></TextField>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(4,125,149,1)"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766925")}
        ></Divider>
        <Flex
          gap="40px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 419")}
        >
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonTwoNineSevenSixSixNineTwoSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button29766926")}
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
            position="relative"
            padding="8px 16px 8px 16px"
            size="default"
            isDisabled={true}
            variation="primary"
            children="Update"
            {...getOverrideProps(overrides, "Button34622713")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
