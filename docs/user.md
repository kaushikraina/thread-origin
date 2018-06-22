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


### REMOVE CART ITEM

_GET_  `/api/user/cart/:id`

- `id` is `item_id`

_RESPONSE_ `200 OK`

```
true

```





### ADD WISHLIST ITEM

_GET_  `/api/user/wishlist/add/:product`

- `product` is product id

_RESPONSE_ `200 OK`


```
[
    {
        "message": "Item added to wishlist.",
        "status": true
    }
]

```


### GET WISHLIST

_GET_ `/api/user/wishlist`

_REPONSE_ `200 OK`

```
[
    1,
    [
        {
            "wishlist_item_id": "8",
            "wishlist_id": "1",
            "product_id": "1",
            "qty": "1.0000",
            "product_name": "Robe Chemise Harvard-Black-Extra Small",
            "name": "Robe Chemise Harvard-Black-Extra Small",
            "price": "2499.0000"
        }
    ]
]

```


### DELETE WISHLIST ITEM

_GET_ `/api//user/wishlist/delete/:id`

- `id` is wishlist_item_id

_RESPONSE_ `200 OK`

```
[
    {
        "message": " Item has been removed from wishlist .",
        "status": true
    }
]

```