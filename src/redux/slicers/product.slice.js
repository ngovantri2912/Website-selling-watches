import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: {
    data: [],
    meta: {},
    loading: false,
    error: null,
  },
  productDiscountList: {
    data: [],
    meta: {},
    loading: false,
    error: null,
  },
  productDetail: {
    data: {},
    loading: false,
    error: null,
  },
  addProductData: {
    loading: false,
    error: null,
  },
  updateProductData: {
    loading: false,
    error: null,
  },
  deleteProductData: {
    loading: false,
    error: null,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getProductList
    getProductListRequest: (state, action) => {
      state.productList.loading = true;
      state.productList.error = null;
    },
    getProductListSuccess: (state, action) => {
      const { data, meta, more } = action.payload;
      state.productList.data = more
        ? [...state.productList.data, ...data]
        : data;
      state.productList.meta = meta;
      state.productList.loading = false;
    },
    getProductListFailure: (state, action) => {
      const { error } = action.payload;
      state.productList.loading = false;
      state.productList.error = error;
    },
    // getDiscountProductList
    getDiscountProductListRequest: (state, action) => {
      state.productDiscountList.loading = true;
      state.productDiscountList.error = null;
    },
    getDiscountProductListSuccess: (state, action) => {
      const { data, meta } = action.payload;
      state.productDiscountList.data = data;
      state.productDiscountList.meta = meta;
      state.productDiscountList.loading = false;
    },
    getDiscountProductListFailure: (state, action) => {
      const { error } = action.payload;
      state.productDiscountList.loading = false;
      state.productDiscountList.error = error;
    },
    // getproductDetail
    getProductDetailRequest: (state, action) => {
      state.productDetail.loading = true;
      state.productDetail.error = null;
    },
    getProductDetailSuccess: (state, action) => {
      const { data } = action.payload;
      state.productDetail.data = data;
      state.productDetail.loading = false;
    },
    getProductDetailFailure: (state, action) => {
      const { error } = action.payload;
      state.productDetail.loading = false;
      state.productDetail.error = error;
    },
    // AddProduct
    addProductRequest: (state, action) => {
      state.addProductData.loading = true;
      state.addProductData.error = null;
    },
    addProductSuccess: (state, action) => {
      const { data } = action.payload;
      state.addProductData.loading = false;
      state.productList.data = [...state.productList.data, data];
    },
    addProductFailure: (state, action) => {
      const { error } = action.payload;
      state.addProductData.loading = false;
      state.addProductData.error = error;
    },
    // updateProduct
    updateProductRequest: (state, action) => {
      state.updateProductData.loading = true;
      state.updateProductData.error = null;
    },
    updateProductSuccess: (state, action) => {
      const { data } = action.payload;
      state.updateProductData.loading = false;
      const index = state.productList.data.findIndex(
        (item) => item.id === data.id
      );
      const { id, ...rest } = data;
      console.log(rest);
      const newUser = {
        id: id,
        ...rest,
      };
      state.productList.data.splice(index, 1, newUser);
    },
    updateProductFailure: (state, action) => {
      const { error } = action.payload;
      state.updateProductData.loading = false;
      state.updateProductData.error = error;
    },
    // deleteProduct
    deleteProductRequest: (state, action) => {
      state.deleteProductData.loading = true;
      state.deleteProductData.error = null;
    },
    deleteProductSuccess: (state, action) => {
      state.productList.data = state.productList.data.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(action.payload);
    },
    deleteProductFailure: (state, action) => {
      const { error } = action.payload;
      state.deleteProductData.loading = false;
      state.deleteProductData.error = error;
    },
  },
});

export const {
  getProductListRequest,
  getProductListSuccess,
  getProductListFailure,
  getDiscountProductListRequest,
  getDiscountProductListSuccess,
  getDiscountProductListFailure,
  getProductDetailRequest,
  getProductDetailSuccess,
  getProductDetailFailure,
  addProductRequest,
  addProductFailure,
  addProductSuccess,
  updateProductRequest,
  updateProductFailure,
  updateProductSuccess,
  deleteProductRequest,
  deleteProductFailure,
  deleteProductSuccess,
} = productSlice.actions;

export default productSlice.reducer;
