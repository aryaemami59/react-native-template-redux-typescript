import type { FC, PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { Counter } from './src/features/counter/Counter';

import {
  DebugInstructions,
  HermesBadge,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Header } from './src/components/Header';
import LearnReduxLinks from './src/components/LearnReduxLinks';
import { TypedColors } from './src/constants/TypedColors';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Section = ({ children, title }: SectionProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          { color: isDarkMode ? TypedColors.white : TypedColors.black },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          { color: isDarkMode ? TypedColors.light : TypedColors.dark },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export const App: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? TypedColors.darker : TypedColors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          {/* <Header /> */}
          <HermesBadge />
          {/* {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )} */}
          <View
            style={{
              backgroundColor: isDarkMode
                ? TypedColors.black
                : TypedColors.white,
            }}>
            <Counter />
            {/* <View style={styles.sectionContainer}> */}
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            {/* <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.tsx</Text> to change
                this screen and then come back to see your edits.
              </Text> */}
            {/* </View> */}
            {/* <View style={styles.sectionContainer}> */}
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            {/* <Text style={styles.sectionTitle}>See Your Changes</Text> */}
            {/* <Text style={styles.sectionDescription}>
              <ReloadInstructions />
            </Text> */}
            {/* </View> */}
            {/* <View style={styles.sectionContainer}> */}
            {/* <Text style={styles.sectionTitle}>Debug</Text>
            <Text style={styles.sectionDescription}>
              <DebugInstructions />
            </Text> */}
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            {/* </View> */}
            {/* <View style={styles.sectionContainer}> */}
            {/* <Text style={styles.sectionTitle}>Learn More Redux</Text>
            <Text style={styles.sectionDescription}>
              Discover what to do next with Redux:
            </Text> */}
            <Section title="Learn More Redux">
              Discover what to do next with Redux:
            </Section>
            {/* </View> */}
            <LearnReduxLinks />
            {/* <View style={styles.sectionContainer}> */}
            {/* <Text style={styles.sectionTitle}>Learn More React Native</Text>
            <Text style={styles.sectionDescription}>
              Read the docs to discover what to do next:
            </Text> */}
            <Section title="Learn More React Native">
              Read the docs to discover what to do next:
            </Section>
            {/* </View> */}
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: TypedColors.lighter,
  // },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: TypedColors.white,
  // },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    // color: TypedColors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    // color: TypedColors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  // footer: {
  //   color: TypedColors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
});
