import { useState } from "react";

import { View, Text, StyleSheet, Image, StatusBar, Share } from "react-native";

import { Button } from "@src/components/ui";

import { phrases } from "@src/utils/phrases";

export default function Home() {
  const [img, setImg] = useState(require("@src/assets/biscoito.png"));
  const [phrase, setPhrase] = useState("");

  function handlePhrase() {
    setImg(require("@src/assets/biscoitoAberto.png"));

    const pos = Math.floor(Math.random() * phrases.length);
    const phraseGenerate = phrases[pos];

    setPhrase(`" ${phraseGenerate} "`);
  }

  function handleReset() {
    setImg(require("@src/assets/biscoito.png"));
    setPhrase("");
  }

  async function handleShare() {
    try {
      await Share.share({
        title: "Compartilhar",
        message: phrase,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#131313"} barStyle={"dark-content"} />

      <Image source={img} style={styles.img} resizeMode="cover" />

      <Text style={styles.phrase} selectable onPress={() => handleShare()}>
        {phrase}
      </Text>

      <View style={styles.buttonsArea}>
        <Button onPress={handlePhrase}>Quebrar Biscoito</Button>

        <Button variant="inline" onPress={handleReset}>
          Resetar Biscoito
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#131313",
  },
  img: {
    width: "100%",
    maxWidth: 230,
    maxHeight: 230,
  },
  phrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    textAlign: "center",
    fontStyle: "italic",
  },
  buttonsArea: {
    width: "100%",
    alignItems: "center",
    gap: 14,
  },
});
