var  MAIN_URL = 'http://13.232.62.17';

var config = {

    ADMIN_USERNAME : 'new-admin',
    ADMIN_PASSWORD : '!admin123!',
    INSTAGRAM_ACCESS_TOKEN : '8006095402.8a540c5.df7cf68e50b241c39ea3dd6463452527',
    MEDIA_BASE_URL : MAIN_URL+'/magento/pub/media/catalog/product/',
    EXCLUSIVE_URL : MAIN_URL+"/magento/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=4&searchCriteria[filter_groups][1][filters][0][field]=type_id&searchCriteria[filter_groups][1][filters][0][value]=configurable",
    ADMIN_URL : MAIN_URL+'/magento/rest/V1/integration/admin/token',
    PRODUCT_INFO : MAIN_URL+'/magento/rest/V1/products/',
    CATEGORIES_URL : MAIN_URL+'/magento/rest/V1/categories',
    HOME_CAMP_1 : MAIN_URL+"/magento/rest/V1/products?searchCriteria[filter_groups][1][filters][0][field]=category_id&searchCriteria[filter_groups][1][filters][0][value]=7",
    HOME_CAMP_2 : MAIN_URL+"/magento/rest/V1/products?searchCriteria[filter_groups][1][filters][0][field]=category_id&searchCriteria[filter_groups][1][filters][0][value]=8",
    CATEGORY_CAMP_1 : MAIN_URL+"/magento/rest/V1/products?searchCriteria[filter_groups][1][filters][0][field]=category_id&searchCriteria[filter_groups][1][filters][0][value]=10",
    SEARCH_PRODUCT :  MAIN_URL+"/magento/rest/V1/products?searchCriteria[filter_groups][1][filters][0][field]=category_id&searchCriteria[filter_groups][1][filters][0][value]=",
    CONFIGURABLE_PRODUCTS : "&searchCriteria[filter_groups][1][filters][0][field]=type_id&searchCriteria[filter_groups][1][filters][0][value]=configurable",
    ADD_ACCOUNT :  MAIN_URL+"/magento/rest/V1/customers",
    GET_ACCOUNT :  MAIN_URL+"/magento/rest/V1/customers/",
    AUTHENTICATE_USER : MAIN_URL+"/magento/rest/V1/integration/customer/token",
    USER_CART :  MAIN_URL+"/magento/rest/V1/carts/mine",
    ADD_TO_CART :  MAIN_URL+"/magento/rest/V1/carts/mine/items",
    DELETE_CART_ITEM : MAIN_URL+"/magento/rest/V1/carts/mine/items/",
    PRODUCT_VARIANTS :  MAIN_URL+"/magento/rest/V1/configurable-products/",
    PRODUCT_COLORS :  MAIN_URL+"/magento/rest/V1/products/attributes?searchCriteria[filter_groups][0][filters][0][field]=attribute_code&searchCriteria[filter_groups][0][filters][0][value]=color",
    PRODUCT_SIZES :  MAIN_URL+"/magento/rest/V1/products/attributes?searchCriteria[filter_groups][0][filters][0][field]=attribute_code&searchCriteria[filter_groups][0][filters][0][value]=size",
    PRODUCT_SORT_COLOR :  MAIN_URL+"/magento/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=color&searchCriteria[filterGroups][0][filters][0][value]=",  
    PRODUCT_SORT_SIZE :  MAIN_URL+"/magento/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=size&searchCriteria[filterGroups][0][filters][0][value]=",  
    ADD_COUPON_CODE : MAIN_URL+"/magento/rest/V1/carts/",
    ORDER_DETAILS : MAIN_URL+"/magento/rest/V1/orders?searchCriteria[filter_groups][0][filters][0][field]=customer_id&searchCriteria[filter_groups][0][filters][0][value]=",
    ADD_WISHLIST : MAIN_URL+"/magento/rest/V1/wishlist/add/",
    GET_WISHLIST : MAIN_URL+"/magento/rest/V1/wishlist/items",
    UPDATE_WISHLIST : MAIN_URL+"/magento/rest/V1/wishlist/delete/",
    NEWSLETTER_SUBSCRIPTION : MAIN_URL+"/magento/rest/V1/customers/me",

}

module.exports = config;