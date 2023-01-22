import axios from 'axios';
import { response } from 'express';

export function getAnimals(){
    return async function (dispatch){
        response = await axios.get('http://localhost:3000/api/v1/animals');
        return dispatch({
            type: "GET_ANIMALS",
            payload: response.data
        })
    }
}

export function getClients(){
    return async function (dispatch){
        response = await axios.get('http://localhost:3000/api/v1/clients');
        return dispatch({
            type: "GET_CLIENTS",
            payload: response.data
        })
    }
}

export function getTrees(){
    return async function (dispatch){
        response = await axios.get('http://localhost:3000/api/v1/Trees');
        return dispatch({
            type: "GET_TREES",
            payload: response.data
        })
    }
}

export function getSpecies(){
    return async function (dispatch){
        response = await axios.get('http://localhost:3000/api/v1/Species');
        return dispatch({
            type: "GET_SPECIES",
            payload: response.data
        })
    }
}

export function getOrgs(){
    return async function (dispatch){
        response = await axios.get('http://localhost:3000/api/v1/Orgs');
        return dispatch({
            type: "GET_ORGS",
            payload: response.data
        })
    }
}

export function getPublications(){
    return async function (dispatch){
        response = await axios.get('http://localhost:3000/api/v1/Publications');
        return dispatch({
            type: "GET_PUBLICATIONS",
            payload: response.data
        })
    }
}

export function getDonations(){
    return async function (dispatch){
        response = await axios.get('http://localhost:3000/api/v1/Donations');
        return dispatch({
            type: "GET_DONATIONS",
            payload: response.data
        })
    }
}

export function orderByName(payload){
    return {
      type: "ORDER_BY_NAME",
      payload
    }
  }

  