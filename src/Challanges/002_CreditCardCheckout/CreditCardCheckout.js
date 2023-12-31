import React from 'react';
import './CreditCardCheckout.css';

function CreditCardCheckout() {

  const handleCreditCardInput = (event) => {
    const input = event.target;
    let formattedInput = input.value.slice(0, 16);
    input.value = formattedInput;
  }

  const bill = [
    {
      _id: '123ABC',
      item_name: 'Laptop',
      quantity: 1,
      rate: 50000,
    },
    {
      _id: '456DEF',
      item_name: 'Display port to HDMI adapter',
      quantity: 1,
      rate: 264,
    },
    {
      _id: '789GHI',
      item_name: 'USB Stick',
      quantity: 2,
      rate: 657,
    },
  ]

  return (
    // Background should be something pointing to the bottom right from left side and something pointing to the top right i.e. to credit card box from the right side of the bill. This is to subconsiously guide the user to go through the bill first and then go to credit card box.
    <div className='credit-card-checkout-main'>
      {/* A bill shaped box for showing the bill */}
      <section className='credit-card-bill-box'>
        <h2>Bill</h2>
        {bill ?
          (<table className='credit-card-bill-table'>
            <thead>
              <tr>
                <th>Item</th>
                <th>Rate</th>
                <th>Qty.</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {bill.map(item => (
                <tr key={item._id}>
                  <td>{item.item_name}</td>
                  <td>{item.rate}</td>
                  <td>x{item.quantity}</td>
                  <td>{item.rate * item.quantity}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={3}>Total</th>
                <th>{bill.reduce(((total, item) => total + item.rate * item.quantity), 0)}</th>
              </tr>
            </tfoot>
          </table>)
          :
          (<p>Loading...</p>)
        }
      </section>

      {/* A credit card shaped box for entering credit card info
            - position fixed to the top right section (i.e. stays there)
      */}
      <section className='credit-card-box'>
        <form className='credit-card-form'>
          <section className='credit-card-input-box'>
            <fieldset id='credit-card-number-input-box'>
              <legend for='credit-card-number'>Card No.</legend>
              {/* Need to make 4 input fields here */}
              <input
                id='credit-card-number'
                type='number'
                className='credit-card-input'
                onChange={handleCreditCardInput}
                required
              />              
            </fieldset>
            <fieldset id='credit-card-expiry-date-input-box'>
              <legend for='credit-card-expiry-date'>Valid Thru</legend>
              <input
                id='credit-card-expiry-date'
                type='number'
                className='credit-card-input'
                required
              />
            </fieldset>
            <fieldset id='credit-card-holder-name-input-box'>
              <legend for='credit-card-holder-name'>Card Holder's Name</legend>
              <input
                id='credit-card-holder-name'
                type='text'
                className='credit-card-input'
                required
              />
            </fieldset>
            <fieldset id='credit-card-cvv-input-box'>
              <legend for='credit-card-cvv'>CVV</legend>
              <input
                id='credit-card-cvv'
                type='number'
                className='credit-card-input'
                required
              />
            </fieldset>
          </section>
          <button type='submit' > Pay </button>
        </form>
      </section>
    </div>
  )
}

export default CreditCardCheckout;