import { colors } from '../../enums/colors';
import { Position } from '../../interfaces/piece.interface';
import { Piece } from './base.class';


export class Rook extends Piece {

   constructor(position: Position, color: colors) {
      super('Rook', `./assets/pieces/${color}_rook.png`, position, color)
   }


   whereItCanGo(): Position[] {
      let canGo: Position[] = []
      
      for (let { x, y } = { x: 0, y: 0 }; y < 8; y++, x++) {
         canGo.push({x: this.position.x, y: y})
         canGo.push({x: x, y: this.position.y})
      }

      canGo = canGo.filter(
         position => 
         (position.x !== this.position.x) ||
         (position.y !== this.position.y)
      )

      return canGo
   }
}