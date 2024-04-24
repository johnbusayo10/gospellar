
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ToggleCard from "../Components/ToggleCard";

import image1 from "../assets/firstimage2.jpg";
import image2 from "../assets/unit1.jpg";

const Cardimage = require("../assets/firstimage2.jpg");

const Children = ({ navigation }) => {
  const units = [
    {
      id: 1,
      unit_number: "Unit 1",
      title: "DISTRESS IS REAL (Lesson 1-4)",
      image: require("../assets/unit111.jpeg"),
      units: {
        lessons: [
          {
            id: 1,
            title: "lesson One",
            description: "Restoration Through Christ (Lesson 1-4)",
            date: "March 3 2024",
            topic: "DISTRESS IN THE BEGINNING OF THE HUMAN RACE",
            content: {
              lesson_date: "March 03, 2024",
              lesson_number: 1,
              description:
                "DISTRESS IN THE BEGINNING OF THE HUMAN RACE (Lesson 1-4)",
              title: "lesson one",
              qauter_theme: "GOD'S RESPONSE TO THE DISTRESSED",
              suggested_hymns: "G. H. B. 99, 109",
              devotional_reading: "Jn. 3:13-18",
              topic_for_adults:
                "Distress Is From The Beginning Of The Human Race.",
              topic_for_youth:
                "Don't Allow Your Distress To Lead To Depression.",
              topic_for_intermediate: " Don't Walk Into Distress.",
              lesson_scriptures:
                "Gen. 3:1-23; Matt. 27:3-8; Jn. 3:13-18; Rom. 5:12-212",
              memory_verse:
                '"For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life "',
              memoryVerse_bible_passage: "(John 3:16) NKJV.",
              lesson_background:
                'Stress is the absence of peace. It is a state of confusion and uproar. Distress comes with suffering, pain, agony, and sorrow. The first and major distress any man can have is not to be at peace with his Maker.Irrespective of who he is, what he has, and what he has achieved, without being at peace with God, everlasting pain awaits such a person. Painfully, every man begins with this kind of distress. We were born with and in distress. We inherited sin and its consequences from the first man that ever lived. Though hopeless, God has made provision for our peace through the death of His Son."',

              parts: [
                {
                  part1_topic: "DISTRESS IN THE GARDEN OF EDEN-GEN. 3:1-13",
                  part1_para1:
                    "God made man in His image to be like Him and represent Him. He also blessed and empowered him to function effectively. All resources needed for man to operate were provided before he was made. The man-made in God's image had no trouble. He did not need to labour before eating. Everything man needed as food was provided. There were no security and medical concerns; there was perfect peace in the Garden where the Lord put him. We also realise that man did not need to pray to have his needs met. It was God who discovered that man needed help and He provided that help through the woman, Eve. All of God's instructions to man were carefully carried out. Though we do not know the number of years, we can summarise chapters 1 and 2 of the book of Genesis as the most perfect and peaceful period in the history of man. There was peace between God and man and at the same time, there was peace between man and every other thing God made. ",
                  part1_para2:
                    "However, this peace did not last. There was a disruption. The devil did not like this peace. He was banished from heaven for his desire to cause trouble. The devil came for man and deceived him. The devil made man go against God's instructions. He made man see the need to be independent and be like God. Having eaten the forbidden fruit, the perfect peace enjoyed hitherto was lost. Man became God's enemy. Nature and other creations also turned against man. Man became afraid of God and had to hide when he heard His footsteps. Even before God came to him, he had been feeling the heat of his disobedience. This applies to every life too. Everyone who is not in perfect peace with God is in a deep mess. The Bible says there is no peace for the wicked. There is no peace without Jesus. He is the Prince of Peace. The peace that was lost in the Garden which brought distress can only be restored through Jesus.",
                },
                {
                  part2_topic:
                    "GOD'S RESPONSE TO EDEN'S DISTRESS-GEN. 3: 14-23; MATT: 27:3-8",
                  part2_para1:
                    "Peace is only guaranteed in God. Peace in God can be sustained if we constantly keep the terms of our relationship with God. After Adam and his wife flouted God's instruction, they lost their peace by running helter-skelterto hide from Him. They could no longer face God the way they used to do. This is why when a man sins, irrespective of his anointing and years of experience in faith, he will lose his peace. No amount of pretence can restore this peace.",
                  part2_para2:
                    "When God came in the cool of the day, He decided to punish everyone involved in this heinous sin. Though our concern is not about the serpent, it is important to note that the serpent was not spared. He was the first to be touched and punished. His defeat was determined in Gen. 3:15. Next was the woman and then the man. Each of them received the full dose of the consequences of their actions. Apart from being sent out of their comfort zone, the land was cursed for their sake. Adam had to begin to labour and toil to meet the daily needs of his family. He began to labour for thorns and thistles. These were the reward for his labour henceforth. He was no longer in charge and lost control of the earth. His wife had to conceive and give birth in pain. Can you imagine the number of women and babies who die daily as a result of pregnancy and delivery complications? This is a result of the disobedience of man in the Garden of Eden.",
                  part2_para3:
                    "The most painful part of this is that man became an eternal enemy of God. They no longer see eye to eye in that state. The Bible says every intent of the thoughts of man's heart is evil. This evil in man's heart does not show up occasionally but continually. Having this understanding, you will not be too surprised to see the magnitude of evil that goes on daily in the world today. Everyone faces the consequences of Adam's sin. We inherited the sinful nature also known as the flesh from Adam. This is why it is easier for man to plan and execute evil than to practice righteousness. Man became separated from God and doomed to be so forever. Summarily, the first taste of distress in the history of man occurred when man sinned in the Garden of Eden.",
                },
                {
                  part3_topic:
                    "REDEEMED THROUGH CHRIST-JN. 3: 13-18; ROM. 5: 12-21",
                  part3_para1:
                    "Apart from all the terrible earthly of sin to man,one major consequence that stands out is the eternal consequence. There is a possibility that some may not feel the impacts of the earthly consequences like some others due to some reasons but no one can escape the eternal consequence of sin. There was no way to return to God and we became doomed forever until God in His infinite mercy reached out to save man. Right from the Garden when God placed a curse on the serpent, His plan to crush the head of the serpent through His Son Jesus Christ was revealed. God so loves the world that He does not want us to be separated from Him forever ",
                  part3_para2:
                    "The redemption from the distress of eternal separation from God was God's plan through Jesus. Through Adam, we inherited death but God gives as many who would come to Him the gift of life through Jesus. This is how it works. Through Adam, we all automatically inherited sin and its consequences, but to have life is by choice. Each person must realise and accept his state as a sinner, accept that the death of Jesus on the cross was for him, repent of his sin, and choose to follow Jesus to the end. Jesus is the way to the Father. No one can be restored to the Father and be redeemed from the slavery of sin except through Jesus. As many as have received Him will never perish but have everlasting life. In Jesus, the distress of being an enemy of God ends.",
                },
              ],

              lesson_conclusion:
                "Christ and crisis are two similar words both when they are pronounced and written but both words are like two parallel lines that do not meet. The s no crisis, no matter how insignificant in Christ. Jesus is the Prince of Peace. A life that has not known Jesus has not known Peace. The distress that began in the Garden of Eden can only end when a man meets with the Prince of Peace.",
              questions: [
                {
                  question1:
                    "Describe the state of man when he was first made in the Garden of Eden.",
                },
                {
                  question2:
                    "What can you say about man being made in the image of God?",
                },
                {
                  question3:
                    "Describe the first state of distress in the history of mankind and how it affects the world today.",
                },
                { question4: "Is there anyway out of distress?" },
                {
                  question5:
                    "How is a man in Christ Jesus different from those who have not found Him?",
                },
              ],

              day1: "Monday",
              date1: "26/2/2024",
              topic1: "CREATED IN GOD'S IMAGE",
              bible_text1: "GEN. 1: 26-27",
              lesson_word1:
                " It was God's idea to make man and when He did, He made him to be the best; in His image; just like Himself. Man was made like God to represent Him and carry out His assignment on earth. It is not wrong to say that man was made in his purest form, to be god. God made man to be overseer over all He made. He was blessed to be in charge and to have dominion. The whole affair of the earth was committed to the man. Nothing would ever happen without the consent and approval of man. To prove this, naming every other creation on earth was one of man's first major responsibilities. The Bible says; 'whatever Adam called each living creature, that was its name'. God did not question or query him. To be made in God's image was the best thing that happened to man.",
              point_of_emphasis1:
                "God did not make man less than Himself; He made man in His image.",
              prayer_point1: "Thank You Lord for making me in Your image.",
              day2: "Tuesday",
              date2: "27/2/2024",
              topic2: "BLESSED TO BE FRUITFUL",
              bible_text2: "GEN. 1:27-28",
              lesson_word2:
                "God did not stop at making man in His image, He also blessed Him. Blessing man has different implications. The blessing was both an instruction and an empowerment. As God empowered man to be fruitful, multiply, and fill the earth, He also gave him the instruction to do so. In other words, man was mandated to fill the earth in his original form (God's image). God expected man not just to fill the earth but to fill the earth with other men who are in the image and likeness of God. It was not God's intention to have a multiplication of men who are corrupt and rebellious. It is not enough to be fruitful; it is very important to fill the earth with men who are like God. ",
              point_of_emphasis2:
                "Don't just think of filling the earth with any kind of men, fill the earth with God's kind.",
              prayer_point2:
                "Lord, help me to fulfill the mandate of filling the earth with Your kind of men in Jesus' name.",
              day3: "Wednesday",
              date3: "28/2/2024",
              topic3: "FEARFULLY AND WONDERFULLY MADE",
              bible_text3: "Ps. 139:13-18",
              lesson_word3:
                "No one can comprehend the capacity, capabilities, and uniqueness of God. God is too powerful to be predicted and limited. Now, if God made man in His image, it means man has been made in a way he cannot comprehend and imagine. The Psalmist says we were wonderfully and fearfully made. We will be able to limit man if only we can limit God. Man was made to be very powerful and dynamic. God spoke in Gen. 11 that no one can stop man from achieving anything he purposes. Only God, his maker, can stop him. Man's intelligence is reflected in the number of things (positive and negative) that he has invented. Our world keeps changing today because of the level of capabilities God infuses in man. This is the way you were made too. You can do much more than you are doing if you can depend more on the One who made you. ",
              point_of_emphasis3:
                "Don't be too surprised if you see more powerful innovations through you in the coming days.",
              prayer_point3:
                "Help me to maximise all the potentials You have embedded in me in Jesus' name.",
              day4: "Thursday",
              date4: "29/2/2024",
              topic4: "DECEIVED BY THE DEVIL",
              bible_text4: "GEN. 3: 1-7",
              lesson_word4:
                "We saw how man was made and how powerful he was in his original form. However, this wonderful state was short-lived. The devil deceived man. He made him disobey God's instruction. Man was deceived to understand there was a better plan for him beyond what God intended. The woman was used as a bait for her husband. When they failed God, everything that was originally going smoothly became distorted. The devil has no single plan of peace for any man. Once he notices a cordial relationship between God and man, he wants to ensure he does all he can to disrupt it. The way he was after Adam and his family is the same way he is after every life including you and me. It all depends on you and me to either allow or withstand him.",
              point_of_emphasis4:
                "The devil is still out there to deceive man, beware!",
              prayer_point4:
                "Lord, help me to be mindful of all the antics and devices of the devil in Jesus' name.",
              day5: "Friday",
              date5: "1/3/2024",
              topic5: "MAN LOST GOD'S PEACE",
              bible_text5: "GEN. 3:8-13",
              lesson_word5:
                "Distress is the absence of peace and tranquility. This original pure state of man which was characterised by peace did not last for long. It was corrupted even before the mandate to be fruitful was fulfilled. The devil tempted man and made him taste of the tree of knowledge of good and evil which God instructed him not to eat. This v. as the first distress that happened on earth. After Adam and Eve ate this fruit, they became a shadow of themselves. They became fearful and started hiding from God. The wonderful relationship that existed between God and man was corrupted. Nature and everything made by God turned against man. All the powerful abilities and intelligence of man became corrupt. Man decided to use his God-given wisdom against God and instead of filling the earth with pure breed, corruption multiplied and filled the earth to the extent that God was sorry for making man (Gen. 6:5-7).",
              point_of_emphasis5:
                "Every life that has no peace with God is in distress.",
              prayer_point5:
                "Lord, by mercy, save as many lives that are still in distress in Jesus' name.",
              day6: "Saturday",
              date6: "2/3/2024",
              topic6: "GOD'S REACTION TO ADAM'S DISTRESS",
              bible_text6: "GEN. 3: 14-23",
              lesson_word6:
                "God's reaction to this undesirable situation was not palatable. Everyone involved in this chaos was touched. First, it was the serpent that was cursed, then the woman, and later the man. God does not take any act of disobedience to His instructions lightly. God has been consistent over time. Each time man goes against God's instruction, we know the likely outcome. When Cain killed his brother, he was visited with God's wrath. He became a fugitive. Anointing and the years of walking with God do not stop God from punishing for sin. What can we say of Moses, David, Samson, Solomon, Judas, and so on? Every life that does not conform to God's word and instruction is in distress as God will visit his sin if he does not repent of it.",
              point_of_emphasis6:
                "You cannot be too familiar with God to flout His instructions.",
              prayer_point6:
                "Lord, give me the grace to remain committed to Your instructions at all times in Jesus' name.",
              day7: "Sunday",
              date7: "3/3/2024",
              topic7: "SINNED THROUGH ADAM, SAVED THROUGH JESUS",
              bible_text7: "ROM. 5:12-21",
              lesson_word7:
                "The Scriptures affirm the fact that everyone is a sinner; no one is good (Ps. 14:1-3). We were all corrupt and had completely gone astray from the Father. Everlasting punishment awaited us all and there was nothing anyone could do to reverse this situation. As hopeless as our situation was, God intervened with mercy. He paid the price for the sin of mankind by the death of His only begotten Son, Jesus. Through Him, the lost peace between God and man was restored. Man became redeemed and restored to the Father. The relationship that was lost was regained and the everlasting punishment was reversed. The simple step of faith needed by an individual is to believe that Jesus paid the price for his or her sin through His death and then live a life of obedience afterwards. The spiritual distress would then be over.",
              point_of_emphasis7:
                "God restored our peace through the death of His Son on the cross.",
              prayer_point7:
                "Lord, help me to keep this life of peace with You till I breathe my last in Jesus' name.",
            },
          },
         
        ],
      },
    },
   
  ];

  const [scrollY] = useState(new Animated.Value(0));

  const headerTextColor = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ["#ffffff", "#000000"], // Change color from white to black as user scrolls up
    extrapolate: "clamp",
  });

  const headerTextSize = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [24, 18], // Reduce text size as user scrolls up
    extrapolate: "clamp",
  });

  const [isOpen, setIsOpen] = useState([false, false, false]);

  const toggleCollapse = (index) => {
    setIsOpen((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  const windowWidth = Dimensions.get("window").width;
  const cardWidth = windowWidth * 0.9; // Set card width to 90% of the device width

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <Animated.View
        className="flex flex-rol"
        style={[
          styles.header,
          {
            backgroundColor: headerTextColor,
          },
        ]}
      >
        <MaterialCommunityIcons
          name="arrow-left"
          size={30}
          color="#fb8500"
          onPress={() => navigation.goBack()}
          style={styles.icon}
        />
        <Animated.Text
          style={[styles.headerText, { fontSize: headerTextSize }]}
        >
          Animated Header
        </Animated.Text>
      </Animated.View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={styles.content}>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={[styles.title, { fontSize: windowWidth * 0.05 }]}>
                THEME
              </Text>
              <Text
                style={[styles.description, { fontSize: windowWidth * 0.08 }]}
              >
                Demonstration of the
              </Text>
              <Text
                style={[styles.description, { fontSize: windowWidth * 0.1 }]}
              >
                CHRISTIAN LIFE
              </Text>
              <Text
                style={[styles.subtitle, { fontSize: windowWidth * 0.035 }]}
              >
                (EXPOSITION ON THE BOOK OF PHILEMON)
              </Text>
            </View>
          </TouchableOpacity>
          <View className="w-[100%] flex flex-col justify-center items-center mt-10">
            {/* Add your content here */}
            <Text
              style={[{ fontSize: windowWidth * 0.06 }]}
              className=" text-start font-bold"
            >
              Select Unit
            </Text>

            {units.map((unit, index) => {
              return (
                <View
                  key={index}
                  style={[styles.containertoggle, { width: cardWidth }]}
                  className=" w-[90%] rounded-xl shadow-lg"
                >
                  <TouchableOpacity
                    style={styles.cardHeader}
                    onPress={() => toggleCollapse(index)}
                    className="flex flex-row justify-around items-center"
                  >
                    <Image
                      source={unit.image}
                      style={styles.imagetoggle}
                      resizeMode="cover"
                    />

                    <View className="w-[60%] h-90 flex flex-col items-center">
                      <Text
                        style={[{ fontSize: windowWidth * 0.06 }]}
                        className="font-semibold"
                      >
                        {unit.unit_number}
                      </Text>
                      <Text
                        style={[{ fontSize: windowWidth * 0.04 }]}
                        className=" font-medium px-1"
                      >
                        {unit.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {isOpen[index] && (
                    <View
                      style={styles.content}
                      className=" w-full h-fit flex flex-col justify-around items-center"
                    >
                      {unit.units.lessons.map((lesson, index) => (
                        <View className=" w-[85%] min-h-fit justify-around flex flex-col item-center my-5 rounded-xl  ">
                          <Text
                            key={index}
                            onPress={() =>
                              navigation.navigate("lessontab", { item: lesson })
                            }
                            className=" italic text-2xl font-bold text-center text-[#023047]"
                            style={[{ fontSize: windowWidth * 0.05 }]}
                          >
                            {lesson.topic}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              );
            })}

            <TouchableOpacity
              style={[styles.container, { width: cardWidth }]}
              className=" min-h-[300px] bg-slate-500 rounded-xl mt-20"
            >
              <ImageBackground
                source={require("../assets/sharing3.jpg")}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "start",
                  resizeMode: "cover",
                }}
              ></ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    zIndex: 10,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e5e5e5",
  },
  icon: {
    position: "absolute",
    left: 20,
  },
  scrollContent: {
    paddingTop: 100, // Adjust to accommodate header height
  },
  content: {
    padding: 20,
  },

  card: {
    backgroundColor: "#023047",
    borderRadius: 10,
    padding: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#8d99ae",
    textAlign: "center",
    fontFamily: "serif",
    fontWeight: "bold",
  },
  description: {
    color: "#8d99ae",
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#8d99ae",
    textAlign: "center",
    fontWeight: "normal",
  },

  containertoggle: {
    backgroundColor: "#f5f3f4",
    borderRadius: 10,
    margin: 10,
    overflow: "hidden",
  },
  cardHeader: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    height: 220,
  },
  titletoggle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContent: {
    padding: 10,
  },
  imagetoggle: {
    width: "35%", // Fill the width of the card
    height: "70%", // Fixed height for the image
    borderRadius: 10,
    marginBottom: 10,
  },
  descriptiontoggle: {
    fontSize: 16,
    textAlign: "left",
  },
});

export default Children;
