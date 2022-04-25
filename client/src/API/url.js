const URL_Request = {
    login: {
        url: "login"
    },
    signup: {
        url: "signup"
    },
    me: {
        url : "auth/me"
    },
    droplets : {
        url : "droplets",
        create : "droplets/create",
        fileSystem : (id) => {
            return `droplets/${id}/filesystem_free`
        }
    }
}

export {URL_Request}