### ACCOUNT API's


### ADD CUSTOMER ACCOUNT

_POST_  `/api/account`

_INPUT_ 

- `password` must be combination of Upper,lower letters,numbers and special symbol (Minimum of 8 characters)

```
{
	"email" : "test@gmail.com",
	"password" : "Qwerty123",   
	"firstname" : "fname",
	"lastname" : "lname"
}

```

_RESPONSE_      `200 OK`

```
{  
   "id":2,
   "email":"test2@gmail.com",
   "firstname":"fname",
   "lastname":"lname"
}

```

### GET CUSTOMER ACCOUNT 

_GET_ `/api/account/:id`

- `id` is user id

_RESPONSE_ `200 OK`

```
{  
   "id":2,
   "email":"test2@gmail.com",
   "firstname":"fname",
   "lastname":"lname"
}

```

### CUSTOMER LOGIN VALIDATION / GET USER TOKEN

_POST_  `/api/account/validate`

_INPUT_ 

```
{
   "email":"test2@gmail.com",
   "password" : "password"
}

```

_RESPONSE_ `200 OK`

```
{
    "success": "dgngjdn6lpidxd1xkpfwe7wt85ia19c2"   //user token
}

```
- if failed returns `{"success" : "false"}`



