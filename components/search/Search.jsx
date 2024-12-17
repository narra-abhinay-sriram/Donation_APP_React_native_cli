import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useRef, useState } from "react"
import { Pressable, TextInput } from "react-native"
import { style } from "./style";
import { fontScaling } from "../../assets/styles/scaling";

export const Search = (props)=>{
    const textref = useRef();
    const [search,setsearch] = useState('');
    const handleSearch = (value)=>{
    setsearch(value);
    props.onSearch(value);
    };
    const handlefocus = ()=>{
        textref.current.focus();
    };
    return(
        <Pressable style={style.searchContainer} onPress={handlefocus}>
            <FontAwesomeIcon icon={faSearch}
            color={'#25C0FF'}
            size={fontScaling(12)}/>
            <TextInput ref={textref}
            value={search}
            placeholder="Search.."
            onChange={(value)=>handleSearch(value)}
             style={style.searchinput}/>
        </Pressable>
    );
};
