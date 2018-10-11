
class Paginator {
    /**
     * Create a new Paginator instance.
     *
     * @param {object} items
     * @param int perPage
     * @param int currentPage
     */
    constructor (items, perPage = 12, currentPage = null) {
        this.perPage = perPage

        this.filteredItems = items
        this.originalItems = items

        this.setCurrentPage(currentPage)
    }

    /**
     * Get the current page items count.
     */
    get count () {
        return window._.size(this.items)
    }

    /**
     * Get the current page first item number.
     */
    get from () {
        return window._.size(this.items) > 0 ? this.offsetCurrentPage() * this.perPage + 1 : 0
    }

    /**
     * Get the the number of the last page.
     */
    get lastPage () {
        return Math.max(Math.ceil(this.total / this.perPage), 1)
    }

    /**
     * Get the current page last item number.
     */
    get to () {
        return window._.size(this.items) > 0 ? this.from + this.count - 1 : 0
    }

    /**
     * Get the total items count.
     */
    get total () {
        return window._.size(this.filteredItems)
    }

    /**
     * Get the offset current page.
     */
    offsetCurrentPage () {
        return this.currentPage > 0 ? this.currentPage - 1 : 0
    }

    /**
     * Get the offset end for the slice.
     */
    offsetEnd () {
        return this.offsetStart() + this.perPage
    }

    /**
     * Get offset end for the slice.
     */
    offsetStart () {
        return this.offsetCurrentPage() * this.perPage
    }

    /**
     * Set the current page for the paginator.
     */
    setCurrentPage (currentPage) {
        this.currentPage = currentPage || 1

        this.setItems()
    }

    /**
     * Set the items for the paginator.
     */
    setItems () {
        this.items = window._.slice(this.filteredItems, this.offsetStart(), this.offsetEnd())
    }
}

export default Paginator
