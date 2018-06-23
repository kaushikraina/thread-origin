### CATEGORY PAGE API's

### GET ALL CATEGORIES

_GET_ `/api/categories`

_RESPONSE_ `200 OK`

```
{  
   "id":2,
   "name":"All categories",
   "children_data":[  
      { 
        {  
         "id":11,
         "parent_id":2,
         "name":"Sandook",
         "is_active":true,
         "position":3,
         "level":2,
         "product_count":68,
         "children_data":[  

         ]
      },
      {  
         "id":13,
         "parent_id":2,
         "name":"Shoes",
         "is_active":true,
         "position":4,
         "level":2,
         "product_count":68,
         "children_data":[  

         ]
      },
      {  
         "id":14,
         "parent_id":2,
         "name":"Dresses",
         "is_active":true,
         "position":5,
         "level":2,
         "product_count":68,
         "children_data":[  

         ]
      },
      {  
         "id":15,
         "parent_id":2,
         "name":"Lookbooks",
         "is_active":true,
         "position":6,
         "level":2,
         "product_count":68,
         "children_data":[  

         ]
      },
      {  
         "id":16,
         "parent_id":2,
         "name":"Tops",
         "is_active":true,
         "position":7,
         "level":2,
         "product_count":68,
         "children_data":[  

         ]
      },
      {  
         "id":17,
         "parent_id":2,
         "name":"Buttoms",
         "is_active":true,
         "position":8,
         "level":2,
         "product_count":68,
         "children_data":[  

         ]
      }
   ]
}

```


### CATEGORY PAGE CAMPAIGN

_GET_  `/api/category/campaign`

_RESPONSE_ `200 OK`

```
{  
   "items":[  
      {  
         "id":98,
         "sku":"category camp 1",
         "name":"Bonus Look: Everyday Beachwear Fashion",
         "custom_attributes":[  
            {  
               "attribute_code":"description",
               "value":"As for the collection itself, the 72 looks comprised of dramatic tulle ballgowns, sexy patent leather, sparkling crystal-encrusted dresses, unexpected headpieces, and so much more. "
            },
            {  
               "attribute_code":"short_description",
               "value":"BEACHWEAR"
            },
            {  
               "attribute_code":"image",
               "value":"\/c\/a\/category_body2.png"
            }
         ]
      }
   ]
}

```
