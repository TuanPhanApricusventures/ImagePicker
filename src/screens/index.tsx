import { Button } from "@components/button";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import Gallery, { RemoteImage } from 'react-native-image-gallery';
import PhotoEditor from "@baronha/react-native-photo-editor";

const maxItem = 10;

export const Home = () => {

  const [images, setImages] = useState<RemoteImage[]>([])

  const openPicker = async () => {
    setImages([])
    const images = await ImagePicker.openPicker({
      multiple: true
    });
    if (images.length > maxItem) {
      Alert.alert(`Limit selection to ${maxItem} images`)
      return;
    }
    for (const image of images) {
      setImages(images => [
        ...images, 
        { source: { uri: image.sourceURL || '' } }
      ]);
    }
  }

  const openImageEditor = async (index: number) => {
    const image = images.at(index);
    const result = await PhotoEditor.open({
      path: image?.source?.uri || '',
      stickers: []
    });
    setImages(images => [
      ...images.slice(0, index),
      {source: { uri: result.toString() }},
      ...images.slice(index + 1)]
    );
  }

  return (
    <View className={"bg-grey flex-1"}>
      <Button buttonStyle="w-[90%]" title={"Open Picker"} onPress={openPicker} />
      <Gallery
        onSingleTapConfirmed={openImageEditor}
        style={{ flex: 1, backgroundColor: 'black' }}
        images={images}
      />
    </View>
  );
};
