import store from "../store/store";
import { createTodo, naviageCreatetor } from "../actions-creators/action-creators";

export const navigate = (data) => {
    store.dispatch(naviageCreatetor(data));
}