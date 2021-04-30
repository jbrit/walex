import React from 'react'

interface Props {
    name: String;
    amount: String;
    qty: Number;
}

const OrderItem = (props: Props) => {
    const {name, amount, qty} = props;
    return (
        <div className="flex mb-4">
            <div className="bg-white w-24 h-32 rounded shadow p-4 mr-4"></div>
            <div className="flex flex-col justify-center">
            <div className="mb-2 name">{name}</div>
            <div className="mb-2 amount">{amount}</div>
            <div className="mb-2 qty">Qty: {qty}</div>
            </div>
        </div>
    )
}

export default OrderItem
