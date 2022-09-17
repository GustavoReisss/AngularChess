import { Piece } from './base.class';
import { Position } from '../../interfaces/piece.interface';
import { colors } from '../../enums/colors';


export class Pawn extends Piece {
   private firstMove = true
   
   constructor(position: Position, color: colors) {
      super('Pawn', `./assets/pieces/${color}_pawn.png`, position, color)
   }


   override moveTo(position: Position): void {
      this.position = position
      this.firstMove = false
   }


   whereItCanGo(): Position[] {
      
      let canGo: Position[] = []

      if(this.color == colors.white && !this.isInEdge().bottom) {
         let position = {...this.position}
         position.y--
         
         canGo.push(position)

         if(this.firstMove) {
            let stepOverPosition = {...position}
            stepOverPosition.y--
            canGo.push(stepOverPosition)
         }
      }

      if(this.color == colors.black && !this.isInEdge().top) {
         let position = {...this.position}
         position.y++

         canGo.push(position)

         if(this.firstMove) {
            let stepOverPosition = {...position}
            stepOverPosition.y++
            canGo.push(stepOverPosition)
         }
      }

      return canGo
   }
}