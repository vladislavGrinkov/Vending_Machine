import React from 'react';
import { connect } from 'react-redux';
import { market } from './Cards';


class Surrender extends React.Component {

  handleExec = (value) => {
    let countTenCoins = Math.floor(value / 10) + 1;

    if ((countTenCoins - 1) * 10 < value) {
      if (((countTenCoins - 1) * 10) + 5 === value){
        return ` ${ countTenCoins > 1 ? `10 R: ${countTenCoins - 1} coins, 5 R: ${1} coins` : `5 R: ${1} coins`}`
      }else if (((countTenCoins - 1) * 10 + 2) === value) {
        return ` ${countTenCoins > 1 ? `10 R: ${countTenCoins - 1} coins, 2 R: ${1} coins` : `2 R: ${1} coins` }`
      }else if (((countTenCoins - 1) * 10 + 5 + 2 === value)){
        return `10 R: ${countTenCoins - 1} coins, 5 R: ${1} coins, 2 R: ${1} coins`
      }else if (((countTenCoins - 1) * 10 + 1) === value) {
        return `10 R: ${countTenCoins - 1} coins, 1 R: ${1} coins`
      }else if (((countTenCoins - 1) * 10 + 2 + 1) === value) {
        return `10 R: ${countTenCoins - 1} coins, 2 R: ${1} coins, 1 R: ${1} coins`
      }else if (((countTenCoins - 1) * 10) + 2 + 2 === value){
        return `10 R: ${countTenCoins - 1} coins, 2 R: ${2} coins`
      }else if (((countTenCoins - 1) * 10 + 5 + 1) === value) {
        return `10 R: ${countTenCoins - 1} coins, 5 R: ${1} coins, 1 R: ${1} coins`
      }else if (((countTenCoins - 1) * 10 + 5 + 2 + 1) === value) {
        return `10 R: ${countTenCoins - 1} coins, 5 R: ${1} coins, 2 R: ${1}, 1R: ${1} coins`
      }else if (((countTenCoins - 1) * 10 + 5 + 2 + 2) === value) {
        return `10 R: ${countTenCoins - 1} coins, 5 R: ${1} coins, 2 R: ${2} coins`
      }
    }else if ((countTenCoins - 1) * 10 === value ){
      return `10 R: ${countTenCoins - 1} coins`;
    }

  }

  render(){
    const { blockForMoney, chooseProduct } = this.props;
    let parseValue = Number(+/\d+/.exec(blockForMoney));
    let data = null;
    if (this.props.trigger){
      data = chooseProduct ? 
      this.handleExec(parseValue - Number(+/\d+/.exec(market[chooseProduct - 1].price))) 
        : 
      null;
    } 
    const parseData = data !== null ? data.split(',') : null;
    return (
          <div className="output__output" id="changeOutput">
            {
              chooseProduct && parseData !== null ? 
              parseData.map((item, index) => {
                return (
                  <span className="output__change-item" key = {index}>
                    {item}
                  </span>
                  )
                })
               :
              null
            }
          </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    blockForMoney: state.insertMoney.blockForMoney,
    chooseProduct: state.getChooseProduct.chooseProduct,
  }
}

export default connect(mapStateToProps)(Surrender);