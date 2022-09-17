import { Position } from './interfaces/piece.interface';
import { Rook } from './classes/pieces/rook.class';
import { King } from './classes/pieces/king.class';
import { Queen } from './classes/pieces/queen.class';
import { Knight } from './classes/pieces/knight.class';
import { Pawn } from './classes/pieces/pawn.class';
import { Bishop } from './classes/pieces/bishop.class';
import { Piece } from 'src/app/modules/game/classes/pieces/base.class';
import { Component, OnInit } from '@angular/core';
import { colors } from 'src/app/modules/game/enums/colors';

interface Square {
  position: Position,
  piece?: Piece;
  canGo: boolean
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  colorTime: colors

  table: Square[][]
  selectedPiece?: Piece
  positionsWhereSelectedPieceCanGo: Position[]

  constructor() {
    this.table = Array(8).fill(null).map(
      (_, y) => Array(8).fill(null).map(
        (_, x) => { 
          return { 
            position: {x: x, y: y},
            piece: undefined,
            canGo: false 
          }
        }
      )
    )
    
    this.colorTime = colors.white
    this.positionsWhereSelectedPieceCanGo = []
  }

  
  ngOnInit(): void {
    this.initializePieces(colors.black)
    this.initializePieces(colors.white)
  }


  initializePieces(color: colors) {
    let pieces: Piece[] = []

    const setPawns = () => {
      const y = (color === colors.black) ? 1 : 6

      for(let i = 0; i < 8; i++) {
        pieces.push(new Pawn({x: i, y: y}, color))
      }
    }

    const setKnights = () => {
      const y = (color === colors.black) ? 0 : 7
      pieces.push(new Knight({x: 1, y: y}, color))
      pieces.push(new Knight({x: 6, y: y}, color))
    }

    const setRooks = () => {
      const y = (color === colors.black) ? 0 : 7
      pieces.push(new Rook({x: 0, y: y}, color))
      pieces.push(new Rook({x: 7, y: y}, color))
    }

    const setBishops = () => {
      const y = (color === colors.black) ? 0 : 7
      pieces.push(new Bishop({x: 2, y: y}, color))
      pieces.push(new Bishop({x: 5, y: y}, color))
    }

    const setQueen = () => {
      const y = (color === colors.black) ? 0 : 7
      pieces.push(new Queen({x: 3, y: y}, color))
    }

    const setKing = () => {
      const y = (color === colors.black) ? 0 : 7
      pieces.push(new King({x: 4, y: y}, color))
    }

    setPawns()
    setRooks()
    setKnights()
    setBishops()
    setQueen()
    setKing()
    
    this.renderPieces(...pieces)
  }


  renderPieces(...pieces: Piece[]) {
    for (let piece of pieces) {
      let {x, y} = piece.position
      this.table[y][x].piece = piece
    }
  }


  setCanGo(canGo: boolean) {
    this.positionsWhereSelectedPieceCanGo.forEach(position => {
      this.table[position.y][position.x].canGo = canGo
    })
  }


  setSquaresWhereSelectPieceCanGo() {
    this.clearSquaresWhereSelectedPieceCanGo()
    this.positionsWhereSelectedPieceCanGo = this.selectedPiece!.whereItCanGo()
    this.setCanGo(true)
  }


  clearSquaresWhereSelectedPieceCanGo() {
    this.setCanGo(false)
    this.positionsWhereSelectedPieceCanGo = []
  }


  removePiece(position: Position) {
    let {x, y} = position
    this.table[y][x].piece = undefined
  }


  movePiece(square: Square) {
    this.removePiece(this.selectedPiece!.position)
    this.selectedPiece!.moveTo(square.position)
    square.piece = this.selectedPiece
    this.clearSquaresWhereSelectedPieceCanGo()
  }


  select(square: Square) {

    if(square.canGo) {

      if(square.piece) {
        this.removePiece(square.piece.position)
      }
      
      this.colorTime = (this.colorTime === colors.white) ? colors.black : colors.white
      this.movePiece(square)
      return
    }

    if(!square.piece || square.piece.color !== this.colorTime) {
      this.clearSquaresWhereSelectedPieceCanGo()
      return
    }

    this.selectedPiece = square.piece
    this.setSquaresWhereSelectPieceCanGo()
  }


  teste(event: any) {
    console.log(event)
  }
}
