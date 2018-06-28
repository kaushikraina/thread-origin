### GUEST API's

### Generate Guest Cart

_GET_  `/api/guest`

_RESPONSE_  `200 OK`

```
{
    "cart_id": "b0cbbd43a8a28b7d2b2484fa51ecf946"
}

```

### Add item to cart

_POST_ `/api/guest/cart/:id`

- `id` is cart id from generated guest cart

_INPUT_

```
{
    "sku" : "1",
    "qty" : 2,
    "color_id" : 12,
    "color_value" : 2,
    "size_id" : 12,
    "size_value" : 2

}
```


