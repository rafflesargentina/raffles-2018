import Errors from "@/utilities/Errors"

class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor(data)
    {
        this.originalData = data

        for (let field in data) {
            this[field] = data[field]
        }

        this.errors = new Errors()
    }

    /**
     * Fetch all relevant data for the form.
     */
    data()
    {
        let data = {}

        for (let property in this.originalData) {
            data[property] = this[property]
        }

        return data
    }

    /**
     * Send a DELETE request to the given URL.
     *
     * @param {string} url
     */
    delete(url)
    {
        return this.submit("delete", url)
    }

    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     */
    onFail(errors)
    {
        this.errors.record(errors)
    }

    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
    onSuccess(data)
    {
        //this.reset()
    }

    /**
     * Send a PATCH request to the given URL.
     *
     * @param {string} url
     */
    patch(url)
    {
        return this.submit("patch", url)
    }

    /**
     * Send a POST request to the given URL.
     *
     * @param {string} url
     */
    post(url)
    {
        return this.submit("post", url)
    }

    /**
     * Send a PUT request to the given URL.
     *
     * @param {string} url
     */
    put(url)
    {
        return this.submit("put", url)
    }

    /**
     * Reset the form fields.
     */
    reset()
    {
        for (let field in this.originalData) {
            this[field] = ""
        }

        this.errors.clear()
    }

    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType, url)
    {
        return new Promise((resolve, reject) => {
            window.axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data)
                    resolve(response.data)
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        this.onFail(error.response.data.errors)
                    }

                    reject(error.response)
                })
        })
    }
}

export default Form
