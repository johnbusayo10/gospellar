import React, { useRef } from 'react';
import { ScrollView, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const SmoothScrollView = ({ children }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: true }
  );

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: scrollX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scrollX, {
        velocity: event.nativeEvent.velocityX,
        tension: 10,
        friction: 8,
        toValue: 0,
        useNativeDriver: true
      }).start();
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View style={{ flex: 1 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {children}
        </ScrollView>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default SmoothScrollView;
