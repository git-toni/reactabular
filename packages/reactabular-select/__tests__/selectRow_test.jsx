/* eslint-disable react/prop-types */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import selectRow from '../src/row'

const myrows = [
  {id: 10, product:'apple', company:'Apple Inc', price:1.5, stock:300},
  {id: 11, product:'pear', company:'Pear Inc', price:3, stock:1000},
  {id: 12, product:'grape', company:'Grapesoft', price:22.1, stock:18},
  {id: 13, product:'banana', company:'Banana Tech', price:12, stock:9}
]

describe('select.selectRow', function () {
  it('returns nothing when not matching', function () {
    let myId = 12
    let expecSel = [
      {id: 12, product:'grape', company:'Grapesoft', price:22.1, stock:18},
    ]
    let result = selectRow({rows: myrows, selectedRowId:myId})
    expect(result.selectedRows).to.deep.eq(expecSel)
  });
});
