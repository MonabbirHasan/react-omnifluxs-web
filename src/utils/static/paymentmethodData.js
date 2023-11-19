import stripe from "../../assets/img/gateway/stripe.png";
import paypal from "../../assets/img/gateway/paypal.png";
import paytm from "../../assets/img/gateway/paytm.png";
import authorize from "../../assets/img/gateway/authorize.png";
import bkash from "../../assets/img/gateway/bkash.png";
import nagad from "../../assets/img/gateway/nagad.png";
import payooner from "../../assets/img/gateway/payoneer.png";
import instamojo from "../../assets/img/gateway/instamojo.png";
import google_pay from "../../assets/img/gateway/google_pay.png";
import rezorpay from "../../assets/img/gateway/rezorpay.png";
import skrill from "../../assets/img/gateway/skrill.png";
import blockchain from "../../assets/img/gateway/blockchain.png";
import binance from "../../assets/img/gateway/binance.png";
export const pay_methods = [

    {
        "id":1,
        "name":"stripe",
        "img":stripe,
        "fees":"$0.50",
        "status":true
    },
    {
        "id":2,
        "name":"paypal",
        "img":paypal,
        "fees":"$0.50 + 1.00 %",
        "status":true
    },
    {
        "id":3,
        "name":"paytm",
        "img":paytm,
        "fees":"$0.50",
        "status":true
    },
    {
        "id":4,
        "name":"authorize",
        "img":authorize,
        "fees":"$0.50",
        "status":true
    },
    {
        "id":5,
        "name":"bkash",
        "img":bkash,
        "fees":"15Tk",
        "status":true
    },
    {
        "id":6,
        "name":"nagad",
        "img":nagad,
        "fees":"10Tk",
        "status":true
    },
    {
        "id":7,
        "name":"payooner",
        "img":payooner,
        "fees":"$0.40",
        "status":true
    },
    {
        "id":8,
        "name":"instamojo",
        "img":instamojo,
        "fees":"$0.50",
        "status":true
    },
    {
        "id":8,
        "name":"google pay",
        "img":google_pay,
        "fees":"$0.70",
        "status":true
    },
    {
        "id":9,
        "name":"rezorpay pay",
        "img":rezorpay,
        "fees":"$0.50",
        "status":true
    },
    {
        "id":10,
        "name":"skrill",
        "img":skrill,
        "fees":"$0.50",
        "status":true
    },
    {
        "id":11,
        "name":"blockchain",
        "img":blockchain,
        "fees":"$0.50",
        "status":true
    },
    {
        "id":12,
        "name":"binance",
        "img":binance,
        "fees":"$0.89",
        "status":true
    },
    
];