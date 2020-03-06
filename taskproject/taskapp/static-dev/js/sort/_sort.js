let sortableFields = {
    'user': 'inc',
    'title': 'inc',
    'pub_date': 'inc',
    'email': 'inc',
    'status': 'inc',
};

let activeSortField = 'pub_date';

function setActiveSort() {
    activeSortField = $(this).attr('sort');
    determinateSortOrder();
}

function determinateSortOrder() {
    if (sortableFields[activeSortField] === 'inc') {
        sortableFields[activeSortField] = 'dec';
    }
    else {
        sortableFields[activeSortField] = 'inc';
    }
    console.log(activeSortField, sortableFields[activeSortField])
}

