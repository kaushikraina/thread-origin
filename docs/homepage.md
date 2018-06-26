### HOMEPAGE API

### GET EXCLUSIVE PRODUCTS

_GET_  `/api/homepage/exclusive`

_RESPONSE_  `200 OK`

- for other attributes like color,price call `/api/product/variants/:sku`

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
      },
    ......
}

```


### Homepage Campaign 1 and Campaign 2

_GET_  `/api/homepage/camp1`      

- Replace `camp1` with `camp2` or `camp3` to get campaign 2 or 3

_RESPONSE_  `200 OK`

- to get all the images call `/api/product/variants/:sku`

```
{  
   "items":[  
      {  
         "id":96,
         "sku":"Campaign Product 1",
         "name":"Bonus Look: All-Day, Everyday Fashion",
         "custom_attributes":[  
            {  
               "attribute_code":"description",
               "value":"As for the collection itself, the 72 looks comprised of dramatic tulle ballgowns, sexy patent leather, sparkling crystal-encrusted dresses, unexpected headpieces, and so much more. "
            },
            {  
               "attribute_code":"short_description",
               "value":"LIMITED STOCK"
            },
            {  
               "attribute_code":"image",
               "value":"/b/i/bitmap.png"
            }
         ]
      }
   ]
}

```

