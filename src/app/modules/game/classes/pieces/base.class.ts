import { colors } from '../../enums/colors';
import { IPiece, Position, Edges } from '../../interfaces/piece.interface';


export abstract class Piece implements IPiece {
   name: string;
   img: string;
   position: Position;
   color: colors;

   constructor(name: string, img: string, position: Position, color: colors) {
    this.name = name
    this.img = img
    this.position = position
    this.color = color
   }

   moveTo(position: Position) {
      this.position = position
   }

   isInEdge(): Edges {
      return {
         'top': this.position.y === 0,
         'bottom': this.position.y === 7,
         'left': this.position.x === 0,
         'right': this.position.x === 7
      }
   }

   abstract whereItCanGo(): Position[]
}