import React from 'react';
import { connect } from 'react-redux';
import { insertMoney } from '../actions/insertMoney';
import { getChooseProduct, getProduct, checkStatus, shutDown } from '../actions/chooseProduct';
import { market } from './Cards';
import Surrender from './Surrender';

class ControlPanel extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
  };

  handleSecondSubmit = e => {
    e.preventDefault();
  }

  handleGetItem = () => {
    const { getProduct, shutDown } = this.props;
    const element = document.getElementsByTagName('input');
    getProduct('Completed');
    setTimeout(() => {
      element[0].value = ''
      element[1].value = ''      
      shutDown();
    }, 1000)
  };

  handleSelectItem = e => {
    const { getChooseProduct, blockForMoney, checkStatus } = this.props;
    const { value } = e.target;
    const parseValue = value.split(' ').map(item => Number(item));
    const failedItem = market.filter( item => item.id === parseValue[0]);
    if(e.key === 'Enter'){
      if(failedItem.length) {
        getChooseProduct(parseValue[0]);
        checkStatus('Success!');
      }
      if(failedItem.length && Number(+/\d+/.exec(failedItem[0].price)) > Number(+/\d+/.exec(blockForMoney))) {
        checkStatus("Not enough money!");
        setTimeout(() => {
          checkStatus('Choose product...');
        }, 1500);
      }
      else if (!failedItem.length) {
        getChooseProduct(parseValue[0]);
        checkStatus('Error');
        setTimeout(() => {
          checkStatus('Choose product...');
          getChooseProduct([]);
        }, 1000)
      }
    }
  }

  handleChange = e => {
    const { value } = e.target;
    const { insertMoney, blockForMoney, failedBlock, checkStatus } = this.props;
    let parseMoney = +/\d+/.exec(blockForMoney);
    const parseValue = Number(value);
    const arrPrice = market.map( item => Number(+/\d+/.exec(item.price)));
    const maxPrice = Math.max(...arrPrice.filter( item => item));
    if(parseValue === 50 || parseValue === 100 || parseValue === 200 || parseValue === 500 || parseValue === 1000){
      if(e.key === 'Enter'){
        if (maxPrice > parseMoney ) {
          parseMoney += parseValue; 
          checkStatus('Choose product...');
          insertMoney(`Inserted money: ${parseMoney} R`);
        }
      }
    }else {
      if(e.key === 'Enter'){
        insertMoney(failedBlock);
        if(parseMoney === 0) {
          setTimeout(() => { 
            insertMoney(`Insert banknotes...`);
          }, 2000);  
        }else {
          setTimeout(() => { 
            insertMoney(`Inserted money: ${parseMoney} R`);
          }, 2000);
        }
      }
    }
  }

  render(){
    const { 
      blockForMoney,
      status, 
      selectItem, 
      chooseProduct, 
      finishOperation, 
      defaultInput 
    } = this.props;
    let parseMoney = +/\d+/.exec(blockForMoney);
    const parseValue = Number(parseMoney);
    const count = market.filter( item => +/\d+/.exec(item.price) <= parseValue)
    return (
        <>
          <div className="page__control-panel">
            <div className="page__control-panel-body">
              <form className="form" onSubmit={this.handleSubmit}>
                <label className="text-board form__label">
                  <span className="text-board__text">{blockForMoney}</span>
                </label>
                <div className="form__input-container">
                  <input 
                    className="form__input" 
                    type="text"
                    disabled={chooseProduct?.length ? true : false}
                    placeholder={defaultInput}
                    onKeyPress={this.handleChange} 
                  />
                </div>
                <span className="form__desc">
                  Доступные банкоты: 50, 100
                  <br/>
                  200, 500 или 1000
                  <br/>
                  Машина выдает сдачу: 
                  <br/>
                  в 1, 2, 5 и 10 R coins
                </span> 
              </form>
              <form className="form" onSubmit={this.handleSecondSubmit}>
                <label className="text-board form__label">
                  <span className="text-board__text">
                    {
                      count.length ? status : '.'
                    }
                  </span>
                </label>
                <div className="form__input-container">
                  <input 
                    className="form__input form__input-disable"
                    type="text"
                    placeholder={selectItem}
                    disabled={chooseProduct?.length ? true : count.length ? false : true}
                    onKeyDown={this.handleSelectItem}
                  />
                </div>
              </form>
              <div className="output">
                <div className="text-board output__text-board">
                  <span className="text-board__text">
                    {
                      finishOperation !== null ? finishOperation :
                      chooseProduct !== undefined ? status !== 'Success!' ? "." : 'Take your product and change!' : '.'
                    }
                  </span>
                </div>
                <div className="output__bottom">
                  <Surrender trigger={status === 'Success!' ? true : false} />
                  <div className="output__output output__output_product" id="productOutput">
                    <div className="output__product-item" onClick={this.handleGetItem}>
                        {
                          chooseProduct !== undefined ? status !== 'Success!' ? null :
                          <div className="product"> 
                            <span className="product__name">{market[chooseProduct - 1].label}</span>
                            <span className="product__desc">{market[chooseProduct - 1].type}</span>
                            <span className="product__price">{market[chooseProduct - 1].price}</span>
                            <span className="product__id">{market[chooseProduct - 1].id}</span>
                          </div>
                            :
                            null
                        }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        )
    }
}

const mapStateToProps = state => {
  return {
    blockForMoney: state.insertMoney.blockForMoney,
    failedBlock: state.insertMoney.failedBlock,
    changeLabel: state.insertMoney.changeLabel,
    defaultInput: state.insertMoney.defaultInput,
    selectItem: state.getChooseProduct.selectItem,
    chooseProduct: state.getChooseProduct.chooseProduct,
    finishOperation: state.getChooseProduct.finishOperation,
    status: state.getChooseProduct.status,
  }
}

const mapDispatchToProps = {
  insertMoney,
  getChooseProduct,
  getProduct,
  checkStatus,
  shutDown,
}


export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);