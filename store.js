import { atom } from "jotai";
import { binData} from "./src/data/binData";


export const binMasterData = atom(binData);
export const isBinView = atom(false);
export const isShowEmpty = atom(false);
export const isShowDangerousGood = atom(false);
export const isPartView = atom(false);