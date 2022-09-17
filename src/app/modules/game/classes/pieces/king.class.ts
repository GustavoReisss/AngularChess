import { colors } from '../../enums/colors';
import { Position } from '../../interfaces/piece.interface';
import { Piece } from './base.class';


export class King extends Piece {

   constructor(position: Position, color: colors) {
      super('King', `./assets/pieces/${color}_king.png`, position, color)
   }

   whereItCanGo(): Position[] {
      let canGo: Position[] = []

      
      return canGo
   }
}