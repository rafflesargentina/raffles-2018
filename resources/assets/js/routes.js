import * as middleware from "@/middleware"
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        beforeEnter: middleware.authRequired,
        children: [
            {
                name: "Account",
                path: "",
                component: require("@/components/views/Account/PersonalData.vue")
            },
            //{
            //name: "AdquiredServices",
            //path: "adquired-services",
            //component: require("@/components/views/Account/AdquiredServices.vue")
            //},
            //{
            //name: "Applications",
            //path: "applications",
            //component: require("@/components/views/Account/Applications.vue")
            //},
        ],
        component: require("@/components/views/Account/Account.vue"),
        path: "/account"
    },
    {
        beforeEnter: middleware.authRequired,
        children: [
            {
                name: "Admin",
                path: "",
                component: require("@/components/views/Admin/Article/ArticlesIndex.vue")
            },
        ],
        component: require("@/components/views/Admin/Admin.vue"),
        path: "/admin"
    },
    {
        component: require("@/components/views/Company.vue"),
        name: "Company",
        path: "/company"
    },
    {
        component: require("@/components/views/Contact.vue"),
        meta: {
            footer: false
        },
        name: "Contact",
        path: "/contact"
    },
    {
        component: require("@/components/views/Consulting.vue"),
        name: "Consulting",
        path: "/services/consulting"
    },
    {
        component: require("@/components/views/DigitalMarketing.vue"),
        name: "DigitalMarketing",
        path: "/services/digital-marketing"
    },
    {
        component: require("@/components/views/Home.vue"),
        name: "Home",
        path: "/"
    },
    {
        beforeEnter: middleware.authNotRequired,
        component: require("@/components/views/auth/Login.vue"),
        meta: {
            footer: false
        },
        name: "Login",
        path: "/login"
    },
    {
        beforeEnter: middleware.authRequired,
        component: require("@/components/views/auth/Logout.vue"),
        name: "Logout",
        path: "/logout"
    },
    {
        component: require("@/components/views/Portfolio.vue"),
        name: "Portfolio",
        path: "/portfolio"
    },
    {
        beforeEnter: middleware.authNotRequired,
        component: require("@/components/views/auth/Register.vue"),
        meta: {
            footer: false
        },
        name: "Register",
        path: "/register"
    },
    {
        beforeEnter: middleware.authNotRequired,
        component: require("@/components/views/auth/passwords/Request.vue"),
        meta: {
            footer: false
        },
        name: "PasswordRequest",
        path: "/password/request"
    },
    {
        beforeEnter: middleware.authNotRequired,
        component: require("@/components/views/auth/passwords/Reset.vue"),
        meta: {
            footer: false
        },
        name: "PasswordReset",
        path: "/password/reset/:token"
    },
    {
        component: require("@/components/views/Services.vue"),
        name: "Services",
        path: "/services"
    },
    {
        component: require("@/components/views/WebDevelopment.vue"),
        name: "WebDevelopment",
        path: "/services/web-development"
    },
    {
        path: "*",
        component: require("@/components/views/Errors/PageNotFound")
    }
]

export default new VueRouter({
    mode: "hash",

    routes
})
