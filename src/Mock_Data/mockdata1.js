const data1 = 
    {
        "type" : "deposit",
        "masked_account_number": "XXXXXXX123",
        "link_ref_number": "123456789",
        "profile": {
          "holders": {
            "holder": [
              {
                "address": "4/1290, 785th Cross, 13rd Main, 7th Block, Bangalore - 569911",
                "ckycCompliance": "true",
                "dob": "24-07-1970",
                "email": "ram.sapan@gmail.com",
                "landline": "",
                "mobile": "9136412504",
                "name": "Hanson Braganza",
                "nominee": "REGISTERED",
                "pan": "AAAPL1234C"
              }
            ],
            "type": "Single"
          }
        },
        "summary": {
          "balanceDateTime": "2021-06-22T13:20:00+05:30",
          "branch": "Jayanagar 7th Block",
          "currency": "INR",
          "currentBalance": "101666.33",
          "currentODLimit": "0",
          "drawingLimit": "0",
          "exchgeRate": "",
          "facility": "OD",
          "ifscCode": "APNB0001154",
          "micrCode": "500245646",
          "openingDate": "06-08-1999",
          "pending": {
            "amount": "0",
            "transactionType": "DEBIT"
          },
          "status": "ACTIVE",
          "type": "SAVINGS"
        },
        "transactions": {
          "endDate": "",
          "startDate": "",
          "transaction": [
            {
              "amount": "120000",
              "currentBalance": "162289",
              "mode": "UPI",
              "narration": "UPI/935314560764/getsimpl/simpl@axisbank/Axis Bank",
              "reference": "RFN00013383",
              "transactionTimestamp": "2021-04-01T13:20:14+05:30",
              "txnId": "M3258741",
              "type": "DEBIT",
              "valueDate": "2021-04-01"
            },
            {
              "amount": "1200",
              "currentBalance": "163489",
              "mode": "UPI",
              "narration": "UPI/935314560764/getsimpl/simpl@axisbank/Axis Bank",
              "reference": "RFN00013383",
              "transactionTimestamp": "2021-04-01T13:20:14+05:30",
              "txnId": "M3258741",
              "type": "DEBIT",
              "valueDate": "2021-04-01"
            },
            {
              "amount": "1239",
              "currentBalance": "62289.25",
              "mode": "NEFT",
              "narration": "UPI/935314560764/getsimpl/simpl@axisbank/Axis Bank",
              "reference": "RFN00013383",
              "transactionTimestamp": "2021-04-01T13:20:14+05:30",
              "txnId": "M3258741",
              "type": "DEBIT",
              "valueDate": "2021-04-01"
            },
            {
              "amount": "5550",
              "currentBalance": "62289.25",
              "mode": "UPI",
              "narration": "UPI/935314560764/getsimpl/simpl@axisbank/Axis Bank",
              "reference": "RFN00013383",
              "transactionTimestamp": "2021-04-01T13:20:14+05:30",
              "txnId": "M3258741",
              "category": "Travel",
              "type": "CREDIT",
              "valueDate": "2021-04-01"
            },
            {
              "amount": "1239",
              "currentBalance": "62289.25",
              "mode": "UPI",
              "narration": "UPI/935314560764/getsimpl/simpl@axisbank/Axis Bank",
              "reference": "RFN00013383",
              "transactionTimestamp": "2021-04-01T13:20:14+05:30",
              "txnId": "M3258741",
              "type": "CREDIT",
              "valueDate": "2021-04-01"
            },
            {
              "amount": "1239",
              "currentBalance": "62289.25",
              "mode": "CHEQUE",
              "narration": "UPI/935314560764/getsimpl/simpl@axisbank/Axis Bank",
              "reference": "RFN00013383",
              "transactionTimestamp": "2021-04-01T13:20:14+05:30",
              "txnId": "M3258741",
              "type": "DEBIT",
              "valueDate": "2021-04-01"
            },
            {
              "amount": "1239",
              "currentBalance": "62289.25",
              "mode": "NEFT",
              "narration": "UPI/935314560764/getsimpl/simpl@axisbank/Axis Bank",
              "reference": "RFN00013383",
              "transactionTimestamp": "2021-04-01T13:20:14+05:30",
              "txnId": "M3258741",
              "category": "Shopping",
              "type": "CREDIT",
              "valueDate": "2021-04-01"
            },
            
            
          ]
        }
      }
const dataCredit = {
  "type": "credit_card",
  "masked_account_number": "XXXXXXX123",
  "link_ref_number": "123456789",
  "profile": {
    "holders": {
      "holder": {
        "cards": {
          "card": [
            {
              "cardType": "RUPAY",
              "issuedDate": "12-04-2006",
              "maskedCardNumber": "4321-XXXXXXXX-9876",
              "primary": "YES"
            }
          ]
        },
        "ckycCompliance": "true",
        "dob": "24-07-1970",
        "email": "ram.sapan@gmail.com",
        "mobile": "91729391923",
        "name": "Ramkrishna Sapan",
        "nominee": "REGISTERED",
        "pan": "AAAPL1234C"
      }
    }
  },
  "summary": {
    "availableCredit": "51345",
    "cashLimit": "20000",
    "creditLimit": "60000",
    "currentDue": "3000",
    "dueDate": "20-06-2021",
    "financeCharges": "2368",
    "lastStatementDate": "20-05-2021",
    "loyaltyPoints": "2450",
    "minDueAmount": "1346",
    "previousDueAmount": "7654",
    "totalDueAmount": "9756"
  },
  "transactions": {
    "endDate": "",
    "startDate": "",
    "transaction": [
      {
        "amount": "1239",
        "maskedCardNumber": "4321-XXXXXXXX-9876",
        "mcc": "RFN0RD0013383",
        "narration": "UPI/935314560764/getsimpl/simpl@axisbank/Axis Bank",
        "statementDate": "20-04-2021",
        "txnDate": "2021-04-01T13:20:14+05:30",
        "txnId": "RD3258741",
        "txnType": "DEBIT",
        "valueDate": "2021-04-01"
      },
    ]
  }
}
const dataInsurance = {
  "type" : "insurance_policies",
  "masked_account_number": "XXXXXXX123",
  "link_ref_number": "123456789",
  "profile": {
    "holders": {
      "holder": [
        {
          "ckycCompliance": "true",
          "dob": "24-07-1980",
          "email": "manisha.34@gmail.com",
          "mobile": "91729391923",
          "name": "Manisha Vijayakumar",
          "nominee": "REGISTERED",
          "pan": "BYHPL1234T",
          "rank": "1"
        }
      ],
      "type": "JOINT"
    },
    "riders": {
      "rider": [
        {
          "policyEndDate": "12-03-2033",
          "policyStartDate": "12-03-2021",
          "premiumAmount": "1600000",
          "riderType": "Waiver of premium",
          "sumAssured": "1500000",
          "tenureMonths": "144",
          "tenureYears": "12"
        }
      ]
    }
  },
  "summary": {
    "contractClauses": {
      "contractClause": [
        {
          "amount": "75000",
          "conditions": "",
          "description": "",
          "exlcusions": "",
          "subLimit": "",
          "title": "Children Plan"
        }
      ]
    },
    "coverAmount": "1300000",
    "coverType": "BUILDING",
    "covers": {
      "cover": [
        {
          "amount": "120000",
          "description": ""
        }
      ]
    },
    "eiaNumber": "TY67HG5THL",
    "maturityBenefit": "",
    "maturityDate": "2004-04-12",
    "moneyBacks": {
      "moneyBack": [
        {
          "amount": "1000",
          "date": "12-03-28",
          "description": ""
        }
      ]
    },
    "policyName": "APNA Life Insurance",
    "policyNumber": "APNI789008",
    "policyStartDate": "12-03-2021",
    "policyType": "CHILDREN_PLAN",
    "premiumAmount": "1600000",
    "premiumFrequency": "HALF_YEARLY",
    "premiumPaymentMonths": "24",
    "premiumPaymentYears": "2",
    "sumAssured": "1500000",
    "tenureMonths": "144",
    "tenureYears": "12"
  },
  "transactions": {
    "endDate": "",
    "startDate": "",
    "transaction": [
      {
        "amount": "5000",
        "narration": "BIL/BPAY/001982030055/BSE ISIP/BSE000000034260 ",
        "txnDate": "2021-05-09T18:33:56+05:30",
        "txnId": "M69761383",
        "type": "BONUS"
      },
    
    ]
  }
}
export default data1;