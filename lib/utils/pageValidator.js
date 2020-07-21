/**
 * Validates a page parameter.
 * @param page {number} the desired page number
 */
const validatePage = (page) => {
    if (typeof page !== 'string' && typeof page !== 'number') {
        throw new Error('[CAASY]: the provided page must either be of type string or number but received: ' + typeof page);
    }
};

export default validatePage;