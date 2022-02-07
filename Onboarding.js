import React,{useState, useRef} from 'react';
import { View, Text, Button,Icon,StyleSheet,FlatList,Image,Animated } from 'react-native';
import SlidesData from '../SlidesData';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import NextButton from './NextButton'
const Onboarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex,setCurrentIndex] = useState(0);
  const viewableItemsChanged = useRef(({viewableItems})=>{
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold:50}).current;
  const slidesRef= useRef(null);
  const scrollTo =()=>{
    if(currentIndex<SlidesData.length-1){
      slidesRef.current.scrollToIndex({index:currentIndex+1});
    }
    else{
      alert('Last item.');
    }
  };
  return (
      <View style={styles.container}>
      <View style={{flex:3}}>
      <FlatList 
            data={SlidesData}
            renderItem={({item})=> <OnboardingItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled //this line super because the moving swipe to 30% or something side center.it's helped to perfect side.swipe swipe swipe. not center to two screens.
            bounces={false}
            keyExtractor={(item)=>item.id}
            onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
              useNativeDriver:false,
            })}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            scrollEventThrottle={32}
            ref={slidesRef}
            />
      </View>
      <Paginator data={SlidesData} scrollX={scrollX}/>
      <NextButton scrollTo={scrollTo} percentage={(currentIndex+1)*(100/SlidesData.length)} />
      </View>

  );
}
export default Onboarding
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    justifyContent:'center'
  }
})
