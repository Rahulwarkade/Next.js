'use client'
import React from 'react'
import axios from './api.js';

const getData = async (id) => {
    try {
        const {data} = await axios.get(`posts/${id}`);
        return data;
    } catch (error) {
        console.log(error+ "data not found");
    }
}

export default getData