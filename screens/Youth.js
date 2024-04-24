
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

const Youth = ({ navigation }) => {
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
          {
            id: 1,
            title: "lesson One",
            description: "Restoration Through Christ (Lesson 1-4)",
            date: "March 3 2024",
            topic: "DISTRESS IN THE BEGINNING OF THE HUMAN RACE",
            content: {
              lesson_date: "March 03, 2024",
              lesson_number: 2,
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
          {
            id: 1,
            title: "lesson One",
            description: "Restoration Through Christ (Lesson 1-4)",
            date: "March 3 2024",
            topic: "DISTRESS IN THE BEGINNING OF THE HUMAN RACE",
            content: {
              lesson_date: "March 03, 2024",
              lesson_number: 3,
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
          {
            id: 1,
            title: "lesson One",
            description: "Restoration Through Christ (Lesson 1-4)",
            date: "March 3 2024",
            topic: "DISTRESS IN THE BEGINNING OF THE HUMAN RACE",
            content: {
              lesson_date: "March 03, 2024",
              lesson_number: 4,
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
    {
      id: 1,
      unit_number: "Unit 2",
      title: "SOME BIBLE CHARACTERS' REACTION (Lesson 5-9)",
      image: require("../assets/unit222.jpg"),
      units: {
        lessons: [
          {
            id: 1,
            title: "lesson Five",
            description: "SOME BIBLE CHARACTERS' REACTION (Lesson 5-9)",
            date: "MAR. 31, 2024 ",
            topic: "DISTRESSED AS A RESULT OF NEEDS",
            content: {
              lesson_date: "MAR. 31, 2024",
              lesson_number: 5,
              description: "SOME BIBLE CHARACTERS' REACTION (Lesson 5-9)",
              title: "lesson Five",
              qauter_theme: "Distress: Some Bible Character's Reaction",

              suggested_hymns: "GHB 77, 286",
              devotional_reading: "Ps. 107:1-9",
              topic_for_adults: "Distressed But Not Forsaken",
              topic_for_youth: "Not Exempted From Distress",
              topic_for_intermediate: "God Is Able To Provide.",
              lesson_scriptures:
                "Exo. 16:4-7, 12-15; Num. 11:21-24, 31; 20:1-6, 12-13; 2 Kgs. 4:1- 7; Matt. 14:15-21; 17:24-27; Lk. 5:1-8; Jn. 2:1-10; Ps. 37:1-7; 145:15-16; Jam. 1:7",
              memory_verse:
                '"Delight yourself in the Lord, and He shall give you the desires of your heart. Commit your way to the Lord, trust also in Him, and He shall bring it to pass"',
              memoryVerse_bible_passage: "(Psalm 37:4-5) NKJV.",
              lesson_background:
                "What to eat, what to wear, where to live, where to get work/job, who to marry, how to conceive and give birth to children, how to get admission into higher institution and how to cope with and conquer other challenges of life are some of the ways by which we are challenged and distressed. The lesson of this week is based on the various ways by which we are distressed and how God always makes way and provides for us even when we least expect and in His own special ways.",

              part1_topic: "TRUST THE GREAT PROVIDER-PS. 145:15-16; JAM. 1:7",
              part1_para1:
                "We are taught that human needs are unlimited. When one's need is met, one aspires for another. That is human and how it is. However, it is not in the hands of man to provide all his needs. Life experiences have also shown that, 'the race is not to the swift'. The economic recession and fuel subsidy removal added to making livelihood more difficult for the average wage earner. It is still true that God supplies the needs of His people. See the list below:",
              part1_para2:
                "🧂The Israelites: They journeyed in the wilderness for 40 years and God provided their sustenance even when they never sowed or reaped.🧂Prophet Elijah: God sent birds to provide food for him.🧂The widow of Zarephath: She fed Prophet Elijah during the time of famine and God provided food miraculously to sustain her household throughout the famine period.🧂Prophet Elisha: Multiplication of food to feed the sons of the Prophets at a time of famine.🧂Jesus: He used few loaves of bread and few fish to feed multitudes of people.",
              part1_para3:
                "Your duty is to trust God - the great provider and He will provide for you and meet you at the very point of your need. Taste and see that the Lord is good!",

              part2_topic: "GOD MET NEEDS THROUGH MIRACLES-NUM. 11:21-24, 31",
              part2_para1:
                "The story of the Israelites as they journeyed through the wilderness to the promised land of Canaan is a true example of the wondrous and miraculous dealings of God with us as we journey to our heavenly Canaan today. The Bible recorded the many times the Israelites yearned for both food and drink and the miraculous provision of God for them. The truth is that God still performs miracles and He can still use any of His miraculous ways to meet you at the point of your need. It is true that:",
              part2_para2:
                "🧂God can buy a car for you without you paying a dime.🧂He can build a house for you without you buying a piece of land.🧂He can promote you to greatness beyond your expectations.🧂God can connect you to people that matters without you lifting a finger. 🧂He can send you help from both your expected and unexpected quarters. 🧂God can use men like Angels and Angels like men to meet you where it matters.🧂He can make a barren woman a mother of many children.",
              part2_para3:
                "God has done it before and He is still in the business of miraculous provision even in our own time; only keep your faith and trust alive in Him. No matter what your need may be, God is ready, willing and able to provide. What He has done for others, He can do for you also.",

              part3_topic: "DELIGHT IN THE LORD-PS. 37:1-7",
              part3_para1:
                "We have seen people in our society who have done and are still doing all forms of things in their bid to provide for their needs. There are those who: have entered cults and secret societies, done abominable things like rituals and human sacrifices, committed sorceries and blood sacrifices; all in their quest to get the allures and ephemeral things of this world. It is true that riches gotten through evil and diabolical means will not last. Many people are on the streets and psychiatric homes today as direct consequences of dabbling into cults and rituals, and there are others that have died at the dawn of the manifestation of their glory. To make it in the Biblical way therefore, the Bible enjoins us to:",
              part3_para2:
                "🧂trust in the Lord,🧂delight in the Lord,🧂commit your way to the Lord, rest in the Lord; and🧂wait patiently for Him.",
              part3_para3:
                "While we keep labouring, delight and trust in the Lord, He will bless our work and give us our righteous desires. Keep your faith and trust alive in the Lord and see that He is good!",
              lesson_conclusion:
                "There are saints who have developed high blood pressure, become bedridden or even gone to early graves because of distress necessitated by want and need. Worry and anxiety add nothing to you except diseases like hypertension. Stop worrying and keep trusting in God - the great provider and He shall fulfil all your righteous heart desires. He has done it before and He will do it for you even now, if only you can trust and rely on Him.",

              question1:
                "Have you ever met with a dire need?Share with the class how God provide for you. ",
              question2:
                "Give reasons why saints still face needs despite having God- The great provider as their God.",
              question3:
                "God still provide for His people,How far is this true?Cite Biblical and Contemporary examples.",
              question4:
                "Trust and delight in God to provide in the time of need. How easy is this?",
              question5:
                "What should we do to enjoy devine provision from God in a world that is full of needs?",

              day1: "MON",
              date1: "25/3/2024",
              topic1: "NOTHING TO EAT",
              bible_text1: "Exo. 16:4-7, 12-15",
              lesson_word1:
                "Human needs are many and they also vary. While someone is crying for bread, another is asking for something to drink. The experience of the Israelites in the verses above shows that: (i.) God is aware of our needs. (ii.) He makes provision for our needs each day (day by day provision). (iii.) He can use any of His many ways to meet our needs. (iv.) We must always trust and obey His instructions. What do you need today? God is ready, willing and able to provide; put your trust in Him.",
              point_of_emphasis1:
                "God is willing and able to provide for your needs each day of your life, keep your trust in Him.",
              prayer_point1:
                "Heavenly Father, teach me to continue to trust You to provide my needs every day of my life in Jesus' name.",
              day2: "TUE",
              date2: "26/3/2024",
              topic2: "THIRST QUENCHED",
              bible_text2: "NUM. 20:1-6, 12-13",
              lesson_word2:
                "Is it not true that you don't know men until they are faced with needs and challenges? Is it not then that the true man is revealed by his character and response to his challenges? How do you respond when things do not go your own way or the way you expect? Do you murmur, grumble, complain, compromise and pass derogatory remarks to both God and men? The need facing you may be to test your faith, your trust and reliance on God. Beware of what you say and wish for in the heat of your want, need or lack because you may eventually have them. The Israelites got what they wished for and still died in the wilderness. Jesus is able to quench your thirst if you will trust in Him.",
              point_of_emphasis2:
                "Jesus still satisfies and is able to quench your thirst both physical and spiritual.",
              prayer_point2:
                "Father, please help me to comport myself appropriately in my times of need in Jesus name",
              day3: "WED",
              date3: "27/3/2024",
              topic3: "WIDOW IN DIRE NEED",
              bible_text3: "2 KGs. 4:1-7",
              lesson_word3:
                "The husband of this widow was a man of God, yet, his family was in dire need even after his demise. This shows that no one is exempted from need irrespective of your spiritual and earthly attainments. In reality, the rich also cry. However, the woman was wise to ask for help, and from the right source. We must look unto God and ask Him for help always. God will use men to meet our needs in answer to our prayers. We also must not be arrogant to ask for help from the right source when led to do so. Remember that a closed mouth is a closed destiny.",
              point_of_emphasis3:
                "Need is not limited to a set of people; ask for help when you are led to do so.",
              prayer_point3:
                "My life will not be destitute of the help of both God and men in Jesus name.",
              day4: "THUR",
              date4: "28/3/2024",
              topic4: "TAX PAID",
              bible_text4: "MATT. 17:24-27",
              lesson_word4:
                "One of the easiest ways for the Christian to sin against the state and in extension against God is the issue of unfaithfulness to civic responsibilities. There are saints who drive without vehicle particulars and driving license. Some boycott light meters to connect electricity to their houses, while some others default in the payment of tenement rates, VAT and taxes. If Jesus would not offend by paying the temple tax, why should you default? The Lord made the mouth of a fish His bank and can use even unconventional ways to also supply your needs.",
              point_of_emphasis4:
                "God can use any means to provide for you if you can be faithful in all things.",
              prayer_point4:
                "Father, help me to remain faithful to my physical and spiritual obligations as You continue to bless and supply my needs in Jesus' name.",
              day5: "FRI",
              date5: "29/3/2024",
              topic5: "No Catch",
              bible_text5: "LK. 5:1-8",
              lesson_word5:
                "The effort of the experienced Peter and his fishing partners throughout the night was a futile one, yet, he was content to release his boat as a platform for Jesus to carry out His preaching. He followed the instruction of the Master and his obedience paid off. What do you have in your hands that the Lord could use to meet the needs of His Church and people? Release them to Him, follow His instructions; and He will deliver you from fruitless and unprofitable labour.",
              point_of_emphasis5:
                "Give what you have to Jesus to gain what He has.",
              prayer_point5:
                "I surrender all I have to You, oh Lord, use me and what I have for Your glory.",
              day6: "SAT",
              date6: "30/3/2024",
              topic6: "Wine Finished",
              bible_text6: "JN. 2:1-10",
              lesson_word6:
                "Anything put into use without replenishing (adding to it) must finish like the wine in Cana of Galilee. Embarrassment and ridicule stared the bridegroom in the face. However, the Master of situations and circumstances had earlier been invited and was present in the house. Has wine (joy, satisfaction, peace, health, provision, mutual understanding) finished in your life, family or job? Invite Jesus and see Him turn your situation around positively",
              point_of_emphasis6:
                "Your wine need not to finish if Jesus is your constant companion in your journey through life.",
              prayer_point6:
                "Father, replenish the wine in my life and family on a daily basis as I make Jesus my constant companion in Jesus' name.",
              day7: "SUN",
              date7: "31/3/2024",
              topic7: "Miraculous Feeding",
              bible_text7: "MATT. 14:15-21",
              lesson_word7:
                "The people under the teaching of Jesus in this solitary place were not expecting free feeding after the ministration of that day. Even if they were, there was nowhere to buy bread even if they had the money. Also, the bread and fish with the Disciples was grossly inadequate to feed the people. However, at the command and prayers of Jesus, the insufficient bread and fish were made to be abundant to the extent that they all ate, were satisfied and with a remnant of twelve baskets. If only we can first do His bidding and follow Him without wavering, He surely will turn our lack to abundance and our not enough to more than enough. God can provide for you even from where you least expect, keep your faith and trust alive in Him.",
              point_of_emphasis7:
                "God is working behind the scenes and will provide even when you least expect.",
              prayer_point7:
                "Father, arise for me and do not permit me to be put to shame and reproach in Jesus' name.",
            },
          },
          {
            id: 2,
            title: "lesson Six",
            description: "SOME BIBLE CHARACTERS' REACTION (Lesson 5-9)",
            date: "APR. 07, 2024",
            topic: "THE SICK WERE HEALED",
            content: {
              lesson_date: "JUN. 04,2023",
              lesson_number: 6,
              description: "Restoration Through Christ (Lesson 1-4)",
              title: "lesson one",
              qauter_theme:
                "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",

              suggested_hymns: "G. H. B. 23, 29",
              devotional_reading: "Lk. 4:33-44",
              topic_for_adults: "Your Situation Is To Glorify God",
              topic_for_youth: "It Is Your Time For Testimony",
              topic_for_intermediate: " Touch Jesus By Faith",
              lesson_scriptures:
                "Isa. 53:1-5; Matt. 10:1; Ps. 103:3; Mk. 9:23; Jam. 5:14-16",
              memory_verse:
                "\"Jesus answered, 'Neither this man nor his parents sinned, but that the works of God should be revealed in Him' .\"",
              memoryVerse_bible_passage: "(John 9:3) NKJV",
              lesson_background:
                "Since sin entered the world of man at the fall; problems, troubles and evil have since been having their free course in the world. Hence, the life of man became opened to curses, yokes, bondages, sicknesses, diseases and all forms of evil. What man was created, ordained to dominate and rule over, began to rule and dominate him. This lesson shows Jesus Christ as the only antidote to the problem of sicknesses, diseases and every form of evil in our world.",

              question1:
                "Briefly describe the price Jesus paid for your salvation and healing.",
              question2:
                "Why people keep their problems to themselves instead of talking to their ministers?",
              question3:
                "What type of sickness or disease do you think that the power of Jesus cannot heal?",
              question4:
                "What do we need to do to be healed of our sicknesses today?",
              question5:
                "Do you have any testimony of healing? Briefly share it with the class",

              part1_topic: "HEALED BY HIS STRIPES -ISA. 53:1-5",
              part1_para1:
                "So many years before His birth, Prophet Isaiah prophesied the birth and purpose of the coming of the Messiah. In the text above, he showed Jesus as the suffering Messiah who would not only suffer for the iniquities of men, but also bring them healing (through His stripes) from all their diseases and infirmities. The price the Messiah paid on the cruel Roman cross is quite indescribable and can only be imagined than experienced. One cannot but wonder the immense display of love towards the sick and sin inflicted and affected world as shown by His suffering.",
              part1_para2:
                "Jesus paid the price for all the known and unknown sicknesses, diseases and infirmities in our world. His name still brings solution and healing to those who believe and call on His holy name even today. Come to think of it, if God did give you Jesus Christ, what then can He not give you plus Jesus? Today, as God supports His servants in their ministrations, all the miracles we read about in our devotion throughout the week, and many more; are being witnessed and testified about. The question is, 'what ails you?' Jesus has paid the price by His stripes. You have no reason to be inflicted or afflicted by any sickness or disease. Apply the stripes of Jesus and come out of it healed in Jesus' name.",

              part2_topic:
                "NOTHING DEFILES JESUS' HEALING POWER-MATT. 10:1; PS. 103:3; MK. 9:23",
              part2_para1:
                "Jesus paid the price for your healing by the suffering and stripes He took upon Himself as inflicted by the Roman soldiers even before He eventually gave up the ghost on the cross. The power to heal all sicknesses and diseases belongs solely to Jesus! Not only did He pay this price, He also transferred this same power to the Apostles and by extension to His Church. This power is available to us in the Church today! There is no sickness too difficult that the power of Jesus Christ cannot heal.",
              part2_para2:
                "We have seen and heard in our time, the testimonies of: 🧂the barren becoming the mother of children and fibroid converted to fine baby boy.🧂the blind, deaf and mute healed.  🧂the lame and paralysed raised. 🧂the dead raised back to life.  🧂cancer, hypertension and diabetes healed. 🧂the power of Jesus is able to heal what men refer to as 'incurable' diseases today.",
              part2_para3:
                "What infirmity or disease are you suffering from? Take it to Jesus, to the cross and leave it there. You can receive your own healing even now. The Church and her leaders should also take praying for the sick and diseased among us more seriously from now for there is no limit to what Jesus can do.",

              part3_topic: "IT IS GOD'S WILL TO HEAL-JER. 30:14-16",
              part3_para1:
                "There are diverse sicknesses and diverse reasons why people are sick:  🧂Sicknesses imposed by God as direct consequences of sin committed by man. 🧂Sicknesses contacted as a means of unhealthy ways of life and unhygienic environment. 🧂Sicknesses as a result of old age. 🧂Sicknesses caused by hard labour and lack of adequate rest and sleep. 🧂Satanic and demonically induced sicknesses.🧂Sicknesses from known and unknown sources; etc.",
              part3_para2:
                "Whatever the cause (s) of the sickness or infirmity, the Bible affirms that our God is able and willing to heal us and restore us to perfect health. However: 🧂We need to acknowledge our errors, mistakes or sins and repent of them. 🧂We need to acknowledge and believe in His power to save and heal.🧂We must call on Him in our prayers believing that He hears and will heal us.",
              part3_para3:
                "On many occasions we doubt Him and our unbelief hinders us from receiving our miracles from Him. To receive from Him therefore, we must put our faith in into action; for without faith we can receive nothing from Him.",

              lesson_conclusion:
                "Jesus has paid the price not only for our salvation but also for our healing from all named or unnamed sicknesses and diseases. Let us believe in His healing power and appropriate His finished work",

              day1: "MON",
              date1: "1/4/2024",
              topic1: "Touched Garment, Made Whole",
              bible_text1: "MATT. 9:20-22",
              lesson_word1:
                " It is an established fact that we cannot receive anything from God without faith. We also cannot please God without expressing our faith. The faith of the woman with the issue of blood was based on touching the garment of Jesus. Jesus confirmed that her faith made her whole. Today, we see people shift their faith from Jesus to substances - water, oil, handkerchief and the like. Jesus still heals, no matter the type of the sickness and its duration. Just touch Jesus by faith and you will be made whole. ",
              point_of_emphasis1:
                "Put your faith in Jesus and touch Him by faith, and you will be made whole.",
              prayer_point1:
                "Lord, I believe in You; heal and make me whole in Jesus' name.",
              day2: "TUE",
              date2: "2/4/2024",
              topic2: "The Lame and the Sick Healed",
              bible_text2: "Acts 3:1-7, 5:15-16",
              lesson_word2:
                "Miracle is the evidence of the gospel and some people will not believe until they see the miraculous manifestations of God through His ministers. The Apostles became instruments through whom God reached out to the people and healing became the order of the day wherever they went. That power is still available to heal all manners of diseases and infirmities. We should give place to the Holy Spirit to use us to minister to the needs of His Church, God still heals. Express your faith and reach out to Him to receive your healing.",
              point_of_emphasis2:
                "God still heals; express your faith and reach out to Him to receive your healing.",
              prayer_point2:
                "I reach out to You by faith today oh Lord; heal my body, soul and spirit in Jesus' name.",
              day3: "WED",
              date3: "3/4/2024",
              topic3: "The Leprous Healed",
              bible_text3: "2 KGS. 5:1-2, 14-15",
              lesson_word3:
                " What is worse than being a leper, a person who is not expected to live among the company of those that are not infected with the disease? Leprosy is a very stubborn and contagious disease and very difficult to cure. The Prophet directed Naaman to wash and be clean. Leprosy can be interpreted to include all manner of skin diseases, and God has the power to heal them all. However, the disease worse than leprosy is SIN, which captivated the entire human race. Jesus saves and wise men still go to Him for healing and salvation. You too can come to Him.",
              point_of_emphasis3:
                "The healing from both physical and spiritual leprosy is in Jesus.",
              prayer_point3:
                "Father, heal my physical and spiritual sicknesses today in Jesus name.",
              day4: "THUR",
              date4: "4/4/2024",
              topic4: "Withered Hand Restored",
              bible_text4: "LK. 6:6-10",
              lesson_word4:
                "The Scribes and Pharisees were there and present to oppose Jesus and hinder the miracle and healing of the man with the withered hand. Despite their opposition, Jesus healed the man and he received his miracle. Is it not true that there are oppositions and hindrances to your much expected miracle? Despite those oppositions and hindrances, Jesus is ready to give you your miracle and silence your adversaries as you keep on praying and keeping your faith alive in Him.",
              point_of_emphasis4:
                "Jesus is willing to give you a miracle in spite of hindrances and oppositions.",
              prayer_point4:
                "Heavenly Father, give me my miracle and silence my adversaries in Jesus' name.",
              day5: "FRI",
              date5: "5/4/2024",
              topic5: "Ear Restored",
              bible_text5: "LK. 22:47-51",
              lesson_word5:
                "It is good to always be in the right place, among the right crowd and doing the right thing. Being among the wrong crowd, this man would have lost his ear for the rest of his life, if not for the magnanimity of the Lord Jesus Christ who healed even in the presence of His betrayer. There are people who have ears but don't hear. There are also those who have no spiritual ears. While Jesus healed the physical ear of the High Priest's servant, we need to ask Him to restore both our physical and spiritual ears sothat we may hear Him whenever He talks to us.",
              point_of_emphasis5:
                "Jesus restored the lost ear, He can also heal our spiritual ears.",
              prayer_point5:
                "Heavenly Father, heal my physical and spiritual ears so that I may always hear you correctly in Jesus' name.",
              day6: "SAT",
              date6: "6/4/2024",
              topic6: "The Blind Man Receives Sight",
              lesson_word6:
                "There are situations and happenings beyond our control and comprehension in this world. What happened to the man born blind was neither his fault nor that of his parents. However, it was for the works of God to be shown in him, therefore, the situation facing you is not hidden from God, irrespective of what it is and whatever men may be saying about it. The man born blind became a testimony of God's goodness and miraculous acts; likewise, you too will soon become a testimony. Your situation is not impossible but to glorify God. Keep waiting, praying and trusting; it is your turn to testify!",
              point_of_emphasis6:
                "Your situation is to glorify God, keep waiting, praying and trusting Him.",
              prayer_point6:
                "Father, give me a testimony and glorify yourself in me in Jesus' name.",
              day7: "SUN",
              date7: "7/4/2024",
              topic7: "Helpless Man Healed",
              bible_text7: "JN. 5:1-9",
              lesson_word7:
                " The time to know how much you are loved among your family, colleagues, friends and Church is when there is a problem. When challenges come, you will know men as they truly are. Was it true that the impotent man had no one to assist him or they abandoned him while his problem persisted? Jesus knew his situation and arose for his help whereas he had been forsaken, forgotten and abandoned by his family, friends and loved ones. In what way(s) are you helpless today? Look up to Jesus and invite Him into your situation and He will surely turn the tide and fill your heart with gladness.",
              point_of_emphasis7:
                "Even when men forsake you; Jesus will never do!",
              prayer_point7:
                "Father, I have no man; please always arise and undertake for me in Jesus' name.",
            },
          },
          {
            id: 3,
            title: "lesson Seven",
            description: "SOME BIBLE CHARACTERS' REACTION (Lesson 5-9)",
            date: "April 14, 2024",
            topic: "THE DEAD WERE RAISED",
            content: {
              lesson_date: "April 14, 2024",
              lesson_number: 7,
              description:
                "Distress: Some Bible Character's Reaction [LESSONS 5-9]",
              title: "lesson one",
              qauter_theme:
                "Distress: Some Bible Character's Reaction [LESSONS 5-9]",

              suggested_hymns: "G. H. B. 173, 176 ",
              devotional_reading: "Jn. 11:32-44",
              topic_for_adults: "Dying Prematurely: Not in Jesus",
              topic_for_youth: "You Will Live Your Full Age ",
              topic_for_intermediate: "You Will Not Die Young",
              lesson_scriptures: "Mk. 5:23-43; Jn. 11:32-44; 1 Cor. 15:54-58",
              memory_verse:
                '"Jesus said to her, did I not say to you that if you would believe you would see the glory of God? ."',
              memoryVerse_bible_passage: "John 11:40 (NKJV).",
              lesson_background:
                "Death simply means loss of consciousness, or a loss of life. In death, all physiological systems of the body are shot down irreversibly cease to function as an integrated whole. Death is an abnormality and a misfortune since it was never part of God's original plan. It exists due to man's sinfulness, disobedience, and rebellion against God. Death is not a person, a ghost or a demon but an event that must happen at some point. However, it is only temporary for those who trust in God to keep His promises. As such, eternal life awaits them.",

              part1_topic: "JESUS THE LIFE GIVER-MK. 5:23-43",
              part1_para1:
                "This passage contains the story of a desperate woman looking for healing and a determined father desperately who wanted his daughter alive. Jesus performed miracles that solved their problems. These two miracles demonstrated the power of Jesus Christ over disease and death and His positive response to simple and great faith. It also reveals His love and compassion for people in distress and shows His power and authority over the challenges of life.",
              part1_para2:
                "The passage also relates how However, the woman pressed the crowd to be able to touch the hem of Jesus' cloth, believing that it was enough to make her whole. Jesus did not rebuke her but delayed His mission to the house of Jairus whose daughter was dying in order to assure her of healing and salvation. Jesus truly loves and cares.",
              part1_para3:
                "Jesus later raised Jairus' daughter from death; this was after attending to the woman of great faith. At a point, someone broke the news of the death of Jairus' daughter to Jairus, asking him not to trouble the master again, meaning that Jesus could only heal the sick but not raise the dead. By the time Jesus got to important great and persistent faith is to the house of Jairus, the girl was dead,receiving solutions and miracles from God. The haemorrhage the woman suffered had made her ceremonially and professional mourners were already weeping and wailing. However, these could not stop Jesus from raising the girl from death. He spoke the original from the company of the people.Aramaic language, 'Talitha cumi' meaning 'little girl, I say to you, arise'. Praise God! 'Immediately, the girl arose and walked'. Jesus, the life-giver, restored life to the two of them.",

              part2_topic: "DON'T LOSE HOPE - JN.11:32-35, 38-44",
              part2_para1:
                "Lazarus' death was untimely, unexpected, so sudden, and full of pain and trauma. It was indeed a painful exit and caused much grief to both family and friends. Moreso, Lazarus was. described by his two sisters as 'he whom you love' (Jn. 11:3), indicating his closeness or friendship with the Lord Jesus Christ. Martha's claim that 'Lord, if you had been here, my brother would not have died' (Jn. 11:21) also suggests that it would be easier for Jesus to heal the sick than raise the dead. It must also be noticed that Lazarus had been dead and buried for four days, making their case very bad and hopeless. Nevertheless, the intervention of the Lord Jesus Christ on the fourth day, gave them new hope.",
              part2_para2:
                "Death can be expected at old age, after the diagnosis of a terminal disease, or an unexpected medical condition due to an accident. However, for believers in Christ, death is only temporary because we trust God to keep His promises, and we hope that eternal life awaits us.",

              part3_topic: "JESUS KEEPS FROM DYING-JN.11:36-44; 1 COR.15:54-58",
              part3_para1:
                "The raising of Lazarus was not the resurrection promised after His physical life, That was reserved for the Father to initiate in His own Son's resurrection, thereby inaugurating a new order of life which all those in Christ are still anticipating in hope. Jesus restored Lazarus to physical life which would cease at his subsequent death. As with all others who have died in Christ, Lazarus awaits the bodily resurrection promised to all who are Christ's people. The resurrection body will not be subject to death. It will be beautiful, glorious, and perfect. It will have unlimited capabilities unknown to us in this age; and it will be adapted for life in the spiritual realm. Therefore, to all believers, death is not the end. Rather, it is a transition from mortality to immortality. It was sin that brought us under the power of death but we have access to victory over sin, death, and the grave through the resurrection of the Lord Jesus Christ. Serving Christ is not an empty or useless activity because of the hope of resurrection. Our labour for Him can never be in vain. Great and glorious rewards await everyone who diligently and faithfully serves Christ.",

              lesson_conclusion:
                "If you die without Christ, nothing can be done about it again. Your eternal destiny will be hell. However, if you repent of all your sins and accept Christ as your personal Lord and Saviour now, your eternity is secured in Christ. There is nothing anyone, including Satan, can do about it. Therefore, stand firm, be unmovable and give yourself fully to the word of God.",

              question1:
                "What are the secret behind the healing of the woman with protracted bleeding and the raising of Jairus' daughter?",
              question2:
                "Which miracle is more difficult for Jesus Christ-healing a sick person or raising the dead?",
              question3: "Why should believers in christ be hopeful?",
              question4:
                "What are the likely causes of death, and can believers overcome premature death?",
              question5: "What are the hope of believers in Christ?",

              day1: "MON",
              date1: "8/4/2024",
              topic1: "CHILD RESTORED TO LIFE",
              bible_text1: "1 KGS. 17:17-24",
              lesson_word1:
                "Elijah apparently became the tenant of the non-Israelite widow after the miraculous increase of the flour and the oil. Not quite long after, the widow's son became mysteriously sick and suddenly died. The widow erroneously concluded that Elijah's presence in her house had called God's attention to her sin and that the death of her son was a divine punishment for her sin. That notwithstanding, Elijah prayed that God should restore the life of the boy and the Lord Jehovah answered. This confirmed and established the veracity and trustworthiness of the word and power of the Almighty God.",
              point_of_emphasis1:
                "Miracles confirm the presence of God and his word in a man's life and ministry.",
              prayer_point1:
                "Oh Lord our God, let Your presence, power and word be real in our family and Church in the name of Jesus Christ.",

              day2: "TUE",
              date2: "9/4/2024",
              topic2: "DEAD CHILD PICKED UP ALIVE",
              bible_text2: "2 KGS. 4:32-37",
              lesson_word2:
                "Prayers can do what God can do. Like Elijah, his master and mentor, Elisha first turned to the Lord in earnest prayer for the restoration of life to the dead miracle child of the Shunammite woman. His prayer makes it clear that his subsequent actions of lying upon the child three times were not intended as a magical means of restoring life. The God of Elijah did it again, this time through Elisha, the man who received the double portion of God's spirit. The boy opened his eyes, sneezed seven times, sat up, and the mother picked him up alive. The grateful woman worshiped God and thanked the prophet.",
              point_of_emphasis2: "Nothing is too difficult for God.",
              prayer_point2:
                "Manifest Your love, presence and miracle-working power again among us, oh God.",

              day3: "WED",
              date3: "10/4/2024",
              topic3: "RESTORED TO LIFE",
              bible_text3: "MATT. 9:18-18, 23-26",
              lesson_word3:
                "Bible scholars believe, 'the ruler is likely the leader of the local synagogue who is responsible for the keeping of the scroll, instruction of boys in the Torah, orderly administration of times of worship, and benevolence to the needy', yet, his daughter died suddenly and untimely. The professional mourners, whose superficial grief is evidenced by their ridicule, gathered in his house to mourn the young lady. However, the presence of the merciful, sympathising Jesus put an end to their mourning and compassionately turned their sorrows into joy.",
              point_of_emphasis3:
                "Jesus Christ is the same yesterday, today and forever (Heb. 13:8). He can do it again.",
              prayer_point3:
                "Dearly beloved Holy Spirit of the Most High God, console and comfort those who mourn and turn their sorrow into joy.",

              day4: "THUR",
              date4: "11/4/2024",
              topic4: "YOUNG MAN AROSE",
              bible_text4: "LK. 7:11-17",
              lesson_word4:
                "The compassionate Jesus would not leave any grieving person without a solution. His intervention in this double tragedy restored hope to a woman. She was a widow and the mother of an only son. She might not have recovered from the demise of her husband, and now the only child also died. They were fortunate to meet the mighty and merciful Jesus. He touched the open coffin and commanded the young man to arise, and he arose. 'So he who was dead sat up and began to speak. And he presented him life to his mother' (Lk. 7:15 emphasis mine). This is the first of three instances of Jesus raising people from the dead, and it caused amazing wonder among people to the extent that they glorified God and praised Master Jesus.",
              point_of_emphasis4: "Jesus is the miracle-working God.",
              prayer_point4:
                "Oh Lord, visit us again with Your miracle working power and solve all problems.",

              day5: "FRI",
              date5: "12/4/2024",
              topic5: "MADE TO SEE GOD'S GLORY",
              bible_text5: "",
              lesson_word5:
                "There is nothing good in death, especially untimely or premature death since continuous life always makes good things accessible. In fact, premature death is a misfortune and a tragedy; probably that is the main reason why all the dead raised up in both the Old and New Testaments were young and in the prime of their age. The unexpected guest also visited the friend of our Lord Jesus Christ and took him away suddenly. He was in the grave for four days before the Lord could visit him. It was a miraculous and unusual visit that brought Lazarus back to life again and put an end to the sorrow and weeping of the family.",
              point_of_emphasis5:
                "Every miracle of Jesus attracts people to God and gives Him glory.",
              prayer_point5:
                "Arise, Oh Lord and manifest Your glory in my life.",

              day6: "SAT",
              date6: "13/4/2024",
              topic6: "PRESENTED ALIVE",
              bible_text6: "ACTS 9:36-43",
              lesson_word6:
                "Dorcas was a committed and compassionate Christian whose acts of generosity improved the quality of life of the disenfranchised in the society. She engaged in prayers for the people and rendered some practical services to the people of God. She was unusually generous to the poor, especially the widows. Alas!. This kind woman suddenly died. The great display of sorrow at her untimely death showed the level of esteem held for her and conveyed her value in the community. God's people benefited tremendously from her ministry of service, and they also experienced the manifested love of God. Peter was invited to pray for her and God honored and answered the prayer, thus putting an end to the grief of the people.",
              point_of_emphasis6: "God will not forget your labour of love.",
              prayer_point6:
                "Oh God, prolong my life so that I may serve You and the people around me in Jesus' name.",

              day7: "SUN",
              date7: "14/4/2024",
              topic7: "A YOUNG MAN BROUGHT TO LIFE",
              bible_text7: "ACTS 20:9-12",
              lesson_word7:
                "Death is defined as the cessation of all vital functions of the body, including the heartbeat, brain activity, and breathing. It comes in many forms, whether it is expected after the diagnosis of a terminal illness or an accident or medical condition. This young man died suddenly as a result of an accident due to careless sleeping. God was not concerned with the cause; he brought him back to life in response to Paul's prayers.",
              point_of_emphasis7:
                "Let us be more careful in the way we live our lives so as to avoid any untimely death as a result of our recklessness.",
              prayer_point7:
                "Help us Oh God to be watchful so that we will not embark on anything that will cut our lives short.",
            },
          },
          {
            id: 4,
            title: "lesson Eight",
            description: "Restoration Through Christ (Lesson 1-4)",
            date: "APR. 21, 2024",
            topic: "Philemon:Author's focus and major character",
            content: {
              lesson_date: "JUN. 04,2023",
              lesson_number: 8,
              description:
                "Distress: Some Bible Character's Reaction [LESSONS 5-9]",
              title: "THE CHILDLESS GAVE BIRTH",
              qauter_theme:
                "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",

              suggested_hymns: "G. H. B. 9, 37 ",
              devotional_reading: "Isa. 54:1-7",
              topic_for_adults: "It Is Not Over; You Will Not Be Ashamed",
              topic_for_youth: "Be Positive; God Will Grant Your Request",
              topic_for_intermediate: "Don't Fear; God Will Not Forsake You",
              lesson_scriptures:
                "1 Sam. 1:5-8; 20-28; Isa. 54:1-7; Lk. 1: 5-18, 24-25",
              memory_verse:
                '"Do not fear for you will not be ashamed nor be disgraced, you will not be put to shame for you will forget the shame of your youth, and will not remember the reproach of your widowhood any more"',
              memoryVerse_bible_passage: "(Isaiah 54:4) NKJV.",
              lesson_background:
                "In the Hebrew society, one of the greatest tragedies that could befall a woman was to be barren because they knew that children were a blessing from God. Lack of children was assumed to be a curse. Similar things happen in our culture and society today. Whatever the cause of barrenness, God is up to the task; what He did then, He will do again.",
              part1_topic:
                "PETITION GRANTED AND WEEPING ENDED-1 SAM. 1:5-8, 20-28",
              part1_para1:
                "The condition of Hannah, coupled with her rival's continuous provocation and mockery, traumatised her and moved her to earnestly pray to God. God used the burden of Hannah's heart to bring a surprisingly larger solution to the burden of His own heart as there was spiritual slumber in the land then. The woman became the mother of Samuel, who would be a prophetic voice from God to the nation of Israel and become the divine solution to the spiritual needs of Israel through his prophetic ministry.",
              part1_para2:
                "Barrenness was the ultimate tragedy for a married Hebrew woman. The inability to perpetuate the name of her husband and secure the orderly transfer of his inheritance upon his death often resulted in insecurity and humiliation. Hannah's prayer demonstrates the proper way to handle situations over which we have no control. Hannah sought the face of God knowing surely that it was only God who could solve her problems. Firm in conviction, she worshipped God, and the Lord remembered her, granted her petition, brought fruitfulness to her womb, stopped her from weeping, and removed the social disgrace associated at that time with infertility.",
              part1_para3:
                "Only God sees and knows the whole picture. It may be that He allows our conditions for reasons we can't possibly imagine. Therefore, let us trust that God has allowed it but not caused it because He loves us.",

              part2_topic: "AGE IS NOT A BARRIER- LK. 1:5-18; 24-25",
              part2_para1:
                "To have children as a woman is limited certain age in life. Medical science makes it clear that conceiving and giving birth to a child after menopause is difficult, if not impossible. However, when God is involved, nothing is too difficult or impossible for Him. Little wonder Zachariah, considering his age and his wife's age, questioned the validity of the angelic announcement, 'How shall I know this? I am an old man,and my wife has well advanced in years (Lk.1:8).",
              part2_para2:
                "In reality lack of children deprives couples of personal happiness. It is generally considered to indicate divine disfavour or God's curse upon the childless mother, and often causes social reproach and stigma. In this case, there is no justifiable reason why God should curse Zachariah and his wife because it was written that both of them were upright before God (Lk. 1:6). That simply suggests that there are some known or unknown factors that may cause barrenness or infertility. It may even be part of life's challenges or the battle one must fight before crossing to the Promised Land. Therefore, one must not be discouraged or become hopeless; rather, one must continue waiting, trusting, and praying to God until He grants one's requests and desires.",

              part3_topic: "GOD FORSAKES NOT-ISA. 54:1-7",
              part3_para1:
                "Infertility can present a husband or wife with an urgent crisis of faith. Being unable to bear children raises profound questions about the purpose of the marriage, the worth of the marriage partners, and their sense of belonging in the Church community. It causes sorrow, anger, and grief for the couple to such an extent that they might even seek for divorce.",
              part3_para2:
                "Who causes infertility? Can God cause it? No, He may allow it. Should the man or woman be blamed for their childlessness? That will never help. Rather, let us be aware that God knows about it and that He is capable of solving the problem or helping us to handle the situation well. He helped our mother Sarah and she gave birth to Isaac. He helped Hannah and she gave birth to Prophet Samuel. Age did not stop Him from helping Elizabeth. Whatever the doctor might have diagnosed, He will not forsake you and He will help you. My sister was diagnosed with an ovarian cyst. A surgical operation was recommended. The family could not raise the: they prayed and today she is the mother of two children. God will not forget you or forsake you.",
              part3_para3: "",
              lesson_conclusion:
                "Our purpose in life is more than just marriage and childbearing. Having children is a good and wonderful experience for couples, but it is not a precondition for attaining maturity in Christ, having value in the Christian community or becoming more like Christ. It is not also the condition for making heaven at last. It is not wrong for childless couples to pray for themselves or ask others to pray for them about solutions to their problems but they must not allow the challenge to shift their focus from heaven which is the ultimate.",

              question1: "What are the likely causes of infertility?",
              question2: "How can christian couples overcome infertility?",
              question3:
                "How can we reach out to and assist those who are experiencing infertility?",
              question4:
                "Share your experience of how God has helped some childless couples in the past?",
              question5: "",

              day1: "MON",
              date1: "15/4/2024",
              topic1: "MIRACLE BABY IN OLD AGE",
              bible_text1: "GEN. 11:29-30, 21:1-8",
              lesson_word1:
                "The gracious God miraculously removed infertility and barrenness from the family of Abraham and Sarah. Abraham was 100 years old, while Sarah was in her menopause when the two of them got their miracle baby boy, and suddenly God turned their weeping into laughter and barrenness into fruitfulness. Some years back, they were probably hopeless to the extent that it was extremely difficult for them to believe God and His word. However, their seeming faithlessness could not stop God from doing what He promised and was capable of doing because with God, all things are possible.",
              point_of_emphasis1: "For with God, nothing will be impossible.",
              prayer_points1:
                "Let us give thanks to the God of all possibilities.",
              day2: "TUE",
              date2: "16/4/2024",
              topic2: "PRAYER ANSWERED",
              bible_text2: "GEN. 25:19-25",
              lesson_word2:
                "Like Abraham his father, Isaac also experienced delay in childbearing. He earnestly prayed for his wife and God gave him victory over the bloodline battle and generational carryover. The causes of delay in childbearing can be due to so many factors like: infidelity, diseases, generational curse etc. Some of them can be handled medically, while others don't need medical solutions or intervention. However, with fervent prayers of faith to God, victory is guaranteed. Therefore, let us turn it to God in prayer. POINT OF EMPHASIS: Victory is guaranteed with fervent prayers.",
              point_of_emphasis2: "Victory is guaranteed with fervent prayers.",
              prayer_points2:
                "Oh Lord, break every generational barrenness in Jesus' name.",
              day3: "WED",
              date3: "17/4/2024",
              topic3: "REPROACH TAKEN AWAY",
              bible_text3: "GEN. 29:31; 30:22-24",
              lesson_word3:
                " A barren wife has reason for great shame in many cultures. At a point, Rachael became envious of her sister and tried to blame her husband for her condition. A situation like this does not respond positively to the blame game. The people concerned need to acknowledge that the blessing of offspring could come only from God and fervent prayer rather than shifting the blame. God responds positively to the prayers of His children. We don't have to worry, be stressed or be jealous of others when we don't see a way to meet our needs because God sees and will provide a solution.",
              point_of_emphasis3:
                "When things get hectic and you don't know what to do, don't fear; God always gets a ram in the bush.",
              prayer_point3:
                "Arise, oh God and open the wombs of all Your children who are trusting You for the fruit of the womb.",
              day4: "THUR",
              date4: "18/4/2024",
              topic4: "A BLESSED CHILD WAS BORN",
              bible_text4: "JUDG. 13:2-4, 22-24",
              lesson_word4:
                "Manoah's wife was sterile, infertile and childless like Sarah, the mother of Isaac Rebecca, the mother of Jacob; Hannah, the mother of Samuel; and Elizabeth, the mother of John the Baptist also suffered the same fate. One common denominator among these barren women was that after divine intervention, they all gave birth to special boys. God has a plan for every child. The parents cannot know the end at the beginning. Inspite of our mistakes and our children's poor choices, our God is faithful. We must partner with God to raise our children to have genuine faith of their own, then, God's eternal purpose will be fulfilled in their lives.",
              point_of_emphasis4:
                "Every child has a unique purpose and personality.",
              prayer_point4:
                "Help all our children to know and serve You in holiness in Jesus' name.",
              day5: "FRI",
              date5: "19/4/2024",
              topic5: "PETITION GRANTED AND REPROACH VANISHED",
              bible_text5: "1 SAM. 1:5-6; 20-25",
              lesson_word5:
                "Why did God close Hannah's womb? This is a difficult question that only God can answer. In the Old Testament, any woman who could bear no children was viewed as cursed by God. Hannah's rival, Peninnah, made things worse for her through her daily provocation, causing her inner turmoil and pain. Hannah did not fight back, instead, she went to God in prayer, pledging that if God answered her prayers, the boy would be dedicated to God. Praise God! God answered her petition. Infertility ended. Reproach disappeared. A prophet of God was born. Provocation and mockery vanished.",
              point_of_emphasis5: "Hannah sought God for what only He can do.",
              prayer_point5:
                "Every social disgrace and reproach associated with delay in child bearing is removed from all expectant couples in Jesus' name.",
              day6: "SAT",
              date6: "20/4/2024",
              topic6: "SHOWN GREAT MERCY",
              bible_text6: "Lk. 1:5-14, 57-58",
              lesson_word6:
                " The Jews considered childlessness to be a sign of God's displeasure. There is something that is so mysterious in the case of Zachariah and Elizabeth. Apart from the fact that they were ordained priests, the Bible attests to the fact that both of them were upright in the sight of God, observing the commandments and regulations of the Lord and they were blameless. But they had no children because Elizabeth was barren and she was advanced in years. They were righteous before God, yet, childless until their old age. This could only be one of the challenges of life that any child of God might face despite his or her commitment to God. The joy is that when they were hopeless and least expected it, God intervened and showed them great mercy. ",
              point_of_emphasis6:
                "Don't lose hope; your miracle is on the way.",
              prayer_point6:
                "Lord, give us total victory over the challenges of life in Jesus' name.",
              day7: "SUN",
              date7: "21/4/2024",
              topic7: "FEAR NOT! YOU ARE NOT FORSAKEN",
              bible_text7: "ISA. 54:1-7",
              lesson_word7:
                "In those days in Israel, unmarried or barren women were at the bottom of the social hierarchy. To be without a husband or a childless wife was a disgrace and reproach to the woman and her family, and a husband could divorce his wife if she was infertile. There and then, for women, success and acceptance equalled a husband and lots of children. Isaiah compared God's people to a barren woman, assuring them that they would not be ashamed or disgraced. Whatever you may be passing through, God is telling you not to be afraid; He assures you of His abiding presence and that that unpalatable experience will soon be over.",
              point_of_emphasis7:
                "Though you can't fully comprehend God and His ways, because of His great love and care for us, we can trust Him.",
              prayer_point7:
                "Show us Your great mercy, oh Lord, and turn our situation around in Jesus name",
            },
          },
          {
            id: 5,
            title: "lesson Nine",
            description: "Restoration Through Christ (Lesson 1-4)",
            date: "APR. 28, 2024",
            topic: "INSANE MADE SANE",
            content: {
              lesson_date: "APR. 28, 2024",
              lesson_number: 9,
              description:
                "Distress: Some Bible Character's Reaction [LESSONS 5-9]",
              title: "INSANE MADE SANE",
              qauter_theme:
                "QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE",

              suggested_hymns: "G.H.B. 166, 422",
              devotional_reading: "Matt. 17:14-18.",
              topic_for_adults:
                "Use Your Authority As A Believer Appropriately",
              topic_for_youth: "You Are Empowered To Cast Out Demons",
              topic_for_intermediate: "Exercise Your God Given Power",
              lesson_scriptures: "Mk. 8:31-33; Mk. 16:15-18; Jn. 14:12 ",
              memory_verse:
                '"And these signs will follow those who believe: In my name they will cast out demons; they will speak with new tongues"',
              memoryVerse_bible_passage: "Mark 16:17 (NKJV).",
              lesson_background:
                "The presence of evil or demonic spirits is undeniable in our world. Demons are fallen angles led by Satan. They are enemies of God's plan and are out to cause havoc in human life. As believers, we have been given authority over demonic spirits. Our lesson this week will show us how to exercise the power God has given to us over evil spirits.",
              part1_topic: "SATANIC SPIRIT RUINS LIFE-MK. 5:1-5",
              part1_para1:
                "Insanity is the condition of being insane, a state of being derangement of the mind, craziness, lunacy or madness. There is a powerful revelation in Ecclesiastes 9:3, which is that madness is common to all men. The spirit of insanity is so subtle, it shows up in every individual's life at one point in time or the other, though, it is more pronounced in some than others. It moves one to say what one ought not to say, or do what one knows one ought not to do. You have heard of the phrase '5 minutes of madness'. ",
              part1_para2:
                "This is a situation whereby an individual allows anger to control him/ her and causes him/her to do what he/ she ought not to do, or say what he/she ought not to say. Those that are completely possessed by the spirit of insanity are a danger to themselves and to those around them. From the passage above, we discovered that the boy was a danger to both himself and to those around him. Therefore, he could not live with normal people but had to live in a graveyard. The goal of this spirit is to ruin life.",
              part1_para3:
                "Satanic spirit ruins life through possession and oppression. Though a Christian cannot be possessed by satanic spirit, he can be oppressed. Possession is when a demonic spirit controls and directs an individual, even against his/ her will as in the case of the boy in Mark 5. Oppression on the other hand can manifest in form of thoughts, feelings or illness. They are things that don't control us but can seriously hinder us and stop us from doing God's will for our lives.'",

              part2_topic: "DEMONS MUST BOW. MK. 5:6-13",
              part2_para1:
                "In Roman army, a legion is about 6,000 soldiers. We are not certaint 6,000 demons were resident in this boy, but we were sure that many demons were living in him. As we discussed in part 1 of the lesson, the goal of this satanic spirit is to ruin life. The Bible mad: us to understand that the purpose of the devil is to steal, to kill and to destroy, but Jesus has come to give us life (Jn. 10:10).",
              part2_para2:
                "Demons have no power over Jesus. God and Satan are not equals. There is no comparison, God out-powers Satan. Every time Jesus had an encounter with demons, they bowed and obeyed Him. He does not beg, plead or negotiate with demons. Jesus tells them what to do and they must obey. It was His word that created their existence in the first place. Jesus is immeasurably stronger than demons. The demons cannot do anything without Jesus' permission. The demons begged Jesus for mercy; which means, they admitted that Jesus is superior. They kept begging Him again and again not to send them away, but sought permission to enter a herd of pigs. The insane boy was delivered and made sane.",

              part3_topic: " EMPOWERED TO CAST OUT-MK. 16:15-16; JN. 14:12",
              part3_para1:
                "Casting out demons is a significant part of Jesus' ministry. The Lord Jesus has also given us (believers) the power and authority to cast out demons. The word ‘cast out’ means to throw out, to evict someone from a place; to drive out, or to expel. Demons are the primary cause of most disasters and suffering that occur in the earth. Demons are the chief cause of mental sickness or insanity.",
              part3_para2:
                "They are also the chief force behind occultism, sorcery, witchcraft and paganism. Mark 16:17 makes it very clear that casting out demons is a responsibility that every believer possesses. Jesus never went looking for demons, neither should we. But when they appear, we are to act as Jesus would act - take authority over them and kick them out of people's lives, thus setting the people free from demonic control. It is worth noting that people can be free from their control if they embrace the gospel of our Lord Jesus Christ and become genuinely born again.",
              lesson_conclusion:
                "The singular purpose of the devil and his host of demons is to ruin lives. Praise be to God who has sent His Son Jesus Christ to destroy all the works of the devil. And God has also given believers the power and authority to cast out demons through the name of Jesus.",

              question1: "What is the meaning of 'Insanity'?",
              question2: "Who are the primary source of calamities on earth?",
              question3: "How can one be free from demonic control?",
              question4:
                "Mention different ways one can expose himself or herself to demonic control.",
              question5: "Do believers have power over demons? EXPLAIN!",

              day1: "Monday",
              date1: "22/4/24",
              topic1: "DEMON POSSESSED, BLIND AND MUTE HEALED",
              bible_text1: "MATT. 12:22-30",
              lesson_word1:
                "Jesus has always shown His desire to help those in need. The healing of the demon possessed man shows that Jesus has power to heal. The Pharisees doubted and critised Jesus' power to heal. They said He was able to do this through devilish power. Jesus pointed out the fallacy of their claim by saying that it doesn't make any logical sense that He would drive out demons by the power of demon. Jesus has complete power and authority over Satan and all his forces.",
              point_of_emphasis1:
                "Jesus could cast out the forces of evil because He has power over Satan.",
              prayer_point1:
                "Father, we pray that You heal as many that are demon possessed in our midst in Jesus' name.",
              day2: "TUE",
              date2: "23/4/24",
              topic2: "UNCLEAN SPIRIT CAST OUT",
              bible_text2: "Mk. 1:23-27",
              lesson_word2:
                "Unclean spirits or demons are under the leadership of Satan. They are fallen angels who joined Satan in his rebellion. Their work is to tempt people to sin and they also afflict people with sickness and disease. Although not all diseases come from demons, they can cause a person to become mute, blind or insane. In every case where demons confronted Jesus, they lost their power. Evil spirits cannot do anything without the permission of God.",
              point_of_emphasis2:
                "Evil spirits cannot do anything without the permission of God.",
              prayer_point2:
                "I rebuke every demonic activity in my life and family in Jesus' name.",
              day3: "Wed",
              date3: "24/4/24",
              topic3: "BOWED AND CRIED OUT BY FORCE",
              bible_text3: "MK. 5:1-13",
              lesson_word3:
                "Having an 'unclean spirit' means being demon possessed. It is possible for an individual to house over three thousand (3,000) demons. The unclean spirit said its name was legion. A legion is about 3,000 to 6,000 soldiers in the Roman army. The primary purpose of demons is to destroy the humans they inhabit. The goal of Jesus on the other hand is to give people freedom from sin and Satan's control. Demons have no power over you when you give your life to Jesus.",
              point_of_emphasis3:
                "If Jesus could grant the request of demons, He can also grant your request.",
              prayer_point3:
                "I surrender my life to Jesus and I declare freedom from demonic possession in Jesus' name.",

              day4: "Thur",
              date4: "25/4/24",
              topic4: "REBUKED AND CAST OUT",
              bible_text4: "Mk. 8: 31-33",
              lesson_word4:
                "Jesus told His disciples that He would suffer, He would be rejected, He will be killed and after three days He would rise again. Peter was trying to discourage Jesus because of the love he had for Him. He did not know that he was being used by the devil to prevent Jesus from fulfilling His mission on earth. Jesus had to rebuke Satan because He knew that the devil was behind it. Though the disciple had a good motive but it was not his job to guide and protect Jesus but to follow Him.",
              point_of_emphasis4:
                "Do not allow the devil to use you against the purposes of God.",
              prayer_point4:
                "Father, don't let Satan use me against Your purpose in Jesus name.",

              day5: "Friday",
              date5: "26/4/24",
              topic5: "LUNATIC MADE WHOLE",
              bible_text5: "MATT. 17:14-21",
              lesson_word5:
                "Jesus gave the disciples power over the enemy but in the passage MATT. 17:14-21 above, they were unable to heal the demon possessed boy. They asked Jesus why they were unable to do it. Jesus told them it was as a result of their lack of faith. It is the power of God, not our faith that moves mountains, but faith must be present to do so. Perhaps the disciples had tried to drive out the demon with their own ability rather than God's.",
              point_of_emphasis5:
                "There is great power in even a little faith when God is with us.",
              prayer_point5: "Father, please increase my faith in Jesus' name.",

              day6: "Saturday",
              date6: "27/4/24",
              topic6: "SET FREE",
              bible_text6: "Lk. 13:10-17",
              lesson_word6:
                "Diseases and disabilities are common and their causes are many, but we can trace the original source to Satan, the author of all the evils in our world. The good news is that Jesus is more powerful than any devil or any disease. In His mission statement, He said He has come to set the captives free. Jesus is the liberator, enabling us to stand straight, freeing us from what bows our heads. He came to destroy the works of the devil in our lives.",
              point_of_emphasis6:
                "Jesus has the power to set us free from all diseases.",
              prayer_point6:
                "I declare that I am healed through the stripes of Jesus.",

              day7: "sunday",
              date7: "28/4/24",
              topic7: "COMMANDED TO COME OUT",
              bible_text7: "ACTS 16:16-18",
              lesson_word7:
                "Paul was not thrilled by the marketing efforts of the afflicted girl. Though she spoke the truth, there were some hidden motives in her action. The girl's persistence was a distraction from what God was trying to accomplish in the town. This demon possessed girl was right in her theology, but it was designed to distract. Paul set the girl free from the influence of the distracting spirit.",
              point_of_emphasis7:
                "Some seemingly correct theologies have hidden motives.",
              prayer_point7:
                "Reveal every hidden plan of the enemy in my life in Jesus' name.",
            },
          },
        ],
      },
    },
    {
      id: 1,
      unit_number: "Unit 3",
      title: "Be Distress Free [LESSONS 10-12]",
      image: require("../assets/unit333.jpg"),
      units: {
        lessons: [
          {
            id: 1,
            title: "lesson Ten",
            description: "Be Distress Free [LESSONS 10-12]",
            date: "MAY 5, 2024",
            topic: "PERSONAL ROLES AGAINST DISTRESS",
            content: {
              lesson_date: "MAY 5, 2024",
              lesson_number: 10,
              description: "Be Distress Free [LESSONS 10-12]",
              title: "lesson Ten",
              qauter_theme:
                "GOD'S RESPONSE TO THE DISTRESSED (A Study of Divine Interventions)",

              suggested_hymns: "G. H. B. 75, 236",
              devotional_reading: "Jam. 4:1-8",
              topic_for_adults:
                "Protect Yourself Against Things That Causes Distress ",
              topic_for_youth: "Do The Needful To Avoid Distress",
              topic_for_intermediate: " You Have A Role To Play",
              lesson_scriptures:
                "Micah 2: 1-3, 1 Cor. 5: 11-19; Phil. 3: 17-21; Prov. 15: 26-30; Num. 11: 18-20, 31-34; Jam. 4: 1-8",
              memory_verse:
                '"Where do wars and fights come from among you? Do they not come from your desires for pleasure that war in your members?."',
              memoryVerse_bible_passage: "(James 4:1) NKJV",
              lesson_background:
                "The world we live in teaches us daily. It teaches us to pretend and look saintly while struggling with addictions, lust, and destructive habits. We are taught to amass and accumulate wealth while being stingy and covetous - always in search of more. We are taught to get rich whichever way we can, hide our hurts and never open.up to the one who can help us. The lesson of this week will shed light on these salient points and help us garner relevant and helpful Scriptural information that will help us live a distress free life.",

              part1_topic:
                "AVOID DESTRUCTIVE HABITS-MIC. 2:1-3; 1 COR. 5: 11-19",
              part1_para1:
                "As we grow up in life, we take on patterns and routines, some of which are beneficial to our growth, development, and progress. Some others are destructive, unhelpful and they inhibit our growth. Destructive habits are cultivated over time and most times are addictive and destructive to the person practising such. Some destructive and addictive habits are gambling, chronic procrastination, addictive shopping, binge eating, substance abuse, self-harm etc. Most times, these habits start little and innocently but become addictive over a period of time.",
              part1_para2:
                "It is unfortunate that some believers are victims of addictive and destructive habit. Many are addicted to pornography, masturbation, negative thoughts, covetousness, uncontrollable outbursts, vain and vulgar words etc. but we cover up so well that no one can see what we do in private. Sin is destructive. Although God loves everyone, He hates sin. The Scriptures above point out the negative and sinful habits of the people. They covet things that are not theirs, oppress the weak, practise wickedness and think of evil on their beds. The Corinthian brethren were advised to be careful not to associate with anyone who is sexually pervert, greedy, idolaters, abusive and drunkards.",
              part1_para3:
                "God's judgement awaits those who toy with sin and practise destructive and addictive habits. Micah points out that God is against such people. Brethren, whatever habit you have cultivated over time which is sinful and can lead to destruction is overdue for expulsion from your life. You must run to God today, cry out for His mercy. Do the needful to avoid and circumvent destructive habits henceforth.",

              part2_topic: "DON'T BE GREEDY- PHIL. 3: 17-21; PROV. 15: 26-30 ",
              part2_para1:
                "He who is greedy for gain troubles his own house (Prov. 15:27a). Greed corrupts, greed kills. Someone rightly said, 'Wherever there is power, greed, and money, there is corruption'. Greed is the foundation of most of the ills and evils in our society. Where there is greed, there is hurt, conflict, pain, trouble and strife. It is incredible to discover that greed has crept into the Church and it is found in the hearts of some of those who are called to bear the name of the Lord. Greed has turned many believers into soothsayers. Greed is why we have so many fake prophets today.",
              part2_para2:
                "Lust gives birth to greed and greed is cancerous. Greed is the intense and selfish desire for something, especially wealth, power, or food. 1Cor. 3:19 describes the greedy as those, 'whose end is destruction, whose god is their belly, and whose glory is in their shame-who set their mind on earthly things'. Indeed, the greedy have forgotten three salient truths: a. we are not of this world- our citizenship is in heaven; b. we are not going to take  anything we acquire here on earth to the grave or beyond it and; c. human want are truly insatiable, whatever we have can never be enough. The greedy hear will want more even if he gains the whole world",
              part2_para3:
                "The Scriptures warn us against greed; a. We are to be content with what we have (1 Tim. 6:6; Heb. 13:5); b. One's life does not consist in the abundance of his possessions (Lk. 12:13-21); c. He who loves money will not be satisfied with money (Eccl. 5:10); d. Greed ruins fellowship and causes strain among the brethren (1 Cor. 5:11); e. Ill-gotten wealth kills (Prov. 1:17-19). We must do away with every iota of greed in us and ensure that we live a life of contentment and trust in the blessings of God that make rich without adding sorrow (Prov. 10:22).",

              part3_topic: "HEED GODLY INSTRUCTIONS -NUM. 11:18-20, 31-34",
              part3_para1:
                "The world often teaches that only the frail and weak seek counsel but this is far from the truth. It is written, 'He who walks with wise men will be wise, But the companion of fools will be destroyed' (Prov 13:20). It is good and beneficial to be surrounded with godly counsellors and it is even more profitable to listen to them and obey godly instructions passed down.",
              part3_para2:
                "The call for sanctification in verse 18 is not just to wash hands and feet as their usual custom, it is to make their hearts and bodies ready for the visitation of the Lord. The same goes for us today. We are to sanctify our hearts and make our lives ready for the coming of the Lord.",
              part3_para3:
                "We must be diligent in obeying the word of the Lord. We must do away with verything that originates from lust and self. We must serve God with reverence. We must fight everything that wants to I us back to Egypt. Heeding godly and scriptural instruction is a sure way safety and attaining spiritual balance.",

              lesson_conclusion:
                "We can be believers and be called Christians and still struggle with addiction and destructive habits. It is possible to know the Scriptures and speak in tongues but still be greedy and covetous. Only by heeding godly instructions can we escape besetting sins and conquer the flesh that wants to enslave us and force us into ungodly compromise.",

              question1: "What do distructive habits mean to you?",
              question2:
                "What is greed and what dangers does it pose to us as believers",
              question3:
                "How can we help a believer struggling with addiction and distructive habits?",
              question4: "What are the benefits of heeding Godly instructions?",
              question5: "",

              day1: "Monday",
              date1: "29/4/24",
              topic1: "AVOID DESTRUCTIVE HABITS",
              bible_text1: "MICAH 2: 1-3",
              lesson_word1:
                'God loves everyone but hates sin. It is His will that everyone be saved. God hates wickedness. Those who practise it are under his wrath and are awaiting His judgement. According to the Scripture above, the wicked covet fields and take them by violence, they covet houses and seize them. They oppress a man and his house (verse 2). They do all these and more because it is in the power of their hands (verse 1c). God will repay the evil with His own coin and the wickedness they have devised will hunt them. As kingdom people, we must avoid habits and acts that promote violence. We must run away from destructive acts as it will result in "disaster from which you cannot remove your necks" (verse 3b).',
              point_of_emphasis1: "The wicked cannot escape God's wrath.",
              prayer_point1:
                "Lord, help me to avoid anything that is tantamount to destruction in Jesus' name.",
              day2: "Tuesday",
              date2: "30/4/24",
              topic2: "Do AWAY WITH CRAFTINESS",
              bible_text2: "1 COR. 3:11-19",
              lesson_word2:
                "God is the true judge. He judges the intents and contents of a man's heart. Nothing is hidden from God as He sees and knows all things. Everything done in the secret is open to Him. God in His own wisdom and the greatest builder has laid the perfect foundation for all men to build upon this foundation is Jesus Christ. Everything we are building and we are expected to build must be on Him and rooted in Him. Your works done in the flesh will be tested with fire. No matter how beautiful what you built is to the natural eyes, if God does not see Christ in it, it will not stand the test of time. If there is craftiness, manipulations, deceptions, defilement and human wisdom in what you are building, it will burn.",
              point_of_emphasis2:
                "There is no space for craftiness and the application of human wisdom when building spiritual things. It must be perfect.",
              prayer_point2:
                "Lord, help me to build as You want me to in Jesus' name.",
              day3: "Wednesday",
              date3: "1/5/24",
              topic3: "ABSTAIN FROM DEFILEMENT",
              bible_text3: "PROV. 23:26-32",
              lesson_word3:
                'Defilement is the action of soiling or contaminating something or someone. We live in a world where everything seems to be set up to distract and defile us. There are things that defile all around us and if we are not careful, we will be subtly dirtied and polluted. There are two things a believer must be careful of - things that delicately and subtly bring defilement - pleasure and addictions. You may not sleep with a strange woman or have such a problem, but what are the things that give you pleasure but also lead to spiritual defilement. Also, what intoxicates you as wine and you are slowly getting addicted to it but at the end, it opens the door to defilement. The key to freedom is in verse 26 of our text, "My son, give me your heart and let your eyes observe and delight in my ways".',
              point_of_emphasis3:
                "Abstain from everything that contaminates, pollutes and brings defilement.",
              prayer_point3:
                "Lord, by Your grace, I shall not give room for spiritual defilement in my life in Jesus' name.",
              day4: "Thursday",
              date4: "2/5/24",
              topic4: "DESPISE NOT INSTRUCTION",
              bible_text4: "NUM. 11: 18-20, 31-34",
              lesson_word4:
                "God values obedience. Our lusts often lead us in opposite direction to the will and counsel of God for our lives. Whenever we give our lust a space to grow and flourish, it leads to death and other unpalatable and grievous consequences. According to our passage, the children of Israel gave in to lust in their hearts. They did not acknowledge the goodness of God but blatantly ignored His instructions and demanded things inspired by lust. They were no longer satisfied with the food God fed them with, they demanded for meat. Lust often masks the pains of Egypt with its pleasures. The Israelites remembered the meat of Egypt but forgot its pains and labour. Anytime you ignore God's instructions, you go the way of death and destruction.",
              point_of_emphasis4:
                "Lust often masks the pains of Egypt with its pleasures.",
              prayer_point4:
                "O Lord, deliver me from lust and help to me continue to adhere to Your instructions in Jesus' name.",
              day5: "Friday",
              date5: "3/5/24",
              topic5: "SET YOUR HEART NOT ON EARTHLY THINGS",
              bible_text5: "Phil 3:17-21",
              lesson_word5:
                "We are living at a time described in the Scriptures as perilous. Everything tends to preach selfishness and worldliness to us. The moment we think of satisfying our lusts and desires, the moment we think of ourselves first before Christ and the kingdom, we are subtly sliding into the world. Today, people are doing things that will satisfy their belly - that is, satisfy their appetites and desires, or project their self-made image to the world - ensuring they amass the wealth and fortune of this world for themselves and not for kingdom use. As believers, we must continue to shun and fight the pressure to compromise and yield to the pleasure of this world. We must remember that we are citizens of heaven. We must continually set our hearts on heavenly things.",
              point_of_emphasis5:
                "We must continue to shun and fight the pressure to compromise and yield to the standards of the world.",
              prayer_point5:
                "Lord Jesus, help me to keep minding only things that pertain to the kingdom in Jesus' name.",
              day6: "Saturday",
              date6: "4/5/24",
              topic6: "DON'T TROUBLE YOUR OWN HOUSE",
              bible_text6: "PROV. 15:26-30",
              lesson_word6:
                "Trouble comes as a result of sin. When a man goes the way of greed, his way goes awry and that will lead to compromise which will result in trouble. Greed makes a man to go beyond his limits. He demands more where all has been given. Greed makes a man to see no value in what belongs to him but his desire will be towards things that are not rightfully his. When a man is greedy, his thoughts become tainted and abominable, his mouth pours out evil things, the Lord becomes far from him, and trouble follows him everywhere. No matter the peace and harmony in a home, the moment greed is mixed with the equation, it automatically unbalances the scale.",
              point_of_emphasis6:
                "Do not trouble your own house by becoming greedy.",
              prayer_point6:
                "I receive grace never to become greedy and covetous in Jesus' name.",
              day7: "Sunday",
              date7: "5/5/24",
              topic7: "AVOID EVIL DESIRE",
              bible_text7: "JAM. 4:1-8",
              lesson_word7:
                "We all have desires which may be legitimate and sincere. We need to be careful so that we don't allow ourselves to drift off and become consumed by our needs to the extent that we become lustful and greedy. This is sin. As kingdom people, we must avoid lust. The lust of the eyes, the flesh and the pride of life could result in hurt, harm and unhealthy rivalry even in the Church. Lust hinders prayers and makes us enemies of God. We must put on the garment of humility, submit to the Lordship of Christ and draw near to God and we will enjoy all the blessings and benefits of grace.",
              point_of_emphasis7: "Avoid lust, it is a destroyer.",
              prayer_point7: "Lord, uproot lust from my heart in Jesus' name.",
            },
          },
          {
            id: 2,
            title: "lesson Eleven",
            description: "Be Distress Free [LESSONS 10-12]",
            date: "May 12,2024",
            topic: "Exit Distress Part 1",
            content: {
              lesson_date: " May 12, 2024",
              lesson_number: 11,
              description: "Be Distress Free [LESSONS 10-12]",
              title: "lesson Eleven",
              qauter_theme:
                "GOD'S RESPONSE TO THE DISTRESSED (A Study of Divine Interventions)",

              suggested_hymns: "G.H.B. 77,422",
              devotional_reading: "Proverb 15:21-23",
              topic_for_adults: "There Is A Way Out Of Distress",
              topic_for_youth: "Act on the Tips and Get Out Of Distress",
              topic_for_intermediate:
                " Information Is Power, Get Out Of Distress",
              lesson_scriptures:
                "Jer. 8:22, Lk 10:33-35, Prov 11:14, 15:21-23,Isa 57:16-17",
              memory_verse:
                '"I have seen his ways, and will heal him, I will also lead him, and restore comforts to him, and to his mourners"',
              memoryVerse_bible_passage: "Isaiah 57:18 (NKJV)",
              lesson_background:
                "Jesus said,'These things i have spoken to you, That in Me, you may have peace,In the world you will have tribulation; but be of good cheer, I have overcome the world'. These words were spoken both to prepare us for the eventualities of life and to provide succour and comfort when we are faced with distressing situations. Someone said, we will have troubles no matter how hard we pray. People will fall sick; we will lose colse relatives and friends and some other unpalatable situations will come our way. This week's lesson aims to prepare us and kit us with important tips to what to do when distressing situations occur as well as how to exit distress and come out victorious.",

              part1_topic:
                "DON'T DISCARD MEDICAL HELP - JER. 8:22; LK. 10:33-35",
              part1_para1:
                "How many people do you know died due to carelessness and ignorance? How many people have died because of an erroneous belief that medical help shows lack of faith in divine healing? How many people have lost pregnancies or died in labour because medical help was not sought or was a bit late when sought?",
              part1_para2:
                "The truth is that we have lost too many people to negligence. Many glorious and bright destinies have been cut short because we held on to a belief erroneously passed down to us. God never desires for anyone to experience pain and grief. The Scripture is full of verses that encourage us to seek medical attention when we are ill. God is the healer. He cures all kinds of sicknesses and the stripes of Jesus Christ have perfected our healing.",
              part1_para3:
                "As much as we believe that healing is God's act which we receive by faith, we also know that God has given us medical knowledge for our care and the repair of infected or affected cells in our bodies. Unfortunately, many have died untimely because of ignorance and spiritual pride. God was apparently surprised at what He observed in Gilead. He saw His people experiencing pains and they were not healed. Remember, God has provided a balm (medications, healing ointments) and a physician (doctor) in Gilead for the healing of the wounds and recovery of His people.",
              part1_para4:
                "When we are wounded, in pains and sick, we should seek medical help and assistance and not just spend our days and time in fasting and praying or carrying out misguided and ill-advised spiritual exercises that can further complicate our situations. As much as we must continue to exercise faith for our healing, we must also seek medical help where necessary.The good Samaritan did five things for the man wounded and left for dead, (a) he had compassion for the man wounded; (b) he bandaged the wounds and poured olive oil (he administered first aid - we must be intentional about having first aid in our homes and Churches); (c) he brought him to the inn (took him to a clinic/hospital for further treatment)- first aids is not enough, let us take the next step and visit a clinic or hospital for further tests and treatments; (d) he paid for the treatment of the wounded (treatment may be costly sometimes, we need to save for it, make use of available policies and schemes) and; (e) he promised to visit (let us not neglect relatives and friends in the hospital, let us be intentional about their care and always visit them to pray with them).",

              part2_topic: "SEEK COUNSEL-PROV. 11:14, 15:21-23",
              part2_para1:
                "Lionel Kendrick wrote, 'Christlike communications are expressions of affection and not anger, truth and not fabrication, compassion and not contention, respect and not ridicule, counsel and not criticism, correction and not condemnation. They are spoken with clarity and not with confusion. They may be tender or they may be tough, but they must always be tempered'. The world system may have Artificial Intelligence (AI), Google search, archives, online and offline documents that address several issues of life but most times, it is advisable to have a human mentor or counsellor who you can go to and seek counsel from when you need such. The Church also must be intentional about providing godly counsel to people. Unfortunately, most people see counselling as archaic and irrelevant and many who go for counselling only do so when they are truly in problem or need to fulfil all righteousness [especially premarital counselling] but the Scripture is explicit, 'where there is no counsel, the people fall; but in the multitude of counsellors there is safety' (Prov. 11:14).",
              part2_para2:
                "You don't need to experience distress. You can get out of the distressing situation you are currently facing because as a believer, there is an inherent power in you that enables and empowers you to overcome all situations. Remember, you can do all things through Christ that strengthens you. Also, there are several systems and structures put in place to help you navigate through every time and season of life you may be going through. Get intimated with the systems in your local Church and let God through the Church help you come out of the challenges of life victoriously.",

              part3_topic: "PRAY FOR RESTORATION-ISA. 57: 16-18",
              part3_para1:
                "Distress is ften aggressive and wants to sink its victims. God restores. God is merciful. Whenever we sin against God, the enemy seizes the opportunity to afflict and oppress us. Sin makes us spiritually, emotionally and physically vulnerable and susceptible to attacks. Most times, when we sin, our sin creates a wedge between us and God. He, in spite of our sins has decided to love and restore us. He comforts us even when we are far from Him.",
              part3_para2:
                "When we are under attack and we face distressing situation, we need the strength of the Holy Spirit to combat the situation in prayers. We must seek God in earnest and fervent prayers and hope for restoration. This same principle applies when we are not the one directly being tormented or distressed. We need to pray and hold on to the horns of the altar until there is a turnaround for the distressed. It is true that the fervent prayer of the righteous avails much and makes much power for a change available. As believers, if we have anyone who is depressed, afflicted or oppressed, we must pray to God, ask for his restoration and comfort. God will give us abundant peace, heal us and restore our fortunes.",

              lesson_conclusion:
                "Yes, things may go sour sometimes and we are struck down, pressed down, persecuted, and distressed but our faith in the God who restores must be strong. Also, when we or anyone close to us need medical attention, we must first pray for such an individual and then do the needful - take the sick to the clinic or hospital for further medical help and treatment. God heals and restores but we must seek counsel, take Scriptural steps and hold on to the horns of the altar in prayers.",

              question1: "Should a Christian seek medical help?",
              question2:
                "What will you say to people who believe a christian should only pray when sick and need not seek medical assistance?",
              question3: "Why do we need to seek counsel?",
              question4: "What should we do to people who are distressed?",
              question5: "",

              day1: "Monday",
              date1: "6/5/24",
              topic1: "EXERCISE SELF-CONTROL",
              bible_text1: "PROV. 23:4-10; JAM. 3:13-18",
              lesson_word1:
                "Self-control is one of the fruits of the spirit. It is defined as the ability not to show your feelings or not to do the things that your feelings make you want to do. Our human feelings are often unreliable and defective. Most of the troubles we run into are because we are trying to live according to what our senses and wisdom dictate to us. The Scriptures above contain nuggets of wisdom that will be immensely profitable to us if we abide by them. We must be careful to live according to Scriptural wisdom and let God direct our lives. When we allow our emotions to take the wheel, we suffer emotional wreck and often make mistakes that are detrimental to our spiritual growth, emotional stability and physical existence.",
              point_of_emphasis1:
                "We must exercise self-control so that we will live meaningful and peaceable lives.",
              prayer_point1:
                "Lord, help me to live my life in obedience to the instructions in Your word in Jesus' name.",
              day2: "Tuesday",
              date2: "7/5/24",
              topic2: "SEEK MEDICAL HELP",
              bible_text2: "JER. 8:22; LK. 10:33-35",
              lesson_word2:
                "God is the healer. He cures all kinds of sicknesses. The stripes of Jesus Christ have perfected our healing. We believe that healing is God's act which we receive by faith. We also know that God has given us medical knowledge for our care and the repair of infected or affected cells in our body. Unfortunately, many have died untimely because of ignorance and spiritual pride. While they were supposed to seek medical help and assistance, they went on days of fasting and praying or a spiritual exercise that further complicated their illness. As much as we must continue to exercise faith for our healing, we must also seek help where necessary. Remember, God has given a balm and a physician in Gilead for the healing of the wounds and recovery of His people.",
              point_of_emphasis2:
                "Don't let ignorance cut your life short. God has given you doctors for your recovery and healing.",
              prayer_point2:
                "Lord, help me to keep my faith alive and seek medical help when and where necessary in Jesus' name.",
              day3: "Wednesday",
              date3: "8/5/24",
              topic3: "TAKE A REST",
              bible_text3: "PS. 127:1-2; PROV. 3:23-26",
              lesson_word3:
                "Rest is a simple word but it is loaded with both spiritual and physical mysteries. God rested and He also commands rest for everyone. God has also put things in place in our bodies and world to make rest a possibility for us. Our body naturally demands occasional rest and the night often forces us to withdraw, take a break and sleep. Unfortunately, with all these spiritual and physical provisions, many of us often push beyond natural limits and work our bodies until they cave in and break down. It is often beneficial to take a break and resume work after a short rest than to work till you breakdown and become forced to take a longer rest in the hospital. If God is truly your God, you can be rest assured and know that He watches over you and will keep you safe from evils and dangers while you rest.",
              point_of_emphasis3: "Learn to take a rest.",
              prayer_point3:
                "Lord, help me to be wise enough to give my body rest when the need arises.",
              day4: "Thursday",
              date4: "9/5/24",
              topic4: "PRAY FOR RESTORATION",
              bible_text4: "ISA. 57:16-19",
              lesson_word4:
                "God restores. God is merciful. Whenever we sin against God, the enemy seizes the opportunity to afflict and oppress us. Sin makes us spiritually, emotionally and physically vulnerable and susceptible to attacks. Most times, when we sin, our sin creates a wedge between us and God. He, in spite of our sins, has decided to love and restore us. He comforts us even when we are far from Him. As believers, if we have anyone who is depressed, afflicted and oppressed, we must pray to God, ask for his restoration and comfort. God will give us abundant peace, heal us and restore our fortunes.",
              point_of_emphasis4:
                "It is God's desire that we be restored and comforted.",
              prayer_point4:
                "O Lord, we cry unto You, restore and comfort the sick and depressed among us in Jesus' name",

              day5: "Friday",
              date5: "10/5/24",
              topic5: "SEEK ADVICE",
              bible_text5: "",
              lesson_word5:
                "The wise seeks counsel. The wise understands that no one is an island. The wise know that there is safety and security in the multitude of counsellors. Often a time, we find ourselves at a crossroad where we do not know where to turn or who to turn to. We have plans and projects but lack the wisdom for execution. Some of us have wasted resources and suffered great loss because we did not seek counsel before embarking on the journey to the land of ruin. Indeed, 'where there is no counsel, the people fall; but in the multitude of counsellors there is safety'. Seeking advice and counsel does not portray you as weak and unwise. Only the wise and the strong understand that they need counsel.",
              point_of_emphasis5:
                "In the multitude of counsellors, there is safety.",
              prayer_point5:
                "Lord Jesus, help me not to embark on a journey of loss and waste before I seek needed advice in Jesus' name.",
              day6: "Saturday",
              date6: "11/5/24",
              topic6: "EXERCISE YOUR BODY",
              bible_text6: "1 PET. 4:6-7; 1TIM. 4:8",
              lesson_word6:
                "Bodily exercise is profitable. There are several physical, intellectual and emotional benefits to exercising your body. Physical exercise profits the mind, makes you physically alert and sharp. Bodily exercise awakens your mind and makes you alert and active always. When your body is in shape, you are less distracted and tired. There is a need for us as believers to ensure that we are not indolent and careless about our health. Develop a regimen for exercise today. Be religiously faithful to the routine. Fight off discouragement and apathy.",
              point_of_emphasis6:
                "Physical exercise is profitable, start exercising your body from today.",
              prayer_point6:
                "I receive grace to do the needful to stay physically fit and active in Jesus' name.",
              day7: "Sunday",
              date7: "12/5/24",
              topic7: "COMMIT YOURSELF TO GOD",
              bible_text7: "1 PET. 4:12-19",
              lesson_word7:
                "Truly, the words of our Lord Jesus Christ in John 16:33 remains eternally true, 'i this life, you will have tribulation, be of good cheer, for I have overcome the world'. The passage of today reminds us that even when we have done all, there may be times we are physically knocked down and we go through fiery trials designed to test and try If we go through trying times in whatever form they come, we must be steadfast in faith. When life knocks you down and you are going through what seems to be a trying and difficult time, learn to commit yourself and your soul to God the faithful creator. Do not seek ungodly shortcuts out of the situation, do not turn to other gods and do not deny God.",
              point_of_emphasis7:
                "When life knocks you down, learn to commit yourself and your soul to God.",
              prayer_point7:
                "Lord Jesus, help me never to deny the faith. Help me to remain faithful even in the face of fierce trials and tests.",
            },
          },
          {
            id: 3,
            title: "lesson Twelve",
            description: "Be Distress Free [LESSONS 10-12]",
            date: "May 12, 2024",
            topic: "EXIT DISTRESS (PART 2)",
            content: {
              lesson_date: "May 12, 2024",
              lesson_number: 12,
              description: "Be Distress Free [LESSONS 10-12]",
              title: "lesson Twelve",
              qauter_theme:
                "GOD'S RESPONSE TO THE DISTRESSED (A Study of Divine Interventions)",
              suggestedHymns: "",
              memoryVerse: "",
              suggested_hymns: "G.H.B 16,17",
              devotional_reading: "1 Pet. 5:1-11",
              topic_for_adults: "Hope Is Not Lost For The Distressed",
              topic_for_youth: "Distressed?There Is A Way Out",
              topic_for_intermediate: "Never Give Up To Distress",
              lesson_scriptures: "Philem.1:8-10; Acts 26:9-13",
              memory_verse:
                '"Why are you cast down, O my soul? And why are you disquieted within me?Hope in God;For i shall yet praise Him,The help of my countenance and my God"',
              memoryVerse_bible_passage: "Psalm 42:11 NKJV",
              lesson_background:
                "John Charles Ryle, a clergy who lived in the late 18th century, had this to say 'We live in a world where sorrow abounds. This has always been its state since sin came in. There cannot be sin without sorrow. And till sin is driven out from the world, it is vain for yone to suppose he can escape sorrow. Some have a larger cup of sorrow to drink than others. But few are to be found who live long without sorrow or care of one sort or another. The greater our affections, the deeper are our afflictions, and the more we love, the more we may have to weep'. Sicknesses, joblessness, financial challenges, losses, disappointment, separations, ingratitude, slanders, even death of loved ones are all common things that bring distress as we pass through life. The lesson of today is a continuation of how to win the war of distress and exit it.",

              part1_topic: "HOPE IS NOT LOST - PS.37:5-7A, 30-34; 42:5, 11",
              part1_para1:
                "Palm 37 is an encouragement to believers to wait on God. One feature of the Psalm is the comparison of the ways and characteristics of the wicked with those of the righteous. This passage stresses the fact that in time of distress, a believer may be tempted to think that the wicked prospering in their wicked ways are better off and may be confused, having paid attention to the temporary prosperity of such wicked ones who surround him.",
              part1_para2:
                "Yes, it is true that we are living in the midst of people who seem to be able to have their way undisturbed even at the expense of others, without being cautioned or stopped. Oh yes, the righteous can get upset about this. But the righteous should not. You and me should know and work towards one fact, and that is to live with the peace of God in our hearts in the midst of evil. Instead of harbouring self-pity and bitterness, wisdom has revealed in this Psalm and David's life points us to rather grow in confidence in the Lord.",
              part1_para3:
                "Also, the righteous should cultivate faithfulness and hope in God. He who does that will have rest in his heart and will not worry. In hope, he will commit his ways to the Lord and expect the best. If we roll our lives journey with all its burdens and difficulties and everything that weigh us on Him, Jesus will bear it all. The message is that, though the problem is real, hope is not lost. Hope is an optimistic state of mind. It is expectation with confidence in God. Hope is the confident expectation of what God has promised. Our diverse situation is good in God's hand provided we can commit it to Him in full trust and hope, because in God, our hope is never lost.",

              part2_topic:
                "SAY NO! TO SATAN-HEB. 4:12; EPH. 6:10-13; 1 PET. 5:8-9",
              part2_para1:
                " Satan is believers' adversary, our enemy. He is one who opposes man in his best interests; one that resists all the righteous efforts of man to obey God and do His will. Satan makes effort by his roaring to alarm and overpower believers through temptation and persecution and by so doing, makes them become an easy prey.",
              part2_para2:
                "That great Bible Scholar Clarke has this to say 'Though Satan seems invulnerable, he is not unconquerable. The weakest follower of God can confound and overpower him if he continues steadfast in the faith-believing on the Son of God, and walking uprightly before Him. To a soul thus engaged, Satan can do no damage'. Therefore, as believers, we should resist him and by no means give way to him by indulging in any sin or yielding to any temptation, oppose him, stand against his wiles and his power. Furthermore, believers must resist the devil by employing our spiritual weapon and armour against him. We should use all the resources God gave to stand firmly against the devil just as a soldier put on an armour to protect himself from the enemy's attacks. In Ephesians 6:13-18, we are introduced to the full armour of God which time and space may not allow us to explain one after the other here. Surely, God's word (sword of the Spirit) and all kinds of prayers offered in holiness give assurance of victory for believers in Christ.",
              part2_para3:
                "We are surrounded by testimonies of believers who were subjected to various distresses and are victorious. They are our examples. If they won, we too can win.",

              part3_topic: "KEEP COMPANY WITH THE SAINTS-PS. 119:63-64, 56:11",
              part3_para1:
                "When the Lord blesses, He also make His own a blessing to others. The time of trials and distress is not a time to abandon saints and abscond from fellowship, rather it is a time to covet and keep the company of saints whom God has positioned to be of help. The psalmist is our example of this. He made himself a companion of them that feared the Lord. They may or may not be rich and mighty, influential or well positioned, but certainly not of the wicked and ungodly. They are of such that had the fear of God in their hearts, those who truly'served and worshipped Him and that kept His precepts.",
              part3_para2:
                "Believers are partners with other believers in the blessings of the covenant and in the promise of it, in the grace of the spirit and in eternal glory and happiness. Battles that are jointly fought in the company of believers are won easy and fast. Of a truth, one will chase a thousand, two will chase ten thousand.",

              lesson_conclusion:
                "One of the three main elements of Christian character is hope. Hope is an essential and fundamental element of Christian life. Unbelievers are without hope. The great hope for Christians is the return of Jesus Christ when they will experience the fullness of their salvation and enter with Christ into the glory of the new age where everything that causes distress shall be no more.",

              question1:
                "Mention some stressful situations you have or seen people pass through.",
              question2: "How do people seek solution in time of distress?",
              question3:
                "Cite some instances of distress in which God has intervened in the Bible.",
              question4:
                ". How does companionship with. saints in the time of distress help? ",
              question5:
                " How important is 'the word and prayer'in the time of distress?",

              day1: "Monday",
              date1: "13/5/24",
              topic1: "REPENT OF SIN",
              bible_text1: "JER. 5:22-29; Ps. 66:18",
              lesson_word1:
                "There are two major sources of stress and calamity for man, self (flesh) and sin. Apostle James asked a very important question in Chapter four of his epistle, 'where does war and fightings-stress or distress as the case may be- come from? He, by the Spirit, says from man's lusts that wars in him as a result of which he engages in all manners of vices. In his quest, he revolts and rebels against his Maker. He became deceitful and waxed strong in evil scheming, making himself rich and amassing the reward of mischief. Other plight is not his concern as he is full of himself and his own interest only. The less privileged around him do not attract his attention and concern. Will God continue watching him without visiting him with vengeance? No. He will fall into distress unless he repents of his evil ways. Like the Psalmist, let us search ourselves and repent of our wicked ways and there shall be peace come from the Lord.",
              point_of_emphasis1: "Repent and Be Free",
              prayer_point1:
                "Lord, I repent of my sins, please have mercy on me. ",
              day2: "Tuesday",
              date2: "14/5/24",
              topic2: "FEAR NOT-EXERCISE AUTHORITY",
              bible_text2: "Lk. 10:17-20",
              lesson_word2:
                "Fear is the opposite of faith. Fear is saying God, you cannot help me out. Fear is being negative. Fear is being pessimistic. Christians need not fear because all our fear has been taken care of at Calvary. Jesus said to the disciples when they came back from the evangelical outreaches He sent them, 'I watched satan falling from heaven'. As a result, satan's spirit has no choice but to submit to them. However, not only them but others that will come to believe in Christ. Believers have been given authority to trample on snakes and scorpions of this world and to destroy all the enemy's power and nothing will ever hurt them. The bottom line is that believers should not fear in distress. They should exercise their godly authority. So I say 'Fear Not, Exercise Authority' and victory is sure.",
              point_of_emphasis2: "Fear Not, Exercise Your Authority.",
              prayer_point2:
                "I take authority over every spirit oppressing me in Jesus name.",
              day3: "Wednesday",
              date3: "15/5/24",
              topic3: "LAY ASIDE AND ENDURE",
              bible_text3: "HEB. 12:1-2, 5-8",
              lesson_word3:
                "Those that will live a godly life in Christ will suffer persecution. The Christian life is a life of battle. Apostle Paul counsels us to 'fight'. What fight? 'The Good fight'. What makes the fight good? It is a 'fight of faith'. In the chapter preceding the text (Heb. 11) today, we see a lot of examples of heroes of faith people whose examples were given to encourage both Jewish Christians and us to face difficulties with similar perseverance exhibited by this faith people. We are encouraged to lay aside-throw off - everything that hinders (weight down) and the sin that easily entangles us. Weight is not necessarily sin but anything that constitutes disturbance to expression of faith-worry, anxiety and excuses. Sin in this context is every solution we seek outside God. In times of challenges of life, let us not find reasons to quit. Rather, let us persevere and seek godly solutions.",
              point_of_emphasis3: "No solution outside God.",
              prayer_point3: "Lord, help me to persevere until victory is won.",
              day4: "Thursday",
              date4: "16/5/24",
              topic4: "KEEP COMPANY WITH GOD-FEARING PEOPLE",
              bible_text4: "Ps. 119:61-64",
              lesson_word4:
                "Many believers go wrong in the choice of their friends and acquaintances. Some out of ignorance or care free attitude or because of disappointment by fellow believers, enter unto unequal yoke with unbelievers. The outcome of such choice is that the believer sinks deeper into his sins and eventual irreparable fall. In times of distress, a believer in the companionship of those who fear the Lord feels at home and with them, he has godly fellowship. He can be encouraged and have his faith enhanced and we have a calling and must be in fellowship marked by Jesus our Lord. With this in his hope enlivened. He is loved and empathised with regardless of his race, nationality or social status. As believers, when faced by challenges or in distress, let us remember mind, we are sure to overcome.",
              point_of_emphasis4: "Do not neglect saints companionship.",
              prayer_point4:
                "I receive the grace to keep company of God-fearing people.",
              day5: "Friday",
              date5: "17/5/24",
              topic5: "REMAIN FAITHFUL TO GOD",
              bible_text5: "Ps. 37:30-34,42:11",
              lesson_word5:
                "Believers must not allow life's trials to discourage them. Rather, they should confront their challenges and difficulties with boldness and confidential trust in God. The pages of the Holy Scriptures are filled with examples of true believers. Whatever Christians have to endure, their sufferings are small when compared with those of Jesus and His Apostles. At least, our faith has not yet cost us our lives. God uses difficulties and distress to train and build endurance in His children. When such times come it is not for us to grow cold and be discouraged and then sink into the lowest ebb of our faith and then consider quitting. God's expectation is for His own to remain faithful. We are to wait for God and keep His ordinances pending His intervention. We are to wait patiently for God with whom time and haste play no role. He knows the right time to act and will do so at that time.",
              point_of_emphasis5:
                "Be Faithful, Wait for the Lord's Intervention.",
              prayer_point5:
                "Oh my Father, I resolve to remain faithful for I know my change will come in Jesus' name.",
              day6: "Saturday",
              date6: "18/5/24",
              topic6: "EMPLOY OFFENSIVE AND DEFENSIVE WEAPONS",
              bible_text6: "HEB.4:12; EPH. 6:10-18",
              lesson_word6:
                "In today's passages, the Holy Spirit presents to us notable aids which will enormously support believers. They are absolutely essential for us on our way out of distress and unto rest. The 'aids' are two 'The Word'. In the word, three features of God are presented which are life, power and omniscience. The word is also active. It performs its work in those who believe. Believers are not left to fight world battle without his onslaught. God knows that there may be days when everything will seem to go devil and wrong and as a result we may be under pressure. But if we have put on the armour which is both offensive and defensive in nature, we will resist the pressure to throw in the towel and then stand firm. Use this armour of the word and all manners of prayers for victory.",
              point_of_emphasis6: "Be Armed with Spiritual Armour",
              prayer_point6:
                "I put on all the whole armour of God for victory in Jesus name",
              day7: "Sunday",
              date7: "19/5/24",
              topic7: "RESIST THE DEVIL",
              bible_text7: "1 PET. 5:8-9; ROM. 16:19-20",
              lesson_word7:
                "The devil is called 'your adversary' - believers' adversary. An adversary is an opponent or rival, an antagonist who looks for opportunity. He is always prepared to fight and antagonise his target enemy. The devil is always against believers with everything in him because believers belong to the Lord Jesus. He moves about to search and to prey on believers. Satan the adversary is cruel and merciless. With his roaring, he tries to frighten believers. His only goal is to devour which means he wants to completely destroy believers in Christ. But as powerful, cunning and frightful as he seems to be, he is not powerful enough to intimidate believers. So, never turn your back on him but resist him. If the devil comes your way in the form of temptation and sin, flee but if he comes in the form of trials and distress, take your stand against him and RESIST.",
              point_of_emphasis7: "Take your stand - resist the devil.",
              prayer_point7:
                "Lord, I receive heavenly backing to resist the devil in Jesus' name.",
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

export default Youth;
