import {all} from "redux-saga/effects";
import { watchfetchExampleTasks } from "./features/tasks/tasksSaga";

export default function* rootSaga(){
    yield all([
        watchfetchExampleTasks(),
    ]);
};