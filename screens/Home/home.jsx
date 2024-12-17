import React, { useEffect, useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Globalstyle } from '../../assets/styles/Globalstyle';
import { Header } from '../../components/header/Header';
import { Tab } from '../../components/tab/Tab';
import { Badge } from '../../components/badge/Badge';
import { Search } from '../../components/search/Search';
import { SingleDonationItem } from '../../components/singleDonationItem/singleDonationItem';
import { useDispatch, useSelector } from 'react-redux';
import style from './style';
import { FlatList } from 'react-native-gesture-handler';
import { updateSelectedCategory } from '../../redux/reducers/categories';
import { resetDonations, updateSlectedDonationId } from '../../redux/reducers/donations';



function Home({navigation}){
    const user = useSelector(store => store.user);
    const categories = useSelector(store => store.categories);
    const donation = useSelector(store => store.donation);

    const dispatch = useDispatch();
    const [currentPage,setCurrentPage] = useState(1);
    const [ispageLoading,setisPageloading] = useState(false);
    const [categoryList,setcategoryList] = useState([]);
    const [DonationList,setDonationList] = useState([]);
    const pageSize = 4;
useEffect(()=>{
    const items = donation.items.filter((value)=>value.categoryIds.includes(categories.selectedCategoryId))
setDonationList(items);
},[categories.selectedCategoryId]);


   const pagination = (items,pageNumber,pagesize)=>{
    const startIndex = (pageNumber - 1) * pagesize;
    const endIndex = startIndex + pagesize;
    if(startIndex >= items.length)
    {
        return [];
    }
    return items.slice(startIndex,endIndex);
   };

    useEffect(()=>{
        setisPageloading(true);
        setcategoryList(pagination(categories.categories,currentPage,pageSize));
        setCurrentPage(prev=>prev + 1);
        setisPageloading(false);
    },[])


    return (
<SafeAreaView style={[Globalstyle.background,Globalstyle.flex]}>
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
            <View>
                <Text style={style.headerIntro}>
                    Hello,
                </Text>
                <View style={style.username}>
                <Header title={user.firstName + ' ' + user.lastName[0]} type={2} />

                </View>
            </View>
            <View>
            <Image source={require('../../assets/images/user_profile.png')} style={style.profileimage} resizeMode="contain" />

            </View>
        </View>
        <View style={style.serach}>
            <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
            <Image source={require('../../assets/images/highlighted_image.png')} resizeMode="contain" style={style.highlightedImage} />
        </Pressable>
        <View style={style.categoryHeader}>
           <Header title={'Select Category'} type={3} />
        </View>
        <View style={style.categories }>
        <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={()=>{
            if(ispageLoading)
               {
                 return;
               }
               setisPageloading(true);
            const newdata =   pagination(categories.categories,currentPage,pageSize);
            if(newdata.length > 0)
            {
                setcategoryList(prev=>[...prev,...newdata]);
                setCurrentPage(prev=>prev + 1);

            }
            setisPageloading(false);
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}

         data={categoryList} renderItem={({item})=>
         <View style={style.category} key={item.categoryId}>
            <Tab
            tabid={item.categoryId}
            onPress={(value)=>dispatch(updateSelectedCategory(value))}
             title={item.name}
              isInactive={item.categoryId !== categories.selectedCategoryId}
               />
            </View>} />
        </View>
        <View >
            {DonationList.length > 0 &&
          (  <View style={style.donationContainer}>

              {DonationList.map(value=>(
                <View style={style.singledonationitem}
                 key={value.donationItemId}
>
                    <SingleDonationItem
                donationId={value.donationItemId}
                onPress={(selectedDonationId)=>{
                    dispatch(updateSlectedDonationId(selectedDonationId));
                    navigation.navigate('singledonate');
                }}
                 BadgeTitle={categories.categories.filter(val=>val.categoryId === categories.selectedCategoryId)[0].name}
                uri={value.image}
                Donationtitle={value.name}
                price={parseFloat(value.price)}
                />
                </View>

              ))}

            </View>
            )}
        </View>
    </ScrollView>
    </SafeAreaView>

    );

}

export default Home;
