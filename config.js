var config = {

    ADMIN_USERNAME : 'backend',
    ADMIN_PASSWORD : 'qwerty123',
    MEDIA_BASE_URL : 'http://13.232.73.164/magento/pub/media/catalog/product/',
    EXCLUSIVE_URL : "http://13.232.73.164/magento/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=3&searchCriteria[filter_groups][1][filters][0][field]=type_id&searchCriteria[filter_groups][1][filters][0][value]=configurable",
    ADMIN_URL : 'http://13.232.73.164/magento/rest/V1/integration/admin/token'

}

module.exports = config;