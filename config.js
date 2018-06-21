var  MAIN_URL = 'http://13.127.81.82';

var config = {

    ADMIN_USERNAME : 'backend',
    ADMIN_PASSWORD : 'qwerty123',
    MEDIA_BASE_URL : MAIN_URL+'/magento/pub/media/catalog/product/',
    EXCLUSIVE_URL : MAIN_URL+"/magento/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=4&searchCriteria[filter_groups][1][filters][0][field]=type_id&searchCriteria[filter_groups][1][filters][0][value]=configurable",
    ADMIN_URL : MAIN_URL+'/magento/rest/V1/integration/admin/token',
    PRODUCT_INFO : MAIN_URL+'/magento/rest/V1/products/',
    CATEGORIES_URL : MAIN_URL+'/magento/rest/V1/categories',
    HOME_CAMP_1 : MAIN_URL+"/magento/rest/V1/products?searchCriteria[filter_groups][1][filters][0][field]=category_id&searchCriteria[filter_groups][1][filters][0][value]=8",
    HOME_CAMP_2 : MAIN_URL+"/magento/rest/V1/products?searchCriteria[filter_groups][1][filters][0][field]=category_id&searchCriteria[filter_groups][1][filters][0][value]=9",
    CATEGORY_CAMP_1 : MAIN_URL+"/magento/rest/V1/products?searchCriteria[filter_groups][1][filters][0][field]=category_id&searchCriteria[filter_groups][1][filters][0][value]=10",
    SEARCH_PRODUCT :  MAIN_URL+"/magento/rest/V1/products?searchCriteria[filter_groups][1][filters][0][field]=category_id&searchCriteria[filter_groups][1][filters][0][value]=",
    CONFIGURABLE_PRODUCTS : "&searchCriteria[filter_groups][1][filters][0][field]=type_id&searchCriteria[filter_groups][1][filters][0][value]=configurable",
    ADD_ACCOUNT :  MAIN_URL+"/magento/rest/V1/customers",
    GET_ACCOUNT :  MAIN_URL+"/magento/rest/V1/customers/",
    AUTHENTICATE_USER : MAIN_URL+"/magento/rest/V1/integration/customer/token",
    USER_CART :  MAIN_URL+"/magento/rest/V1/carts/mine",
    ADD_TO_CART :  MAIN_URL+"/magento/rest/V1/carts/mine/items",
    PRODUCT_VARIANTS :  MAIN_URL+"/magento/rest/V1/configurable-products/",
    PRODUCT_COLORS :  MAIN_URL+"/magento/rest/V1/products/attributes?searchCriteria[filter_groups][0][filters][0][field]=attribute_code&searchCriteria[filter_groups][0][filters][0][value]=color",
    PRODUCT_SIZES :  MAIN_URL+"/magento/rest/V1/products/attributes?searchCriteria[filter_groups][0][filters][0][field]=attribute_code&searchCriteria[filter_groups][0][filters][0][value]=size",
    PRODUCT_SORT_COLOR :  MAIN_URL+"/magento/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=color&searchCriteria[filterGroups][0][filters][0][value]=",  
    PRODUCT_SORT_SIZE :  MAIN_URL+"/magento/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=size&searchCriteria[filterGroups][0][filters][0][value]=",  
}

module.exports = config;