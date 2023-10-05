import { Image, View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import {styles} from './OnBoarding.style'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../constants/theme'

const OnBoarding = () => {
  const { onBoardingImages, container, tabButton, indicator, activeIndicator, innerIndicator, activeInnerIndicator } =
    styles;
  const navigation = useNavigation();
  const onboardingRef = React.useRef(null);

  const SkipButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.replace("Login")}>
        <Text style={tabButton}>SKIP</Text>
      </TouchableOpacity>
    );
  };

  const NextButton = () => {
    return (
      <TouchableOpacity onPress={() => onboardingRef.current.goNext()}>
        <Text style={tabButton}>NEXT</Text>
      </TouchableOpacity>
    );
  };

  const DoneButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.replace("Login")}>
        <Text style={tabButton}>LET'S GO!</Text>
      </TouchableOpacity>
    );
  };

  const CustomizedDots = ({ selected }) => {
    return (
      <View
        style={selected? activeIndicator:indicator}
      >
        <View style={selected? activeInnerIndicator:innerIndicator}></View>
      </View>
    );
  };

  return (
    <View style={container}>
      <Onboarding
        ref={onboardingRef}
        bottomBarColor={COLORS.bgPrimary}
        titleStyles={{ fontWeight: "bold" }}
        SkipButtonComponent={SkipButton}
        NextButtonComponent={NextButton}
        DoneButtonComponent={DoneButton}
        DotComponent={CustomizedDots}
        pages={[
          {
            titleStyles:{color:COLORS.textSecondary},
            subTitleStyles:{color: COLORS.textPrimary},
            backgroundColor: "#FFFFFF",
            image: (
              <View >
                <Image
                  source={require("../../../assets/images/undraw_chore_list_re_2lq8.png")}
                  style={onBoardingImages}
                  resizeMode="contain"
                />
              </View>
            ),
            title: "Effortless Attendance",
            subtitle:
              "Say goodbye to the traditional attendance management.",
          },
          {
            titleStyles:{color:COLORS.textSecondary},
            subTitleStyles:{color: COLORS.textPrimary},
            backgroundColor: "#FFFFFF",
            image: (
              <View >
                <Image
                  source={require("../../../assets/images/undraw_online_information_re_erks.png")}
                  style={onBoardingImages}
                  resizeMode="contain"
                />
              </View>
            ),
            title: "Announcement Center",
            subtitle:
              "Your Hub for Timely Updates and Important News – Stay Connected!",
          },
          {
            titleStyles:{color:COLORS.textSecondary},
            subTitleStyles:{color: COLORS.textPrimary},
            backgroundColor: "#FFFFFF",
            image: (
              <View >
                <Image
                  source={require("../../../assets/images/undraw_time_management_re_tk5w.png")}
                  style={onBoardingImages}
                  resizeMode="contain"
                />
              </View>
            ),
            title: "Schedule Hub",
            subtitle:
              "Effortlessly Organize Your Day with our Comprehensive Scheduling Tool.",
          },
        ]}
      />
    </View>
  );
};
export default OnBoarding