### CATEGORY PAGE API's

### GET ALL CATEGORIES

_GET_ `/api/categories`

_RESPONSE_ `200 OK`

```
{  
   "children_data":[  
      {  
         "id":19,
         "parent_id":2,
         "name":"Collections",
         "children_data":[      //Subcategories
            {  
               "id":5,
               "parent_id":19,
               "name":"Instagram"
            },
            {  
               "id":3,
               "parent_id":19,
               "name":"Exclusive"
            }
         ]
      },
      {  
         "id":12,
         "parent_id":2,
         "name":"Campaigns"   //Ignore this category  (Its a campaign)         
       },
      {  
         "id":11,
         "parent_id":2,
         "name":"Sandook"
      },
      {  
         "id":10,
         "parent_id":2,
         "name":"Shoes"
      },
      {  
         "id":9,
         "parent_id":2,
         "name":"Lookbooks"
      },
      {  
         "id":6,
         "parent_id":1,
         "name":"Dresses"
      },
      {  
         "id":7,
         "parent_id":2,
         "name":"Bottoms"
      },
      {  
         "id":8,
         "parent_id":2,
         "name":"Tops"
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
