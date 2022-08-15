import { takeLatest, takeEvery, call, put, delay, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorege";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess, selectTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {

    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Coś nie pykło");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}