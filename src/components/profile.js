import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';


function Profile() {
  const [user, setUser] = useState([]);
  const [shots, setShots] = useState([]);
  const [update, setUpdates]= useState([]);

  const access_token = "56aa8f69f33e0059a795f5f2ea890a2088285f6593daa12702efdd4d939a9a8e"
  const username= "Musyoki-Wambua"
  
  const getData = async () => {
    const config = {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    }
    const {data } = await axios.get("https://api.dribbble.com/v2/user", config)
    setUser(data)
    return data
  }
  const getShots = async ()  =>{

    const config = {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    }
    const {data } = await axios.get("https://api.dribbble.com/v2/user/shots", config)

    // const {data } = await axios.get("https://api.dribbble.com/v2/user/shots", config,setShots)

    setShots(data)
    return data

    // console.log(data)
  }
