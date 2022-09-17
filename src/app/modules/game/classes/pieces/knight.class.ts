import { colors } from '../../enums/colors';
import { Position } from '../../interfaces/piece.interface';
import { Piece } from './base.class';


export class Knight extends Piece {

   constructor(position: Position, color: colors) {
      super('Knight', `./assets/pieces/${color}_knight.png`, position, color)
   }

   whereItCanGo(): Position[] {
      let canGo: Position[] = []

      return canGo
   }
}
