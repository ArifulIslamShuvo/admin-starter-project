// import { backendUrl, spacesBucketUrl } from "../Constants"

// export const BASE_URL = backendUrl
// export const IMAGE_URL = spacesBucketUrl

export const BASE_URL =process.env.REACT_APP_BACKEND_URL
export const IMAGE_URL = process.env.REACT_APP_SPACES_URL 

export const API_URL = BASE_URL + 'api/'

export const LOCATION_API = 'https://backend.manchitro.club/api/locations/'

export const EMPLOYEES_API = API_URL + 'employees/'


export const DESIGNATIONS_API = API_URL + 'designations/'
export const EMPLOYEE_DESIGNATIONS_API = API_URL + 'employeeDesignations/'
// export const CUSTOMERS_API = API_URL + 'customers/'

// export const APP_SETTINGS_API = API_URL + 'appSettings/'
// export const EMERALD_AREAS_API = API_URL + 'emeraldAreas/'
export const RESTAURANT_MANAGER_API = API_URL + 'employeeRestaurants/'
export const DASHBOARD_API = API_URL + 'dashboard/'
// export const HERO_SLIDERS_API = API_URL + 'heroSliders/'
// export const RESTAURANTS_API = API_URL + 'restaurants/'
export const RESTAURANT_AREAS_API = API_URL + 'restaurantAreas/'

// export const ITEMS_API = API_URL + 'items/'
// export const CATEGORIES_API = API_URL + 'categories/'
// export const FEATURED_ITEMS_API = API_URL + 'featuredItems/'
// export const COMBO_ITEMS_API = API_URL + 'comboItems/'
// export const FEATURED_COMBOS_API = API_URL + 'featuredCombos/'

export const ORDERS_API = API_URL + 'orders/'

export const ADDRESSES_API = API_URL + 'addresses/'
export const DEFAULT_ADDRESSES_API = API_URL + 'defaultAddresses/'
export const DIVISIONS_API = LOCATION_API + 'divisions/'
export const DISTRICTS_API = LOCATION_API + 'districts/'
export const AREAS_API = LOCATION_API + 'areas/'

// export const DELIVERY_FEES_API = API_URL + 'deliveryFees/'
// export const DISCOUNT_API = API_URL + 'discounts/'
// export const VATS_API = API_URL + 'vats/'

// export const SOCIAL_LINKS_API = API_URL + 'socialLinks/'
export const CONTACTS_API = API_URL + 'contacts/'



// -----------emetald new admin---------

export const MANAGE_EMPLOYEE_API = 'manageEmployees/'

// website Contents-------------
export const WEBSITE_CONTENT_API = 'websiteContents/'

export const SOCIAL_LINKS_API = WEBSITE_CONTENT_API + 'socialLinks/'
export const HERO_SLIDERS_API = WEBSITE_CONTENT_API + 'heroSliders/'
export const TESTIMONIALS_API = WEBSITE_CONTENT_API + 'testimonials/'

export const APP_SETTINGS_API = WEBSITE_CONTENT_API + 'appSettings/'

export const AMANAGE_APP_SETTING_API = APP_SETTINGS_API  + 'manageAppSettings/'

export const DELIVERY_FEES_API =APP_SETTINGS_API  + 'deliveryFees/'
export const DISCOUNT_API =APP_SETTINGS_API  + 'discounts/'
export const VATS_API =APP_SETTINGS_API  + 'vats/'
export const EMERALD_AREAS_API = APP_SETTINGS_API  + 'emeraldAreas/'
export const FEEDBACK_API = APP_SETTINGS_API  + 'feedback/'

export const ITEMS_API = 'items/'


export const ITEM_COLLECTIONS_API = ITEMS_API+ 'controlItems/'
export const MANAGE_ITEM_API = ITEM_COLLECTIONS_API + 'manageItem/'
export const FEATURED_ITEMS_API = ITEM_COLLECTIONS_API + 'featuredItems/'
export const COMBO_ITEMS_API = ITEM_COLLECTIONS_API + 'comboItems/'
export const FEATURED_COMBOS_API = ITEM_COLLECTIONS_API + 'featuredCombos/'


export const ITEM_GROUPS_API = ITEMS_API + 'itemGroups/'
export const CATEGORIES_API = ITEM_GROUPS_API + 'categories/'

export const CUSTOMERS_API = 'customers/'
export const MANAGE_CUSTOMERS_API = 'manageCustomer/'

export const RESTAURANTS_API = 'restaurants/'
export const MANAGR_RESTAURANTS_API = RESTAURANTS_API + 'manageRestaurant/'

export const BRANCH_API = RESTAURANTS_API + 'brances/'
export const MANAGE_BRANCH_API = BRANCH_API + 'manageBranch/'
export const BRANCH_AREAS_API = BRANCH_API + 'branchAreas/'
export const BRANCH_ITMS_API = BRANCH_API + 'branchItems/'


