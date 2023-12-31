import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  getCategoryListRequest,
  getCategoryListSuccess,
  getCategoryListFailure,
} from "../slicers/category.slice";

function* getCategoryListSaga() {
  try {
    const result = yield axios.get("http://localhost:4000/categories", {
      params: {
        isDelete: false,
      },
    });
    yield put(getCategoryListSuccess({ data: result.data }));
  } catch (e) {
    yield put(getCategoryListFailure({ error: "Lỗi" }));
  }
}

export default function* categorySaga() {
  yield takeEvery(getCategoryListRequest, getCategoryListSaga);
}
