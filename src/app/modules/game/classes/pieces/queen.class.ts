import { colors } from '../../enums/colors';
import { Position } from '../../interfaces/piece.interface';
import { Piece } from './base.class';


export class Queen extends Piece {

    constructor(position: Position, color: colors) {
      super('Queen', `./assets/pieces/${color}_queen.png`, position, color)
   }
  
   whereItCanGo(): Position[] {
      let canGo: Position[] = []

      return canGo
   }
}