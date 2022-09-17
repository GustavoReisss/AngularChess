import { colors } from '../../enums/colors';
import { Position } from '../../interfaces/piece.interface';
import { Piece } from './base.class';


export class Bishop extends Piece {

   constructor(position: Position, color: colors) {
      super('Bishop', `./assets/pieces/${color}_bishop.png`, position, color)
   }

   whereItCanGo(): Position[] {
      let canGo: Position[] = []
      const edges = this.isInEdge()

      if(!edges['top']) {

         for (let i = 1; i < 8 ; i++) {

            let xMinus = this.position.x - i
            let xPlus = this.position.x + i
            let posY = this.position.y - i

            if(posY < 0) break

            if (xPlus <= 7) {
               canGo.push({x: xPlus, y: posY})
            }

            if (xMinus >= 0) {
               canGo.push({x: xMinus, y: posY})
            }
         }
      }

      if(!edges['bottom']) {
         for (let i = 1; i < 8 ; i++) {

            let xMinus = this.position.x - i
            let xPlus = this.position.x + i
            let posY = this.position.y + i

            if(posY > 7) break

            if (xPlus <= 7) {
               canGo.push({x: xPlus, y: posY})
            }

            if (xMinus >= 0) {
               canGo.push({x: xMinus, y: posY})
            }
         }
      }


      return canGo
   }
}