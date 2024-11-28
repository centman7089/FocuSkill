const backDomain = "http://localhost:5000"

const SummaryApi = {
    signUP : {
        url : `${backDomain}/api/users/signup`,
        method : "post"
    },
    signIn : {
        url : `${backDomain}/api/users/signin`,
        method : "post"
    },
    current_user : {
        url : `${backDomain}/api/users/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backDomain}/api/users/logout`,
        method : 'get'
    },
    allUser : {
        url : `${backDomain}/api/users/all-user`,
        method : 'get'
    },
    updateUser : {
        url : `${backDomain}/api/users/update-user`,
        method : "post"
    },
    uploadProduct : {
        url : `${backDomain}/api/product/upload-product`,
        method : 'post'
    },
    allProduct : {
        url : `${backDomain}/api/product/get-product`,
        method : 'get'
    },
    updateProduct : {
        url : `${backDomain}/api/product/update-product`,
        method  : 'post'
    },
    categoryProduct : {
        url : `${backDomain}/api/product/get-categoryProduct`,
        method : 'get'
    },
    categoryWiseProduct : {
        url : `${backDomain}/api/category-product`,
        method : 'post'
    },
    productDetails : {
        url : `${backDomain}/api/product-details`,
        method : 'post'
    },
    addToCartProduct : {
        url : `${backDomain}/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `${backDomain}/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `${backDomain}/api/view-card-product`,
        method : 'get'
    },
    updateCartProduct : {
        url : `${backDomain}/api/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `${backDomain}/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `${backDomain}/api/search`,
        method : 'get'
    },
    filterProduct : {
        url : `${backDomain}/api/filter-product`,
        method : 'post'
    }
}


export default SummaryApi