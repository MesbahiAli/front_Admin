import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Box } from '@mui/material';
import { useStyles } from "../Style/ProductsStyle";
import * as productActions from "../state/ProductsActions";

function Products() {

  const dispatch = useDispatch();

  // const classes = useStyles();

  useEffect(() => {


    const productsGetRequest = {
      payload: {
        budgetId: "5367cad5-5357-4897-810a-907645dcf1ce"
      },
      successCallBack: (response) => {
      },
      failCallBack: (error) => {
        console.log(error);
      },
    };
    dispatch(productActions.productGetStart(productsGetRequest));


    const productPostRequest = {
      payload: {
        product: {
          budget_id: "5367cad5-5357-4897-810a-907645dcf1ce",
          expiryDays: 1,
          expiryHours: 0,
          expiryMinutes: 0,
          title: "first",
          vaucher_description: "First product from frontend"
        }
      },
      successCallBack: (response) => {
      },
      failCallBack: (error) => {
        console.log(error);
      },
    };
    // dispatch(productActions.productPostStart(productPostRequest));


    const productPatchRequest = {
      payload: {
        product_id: "36a3c8f3-a935-49bb-ab32-2604f30d7ca5",
        product: {
          expiry_days: 0,
          expiry_hours: 0,
          expiry_minutes: 1,
          product_status: "ACTIF",
          product_title: "First updated 6",
          product_type: "TOPUP",
          status_date: "2023-09-22T19:15:46.134Z",
          vaucher_description: "vaucher updated 6"
        }
      },
      successCallBack: (response) => {
      },
      failCallBack: (error) => {
        console.log(error);
      },
    };
    // dispatch(productActions.productPatchStart(productPatchRequest));

  }, []);


  return (
    <div>products</div>
  )
}

export default Products;