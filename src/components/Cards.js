import React from 'react';
import { connect } from 'react-redux'; 

export const market = [
  {id: 1, label: 'Cola', type: 'Cold Drink', price: '191 R'},
  {id: 2, label: 'Cola', type: 'Cold Drink', price: '192 R'},
  {id: 3, label: 'Cola', type: 'Cold Drink', price: '193 R'},
  {id: 4, label: 'Cola', type: 'Cold Drink', price: '194 R'},
  {id: 5, label: 'Cola', type: 'Cold Drink', price: '195 R'},
  {id: 6, label: 'Cola', type: 'Cold Drink', price: '196 R'},
  {id: 7, label: 'Cola', type: 'Cold Drink', price: '197 R'},
  {id: 8, label: 'Cola', type: 'Cold Drink', price: '198 R'},
  {id: 9, label: 'Cola', type: 'Cold Drink', price: '199 R'},
  {id: 10, label: 'Cola', type: 'Cold Drink', price: '200 R'},
  {id: 11, label: 'Cola', type: 'Cold Drink', price: '600 R'},
  {id: 12, label: 'Cola', type: 'Cold Drink', price: '100 R'},
] 

class Cards extends React.Component {
  
  render(){
    const { blockForMoney } = this.props;
    return (
         <>
          {
            market.map((item, index) => {
              return (
                <li className="product-list__item" key={index}>
                  {
                    +/\d+/.exec(blockForMoney) < (+/\d+/.exec(item.price)) ?
                        <div className="product">
                          <span className="product__name">{item.label}</span>
                          <span className="product__desc">{item.type}</span>
                          <span className="product__price">{item.price}</span>
                          <span className="product__id">{item.id}</span>
                        </div>
                        :
                        <div className="product_active product">
                          <span className="product__name">{item.label}</span>
                          <span className="product__desc">{item.type}</span>
                          <span className="product__price">{item.price}</span>
                          <span className="product__id">{item.id}</span>
                        </div>
                  }
                  
                </li>
              )
          })}
         </>
      )
  }
}

const mapStateToProps = state => {
  return {
    blockForMoney: state.insertMoney.blockForMoney
  }
}

export default connect(mapStateToProps)(Cards);