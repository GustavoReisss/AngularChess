import { colors } from "../enums/colors";


interface IBase {
    [key: string]: any
}

export interface IPiece extends IBase {
    name: string;
    img: string;
    position: Position;
    color: colors;
    moveTo(_args: any): any;
    whereItCanGo(): Position[];
}

export interface Position extends IBase {
    x: number;
    y: number;
}

export interface Edges extends IBase {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
}