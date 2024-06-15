import { useDispatch, useSelector, useStore,  } from "react-redux";
import type { RootState, AppDispatch, AppStore } from "../store/configureStore";



export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
