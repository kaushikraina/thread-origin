### USER ACTIONS API

### ADD ITEM TO CART

_POST_ `/api/user/cart`

_INPUT_ 

- Reuires `user token in the header`
- Refer `/api/account/validate` to get user token

```
{
	"sku": "2",     //Product sku
	"qty": 2,       //Quantity
    "color_id":"93",  //Product color id
	"color_value":"5",  //Color value
	"size_id" : "135",  //Product size id
	"size_value" : "7"  //Size value

}

```


_RESPONSE_ `200 OK`

```
{  
   "item_id":3,
   "sku":"Sasha BodyCon Dress-Medium-White",
   "qty":6,
   "name":"Sasha BodyCon Dress",
   "price":2199,
   "product_option":{  
      "extension_attributes":{  
         "configurable_item_options":[  
            {  
               "option_id":"93",
               "option_value":5
            },
            {  
               "option_id":"135",
               "option_value":7
            }
         ]
      }
   }
}

```


### GET USER CART ITEMS

_GET_  `/api/user/cart`

- Require user `token`

_RESPONSE_ `200 OK`

```
[  
   {  
    "item_id":3,
    "sku":"Sasha BodyCon Dress-Medium-White",
    "qty":6,
    "name":"Sasha BodyCon Dress",
    "price":2199,
    "product_option":{  
        "extension_attributes":{  
            "configurable_item_options":[  
                {  
                "option_id":"93",
                "option_value":5
                },
                {  
                "option_id":"135",
                "option_value":7
                }
            ]
          }
        }
    }
]

```

