### PRODUCT API


### Get product details

_GET_ `/api/product/:sku` 

- :sku is product sku
- To get different variant info call `/product/variants/:sku`

_RESPONSE_ `200 OK`

```
{  
   "id":11,
   "sku":"Sasha BodyCon Dress",
   "name":"Robe Chemise Harvard",
   "extension_attributes":{  
     "configurable_product_options":[  
         {  
            "attribute_id":"93",
            "label":"Color",
            "values":[  
               {  
                  "value_index":9
               },
               {  
                  "value_index":10
               }
            ]
         },
         {  
            "attribute_id":"135",
            "label":"size",
            "values":[  
               {  
                  "value_index":4
               },
               {  
                  "value_index":5
               },
               {  
                  "value_index":6
               },
               {  
                  "value_index":7
               },
               {  
                  "value_index":8
               }
            ]
         }
      ]
   },
   "media_gallery_entries":[  
      {  "media_type":"image",
         "file":"/i/t/item1_1.png"
      },
      {  "media_type":"image",
         "file":"/i\/t\/item3_1.png"
      },
      {  "media_type":"image",
         "file":"\/p\/r\/product_body1_img1_1.png"
      },
      {  "media_type":"image",
         "file":"\/p\/r\/product_body1_img2_1.png"
      },
      {  "media_type":"image",
         "file":"\/p\/r\/product_body1_img3_1.png"
      },
      {  "media_type":"image",
         "file":"\/p\/r\/product_body1_img4_1.png"
      },
      {  "media_type":"image",
         "file":"\/p\/r\/product_body2_1.png"
      }
   ],
   "custom_attributes":[  
      {  
         "attribute_code":"description",
         "value":"Dinosaurs love this super soft sweater dress, except T-Rex, his arms just don\u2019t fill it out."
      },
      {  
         "attribute_code":"image",
         "value":"\/i\/t\/item1_1.png"
      },
      {  
         "attribute_code":"fabrication",
         "value":"97% Cotton, 3% Elasthanne"
      },
      {  
         "attribute_code":"product_reference",
         "value":"185044"
      },
      {  
         "attribute_code":"maintenance",
         "value":"Normal Dry Cleaning"
      }
   ]
}

```


### GET PRODUCT VARIANTS

_GET_  `/api/product/variants/:sku`

- `:sku` is product sku

- To get color and size details call `/api/products/colors` and `/api/products/sizes`

_RESPONSE_ `200 OK`

```
{
    [  
            {  
                "id":1,
                "sku":"Sasha BodyCon Dress-Extra Small-Black",
                "name":"Sasha BodyCon Dress-Extra Small-Black",
                "price":2000,
                "custom_attributes":[  
                    {  
                        "attribute_code":"size",
                        "value":"4"
                    },
                    {  
                        "attribute_code":"color",
                        "value":"9"
                    }
                ]
            },
            {  
                "id":2,
                "sku":"Sasha BodyCon Dress-Extra Small-White",
                "name":"Sasha BodyCon Dress-Extra Small-White",
                "price":2000,
                "custom_attributes":[  
                    {  
                        "attribute_code":"size",
                        "value":"4"
                    },
                    {  
                        "attribute_code":"color",
                        "value":"10"
                    }
                ]
            },

            ..... //Other variants
      ]
}

```


### SEARCH PRODUCTS BY CATEGORY ID

_GET_ `/api/product/all/:category`

- `:category` is category id
- for other attributes like color,price call `/api/product/variants/:sku`

_RESPONSE_ `200 OK`

```

{
    "items":[  
      {  
         "id":11,
         "sku":"Sasha BodyCon Dress",
         "name":"Robe Chemise Harvard",
         "custom_attributes":[  
            {  
               "attribute_code":"image",
               "value":"/i/t/item1_1.png"
            }
         ]
      }
    ]
}     

```


### GET ALL THE AVAILABLE COLORS AND THEIR ID's

_GET_  `/api/products/colors`

_RESPONSE_ `200 OK`

```
{  
   "items":[  
      {  
         "attribute_id":93,
         "attribute_code":"color",
         "options":[ 
            {  
               "label":"Black",
               "value":"9"
            },
            {  
               "label":"White",
               "value":"10"
            }
         ]
      }
   ]
}

```



### GET ALL THE AVAILABLE SIZE AND THEIR ID's

_GET_  `/api/products/sizes`

_RESPONSE_ `200 OK`

```
{  
   "items":[  
      {  
         "attribute_id":135,
         "attribute_code":"size",
         "options":[ 
            {  
               "label":"Extra Small",
               "value":"4"
            },
            {  
               "label":"Medium",
               "value":"5"
            },
            {  
               "label":"Small",
               "value":"6"
            },
            {  
               "label":"Large",
               "value":"7"
            },
            {  
               "label":"Extra Large",
               "value":"8"
            }
         ]
      }
   ]
}

```