import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
const CLIENT_ID ="Ae3OAmOUnwkR9AjLimtLDF5dTFPssbtUniKFqBoIM-NUx_jEEooHJ1CIIIQ2mH4huZkrYo-Z4VnvMuBe"
let PayPalButton = null;
class PaypalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
      loading: true,
      paid: false,
      amount:false
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      this.setState({ loading: false, showButtons: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM
        });
        this.setState({ loading: false, showButtons: true });
      }
    }
  }
  createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: +"Pay with Daveconnector254",
          amount: {
            currency_code: "USD",
            value:20
          }
        }
      ]
    });
  };

  onApprove = (data, actions) => {
    actions.order.capture().then(details => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID
      };
      console.log("Payment Approved: ", paymentData);
      this.setState({ showButtons: false, paid: true });
    });
  };

  render() {
    const { showButtons,  paid } = this.state;

    return (
      <div className="main">
       

        {showButtons && (
          <div>
            

            <PayPalButton
               style={{
                color: "blue",
                shape: "pill",
                label: "pay",
                tagline: false,
                layout: "horizontal",
              }}
              createOrder={(data, actions) => this.createOrder(data, actions)}
              onApprove={(data, actions) => this.onApprove(data, actions)}


              
            />
          </div>
        )}

        {paid && (
          <div className="main">
       
            <h2>
              {/* Congrats! you just paid for the subscription */}
              
            
            </h2>
          </div>
        )}
      </div>
    );
  }
}

export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(PaypalButton);

